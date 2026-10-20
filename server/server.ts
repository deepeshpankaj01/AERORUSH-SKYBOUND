// AERORUSH: SKYBOUND - Dedicated WebSocket Multiplayer Room Server
// High-performance, lightweight, hardened race room broker.
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
  lastMessageTime: number;
  messageCount: number;
}

interface Room {
  code: string;
  hostId: string;
  environmentId: string;
  seed: number;
  stageLength: number;
  state: 'LOBBY' | 'STARTING' | 'RACING' | 'FINISHED';
  countdownTimerId?: NodeJS.Timeout;
  lastActivity: number;
  players: Map<string, PlayerSession>;
}

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const MAX_PACKET_BYTES = 2048;
const MAX_MSG_PER_SECOND = 40;
const ROOM_IDLE_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes

const ALLOWED_ENVIRONMENTS = new Set(['neon_dusk', 'canyon_express', 'monsoon_highway', 'orbital_skyway']);

const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(JSON.stringify({
    service: 'AERORUSH_MULTIPLAYER_RELAY',
    status: 'ONLINE',
    author: 'Deepesh Kumar Pankaj',
    roomsActive: rooms.size,
    uptimeSeconds: Math.floor(process.uptime()),
  }));
});

const wss = new WebSocketServer({ server, maxPayload: 4096 });
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

function sanitizeName(raw: any): string {
  if (typeof raw !== 'string') return 'PILOT';
  const cleaned = raw
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s\-_]/g, '')
    .trim()
    .slice(0, 15);
  return cleaned.toUpperCase() || 'PILOT';
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
    lastMessageTime: Date.now(),
    messageCount: 0,
  };
  players.set(ws, session);

  ws.send(JSON.stringify({
    type: 'CONNECTED',
    playerId,
    serverTime: Date.now(),
  }));

  ws.on('message', (raw: Buffer | string) => {
    // 1. Packet size limit
    const rawStr = typeof raw === 'string' ? raw : raw.toString('utf-8');
    if (rawStr.length > MAX_PACKET_BYTES) {
      ws.send(JSON.stringify({ type: 'ERROR', message: 'Payload exceeded maximum byte limit.' }));
      return;
    }

    // 2. Rate limiting (max 40 messages/sec)
    const now = Date.now();
    if (now - session.lastMessageTime >= 1000) {
      session.lastMessageTime = now;
      session.messageCount = 0;
    }
    session.messageCount++;
    if (session.messageCount > MAX_MSG_PER_SECOND) {
      // Throttle excessive packet flooding
      return;
    }

    try {
      const data = JSON.parse(rawStr);
      handleMessage(session, data);
    } catch (err) {
      console.warn('[Server] Malformed packet received:', err);
    }
  });

  ws.on('close', () => {
    handleDisconnect(session);
    players.delete(ws);
  });

  ws.on('error', (err) => {
    console.warn(`[Server] Socket error for ${session.id}:`, err);
  });
});

function handleMessage(session: PlayerSession, data: any): void {
  if (!data || typeof data.type !== 'string') return;

  switch (data.type) {
    case 'CREATE_ROOM': {
      // Clean up previous room if player was in one
      if (session.roomCode) {
        handleDisconnect(session);
      }

      const code = generateRoomCode();
      session.roomCode = code;
      session.isHost = true;
      session.isReady = false;
      session.name = sanitizeName(data.playerName || 'HOST PILOT');
      session.carPaint = typeof data.carPaint === 'string' ? data.carPaint.slice(0, 32) : undefined;
      session.carWheels = typeof data.carWheels === 'string' ? data.carWheels.slice(0, 32) : undefined;
      session.carUnderglow = typeof data.carUnderglow === 'string' ? data.carUnderglow.slice(0, 32) : undefined;

      const envId = (typeof data.environmentId === 'string' && ALLOWED_ENVIRONMENTS.has(data.environmentId))
        ? data.environmentId
        : 'neon_dusk';
      const stageLength = (typeof data.stageLength === 'number' && data.stageLength >= 1000 && data.stageLength <= 10000)
        ? Math.floor(data.stageLength)
        : 3000;
      const seed = (typeof data.seed === 'number' && Number.isFinite(data.seed))
        ? Math.abs(Math.floor(data.seed)) % 1000000
        : Math.floor(100000 + Math.random() * 899999);

      const room: Room = {
        code,
        hostId: session.id,
        environmentId: envId,
        seed,
        stageLength,
        state: 'LOBBY',
        lastActivity: Date.now(),
        players: new Map([[session.id, session]]),
      };
      rooms.set(code, room);

      session.ws.send(JSON.stringify({
        type: 'ROOM_CREATED',
        roomCode: code,
        environmentId: room.environmentId,
        seed: room.seed,
        stageLength: room.stageLength,
        players: [{ id: session.id, name: session.name, isReady: false, isHost: true, carPaint: session.carPaint }],
      }));
      break;
    }

    case 'JOIN_ROOM': {
      if (session.roomCode) {
        handleDisconnect(session);
      }

      const code = typeof data.roomCode === 'string' ? data.roomCode.toUpperCase().trim() : '';
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
      session.name = sanitizeName(data.playerName || 'PILOT 2');
      session.carPaint = typeof data.carPaint === 'string' ? data.carPaint.slice(0, 32) : undefined;
      session.carWheels = typeof data.carWheels === 'string' ? data.carWheels.slice(0, 32) : undefined;
      session.carUnderglow = typeof data.carUnderglow === 'string' ? data.carUnderglow.slice(0, 32) : undefined;

      room.players.set(session.id, session);
      room.lastActivity = Date.now();

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

      // Only allow ready toggle while in LOBBY state
      if (room.state !== 'LOBBY') return;

      session.isReady = !!data.ready;
      room.lastActivity = Date.now();

      const playerList = Array.from(room.players.values()).map(p => ({
        id: p.id,
        name: p.name,
        isReady: p.isReady,
        isHost: p.isHost,
        carPaint: p.carPaint,
      }));

      broadcastToRoom(room, {
        type: 'ROOM_UPDATED',
        players: playerList,
      });

      // If 2 players are both ready, trigger single countdown sequence
      if (room.players.size === 2 && Array.from(room.players.values()).every(p => p.isReady)) {
        room.state = 'STARTING';
        broadcastToRoom(room, {
          type: 'RACE_COUNTDOWN',
          countdownSeconds: 3,
          startTimestamp: Date.now() + 3000,
        });

        room.countdownTimerId = setTimeout(() => {
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

      room.lastActivity = Date.now();

      // Validate bounds to prevent NaN, Inf, or absurd telemetries
      const x = typeof data.x === 'number' && Number.isFinite(data.x) ? Math.max(-100, Math.min(100, data.x)) : 0;
      const y = typeof data.y === 'number' && Number.isFinite(data.y) ? Math.max(-50, Math.min(200, data.y)) : 0;
      const z = typeof data.z === 'number' && Number.isFinite(data.z) ? Math.max(-50, Math.min(100000, data.z)) : 0;
      const speed = typeof data.speed === 'number' && Number.isFinite(data.speed) ? Math.max(0, Math.min(600, data.speed)) : 0;

      broadcastToRoom(room, {
        type: 'OPPONENT_TELEMETRY',
        playerId: session.id,
        x,
        y,
        z,
        rotX: typeof data.rotX === 'number' ? data.rotX : 0,
        rotY: typeof data.rotY === 'number' ? data.rotY : 0,
        rotZ: typeof data.rotZ === 'number' ? data.rotZ : 0,
        speed,
        isBoosting: !!data.isBoosting,
        isAirborne: !!data.isAirborne,
        currentStunt: typeof data.currentStunt === 'string' ? data.currentStunt.slice(0, 32) : null,
        timestamp: Date.now(),
      }, session.ws);
      break;
    }

    case 'PLAYER_FINISH': {
      if (!session.roomCode) return;
      const room = rooms.get(session.roomCode);
      if (!room || (room.state !== 'RACING' && room.state !== 'FINISHED')) return;

      room.state = 'FINISHED';
      room.lastActivity = Date.now();

      const finalScore = (typeof data.score === 'number' && data.score >= 0 && data.score <= 10000000)
        ? Math.floor(data.score)
        : 0;
      const distanceM = (typeof data.distance === 'number' && data.distance >= 0 && data.distance <= 500000)
        ? Math.floor(data.distance)
        : 0;
      const elapsedTime = (typeof data.elapsedTime === 'number' && data.elapsedTime >= 0)
        ? data.elapsedTime
        : 0;

      broadcastToRoom(room, {
        type: 'OPPONENT_FINISHED',
        playerId: session.id,
        name: session.name,
        finalScore,
        distanceM,
        elapsedTime,
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

  // Cancel pending countdown if a player drops during starting phase
  if (room.countdownTimerId) {
    clearTimeout(room.countdownTimerId);
    room.countdownTimerId = undefined;
  }

  room.players.delete(session.id);
  session.roomCode = null;
  session.isReady = false;

  if (room.players.size === 0) {
    rooms.delete(room.code);
  } else {
    // Notify remaining player that opponent disconnected
    broadcastToRoom(room, {
      type: 'OPPONENT_DISCONNECTED',
      message: `${session.name} disconnected from the room.`,
    });
    room.state = 'LOBBY';
    for (const p of room.players.values()) {
      p.isReady = false;
      p.isHost = true; // remaining player becomes host
    }
    const updatedList = Array.from(room.players.values()).map(p => ({
      id: p.id,
      name: p.name,
      isReady: p.isReady,
      isHost: p.isHost,
      carPaint: p.carPaint,
    }));
    broadcastToRoom(room, {
      type: 'ROOM_UPDATED',
      players: updatedList,
    });
  }
}

// Inactive Room Garbage Collection (every 60s)
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [code, room] of rooms.entries()) {
    if (now - room.lastActivity > ROOM_IDLE_TIMEOUT_MS) {
      console.log(`[Server] Purging inactive room ${code}`);
      if (room.countdownTimerId) clearTimeout(room.countdownTimerId);
      for (const p of room.players.values()) {
        p.roomCode = null;
        if (p.ws.readyState === WebSocket.OPEN) {
          p.ws.send(JSON.stringify({ type: 'ERROR', message: 'Room closed due to inactivity.' }));
        }
      }
      rooms.delete(code);
    }
  }
}, 60000);

// Graceful Server Shutdown
function shutdown(): void {
  console.log('[Server] Shutting down gracefully...');
  clearInterval(cleanupInterval);
  for (const room of rooms.values()) {
    if (room.countdownTimerId) clearTimeout(room.countdownTimerId);
  }
  for (const p of players.values()) {
    if (p.ws.readyState === WebSocket.OPEN) {
      p.ws.send(JSON.stringify({ type: 'ERROR', message: 'Relay server is restarting.' }));
      p.ws.close(1001, 'Server shutting down');
    }
  }
  server.close(() => {
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(PORT, () => {
  console.log(`[AERORUSH SERVER] High-speed multiplayer broker running on port ${PORT}`);
  console.log(`[AERORUSH SERVER] Ready for WebSocket connections at ws://localhost:${PORT}`);
});
