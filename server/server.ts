// AERORUSH: SKYBOUND - Dedicated WebSocket Multiplayer Room Server
// High-performance, lightweight race room broker.
// Run with: npm run server

import { WebSocketServer, WebSocket } from 'ws';
import { createServer } from 'http';

interface PlayerSession {
  ws: WebSocket;
  id: string;
  name: string;
  roomCode: string | null;
  isReady: boolean;
  isHost: boolean;
  carPaint?: string;
  carWheels?: string;
  carUnderglow?: string;
}

interface Room {
  code: string;
  hostId: string;
  environmentId: string;
  seed: number;
  stageLength: number;
  state: 'LOBBY' | 'STARTING' | 'RACING' | 'FINISHED';
  players: Map<string, PlayerSession>;
}

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'AERORUSH_MULTIPLAYER_RELAY',
    status: 'ONLINE',
    author: 'Deepesh Kumar Pankaj',
    roomsActive: rooms.size,
  }));
});

const wss = new WebSocketServer({ server });
const rooms = new Map<string, Room>();
const players = new Map<WebSocket, PlayerSession>();

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function broadcastToRoom(room: Room, msg: object, excludeWs?: WebSocket): void {
  const json = JSON.stringify(msg);
  for (const p of room.players.values()) {
    if (excludeWs && p.ws === excludeWs) continue;
    if (p.ws.readyState === WebSocket.OPEN) {
      p.ws.send(json);
    }
  }
}

wss.on('connection', (ws: WebSocket) => {
  const playerId = 'plt_' + Math.random().toString(36).substring(2, 9);
  const session: PlayerSession = {
    ws,
    id: playerId,
    name: 'PILOT',
    roomCode: null,
    isReady: false,
    isHost: false,
  };
  players.set(ws, session);

  ws.send(JSON.stringify({
    type: 'CONNECTED',
    playerId,
    serverTime: Date.now(),
  }));

  ws.on('message', (raw: string) => {
    try {
      const data = JSON.parse(raw);
      handleMessage(session, data);
    } catch (err) {
      console.warn('[Server] Malformed packet received:', err);
    }
  });

  ws.on('close', () => {
    handleDisconnect(session);
    players.delete(ws);
  });
});

function handleMessage(session: PlayerSession, data: any): void {
  switch (data.type) {
    case 'CREATE_ROOM': {
      const code = generateRoomCode();
      session.roomCode = code;
      session.isHost = true;
      session.isReady = false;
      session.name = (data.playerName || 'HOST PILOT').slice(0, 15);
      session.carPaint = data.carPaint;
      session.carWheels = data.carWheels;
      session.carUnderglow = data.carUnderglow;

      const room: Room = {
        code,
        hostId: session.id,
        environmentId: data.environmentId || 'neon_dusk',
        seed: data.seed || Math.floor(100000 + Math.random() * 899999),
        stageLength: data.stageLength || 3000,
        state: 'LOBBY',
        players: new Map([[session.id, session]]),
      };
      rooms.set(code, room);

      session.ws.send(JSON.stringify({
        type: 'ROOM_CREATED',
        roomCode: code,
        environmentId: room.environmentId,
        seed: room.seed,
        stageLength: room.stageLength,
        players: [{ id: session.id, name: session.name, isReady: false, isHost: true }],
      }));
      break;
    }

    case 'JOIN_ROOM': {
      const code = (data.roomCode || '').toUpperCase().trim();
      const room = rooms.get(code);

      if (!room) {
        session.ws.send(JSON.stringify({ type: 'ERROR', message: `Room '${code}' not found.` }));
        return;
      }
      if (room.players.size >= 2) {
        session.ws.send(JSON.stringify({ type: 'ERROR', message: `Room '${code}' is already full (2/2 pilots).` }));
        return;
      }
      if (room.state !== 'LOBBY') {
        session.ws.send(JSON.stringify({ type: 'ERROR', message: `Race in room '${code}' has already started.` }));
        return;
      }

      session.roomCode = code;
      session.isHost = false;
      session.isReady = false;
      session.name = (data.playerName || 'PILOT 2').slice(0, 15);
      session.carPaint = data.carPaint;
      session.carWheels = data.carWheels;
      session.carUnderglow = data.carUnderglow;

      room.players.set(session.id, session);

      // Notify joining player
      const playerList = Array.from(room.players.values()).map(p => ({
        id: p.id,
        name: p.name,
        isReady: p.isReady,
        isHost: p.isHost,
        carPaint: p.carPaint,
      }));

      session.ws.send(JSON.stringify({
        type: 'ROOM_JOINED',
        roomCode: code,
        environmentId: room.environmentId,
        seed: room.seed,
        stageLength: room.stageLength,
        players: playerList,
      }));

      // Broadcast update to other players in room
      broadcastToRoom(room, {
        type: 'ROOM_UPDATED',
        players: playerList,
      });
      break;
    }

    case 'SET_READY': {
      if (!session.roomCode) return;
      const room = rooms.get(session.roomCode);
      if (!room) return;

      session.isReady = !!data.ready;

      const playerList = Array.from(room.players.values()).map(p => ({
        id: p.id,
        name: p.name,
        isReady: p.isReady,
        isHost: p.isHost,
      }));

      broadcastToRoom(room, {
        type: 'ROOM_UPDATED',
        players: playerList,
      });

      // If 2 players are both ready, trigger countdown
      if (room.players.size === 2 && Array.from(room.players.values()).every(p => p.isReady)) {
        room.state = 'STARTING';
        broadcastToRoom(room, {
          type: 'RACE_COUNTDOWN',
          countdownSeconds: 3,
          startTimestamp: Date.now() + 3000,
        });

        setTimeout(() => {
          if (room.state === 'STARTING') {
            room.state = 'RACING';
            broadcastToRoom(room, { type: 'RACE_START' });
          }
        }, 3000);
      }
      break;
    }

    case 'SYNC_TELEMETRY': {
      if (!session.roomCode) return;
      const room = rooms.get(session.roomCode);
      if (!room || room.state !== 'RACING') return;

      // Validate bounds
      const x = typeof data.x === 'number' && isFinite(data.x) ? Math.max(-100, Math.min(100, data.x)) : 0;
      const y = typeof data.y === 'number' && isFinite(data.y) ? Math.max(-50, Math.min(200, data.y)) : 0;
      const z = typeof data.z === 'number' && isFinite(data.z) ? Math.max(-50, Math.min(100000, data.z)) : 0;
      const speed = typeof data.speed === 'number' && isFinite(data.speed) ? Math.max(0, Math.min(600, data.speed)) : 0;

      // Broadcast directly to opponent
      broadcastToRoom(room, {
        type: 'OPPONENT_TELEMETRY',
        playerId: session.id,
        x,
        y,
        z,
        rotX: data.rotX || 0,
        rotY: data.rotY || 0,
        rotZ: data.rotZ || 0,
        speed,
        isBoosting: !!data.isBoosting,
        isAirborne: !!data.isAirborne,
        currentStunt: data.currentStunt || null,
        timestamp: Date.now(),
      }, session.ws);
      break;
    }

    case 'PLAYER_FINISH': {
      if (!session.roomCode) return;
      const room = rooms.get(session.roomCode);
      if (!room) return;

      broadcastToRoom(room, {
        type: 'OPPONENT_FINISHED',
        playerId: session.id,
        name: session.name,
        finalScore: Math.floor(data.score || 0),
        distanceM: Math.floor(data.distance || 0),
        elapsedTime: data.elapsedTime || 0,
      });
      break;
    }

    case 'LEAVE_ROOM': {
      handleDisconnect(session);
      break;
    }
  }
}

function handleDisconnect(session: PlayerSession): void {
  if (!session.roomCode) return;
  const room = rooms.get(session.roomCode);
  if (!room) return;

  room.players.delete(session.id);
  session.roomCode = null;

  if (room.players.size === 0) {
    rooms.delete(room.code);
  } else {
    // Notify remaining player that opponent disconnected
    broadcastToRoom(room, {
      type: 'OPPONENT_DISCONNECTED',
      message: `${session.name} disconnected from the room.`,
    });
    room.state = 'LOBBY';
  }
}

server.listen(PORT, () => {
  console.log(`[AERORUSH SERVER] High-speed multiplayer broker running on port ${PORT}`);
  console.log(`[AERORUSH SERVER] Ready for WebSocket connections at ws://localhost:${PORT}`);
});
