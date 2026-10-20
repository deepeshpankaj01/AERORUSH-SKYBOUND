(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="174",Lc=0,ao=1,Pc=2,bl=1,Tl=2,un=3,Tn=0,Ut=1,Nt=2,En=0,gi=1,qi=2,oo=3,lo=4,Ic=5,zn=100,Dc=101,Nc=102,Uc=103,Fc=104,Oc=200,Bc=201,kc=202,Gc=203,Or=204,Br=205,zc=206,Hc=207,Vc=208,Wc=209,Xc=210,qc=211,Yc=212,$c=213,Kc=214,kr=0,Gr=1,zr=2,yi=3,Hr=4,Vr=5,Wr=6,Xr=7,wl=0,Zc=1,Jc=2,bn=0,jc=1,Qc=2,eh=3,Al=4,th=5,nh=6,ih=7,Cl=300,xi=301,Mi=302,qr=303,Yr=304,$s=306,$r=1e3,Vn=1001,Kr=1002,jt=1003,sh=1004,is=1005,en=1006,er=1007,Wn=1008,mn=1009,Rl=1010,Ll=1011,Yi=1012,Pa=1013,qn=1014,dn=1015,ji=1016,Ia=1017,Da=1018,Si=1020,Pl=35902,Il=1021,Dl=1022,Jt=1023,Nl=1024,Ul=1025,vi=1026,Ei=1027,Fl=1028,Na=1029,Ol=1030,Ua=1031,Fa=1033,Us=33776,Fs=33777,Os=33778,Bs=33779,Zr=35840,Jr=35841,jr=35842,Qr=35843,ea=36196,ta=37492,na=37496,ia=37808,sa=37809,ra=37810,aa=37811,oa=37812,la=37813,ca=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,ks=36492,va=36494,_a=36495,Bl=36283,ya=36284,xa=36285,Ma=36286,rh=3200,ah=3201,kl=0,oh=1,Sn="",Vt="srgb",bi="srgb-linear",zs="linear",st="srgb",Zn=7680,co=519,lh=512,ch=513,hh=514,Gl=515,uh=516,dh=517,fh=518,ph=519,Sa=35044,ho="300 es",fn=2e3,Hs=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uo=1234567;const zi=Math.PI/180,Ti=180/Math.PI;function nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function He(s,e,t){return Math.max(e,Math.min(t,s))}function Oa(s,e){return(s%e+e)%e}function mh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function gh(s,e,t){return s!==e?(t-s)/(e-s):0}function Hi(s,e,t){return(1-t)*s+t*e}function vh(s,e,t,n){return Hi(s,e,1-Math.exp(-t*n))}function _h(s,e=1){return e-Math.abs(Oa(s,e*2)-e)}function yh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Mh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Sh(s,e){return s+Math.random()*(e-s)}function Eh(s){return s*(.5-Math.random())}function bh(s){s!==void 0&&(uo=s);let e=uo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Th(s){return s*zi}function wh(s){return s*Ti}function Ah(s){return(s&s-1)===0&&s!==0}function Ch(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:zi,RAD2DEG:Ti,generateUUID:nn,clamp:He,euclideanModulo:Oa,mapLinear:mh,inverseLerp:gh,lerp:Hi,damp:vh,pingpong:_h,smoothstep:yh,smootherstep:xh,randInt:Mh,randFloat:Sh,randFloatSpread:Eh,seededRandom:bh,degToRad:Th,radToDeg:wh,isPowerOfTwo:Ah,ceilPowerOfTwo:Ch,floorPowerOfTwo:Rh,setQuaternionFromProperEuler:Lh,normalize:it,denormalize:Zt};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,r,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],b=i[1],S=i[4],_=i[7],P=i[2],A=i[5],C=i[8];return r[0]=a*v+o*b+l*P,r[3]=a*m+o*S+l*A,r[6]=a*p+o*_+l*C,r[1]=c*v+h*b+u*P,r[4]=c*m+h*S+u*A,r[7]=c*p+h*_+u*C,r[2]=f*v+d*b+g*P,r[5]=f*m+d*S+g*A,r[8]=f*p+d*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tr.makeScale(e,t)),this}rotate(e){return this.premultiply(tr.makeRotation(-e)),this}translate(e,t){return this.premultiply(tr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tr=new Be;function zl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ph(){const s=Vs("canvas");return s.style.display="block",s}const fo={};function Bn(s){s in fo||(fo[s]=!0,console.warn(s))}function Ih(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Dh(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const po=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mo=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uh(){const s={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?zs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[bi]:{primaries:e,whitePoint:n,transfer:zs,toXYZ:po,fromXYZ:mo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:po,fromXYZ:mo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}const je=Uh();function pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Jn;class Fh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Vs("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oh=0;class Ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(nr(i[a].image)):r.push(nr(i[a]))}else r=nr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function nr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bh=0;class Pt extends Ai{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Vn,i=Vn,r=en,a=Wn,o=Jt,l=mn,c=Pt.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=nn(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Cl;Pt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,_=(d+1)/2,P=(p+1)/2,A=(h+f)/4,C=(u+v)/4,I=(g+m)/4;return S>_&&S>P?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=C/n):_>P?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=I/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=I/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kh extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ba(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hl extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gh extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),A=Math.atan2(P,p*b);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const _=o*b;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ir.copy(this).projectOnVector(e),this.sub(ir)}reflect(e){return this.sub(ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ir=new L,go=new Ci;class wn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),rs.subVectors(this.max,Ii),jn.subVectors(e.a,Ii),Qn.subVectors(e.b,Ii),ei.subVectors(e.c,Ii),gn.subVectors(Qn,jn),vn.subVectors(ei,Qn),Pn.subVectors(jn,ei);let t=[0,-gn.z,gn.y,0,-vn.z,vn.y,0,-Pn.z,Pn.y,gn.z,0,-gn.x,vn.z,0,-vn.x,Pn.z,0,-Pn.x,-gn.y,gn.x,0,-vn.y,vn.x,0,-Pn.y,Pn.x,0];return!sr(t,jn,Qn,ei,rs)||(t=[1,0,0,0,1,0,0,0,1],!sr(t,jn,Qn,ei,rs))?!1:(as.crossVectors(gn,vn),t=[as.x,as.y,as.z],sr(t,jn,Qn,ei,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new L,new L,new L,new L,new L,new L,new L,new L],Yt=new L,ss=new wn,jn=new L,Qn=new L,ei=new L,gn=new L,vn=new L,Pn=new L,Ii=new L,rs=new L,as=new L,In=new L;function sr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){In.fromArray(s,r);const o=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),l=e.dot(In),c=t.dot(In),h=n.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zh=new wn,Di=new L,rr=new L;class Qi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(rr)),this.expandByPoint(Di.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new L,ar=new L,os=new L,_n=new L,or=new L,ls=new L,lr=new L;class ka{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ar.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(ar);const r=e.distanceTo(t)*.5,a=-this.direction.dot(os),o=_n.dot(this.direction),l=-_n.dot(os),c=_n.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ar).addScaledVector(os,f),d}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){or.subVectors(t,e),ls.subVectors(n,e),lr.crossVectors(or,ls);let a=this.direction.dot(lr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,e);const l=o*this.direction.dot(ls.crossVectors(_n,ls));if(l<0)return null;const c=o*this.direction.dot(or.cross(_n));if(c<0||l+c>a)return null;const h=-o*_n.dot(lr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,g,v,m)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ti.setFromMatrixColumn(e,0).length(),r=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hh,e,Vh)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),yn.crossVectors(n,Ot),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),yn.crossVectors(n,Ot)),yn.normalize(),cs.crossVectors(Ot,yn),i[0]=yn.x,i[4]=cs.x,i[8]=Ot.x,i[1]=yn.y,i[5]=cs.y,i[9]=Ot.y,i[2]=yn.z,i[6]=cs.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],S=n[7],_=n[11],P=n[15],A=i[0],C=i[4],I=i[8],E=i[12],x=i[1],R=i[5],G=i[9],O=i[13],H=i[2],Y=i[6],V=i[10],Z=i[14],z=i[3],oe=i[7],de=i[11],ve=i[15];return r[0]=a*A+o*x+l*H+c*z,r[4]=a*C+o*R+l*Y+c*oe,r[8]=a*I+o*G+l*V+c*de,r[12]=a*E+o*O+l*Z+c*ve,r[1]=h*A+u*x+f*H+d*z,r[5]=h*C+u*R+f*Y+d*oe,r[9]=h*I+u*G+f*V+d*de,r[13]=h*E+u*O+f*Z+d*ve,r[2]=g*A+v*x+m*H+p*z,r[6]=g*C+v*R+m*Y+p*oe,r[10]=g*I+v*G+m*V+p*de,r[14]=g*E+v*O+m*Z+p*ve,r[3]=b*A+S*x+_*H+P*z,r[7]=b*C+S*R+_*Y+P*oe,r[11]=b*I+S*G+_*V+P*de,r[15]=b*E+S*O+_*Z+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+v*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,S=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,P=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,A=t*b+n*S+i*_+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=b*C,e[1]=(v*f*r-u*m*r-v*i*d+n*m*d+u*i*p-n*f*p)*C,e[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*C,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*C,e[4]=S*C,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*C,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*C,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*C,e[8]=_*C,e[9]=(g*u*r-h*v*r-g*n*d+t*v*d+h*n*p-t*u*p)*C,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*C,e[12]=P*C,e[13]=(h*v*i-g*u*i+g*n*f-t*v*f-h*n*m+t*u*m)*C,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,b=l*c,S=l*h,_=l*u,P=n.x,A=n.y,C=n.z;return i[0]=(1-(v+p))*P,i[1]=(d+_)*P,i[2]=(g-S)*P,i[3]=0,i[4]=(d-_)*A,i[5]=(1-(f+p))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+S)*C,i[9]=(m-b)*C,i[10]=(1-(f+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ti.set(i[0],i[1],i[2]).length();const a=ti.set(i[4],i[5],i[6]).length(),o=ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$t.copy(this);const c=1/r,h=1/a,u=1/o;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=fn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===fn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hs)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=fn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,d=(n+i)*h;let g,v;if(o===fn)g=(a+r)*u,v=-2*u;else if(o===Hs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new L,$t=new ot,Hh=new L(0,0,0),Vh=new L(1,1,1),yn=new L,cs=new L,Ot=new L,vo=new ot,_o=new Ci;class kt{constructor(e=0,t=0,n=0,i=kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _o.setFromEuler(this),this.setFromQuaternion(_o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kt.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wh=0;const yo=new L,ni=new Ci,ln=new ot,hs=new L,Ni=new L,Xh=new L,qh=new Ci,xo=new L(1,0,0),Mo=new L(0,1,0),So=new L(0,0,1),Eo={type:"added"},Yh={type:"removed"},ii={type:"childadded",child:null},cr={type:"childremoved",child:null};class ft extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new kt,n=new Ci,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new Be}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(xo,e)}rotateY(e){return this.rotateOnAxis(Mo,e)}rotateZ(e){return this.rotateOnAxis(So,e)}translateOnAxis(e,t){return yo.copy(e).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xo,e)}translateY(e){return this.translateOnAxis(Mo,e)}translateZ(e){return this.translateOnAxis(So,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ni,hs,this.up):ln.lookAt(hs,Ni,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),ni.setFromRotationMatrix(ln),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eo),ii.child=e,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yh),cr.child=e,this.dispatchEvent(cr),cr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eo),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,Xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new L,cn=new L,hr=new L,hn=new L,si=new L,ri=new L,bo=new L,ur=new L,dr=new L,fr=new L,pr=new dt,mr=new dt,gr=new dt;class Wt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kt.subVectors(i,t),cn.subVectors(n,t),hr.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(cn),l=Kt.dot(hr),c=cn.dot(cn),h=cn.dot(hr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return pr.setScalar(0),mr.setScalar(0),gr.setScalar(0),pr.fromBufferAttribute(e,t),mr.fromBufferAttribute(e,n),gr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(pr,r.x),a.addScaledVector(mr,r.y),a.addScaledVector(gr,r.z),a}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),cn.subVectors(e,t),Kt.cross(cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Kt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;si.subVectors(i,n),ri.subVectors(r,n),ur.subVectors(e,n);const l=si.dot(ur),c=ri.dot(ur);if(l<=0&&c<=0)return t.copy(n);dr.subVectors(e,i);const h=si.dot(dr),u=ri.dot(dr);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(si,a);fr.subVectors(e,r);const d=si.dot(fr),g=ri.dot(fr);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ri,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return bo.subVectors(r,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(bo,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(si,a).addScaledVector(ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},us={h:0,s:0,l:0};function vr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Oa(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vr(a,r,e+1/3),this.g=vr(a,r,e),this.b=vr(a,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return je.fromWorkingColorSpace(bt.copy(this),e),Math.round(He(bt.r*255,0,255))*65536+Math.round(He(bt.g*255,0,255))*256+Math.round(He(bt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,r=bt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Vt){je.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(us);const n=Hi(xn.h,us.h,t),i=Hi(xn.s,us.s,t),r=Hi(xn.l,us.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new ke;ke.NAMES=Wl;let $h=0;class Cn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=gi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=Br,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Or&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==co&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lt extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new L,ds=new re;let Kh=0;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class Xl extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ql extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zh=0;const Ht=new ot,_r=new ft,ai=new L,Bt=new wn,Ui=new wn,yt=new L;class pt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zl(e)?ql:Xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return _r.lookAt(e),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Bt.min,Ui.min),Bt.expandByPoint(yt),yt.addVectors(Bt.max,Ui.max),Bt.expandByPoint(yt)):(Bt.expandByPoint(Ui.min),Bt.expandByPoint(Ui.max))}Bt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(ai.fromBufferAttribute(e,c),yt.add(ai)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new L,l[I]=new L;const c=new L,h=new L,u=new L,f=new re,d=new re,g=new re,v=new L,m=new L;function p(I,E,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[I].add(v),o[E].add(v),o[x].add(v),l[I].add(m),l[E].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,E=b.length;I<E;++I){const x=b[I],R=x.start,G=x.count;for(let O=R,H=R+G;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new L,_=new L,P=new L,A=new L;function C(I){P.fromBufferAttribute(i,I),A.copy(P);const E=o[I];S.copy(E),S.sub(P.multiplyScalar(P.dot(E))).normalize(),_.crossVectors(A,E);const R=_.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,R)}for(let I=0,E=b.length;I<E;++I){const x=b[I],R=x.start,G=x.count;for(let O=R,H=R+G;O<H;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new wt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new ot,Dn=new ka,fs=new Qi,wo=new L,ps=new L,ms=new L,gs=new L,yr=new L,vs=new L,Ao=new L,_s=new L;class be extends ft{constructor(e=new pt,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(yr.fromBufferAttribute(u,e),a?vs.addScaledVector(yr,h):vs.addScaledVector(yr.sub(t),h))}t.add(vs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!(fs.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(fs,wo)===null||Dn.origin.distanceToSquared(wo)>(e.far-e.near)**2))&&(To.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(To),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,P=S;_<P;_+=3){const A=o.getX(_),C=o.getX(_+1),I=o.getX(_+2);i=ys(this,p,e,n,c,h,u,A,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);i=ys(this,a,e,n,c,h,u,b,S,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,P=S;_<P;_+=3){const A=_,C=_+1,I=_+2;i=ys(this,p,e,n,c,h,u,A,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=m,S=m+1,_=m+2;i=ys(this,a,e,n,c,h,u,b,S,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jh(s,e,t,n,i,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Tn,o),l===null)return null;_s.copy(o),_s.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:s}}function ys(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ps),s.getVertexPosition(l,ms),s.getVertexPosition(c,gs);const h=Jh(s,e,t,n,ps,ms,gs,Ao);if(h){const u=new L;Wt.getBarycoord(Ao,ps,ms,gs,u),i&&(h.uv=Wt.getInterpolatedAttribute(i,o,l,c,u,new re)),r&&(h.uv1=Wt.getInterpolatedAttribute(r,o,l,c,u,new re)),a&&(h.normal=Wt.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};Wt.getNormal(ps,ms,gs,f.normal),h.face=f,h.barycoord=u}return h}class Je extends pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(v,m,p,b,S,_,P,A,C,I,E){const x=_/C,R=P/I,G=_/2,O=P/2,H=A/2,Y=C+1,V=I+1;let Z=0,z=0;const oe=new L;for(let de=0;de<V;de++){const ve=de*R-O;for(let Ue=0;Ue<Y;Ue++){const Xe=Ue*x-G;oe[v]=Xe*b,oe[m]=ve*S,oe[p]=H,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[p]=A>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ue/C),u.push(1-de/I),Z+=1}}for(let de=0;de<I;de++)for(let ve=0;ve<C;ve++){const Ue=f+ve+Y*de,Xe=f+ve+Y*(de+1),X=f+(ve+1)+Y*(de+1),ie=f+(ve+1)+Y*de;l.push(Ue,Xe,ie),l.push(Xe,X,ie),z+=6}o.addGroup(d,z,E),d+=z,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=wi(s[t]);for(const i in n)e[i]=n[i]}return e}function jh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Qh={clone:wi,merge:Rt};var eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eu,this.fragmentShader=tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $l extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new L,Co=new re,Ro=new re;class Dt extends $l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ti*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ti*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Co,Ro),t.subVectors(Ro,Co)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,li=1;class nu extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dt(oi,li,e,t);i.layers=this.layers,this.add(i);const r=new Dt(oi,li,e,t);r.layers=this.layers,this.add(r);const a=new Dt(oi,li,e,t);a.layers=this.layers,this.add(a);const o=new Dt(oi,li,e,t);o.layers=this.layers,this.add(o);const l=new Dt(oi,li,e,t);l.layers=this.layers,this.add(l);const c=new Dt(oi,li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kl extends Pt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iu extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Je(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:En});r.uniforms.tEquirect.value=t;const a=new be(i,r),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=en),new nu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class rt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const su={type:"move"};class xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(su)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ws{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new Ws(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ru extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kt,this.environmentIntensity=1,this.environmentRotation=new kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class au{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sa,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new L;class Xs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zl extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ci;const Fi=new L,hi=new L,ui=new L,di=new re,Oi=new re,Jl=new ot,xs=new L,Bi=new L,Ms=new L,Lo=new re,Mr=new re,Po=new re;class ou extends ft{constructor(e=new Zl){if(super(),this.isSprite=!0,this.type="Sprite",ci===void 0){ci=new pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new au(t,5);ci.setIndex([0,1,2,0,2,3]),ci.setAttribute("position",new Xs(n,3,0,!1)),ci.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=ci,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hi.setFromMatrixScale(this.matrixWorld),Jl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hi.multiplyScalar(-ui.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ss(xs.set(-.5,-.5,0),ui,a,hi,i,r),Ss(Bi.set(.5,-.5,0),ui,a,hi,i,r),Ss(Ms.set(.5,.5,0),ui,a,hi,i,r),Lo.set(0,0),Mr.set(1,0),Po.set(1,1);let o=e.ray.intersectTriangle(xs,Bi,Ms,!1,Fi);if(o===null&&(Ss(Bi.set(-.5,.5,0),ui,a,hi,i,r),Mr.set(0,1),o=e.ray.intersectTriangle(xs,Ms,Bi,!1,Fi),o===null))return;const l=e.ray.origin.distanceTo(Fi);l<e.near||l>e.far||t.push({distance:l,point:Fi.clone(),uv:Wt.getInterpolation(Fi,xs,Bi,Ms,Lo,Mr,Po,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ss(s,e,t,n,i,r){di.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Oi.x=r*di.x-i*di.y,Oi.y=i*di.x+r*di.y):Oi.copy(di),s.copy(e),s.x+=Oi.x,s.y+=Oi.y,s.applyMatrix4(Jl)}const Sr=new L,lu=new L,cu=new Be;class kn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sr.subVectors(n,t).cross(lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cu.getNormalMatrix(e),i=this.coplanarPoint(Sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Qi,Es=new L;class Ga{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],b=i[13],S=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+a,f+h,m+g,_+b).normalize(),n[3].setComponents(l-a,f-h,m-g,_-b).normalize(),n[4].setComponents(l-o,f-u,m-v,_-S).normalize(),t===fn)n[5].setComponents(l+o,f+u,m+v,_+S).normalize();else if(t===Hs)n[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Es.x=i.normal.x>0?e.max.x:e.min.x,Es.y=i.normal.y>0?e.max.y:e.min.y,Es.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class za extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qs=new L,Ys=new L,Io=new ot,ki=new ka,bs=new Qi,Er=new L,Do=new L;class hu extends ft{constructor(e=new pt,t=new za){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)qs.fromBufferAttribute(t,i-1),Ys.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qs.distanceTo(Ys);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;Io.copy(i).invert(),ki.copy(e.ray).applyMatrix4(Io);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=h.getX(v),b=h.getX(v+1),S=Ts(this,e,ki,l,p,b,v);S&&t.push(S)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=Ts(this,e,ki,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=Ts(this,e,ki,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Ts(this,e,ki,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ts(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(qs.fromBufferAttribute(o,i),Ys.fromBufferAttribute(o,r),t.distanceSqToSegment(qs,Ys,Er,Do)>n)return;Er.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Er);if(!(c<e.near||c>e.far))return{distance:c,point:Do.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const No=new L,Uo=new L;class jl extends hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)No.fromBufferAttribute(t,i),Uo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+No.distanceTo(Uo);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ha extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fo=new ot,Ea=new ka,ws=new Qi,As=new L;class Ql extends ft{constructor(e=new pt,t=new Ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;Fo.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(Fo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);As.fromBufferAttribute(u,m),Oo(As,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)As.fromBufferAttribute(u,g),Oo(As,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oo(s,e,t,n,i,r,a){const o=Ea.distanceSqToPoint(s);if(o<t){const l=new L;Ea.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ec extends Pt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tc extends Pt{constructor(e,t,n,i,r,a,o,l,c,h=vi){if(h!==vi&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=qn),n===void 0&&h===Ei&&(n=Si),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,i=[],r=[],a=[],o=new L,l=new ot;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(He(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(He(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Va extends sn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uu extends Va{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wa(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Cs=new L,br=new Wa,Tr=new Wa,wr=new Wa;class du extends sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Cs.subVectors(i[0],i[1]).add(i[0]),c=Cs);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Cs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),br.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Tr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),wr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(br.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Tr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(br.calc(l),Tr.calc(l),wr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bo(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function fu(s,e){const t=1-s;return t*t*e}function pu(s,e){return 2*(1-s)*s*e}function mu(s,e){return s*s*e}function Vi(s,e,t,n){return fu(s,e)+pu(s,t)+mu(s,n)}function gu(s,e){const t=1-s;return t*t*t*e}function vu(s,e){const t=1-s;return 3*t*t*s*e}function _u(s,e){return 3*(1-s)*s*s*e}function yu(s,e){return s*s*s*e}function Wi(s,e,t,n,i){return gu(s,e)+vu(s,t)+_u(s,n)+yu(s,i)}class nc extends sn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wi(e,i.x,r.x,a.x,o.x),Wi(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xu extends sn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wi(e,i.x,r.x,a.x,o.x),Wi(e,i.y,r.y,a.y,o.y),Wi(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ic extends sn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mu extends sn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sc extends sn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Vi(e,i.x,r.x,a.x),Vi(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Su extends sn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Vi(e,i.x,r.x,a.x),Vi(e,i.y,r.y,a.y),Vi(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rc extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Bo(o,l.x,c.x,h.x,u.x),Bo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var ba=Object.freeze({__proto__:null,ArcCurve:uu,CatmullRomCurve3:du,CubicBezierCurve:nc,CubicBezierCurve3:xu,EllipseCurve:Va,LineCurve:ic,LineCurve3:Mu,QuadraticBezierCurve:sc,QuadraticBezierCurve3:Su,SplineCurve:rc});class Eu extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ba[i.type]().fromJSON(i))}return this}}class ko extends Eu{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ic(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new sc(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new nc(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Va(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xa extends pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new L,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tn extends pt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;b(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function b(){const _=new L,P=new L;let A=0;const C=(t-e)/n;for(let I=0;I<=r;I++){const E=[],x=I/r,R=x*(t-e)+e;for(let G=0;G<=i;G++){const O=G/i,H=O*l+o,Y=Math.sin(H),V=Math.cos(H);P.x=R*Y,P.y=-x*n+m,P.z=R*V,u.push(P.x,P.y,P.z),_.set(Y,C,V).normalize(),f.push(_.x,_.y,_.z),d.push(O,1-x),E.push(g++)}v.push(E)}for(let I=0;I<i;I++)for(let E=0;E<r;E++){const x=v[E][I],R=v[E+1][I],G=v[E+1][I+1],O=v[E][I+1];(e>0||E!==0)&&(h.push(x,R,O),A+=3),(t>0||E!==r-1)&&(h.push(R,G,O),A+=3)}c.addGroup(p,A,0),p+=A}function S(_){const P=g,A=new re,C=new L;let I=0;const E=_===!0?e:t,x=_===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const R=g;for(let G=0;G<=i;G++){const H=G/i*l+o,Y=Math.cos(H),V=Math.sin(H);C.x=E*V,C.y=m*x,C.z=E*Y,u.push(C.x,C.y,C.z),f.push(0,x,0),A.x=Y*.5+.5,A.y=V*.5*x+.5,d.push(A.x,A.y),g++}for(let G=0;G<i;G++){const O=P+G,H=R+G;_===!0?h.push(H,H+1,O):h.push(H+1,H,O),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qa extends tn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ya extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const S=new L,_=new L,P=new L;for(let A=0;A<t.length;A+=3)d(t[A+0],S),d(t[A+1],_),d(t[A+2],P),l(S,_,P,b)}function l(b,S,_,P){const A=P+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const E=b.clone().lerp(_,I/A),x=S.clone().lerp(_,I/A),R=A-I;for(let G=0;G<=R;G++)G===0&&I===A?C[I][G]=E:C[I][G]=E.clone().lerp(x,G/R)}for(let I=0;I<A;I++)for(let E=0;E<2*(A-I)-1;E++){const x=Math.floor(E/2);E%2===0?(f(C[I][x+1]),f(C[I+1][x]),f(C[I][x])):(f(C[I][x+1]),f(C[I+1][x+1]),f(C[I+1][x]))}}function c(b){const S=new L;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(b),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){const b=new L;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];const _=m(b)/2/Math.PI+.5,P=p(b)/Math.PI+.5;a.push(_,1-P)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){const S=a[b+0],_=a[b+2],P=a[b+4],A=Math.max(S,_,P),C=Math.min(S,_,P);A>.9&&C<.1&&(S<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),P<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,S){const _=b*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){const b=new L,S=new L,_=new L,P=new L,A=new re,C=new re,I=new re;for(let E=0,x=0;E<r.length;E+=9,x+=6){b.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),A.set(a[x+0],a[x+1]),C.set(a[x+2],a[x+3]),I.set(a[x+4],a[x+5]),P.copy(b).add(S).add(_).divideScalar(3);const R=m(P);v(A,x+0,b,R),v(C,x+2,S,R),v(I,x+4,_,R)}}function v(b,S,_,P){P<0&&b.x===1&&(a[S]=b.x-1),_.x===0&&_.z===0&&(a[S]=P/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.vertices,e.indices,e.radius,e.details)}}class ac extends ko{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ko().fromJSON(i))}return this}}class bu{static triangulate(e,t,n=2){const i=t&&t.length,r=i?t[0]*n:e.length;let a=oc(e,0,r,n,!0);const o=[];if(!a||a.next===a.prev)return o;let l,c,h,u,f,d,g;if(i&&(a=Ru(e,t,a,n)),e.length>80*n){l=h=e[0],c=u=e[1];for(let v=n;v<r;v+=n)f=e[v],d=e[v+1],f<l&&(l=f),d<c&&(c=d),f>h&&(h=f),d>u&&(u=d);g=Math.max(h-l,u-c),g=g!==0?32767/g:0}return $i(a,o,n,l,c,g,0),o}}function oc(s,e,t,n,i){let r,a;if(i===Gu(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Go(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Go(r,s[r],s[r+1],a);return a&&Ks(a,a.next)&&(Zi(a),a=a.next),a}function $n(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||ct(t.prev,t,t.next)===0)){if(Zi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $i(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Nu(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?wu(s,n,i,r):Tu(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Zi(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Au($n(s),e,t),$i(s,e,t,n,i,r,2)):a===2&&Cu(s,e,t,n,i,r):$i($n(s),e,t,n,i,r,1);break}}}function Tu(s){const e=s.prev,t=s,n=s.next;if(ct(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&pi(i,o,r,l,a,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wu(s,e,t,n){const i=s.prev,r=s,a=s.next;if(ct(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Ta(d,g,e,t,n),b=Ta(v,m,e,t,n);let S=s.prevZ,_=s.nextZ;for(;S&&S.z>=p&&_&&_.z<=b;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&pi(o,h,l,u,c,f,S.x,S.y)&&ct(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&pi(o,h,l,u,c,f,_.x,_.y)&&ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&pi(o,h,l,u,c,f,S.x,S.y)&&ct(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=b;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&pi(o,h,l,u,c,f,_.x,_.y)&&ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Au(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ks(i,r)&&lc(i,n,n.next,r)&&Ki(i,r)&&Ki(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Zi(n),Zi(n.next),n=s=r),n=n.next}while(n!==s);return $n(n)}function Cu(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ou(a,o)){let l=cc(a,o);a=$n(a,a.next),l=$n(l,l.next),$i(a,e,t,n,i,r,0),$i(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ru(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=oc(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Fu(c));for(i.sort(Lu),r=0;r<i.length;r++)t=Pu(i[r],t);return t}function Lu(s,e){return s.x-e.x}function Pu(s,e){const t=Iu(s,e);if(!t)return e;const n=cc(t,s);return $n(n,n.next),$n(t,t.next)}function Iu(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&pi(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Ki(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Du(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function Du(s,e){return ct(s.prev,s,e.prev)<0&&ct(e.next,s,s.next)<0}function Nu(s,e,t,n){let i=s;do i.z===0&&(i.z=Ta(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Uu(i)}function Uu(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Ta(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Fu(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function pi(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Ou(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Bu(s,e)&&(Ki(s,e)&&Ki(e,s)&&ku(s,e)&&(ct(s.prev,s,e.prev)||ct(s,e.prev,e))||Ks(s,e)&&ct(s.prev,s,s.next)>0&&ct(e.prev,e,e.next)>0)}function ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ks(s,e){return s.x===e.x&&s.y===e.y}function lc(s,e,t,n){const i=Ls(ct(s,e,t)),r=Ls(ct(s,e,n)),a=Ls(ct(t,n,s)),o=Ls(ct(t,n,e));return!!(i!==r&&a!==o||i===0&&Rs(s,t,e)||r===0&&Rs(s,n,e)||a===0&&Rs(t,s,n)||o===0&&Rs(t,e,n))}function Rs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ls(s){return s>0?1:s<0?-1:0}function Bu(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&lc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ki(s,e){return ct(s.prev,s,s.next)<0?ct(s,e,s.next)>=0&&ct(s,s.prev,e)>=0:ct(s,e,s.prev)<0||ct(s,s.next,e)<0}function ku(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function cc(s,e){const t=new wa(s.i,s.x,s.y),n=new wa(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Go(s,e,t,n){const i=new wa(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wa(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gu(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Xi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Xi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];zo(e),Ho(n,e);let a=e.length;t.forEach(zo);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Ho(n,t[l]);const o=bu.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function zo(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ho(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class $a extends pt{constructor(e=new ac([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Qe(i,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:zu;let S,_=!1,P,A,C,I;p&&(S=p.getSpacedPoints(h),_=!0,f=!1,P=p.computeFrenetFrames(h,!1),A=new L,C=new L,I=new L),f||(m=0,d=0,g=0,v=0);const E=o.extractPoints(c);let x=E.shape;const R=E.holes;if(!Xi.isClockWise(x)){x=x.reverse();for(let Q=0,J=R.length;Q<J;Q++){const w=R[Q];Xi.isClockWise(w)&&(R[Q]=w.reverse())}}const O=Xi.triangulateShape(x,R),H=x;for(let Q=0,J=R.length;Q<J;Q++){const w=R[Q];x=x.concat(w)}function Y(Q,J,w){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(J,w)}const V=x.length,Z=O.length;function z(Q,J,w){let we,ee,ge;const ae=Q.x-J.x,Pe=Q.y-J.y,fe=w.x-Q.x,T=w.y-Q.y,y=ae*ae+Pe*Pe,F=ae*T-Pe*fe;if(Math.abs(F)>Number.EPSILON){const q=Math.sqrt(y),j=Math.sqrt(fe*fe+T*T),$=J.x-Pe/q,Ae=J.y+ae/q,ce=w.x-T/j,_e=w.y+fe/j,We=((ce-$)*T-(_e-Ae)*fe)/(ae*T-Pe*fe);we=$+ae*We-Q.x,ee=Ae+Pe*We-Q.y;const ne=we*we+ee*ee;if(ne<=2)return new re(we,ee);ge=Math.sqrt(ne/2)}else{let q=!1;ae>Number.EPSILON?fe>Number.EPSILON&&(q=!0):ae<-Number.EPSILON?fe<-Number.EPSILON&&(q=!0):Math.sign(Pe)===Math.sign(T)&&(q=!0),q?(we=-Pe,ee=ae,ge=Math.sqrt(y)):(we=ae,ee=Pe,ge=Math.sqrt(y/2))}return new re(we/ge,ee/ge)}const oe=[];for(let Q=0,J=H.length,w=J-1,we=Q+1;Q<J;Q++,w++,we++)w===J&&(w=0),we===J&&(we=0),oe[Q]=z(H[Q],H[w],H[we]);const de=[];let ve,Ue=oe.concat();for(let Q=0,J=R.length;Q<J;Q++){const w=R[Q];ve=[];for(let we=0,ee=w.length,ge=ee-1,ae=we+1;we<ee;we++,ge++,ae++)ge===ee&&(ge=0),ae===ee&&(ae=0),ve[we]=z(w[we],w[ge],w[ae]);de.push(ve),Ue=Ue.concat(ve)}for(let Q=0;Q<m;Q++){const J=Q/m,w=d*Math.cos(J*Math.PI/2),we=g*Math.sin(J*Math.PI/2)+v;for(let ee=0,ge=H.length;ee<ge;ee++){const ae=Y(H[ee],oe[ee],we);se(ae.x,ae.y,-w)}for(let ee=0,ge=R.length;ee<ge;ee++){const ae=R[ee];ve=de[ee];for(let Pe=0,fe=ae.length;Pe<fe;Pe++){const T=Y(ae[Pe],ve[Pe],we);se(T.x,T.y,-w)}}}const Xe=g+v;for(let Q=0;Q<V;Q++){const J=f?Y(x[Q],Ue[Q],Xe):x[Q];_?(C.copy(P.normals[0]).multiplyScalar(J.x),A.copy(P.binormals[0]).multiplyScalar(J.y),I.copy(S[0]).add(C).add(A),se(I.x,I.y,I.z)):se(J.x,J.y,0)}for(let Q=1;Q<=h;Q++)for(let J=0;J<V;J++){const w=f?Y(x[J],Ue[J],Xe):x[J];_?(C.copy(P.normals[Q]).multiplyScalar(w.x),A.copy(P.binormals[Q]).multiplyScalar(w.y),I.copy(S[Q]).add(C).add(A),se(I.x,I.y,I.z)):se(w.x,w.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const J=Q/m,w=d*Math.cos(J*Math.PI/2),we=g*Math.sin(J*Math.PI/2)+v;for(let ee=0,ge=H.length;ee<ge;ee++){const ae=Y(H[ee],oe[ee],we);se(ae.x,ae.y,u+w)}for(let ee=0,ge=R.length;ee<ge;ee++){const ae=R[ee];ve=de[ee];for(let Pe=0,fe=ae.length;Pe<fe;Pe++){const T=Y(ae[Pe],ve[Pe],we);_?se(T.x,T.y+S[h-1].y,S[h-1].x+w):se(T.x,T.y,u+w)}}}X(),ie();function X(){const Q=i.length/3;if(f){let J=0,w=V*J;for(let we=0;we<Z;we++){const ee=O[we];Ce(ee[2]+w,ee[1]+w,ee[0]+w)}J=h+m*2,w=V*J;for(let we=0;we<Z;we++){const ee=O[we];Ce(ee[0]+w,ee[1]+w,ee[2]+w)}}else{for(let J=0;J<Z;J++){const w=O[J];Ce(w[2],w[1],w[0])}for(let J=0;J<Z;J++){const w=O[J];Ce(w[0]+V*h,w[1]+V*h,w[2]+V*h)}}n.addGroup(Q,i.length/3-Q,0)}function ie(){const Q=i.length/3;let J=0;xe(H,J),J+=H.length;for(let w=0,we=R.length;w<we;w++){const ee=R[w];xe(ee,J),J+=ee.length}n.addGroup(Q,i.length/3-Q,1)}function xe(Q,J){let w=Q.length;for(;--w>=0;){const we=w;let ee=w-1;ee<0&&(ee=Q.length-1);for(let ge=0,ae=h+m*2;ge<ae;ge++){const Pe=V*ge,fe=V*(ge+1),T=J+we+Pe,y=J+ee+Pe,F=J+ee+fe,q=J+we+fe;Ve(T,y,F,q)}}}function se(Q,J,w){l.push(Q),l.push(J),l.push(w)}function Ce(Q,J,w){Te(Q),Te(J),Te(w);const we=i.length/3,ee=b.generateTopUV(n,i,we-3,we-2,we-1);Ye(ee[0]),Ye(ee[1]),Ye(ee[2])}function Ve(Q,J,w,we){Te(Q),Te(J),Te(we),Te(J),Te(w),Te(we);const ee=i.length/3,ge=b.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);Ye(ge[0]),Ye(ge[1]),Ye(ge[3]),Ye(ge[1]),Ye(ge[2]),Ye(ge[3])}function Te(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Ye(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hu(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ba[i.type]().fromJSON(i)),new $a(n,e.options)}}const zu={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-u),new re(f,1-g),new re(v,1-p)]:[new re(o,1-l),new re(h,1-u),new re(d,1-g),new re(m,1-p)]}};function Hu(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ka extends Ya{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ka(e.radius,e.detail)}}class Ri extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const b=p*f-a;for(let S=0;S<c;S++){const _=S*u-r;g.push(_,-b,0),v.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const S=b+c*p,_=b+c*(p+1),P=b+1+c*(p+1),A=b+1+c*p;d.push(S,_,A),d.push(_,P,A)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.widthSegments,e.heightSegments)}}class es extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new L,g=new re;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const b=p+m,S=b,_=b+n+1,P=b+n+2,A=b+1;o.push(S,_,A),o.push(_,P,A)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ji extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],S=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){const A=P/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+_,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const S=h[p][b+1],_=h[p][b],P=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&d.push(S,_,A),(p!==n-1||l<Math.PI)&&d.push(_,P,A)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Za extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const v=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const v=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,b=(i+1)*d+g;a.push(v,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xt extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vu extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wu extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zs extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Xu extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ar=new ot,Vo=new L,Wo=new L;class hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),Wo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wo),t.updateMatrixWorld(),Ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qu extends hc{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ti*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xo extends Zs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uc extends $l{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yu extends hc{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Aa extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $u extends Zs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ku extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Zu extends jl{constructor(e=10,t=10,n=4473924,i=8947848){n=new ke(n),i=new ke(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=f===r?n:i;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const h=new pt;h.setAttribute("position",new Qe(l,3)),h.setAttribute("color",new Qe(c,3));const u=new za({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function qo(s,e,t,n){const i=Ju(n);switch(t){case Il:return s*e;case Nl:return s*e;case Ul:return s*e*2;case Fl:return s*e/i.components*i.byteLength;case Na:return s*e/i.components*i.byteLength;case Ol:return s*e*2/i.components*i.byteLength;case Ua:return s*e*2/i.components*i.byteLength;case Dl:return s*e*3/i.components*i.byteLength;case Jt:return s*e*4/i.components*i.byteLength;case Fa:return s*e*4/i.components*i.byteLength;case Us:case Fs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Os:case Bs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jr:case Qr:return Math.max(s,16)*Math.max(e,8)/4;case Zr:case jr:return Math.max(s,8)*Math.max(e,8)/2;case ea:case ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ks:case va:case _a:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bl:case ya:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xa:case Ma:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ju(s){switch(s){case mn:case Rl:return{byteLength:1,components:1};case Yi:case Ll:case ji:return{byteLength:2,components:1};case Ia:case Da:return{byteLength:2,components:4};case qn:case Pa:case dn:return{byteLength:4,components:1};case Pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ju(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ff=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Qu,alphahash_pars_fragment:ed,alphamap_fragment:td,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:ad,batching_pars_vertex:od,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:vd,color_fragment:_d,color_pars_fragment:yd,color_pars_vertex:xd,color_vertex:Md,common:Sd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:bd,displacementmap_pars_vertex:Td,displacementmap_vertex:wd,emissivemap_fragment:Ad,emissivemap_pars_fragment:Cd,colorspace_fragment:Rd,colorspace_pars_fragment:Ld,envmap_fragment:Pd,envmap_common_pars_fragment:Id,envmap_pars_fragment:Dd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:Bd,fog_pars_fragment:kd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:zd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:$d,lights_phong_pars_fragment:Kd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Jd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:ef,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:af,map_pars_fragment:of,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:uf,morphinstance_vertex:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:vf,normal_fragment_maps:_f,normal_pars_fragment:yf,normal_pars_vertex:xf,normal_vertex:Mf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:wf,opaque_fragment:Af,packing:Cf,premultiplied_alpha_fragment:Rf,project_vertex:Lf,dithering_fragment:Pf,dithering_pars_fragment:If,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Nf,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Of,shadowmask_pars_fragment:Bf,skinbase_vertex:kf,skinning_pars_vertex:Gf,skinning_vertex:zf,skinnormal_vertex:Hf,specularmap_fragment:Vf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:$f,uv_pars_fragment:Kf,uv_pars_vertex:Zf,uv_vertex:Jf,worldpos_vertex:jf,background_vert:Qf,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:hp,linedashed_vert:up,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:vp,meshmatcap_frag:_p,meshnormal_vert:yp,meshnormal_frag:xp,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:Ep,meshphysical_frag:bp,meshtoon_vert:Tp,meshtoon_frag:wp,points_vert:Ap,points_frag:Cp,shadow_vert:Rp,shadow_frag:Lp,sprite_vert:Pp,sprite_frag:Ip},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Qt={basic:{uniforms:Rt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Rt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Rt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Rt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Rt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Rt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Rt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Rt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Rt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Rt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Rt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Rt([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Rt([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Qt.physical={uniforms:Rt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ps={r:0,b:0,g:0},Un=new kt,Dp=new ot;function Np(s,e,t,n,i,r,a){const o=new ke(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function v(S){let _=!1;const P=g(S);P===null?p(o,l):P&&P.isColor&&(p(P,1),_=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,_){const P=g(_);P&&(P.isCubeTexture||P.mapping===$s)?(h===void 0&&(h=new be(new Je(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:wi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Un.copy(_.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dp.makeRotationFromEuler(Un)),h.material.toneMapped=je.getTransfer(P.colorSpace)!==st,(u!==P||f!==P.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=P,f=P.version,d=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new be(new Ri(2,2),new An({name:"BackgroundMaterial",uniforms:wi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=je.getTransfer(P.colorSpace)!==st,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||f!==P.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=P,f=P.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,_){S.getRGB(Ps,Yl(s)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,_,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m,dispose:b}}function Up(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(x,R,G,O,H){let Y=!1;const V=u(O,G,R);r!==V&&(r=V,c(r.object)),Y=d(x,O,G,H),Y&&g(x,O,G,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(x,R,G,O),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,R,G){const O=G.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let Y=H[R.id];Y===void 0&&(Y={},H[R.id]=Y);let V=Y[O];return V===void 0&&(V=f(l()),Y[O]=V),V}function f(x){const R=[],G=[],O=[];for(let H=0;H<t;H++)R[H]=0,G[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,R,G,O){const H=r.attributes,Y=R.attributes;let V=0;const Z=G.getAttributes();for(const z in Z)if(Z[z].location>=0){const de=H[z];let ve=Y[z];if(ve===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor)),de===void 0||de.attribute!==ve||ve&&de.data!==ve.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(x,R,G,O){const H={},Y=R.attributes;let V=0;const Z=G.getAttributes();for(const z in Z)if(Z[z].location>=0){let de=Y[z];de===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));const ve={};ve.attribute=de,de&&de.data&&(ve.data=de.data),H[z]=ve,V++}r.attributes=H,r.attributesNum=V,r.index=O}function v(){const x=r.newAttributes;for(let R=0,G=x.length;R<G;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const G=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;G[x]=1,O[x]===0&&(s.enableVertexAttribArray(x),O[x]=1),H[x]!==R&&(s.vertexAttribDivisor(x,R),H[x]=R)}function b(){const x=r.newAttributes,R=r.enabledAttributes;for(let G=0,O=R.length;G<O;G++)R[G]!==x[G]&&(s.disableVertexAttribArray(G),R[G]=0)}function S(x,R,G,O,H,Y,V){V===!0?s.vertexAttribIPointer(x,R,G,H,Y):s.vertexAttribPointer(x,R,G,O,H,Y)}function _(x,R,G,O){v();const H=O.attributes,Y=G.getAttributes(),V=R.defaultAttributeValues;for(const Z in Y){const z=Y[Z];if(z.location>=0){let oe=H[Z];if(oe===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){const de=oe.normalized,ve=oe.itemSize,Ue=e.get(oe);if(Ue===void 0)continue;const Xe=Ue.buffer,X=Ue.type,ie=Ue.bytesPerElement,xe=X===s.INT||X===s.UNSIGNED_INT||oe.gpuType===Pa;if(oe.isInterleavedBufferAttribute){const se=oe.data,Ce=se.stride,Ve=oe.offset;if(se.isInstancedInterleavedBuffer){for(let Te=0;Te<z.locationSize;Te++)p(z.location+Te,se.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Te=0;Te<z.locationSize;Te++)m(z.location+Te);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let Te=0;Te<z.locationSize;Te++)S(z.location+Te,ve/z.locationSize,X,de,Ce*ie,(Ve+ve/z.locationSize*Te)*ie,xe)}else{if(oe.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)p(z.location+se,oe.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let se=0;se<z.locationSize;se++)S(z.location+se,ve/z.locationSize,X,de,ve*ie,ve/z.locationSize*se*ie,xe)}}else if(V!==void 0){const de=V[Z];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(z.location,de);break;case 3:s.vertexAttrib3fv(z.location,de);break;case 4:s.vertexAttrib4fv(z.location,de);break;default:s.vertexAttrib1fv(z.location,de)}}}}b()}function P(){I();for(const x in n){const R=n[x];for(const G in R){const O=R[G];for(const H in O)h(O[H].object),delete O[H];delete R[G]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const G in R){const O=R[G];for(const H in O)h(O[H].object),delete O[H];delete R[G]}delete n[x.id]}function C(x){for(const R in n){const G=n[R];if(G[x.id]===void 0)continue;const O=G[x.id];for(const H in O)h(O[H].object),delete O[H];delete G[x.id]}}function I(){E(),a=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Fp(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Op(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Jt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!I)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:P,maxSamples:A}}function Bp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new kn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,S=b*4;let _=p.clippingState||null;l.value=_,_=h(g,f,S,d);for(let P=0;P!==S;++P)_[P]=t[P];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=d;S!==v;++S,_+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function kp(s){let e=new WeakMap;function t(a,o){return o===qr?a.mapping=xi:o===Yr&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qr||o===Yr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new iu(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const mi=4,Yo=[.125,.215,.35,.446,.526,.582],Hn=20,Cr=new uc,$o=new ke;let Rr=null,Lr=0,Pr=0,Ir=!1;const Gn=(1+Math.sqrt(5))/2,fi=1/Gn,Ko=[new L(-Gn,fi,0),new L(Gn,fi,0),new L(-fi,0,Gn),new L(fi,0,Gn),new L(0,Gn,-fi),new L(0,Gn,fi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Gp=new L;class Zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Gp}=r;Rr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rr,Lr,Pr),this._renderer.xr.enabled=Ir,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ji,format:Jt,colorSpace:bi,depthBuffer:!1},i=Jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zp(r)),this._blurMaterial=Hp(r,e,t)}return i}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,i,r){const l=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor($o),u.toneMapping=bn,u.autoClear=!1;const g=new Lt({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),v=new be(new Je,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy($o),m=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const _=this._cubeSize;Is(i,S*_,b>2?_:0,_,_),u.setRenderTarget(i),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ko[(i-r-1)%Ko.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Hn;m>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const p=[];let b=0;for(let C=0;C<Hn;++C){const I=C/v,E=Math.exp(-I*I/2);p.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const _=this._sizeLods[i],P=3*_*(i>S-mi?i-S+mi:0),A=4*(this._cubeSize-_);Is(t,P,A,3*_,2*_),l.setRenderTarget(t),l.render(u,Cr)}}function zp(s){const e=[],t=[],n=[];let i=s;const r=s-mi+1+Yo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-mi?l=Yo[a-s+mi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*d),S=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,I=A>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];b.set(E,v*g*A),S.set(f,m*g*A);const x=[A,A,A,A,A,A];_.set(x,p*g*A)}const P=new pt;P.setAttribute("position",new wt(b,v)),P.setAttribute("uv",new wt(S,m)),P.setAttribute("faceIndex",new wt(_,p)),e.push(P),i>mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jo(s,e,t){const n=new Yn(s,e,t);return n.texture.mapping=$s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hp(s,e,t){const n=new Float32Array(Hn),i=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function jo(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Qo(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qr||l===Yr,h=l===xi||l===Mi;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Zo(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Zo(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xp(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let S=0,_=b.length;S<_;S+=3){const P=b[S+0],A=b[S+1],C=b[S+2];f.push(P,A,A,C,C,P)}}else if(g!==void 0){const b=g.array;v=g.version;for(let S=0,_=b.length/3-1;S<_;S+=3){const P=S+0,A=S+1,C=S+2;f.push(P,A,A,C,C,P)}}else return;const m=new(zl(f)?ql:Xl)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function qp(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*v[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Yp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $p(s,e,t){const n=new WeakMap,i=new dt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let P=o.attributes.position.count*_,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*A*4*u),I=new Hl(C,P,A,u);I.type=dn,I.needsUpdate=!0;const E=_*4;for(let R=0;R<u;R++){const G=p[R],O=b[R],H=S[R],Y=P*A*4*R;for(let V=0;V<G.count;V++){const Z=V*E;g===!0&&(i.fromBufferAttribute(G,V),C[Y+Z+0]=i.x,C[Y+Z+1]=i.y,C[Y+Z+2]=i.z,C[Y+Z+3]=0),v===!0&&(i.fromBufferAttribute(O,V),C[Y+Z+4]=i.x,C[Y+Z+5]=i.y,C[Y+Z+6]=i.z,C[Y+Z+7]=0),m===!0&&(i.fromBufferAttribute(H,V),C[Y+Z+8]=i.x,C[Y+Z+9]=i.y,C[Y+Z+10]=i.z,C[Y+Z+11]=H.itemSize===4?i.w:1)}}f={count:u,texture:I,size:new re(P,A)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Kp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const fc=new Pt,el=new tc(1,1),pc=new Hl,mc=new Gh,gc=new Kl,tl=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function Li(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tl[i];if(r===void 0&&(r=new Float32Array(i),tl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Js(s,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function em(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;rl.set(n),s.uniformMatrix2fv(this.addr,!1,rl),_t(t,n)}}function tm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;sl.set(n),s.uniformMatrix3fv(this.addr,!1,sl),_t(t,n)}}function nm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;il.set(n),s.uniformMatrix4fv(this.addr,!1,il),_t(t,n)}}function im(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function om(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function um(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(el.compareFunction=Gl,r=el):r=fc,t.setTexture2D(e||r,i)}function dm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mc,i)}function fm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gc,i)}function pm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pc,i)}function mm(s){switch(s){case 5126:return Zp;case 35664:return Jp;case 35665:return jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(s,e){s.uniform1fv(this.addr,e)}function vm(s,e){const t=Li(e,this.size,2);s.uniform2fv(this.addr,t)}function _m(s,e){const t=Li(e,this.size,3);s.uniform3fv(this.addr,t)}function ym(s,e){const t=Li(e,this.size,4);s.uniform4fv(this.addr,t)}function xm(s,e){const t=Li(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Mm(s,e){const t=Li(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sm(s,e){const t=Li(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Em(s,e){s.uniform1iv(this.addr,e)}function bm(s,e){s.uniform2iv(this.addr,e)}function Tm(s,e){s.uniform3iv(this.addr,e)}function wm(s,e){s.uniform4iv(this.addr,e)}function Am(s,e){s.uniform1uiv(this.addr,e)}function Cm(s,e){s.uniform2uiv(this.addr,e)}function Rm(s,e){s.uniform3uiv(this.addr,e)}function Lm(s,e){s.uniform4uiv(this.addr,e)}function Pm(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||fc,r[a])}function Im(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||mc,r[a])}function Dm(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gc,r[a])}function Nm(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||pc,r[a])}function Um(s){switch(s){case 5126:return gm;case 35664:return vm;case 35665:return _m;case 35666:return ym;case 35674:return xm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return Em;case 35667:case 35671:return bm;case 35668:case 35672:return Tm;case 35669:case 35673:return wm;case 5125:return Am;case 36294:return Cm;case 36295:return Rm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Nm}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Um(t.type)}}class Bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Dr=/(\w+)(\])?(\[|\.)?/g;function al(s,e){s.seq.push(e),s.map[e.id]=e}function km(s,e,t){const n=s.name,i=n.length;for(Dr.lastIndex=0;;){const r=Dr.exec(n),a=Dr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){al(t,c===void 0?new Fm(o,s,e):new Om(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Bm(o),al(t,u)),t=u}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);km(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ol(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Gm=37297;let zm=0;function Hm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ll=new Be;function Vm(s){je._getMatrix(ll,je.workingColorSpace,s);const e=`mat3( ${ll.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case zs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Hm(s.getShaderSource(e),a)}else return i}function Wm(s,e){const t=Vm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xm(s,e){let t;switch(e){case jc:t="Linear";break;case Qc:t="Reinhard";break;case eh:t="Cineon";break;case Al:t="ACESFilmic";break;case nh:t="AgX";break;case ih:t="Neutral";break;case th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ds=new L;function qm(){je.getLuminanceCoefficients(Ds);const s=Ds.x.toFixed(4),e=Ds.y.toFixed(4),t=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function $m(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Km(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Gi(s){return s!==""}function hl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(s){return s.replace(Zm,jm)}const Jm=new Map;function jm(s,e){let t=ze[e];if(t===void 0){const n=Jm.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ca(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(s){return s.replace(Qm,eg)}function eg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case Mi:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function sg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Zc:e="ENVMAP_BLENDING_MIX";break;case Jc:e="ENVMAP_BLENDING_ADD";break}return e}function rg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ag(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tg(t),c=ng(t),h=ig(t),u=sg(t),f=rg(t),d=Ym(t),g=$m(r),v=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),p.length>0&&(p+=`
`)):(m=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),p=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?ze.tonemapping_pars_fragment:"",t.toneMapping!==bn?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Ca(a),a=hl(a,t),a=ul(a,t),o=Ca(o),o=hl(o,t),o=ul(o,t),a=dl(a),o=dl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+a,_=b+p+o,P=ol(i,i.VERTEX_SHADER,S),A=ol(i,i.FRAGMENT_SHADER,_);i.attachShader(v,P),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(R){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(P).trim(),H=i.getShaderInfoLog(A).trim();let Y=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,P,A);else{const Z=cl(i,P,"vertex"),z=cl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+Z+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||H==="")&&(V=!1);V&&(R.diagnostics={runnable:Y,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(P),i.deleteShader(A),I=new Gs(i,v),E=Km(i,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,Gm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}let og=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cg(e),t.set(e,n)),n}}class cg{constructor(e){this.id=og++,this.code=e,this.usedTimes=0}}function hg(s,e,t,n,i,r,a){const o=new Vl,l=new lg,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,R,G,O){const H=G.fog,Y=O.geometry,V=E.isMeshStandardMaterial?G.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),z=Z&&Z.mapping===$s?Z.image.height:null,oe=g[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=de!==void 0?de.length:0;let Ue=0;Y.morphAttributes.position!==void 0&&(Ue=1),Y.morphAttributes.normal!==void 0&&(Ue=2),Y.morphAttributes.color!==void 0&&(Ue=3);let Xe,X,ie,xe;if(oe){const nt=Qt[oe];Xe=nt.vertexShader,X=nt.fragmentShader}else Xe=E.vertexShader,X=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const se=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Ve=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,Ye=!!E.map,Q=!!E.matcap,J=!!Z,w=!!E.aoMap,we=!!E.lightMap,ee=!!E.bumpMap,ge=!!E.normalMap,ae=!!E.displacementMap,Pe=!!E.emissiveMap,fe=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,F=E.clearcoat>0,q=E.dispersion>0,j=E.iridescence>0,$=E.sheen>0,Ae=E.transmission>0,ce=y&&!!E.anisotropyMap,_e=F&&!!E.clearcoatMap,We=F&&!!E.clearcoatNormalMap,ne=F&&!!E.clearcoatRoughnessMap,Me=j&&!!E.iridescenceMap,Ie=j&&!!E.iridescenceThicknessMap,De=$&&!!E.sheenColorMap,Se=$&&!!E.sheenRoughnessMap,$e=!!E.specularMap,Ge=!!E.specularColorMap,at=!!E.specularIntensityMap,D=Ae&&!!E.transmissionMap,he=Ae&&!!E.thicknessMap,W=!!E.gradientMap,K=!!E.alphaMap,me=E.alphaTest>0,pe=!!E.alphaHash,Oe=!!E.extensions;let ht=bn;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ht=s.toneMapping);const St={shaderID:oe,shaderType:E.type,shaderName:E.name,vertexShader:Xe,fragmentShader:X,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&O.instanceColor!==null,instancingMorph:Ve&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:bi,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Q,envMap:J,envMapMode:J&&Z.mapping,envMapCubeUVHeight:z,aoMap:w,lightMap:we,bumpMap:ee,normalMap:ge,displacementMap:f&&ae,emissiveMap:Pe,normalMapObjectSpace:ge&&E.normalMapType===oh,normalMapTangentSpace:ge&&E.normalMapType===kl,metalnessMap:fe,roughnessMap:T,anisotropy:y,anisotropyMap:ce,clearcoat:F,clearcoatMap:_e,clearcoatNormalMap:We,clearcoatRoughnessMap:ne,dispersion:q,iridescence:j,iridescenceMap:Me,iridescenceThicknessMap:Ie,sheen:$,sheenColorMap:De,sheenRoughnessMap:Se,specularMap:$e,specularColorMap:Ge,specularIntensityMap:at,transmission:Ae,transmissionMap:D,thicknessMap:he,gradientMap:W,opaque:E.transparent===!1&&E.blending===gi&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:me,alphaHash:pe,combine:E.combine,mapUv:Ye&&v(E.map.channel),aoMapUv:w&&v(E.aoMap.channel),lightMapUv:we&&v(E.lightMap.channel),bumpMapUv:ee&&v(E.bumpMap.channel),normalMapUv:ge&&v(E.normalMap.channel),displacementMapUv:ae&&v(E.displacementMap.channel),emissiveMapUv:Pe&&v(E.emissiveMap.channel),metalnessMapUv:fe&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:ce&&v(E.anisotropyMap.channel),clearcoatMapUv:_e&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(E.sheenRoughnessMap.channel),specularMapUv:$e&&v(E.specularMap.channel),specularColorMapUv:Ge&&v(E.specularColorMap.channel),specularIntensityMapUv:at&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:he&&v(E.thicknessMap.channel),alphaMapUv:K&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Ye||K),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ce,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===st,decodeVideoTextureEmissive:Pe&&E.emissiveMap.isVideoTexture===!0&&je.getTransfer(E.emissiveMap.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nt,flipSided:E.side===Ut,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Oe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&E.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)x.push(R),x.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(b(x,E),S(x,E),x.push(s.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function S(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const x=g[E.type];let R;if(x){const G=Qt[x];R=Qh.clone(G.uniforms)}else R=E.uniforms;return R}function P(E,x){let R;for(let G=0,O=h.length;G<O;G++){const H=h[G];if(H.cacheKey===x){R=H,++R.usedTimes;break}}return R===void 0&&(R=new ag(s,x,E,r),h.push(R)),R}function A(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:I}}function ug(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function dg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ml(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||dg),n.length>1&&n.sort(f||pl),i.length>1&&i.sort(f||pl)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function fg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ml,s.set(n,[a])):i>=r.length?(a=new ml,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function pg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function mg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gg=0;function vg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _g(s){const e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new ot,a=new ot;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,b=0,S=0,_=0,P=0,A=0,C=0;c.sort(vg);for(let E=0,x=c.length;E<x;E++){const R=c[E],G=R.color,O=R.intensity,H=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=G.r*O,u+=G.g*O,f+=G.b*O;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],O);C++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=R.shadow.matrix,b++}n.directional[d]=V,d++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(G).multiplyScalar(O),V.distance=H,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[v]=V;const Z=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,Z.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[v]=Z.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=Y,_++}v++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(G).multiplyScalar(O),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const Z=R.shadow,z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(O),V.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==_||I.numSpotMaps!==P||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=_,I.numSpotMaps=P,I.numLightProbes=C,n.version=gg++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(S.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function gl(s){const e=new _g(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function yg(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new gl(s),e.set(i,[o])):r>=a.length?(o=new gl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sg(s,e,t){let n=new Ga;const i=new re,r=new re,a=new dt,o=new Vu({depthPacking:ah}),l=new Wu,c={},h=t.maxTextureSize,u={[Tn]:Ut,[Ut]:Tn,[Nt]:Nt},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:xg,fragmentShader:Mg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new be(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),G=s.state;G.setBlending(En),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=p!==un&&this.type===un,H=p===un&&this.type!==un;for(let Y=0,V=A.length;Y<V;Y++){const Z=A[Y],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const oe=z.getFrameExtents();if(i.multiply(oe),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,z.mapSize.y=r.y)),z.map===null||O===!0||H===!0){const ve=this.type!==un?{minFilter:jt,magFilter:jt}:{};z.map!==null&&z.map.dispose(),z.map=new Yn(i.x,i.y,ve),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const de=z.getViewportCount();for(let ve=0;ve<de;ve++){const Ue=z.getViewport(ve);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),G.viewport(a),z.updateMatrices(Z,ve),n=z.getFrustum(),_(C,I,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===un&&b(z,I),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,x,R)};function b(A,C){const I=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,I,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,I,d,v,null)}function S(A,C,I,E){let x=null;const R=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=x.uuid,O=C.uuid;let H=c[G];H===void 0&&(H={},c[G]=H);let Y=H[O];Y===void 0&&(Y=x.clone(),H[O]=Y,C.addEventListener("dispose",P)),x=Y}if(x.visible=C.visible,x.wireframe=C.wireframe,E===un?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=s.properties.get(x);G.light=I}return x}function _(A,C,I,E,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const O=e.update(A),H=A.material;if(Array.isArray(H)){const Y=O.groups;for(let V=0,Z=Y.length;V<Z;V++){const z=Y[V],oe=H[z.materialIndex];if(oe&&oe.visible){const de=S(A,oe,E,x);A.onBeforeShadow(s,A,C,I,O,de,z),s.renderBufferDirect(I,null,O,de,A,z),A.onAfterShadow(s,A,C,I,O,de,z)}}}else if(H.visible){const Y=S(A,H,E,x);A.onBeforeShadow(s,A,C,I,O,Y,null),s.renderBufferDirect(I,null,O,Y,A,null),A.onAfterShadow(s,A,C,I,O,Y,null)}}const G=A.children;for(let O=0,H=G.length;O<H;O++)_(G[O],C,I,E,x)}function P(A){A.target.removeEventListener("dispose",P);for(const I in c){const E=c[I],x=A.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Eg={[kr]:Gr,[zr]:Wr,[Hr]:Xr,[yi]:Vr,[Gr]:kr,[Wr]:zr,[Xr]:Hr,[Vr]:yi};function bg(s,e){function t(){let D=!1;const he=new dt;let W=null;const K=new dt(0,0,0,0);return{setMask:function(me){W!==me&&!D&&(s.colorMask(me,me,me,me),W=me)},setLocked:function(me){D=me},setClear:function(me,pe,Oe,ht,St){St===!0&&(me*=ht,pe*=ht,Oe*=ht),he.set(me,pe,Oe,ht),K.equals(he)===!1&&(s.clearColor(me,pe,Oe,ht),K.copy(he))},reset:function(){D=!1,W=null,K.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,W=null,K=null,me=null;return{setReversed:function(pe){if(he!==pe){const Oe=e.get("EXT_clip_control");he?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const ht=me;me=null,this.setClear(ht)}he=pe},getReversed:function(){return he},setTest:function(pe){pe?se(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(pe){W!==pe&&!D&&(s.depthMask(pe),W=pe)},setFunc:function(pe){if(he&&(pe=Eg[pe]),K!==pe){switch(pe){case kr:s.depthFunc(s.NEVER);break;case Gr:s.depthFunc(s.ALWAYS);break;case zr:s.depthFunc(s.LESS);break;case yi:s.depthFunc(s.LEQUAL);break;case Hr:s.depthFunc(s.EQUAL);break;case Vr:s.depthFunc(s.GEQUAL);break;case Wr:s.depthFunc(s.GREATER);break;case Xr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=pe}},setLocked:function(pe){D=pe},setClear:function(pe){me!==pe&&(he&&(pe=1-pe),s.clearDepth(pe),me=pe)},reset:function(){D=!1,W=null,K=null,me=null,he=!1}}}function i(){let D=!1,he=null,W=null,K=null,me=null,pe=null,Oe=null,ht=null,St=null;return{setTest:function(nt){D||(nt?se(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(nt){he!==nt&&!D&&(s.stencilMask(nt),he=nt)},setFunc:function(nt,Xt,rn){(W!==nt||K!==Xt||me!==rn)&&(s.stencilFunc(nt,Xt,rn),W=nt,K=Xt,me=rn)},setOp:function(nt,Xt,rn){(pe!==nt||Oe!==Xt||ht!==rn)&&(s.stencilOp(nt,Xt,rn),pe=nt,Oe=Xt,ht=rn)},setLocked:function(nt){D=nt},setClear:function(nt){St!==nt&&(s.clearStencil(nt),St=nt)},reset:function(){D=!1,he=null,W=null,K=null,me=null,pe=null,Oe=null,ht=null,St=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,S=null,_=null,P=null,A=null,C=new ke(0,0,0),I=0,E=!1,x=null,R=null,G=null,O=null,H=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=Z>=2);let oe=null,de={};const ve=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Xe=new dt().fromArray(ve),X=new dt().fromArray(Ue);function ie(D,he,W,K){const me=new Uint8Array(4),pe=s.createTexture();s.bindTexture(D,pe),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<W;Oe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(he+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return pe}const xe={};xe[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(s.DEPTH_TEST),a.setFunc(yi),ee(!1),ge(ao),se(s.CULL_FACE),w(En);function se(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ce(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ve(D,he){return u[D]!==he?(s.bindFramebuffer(D,he),u[D]=he,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=he),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(D,he){let W=d,K=!1;if(D){W=f.get(he),W===void 0&&(W=[],f.set(he,W));const me=D.textures;if(W.length!==me.length||W[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Oe=me.length;pe<Oe;pe++)W[pe]=s.COLOR_ATTACHMENT0+pe;W.length=me.length,K=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,K=!0);K&&s.drawBuffers(W)}function Ye(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Q={[zn]:s.FUNC_ADD,[Dc]:s.FUNC_SUBTRACT,[Nc]:s.FUNC_REVERSE_SUBTRACT};Q[Uc]=s.MIN,Q[Fc]=s.MAX;const J={[Oc]:s.ZERO,[Bc]:s.ONE,[kc]:s.SRC_COLOR,[Or]:s.SRC_ALPHA,[Xc]:s.SRC_ALPHA_SATURATE,[Vc]:s.DST_COLOR,[zc]:s.DST_ALPHA,[Gc]:s.ONE_MINUS_SRC_COLOR,[Br]:s.ONE_MINUS_SRC_ALPHA,[Wc]:s.ONE_MINUS_DST_COLOR,[Hc]:s.ONE_MINUS_DST_ALPHA,[qc]:s.CONSTANT_COLOR,[Yc]:s.ONE_MINUS_CONSTANT_COLOR,[$c]:s.CONSTANT_ALPHA,[Kc]:s.ONE_MINUS_CONSTANT_ALPHA};function w(D,he,W,K,me,pe,Oe,ht,St,nt){if(D===En){v===!0&&(Ce(s.BLEND),v=!1);return}if(v===!1&&(se(s.BLEND),v=!0),D!==Ic){if(D!==m||nt!==E){if((p!==zn||_!==zn)&&(s.blendEquation(s.FUNC_ADD),p=zn,_=zn),nt)switch(D){case gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qi:s.blendFunc(s.ONE,s.ONE);break;case oo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case oo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,P=null,A=null,C.set(0,0,0),I=0,m=D,E=nt}return}me=me||he,pe=pe||W,Oe=Oe||K,(he!==p||me!==_)&&(s.blendEquationSeparate(Q[he],Q[me]),p=he,_=me),(W!==b||K!==S||pe!==P||Oe!==A)&&(s.blendFuncSeparate(J[W],J[K],J[pe],J[Oe]),b=W,S=K,P=pe,A=Oe),(ht.equals(C)===!1||St!==I)&&(s.blendColor(ht.r,ht.g,ht.b,St),C.copy(ht),I=St),m=D,E=!1}function we(D,he){D.side===Nt?Ce(s.CULL_FACE):se(s.CULL_FACE);let W=D.side===Ut;he&&(W=!W),ee(W),D.blending===gi&&D.transparent===!1?w(En):w(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function ge(D){D!==Lc?(se(s.CULL_FACE),D!==R&&(D===ao?s.cullFace(s.BACK):D===Pc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),R=D}function ae(D){D!==G&&(V&&s.lineWidth(D),G=D)}function Pe(D,he,W){D?(se(s.POLYGON_OFFSET_FILL),(O!==he||H!==W)&&(s.polygonOffset(he,W),O=he,H=W)):Ce(s.POLYGON_OFFSET_FILL)}function fe(D){D?se(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+Y-1),oe!==D&&(s.activeTexture(D),oe=D)}function y(D,he,W){W===void 0&&(oe===null?W=s.TEXTURE0+Y-1:W=oe);let K=de[W];K===void 0&&(K={type:void 0,texture:void 0},de[W]=K),(K.type!==D||K.texture!==he)&&(oe!==W&&(s.activeTexture(W),oe=W),s.bindTexture(D,he||xe[D]),K.type=D,K.texture=he)}function F(){const D=de[oe];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Xe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function Se(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function $e(D,he){let W=c.get(he);W===void 0&&(W=new WeakMap,c.set(he,W));let K=W.get(D);K===void 0&&(K=s.getUniformBlockIndex(he,D.name),W.set(D,K))}function Ge(D,he){const K=c.get(he).get(D);l.get(he)!==K&&(s.uniformBlockBinding(he,K,D.__bindingPointIndex),l.set(he,K))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},oe=null,de={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,S=null,_=null,P=null,A=null,C=new ke(0,0,0),I=0,E=!1,x=null,R=null,G=null,O=null,H=null,Xe.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Ce,bindFramebuffer:Ve,drawBuffers:Te,useProgram:Ye,setBlending:w,setMaterial:we,setFlipSided:ee,setCullFace:ge,setLineWidth:ae,setPolygonOffset:Pe,setScissorTest:fe,activeTexture:T,bindTexture:y,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:Me,texImage3D:Ie,updateUBOMapping:$e,uniformBlockBinding:Ge,texStorage2D:We,texStorage3D:ne,texSubImage2D:$,texSubImage3D:Ae,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:De,viewport:Se,reset:at}}function Tg(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):Vs("canvas")}function v(T,y,F){let q=1;const j=fe(T);if((j.width>F||j.height>F)&&(q=F/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(q*j.width),Ae=Math.floor(q*j.height);u===void 0&&(u=g($,Ae));const ce=y?g($,Ae):u;return ce.width=$,ce.height=Ae,ce.getContext("2d").drawImage(T,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Ae+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(T,y,F,q,j=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=y;if(y===s.RED&&(F===s.FLOAT&&($=s.R32F),F===s.HALF_FLOAT&&($=s.R16F),F===s.UNSIGNED_BYTE&&($=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.R8UI),F===s.UNSIGNED_SHORT&&($=s.R16UI),F===s.UNSIGNED_INT&&($=s.R32UI),F===s.BYTE&&($=s.R8I),F===s.SHORT&&($=s.R16I),F===s.INT&&($=s.R32I)),y===s.RG&&(F===s.FLOAT&&($=s.RG32F),F===s.HALF_FLOAT&&($=s.RG16F),F===s.UNSIGNED_BYTE&&($=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RG8UI),F===s.UNSIGNED_SHORT&&($=s.RG16UI),F===s.UNSIGNED_INT&&($=s.RG32UI),F===s.BYTE&&($=s.RG8I),F===s.SHORT&&($=s.RG16I),F===s.INT&&($=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RGB8UI),F===s.UNSIGNED_SHORT&&($=s.RGB16UI),F===s.UNSIGNED_INT&&($=s.RGB32UI),F===s.BYTE&&($=s.RGB8I),F===s.SHORT&&($=s.RGB16I),F===s.INT&&($=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RGBA8UI),F===s.UNSIGNED_SHORT&&($=s.RGBA16UI),F===s.UNSIGNED_INT&&($=s.RGBA32UI),F===s.BYTE&&($=s.RGBA8I),F===s.SHORT&&($=s.RGBA16I),F===s.INT&&($=s.RGBA32I)),y===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),y===s.RGBA){const Ae=j?zs:je.getTransfer(q);F===s.FLOAT&&($=s.RGBA32F),F===s.HALF_FLOAT&&($=s.RGBA16F),F===s.UNSIGNED_BYTE&&($=Ae===st?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(T,y){let F;return T?y===null||y===qn||y===Si?F=s.DEPTH24_STENCIL8:y===dn?F=s.DEPTH32F_STENCIL8:y===Yi&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qn||y===Si?F=s.DEPTH_COMPONENT24:y===dn?F=s.DEPTH_COMPONENT32F:y===Yi&&(F=s.DEPTH_COMPONENT16),F}function P(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&h.delete(y)}function C(T){const y=T.target;y.removeEventListener("dispose",C),x(y)}function I(T){const y=n.get(T);if(y.__webglInit===void 0)return;const F=T.source,q=f.get(F);if(q){const j=q[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(T),Object.keys(q).length===0&&f.delete(F)}n.remove(T)}function E(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const F=T.source,q=f.get(F);delete q[y.__cacheKey],a.memory.textures--}function x(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let j=0;j<y.__webglFramebuffer[q].length;j++)s.deleteFramebuffer(y.__webglFramebuffer[q][j]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=T.textures;for(let q=0,j=F.length;q<j;q++){const $=n.get(F[q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(T)}let R=0;function G(){R=0}function O(){const T=R;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function H(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Y(T,y){const F=n.get(T);if(T.isVideoTexture&&ae(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,T,y);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function V(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){X(F,T,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function Z(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){X(F,T,y);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function z(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){ie(F,T,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}const oe={[$r]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Kr]:s.MIRRORED_REPEAT},de={[jt]:s.NEAREST,[sh]:s.NEAREST_MIPMAP_NEAREST,[is]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[er]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},ve={[lh]:s.NEVER,[ph]:s.ALWAYS,[ch]:s.LESS,[Gl]:s.LEQUAL,[hh]:s.EQUAL,[fh]:s.GEQUAL,[uh]:s.GREATER,[dh]:s.NOTEQUAL};function Ue(T,y){if(y.type===dn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===en||y.magFilter===er||y.magFilter===is||y.magFilter===Wn||y.minFilter===en||y.minFilter===er||y.minFilter===is||y.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,oe[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,oe[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,oe[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,de[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===jt||y.minFilter!==is&&y.minFilter!==Wn||y.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(T,y){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const q=y.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const $=H(y);if($!==T.__cacheKey){j[$]===void 0&&(j[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[$].usedTimes++;const Ae=j[T.__cacheKey];Ae!==void 0&&(j[T.__cacheKey].usedTimes--,Ae.usedTimes===0&&E(y)),T.__cacheKey=$,T.__webglTexture=j[$].texture}return F}function X(T,y,F){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);const j=Xe(T,y),$=y.source;t.bindTexture(q,T.__webglTexture,s.TEXTURE0+F);const Ae=n.get($);if($.version!==Ae.__version||j===!0){t.activeTexture(s.TEXTURE0+F);const ce=je.getPrimaries(je.workingColorSpace),_e=y.colorSpace===Sn?null:je.getPrimaries(y.colorSpace),We=y.colorSpace===Sn||ce===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ne=v(y.image,!1,i.maxTextureSize);ne=Pe(y,ne);const Me=r.convert(y.format,y.colorSpace),Ie=r.convert(y.type);let De=S(y.internalFormat,Me,Ie,y.colorSpace,y.isVideoTexture);Ue(q,y);let Se;const $e=y.mipmaps,Ge=y.isVideoTexture!==!0,at=Ae.__version===void 0||j===!0,D=$.dataReady,he=P(y,ne);if(y.isDepthTexture)De=_(y.format===Ei,y.type),at&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,De,ne.width,ne.height,0,Me,Ie,null));else if(y.isDataTexture)if($e.length>0){Ge&&at&&t.texStorage2D(s.TEXTURE_2D,he,De,$e[0].width,$e[0].height);for(let W=0,K=$e.length;W<K;W++)Se=$e[W],Ge?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,Se.width,Se.height,Me,Ie,Se.data):t.texImage2D(s.TEXTURE_2D,W,De,Se.width,Se.height,0,Me,Ie,Se.data);y.generateMipmaps=!1}else Ge?(at&&t.texStorage2D(s.TEXTURE_2D,he,De,ne.width,ne.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,Me,Ie,ne.data)):t.texImage2D(s.TEXTURE_2D,0,De,ne.width,ne.height,0,Me,Ie,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,De,$e[0].width,$e[0].height,ne.depth);for(let W=0,K=$e.length;W<K;W++)if(Se=$e[W],y.format!==Jt)if(Me!==null)if(Ge){if(D)if(y.layerUpdates.size>0){const me=qo(Se.width,Se.height,y.format,y.type);for(const pe of y.layerUpdates){const Oe=Se.data.subarray(pe*me/Se.data.BYTES_PER_ELEMENT,(pe+1)*me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,pe,Se.width,Se.height,1,Me,Oe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,Se.width,Se.height,ne.depth,Me,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,De,Se.width,Se.height,ne.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,Se.width,Se.height,ne.depth,Me,Ie,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,De,Se.width,Se.height,ne.depth,0,Me,Ie,Se.data)}else{Ge&&at&&t.texStorage2D(s.TEXTURE_2D,he,De,$e[0].width,$e[0].height);for(let W=0,K=$e.length;W<K;W++)Se=$e[W],y.format!==Jt?Me!==null?Ge?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,W,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,Se.width,Se.height,Me,Ie,Se.data):t.texImage2D(s.TEXTURE_2D,W,De,Se.width,Se.height,0,Me,Ie,Se.data)}else if(y.isDataArrayTexture)if(Ge){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,De,ne.width,ne.height,ne.depth),D)if(y.layerUpdates.size>0){const W=qo(ne.width,ne.height,y.format,y.type);for(const K of y.layerUpdates){const me=ne.data.subarray(K*W/ne.data.BYTES_PER_ELEMENT,(K+1)*W/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,Me,Ie,me)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Me,Ie,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,Me,Ie,ne.data);else if(y.isData3DTexture)Ge?(at&&t.texStorage3D(s.TEXTURE_3D,he,De,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Me,Ie,ne.data)):t.texImage3D(s.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,Me,Ie,ne.data);else if(y.isFramebufferTexture){if(at)if(Ge)t.texStorage2D(s.TEXTURE_2D,he,De,ne.width,ne.height);else{let W=ne.width,K=ne.height;for(let me=0;me<he;me++)t.texImage2D(s.TEXTURE_2D,me,De,W,K,0,Me,Ie,null),W>>=1,K>>=1}}else if($e.length>0){if(Ge&&at){const W=fe($e[0]);t.texStorage2D(s.TEXTURE_2D,he,De,W.width,W.height)}for(let W=0,K=$e.length;W<K;W++)Se=$e[W],Ge?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,Me,Ie,Se):t.texImage2D(s.TEXTURE_2D,W,De,Me,Ie,Se);y.generateMipmaps=!1}else if(Ge){if(at){const W=fe(ne);t.texStorage2D(s.TEXTURE_2D,he,De,W.width,W.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Ie,ne)}else t.texImage2D(s.TEXTURE_2D,0,De,Me,Ie,ne);m(y)&&p(q),Ae.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ie(T,y,F){if(y.image.length!==6)return;const q=Xe(T,y),j=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);const $=n.get(j);if(j.version!==$.__version||q===!0){t.activeTexture(s.TEXTURE0+F);const Ae=je.getPrimaries(je.workingColorSpace),ce=y.colorSpace===Sn?null:je.getPrimaries(y.colorSpace),_e=y.colorSpace===Sn||Ae===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const We=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let K=0;K<6;K++)!We&&!ne?Me[K]=v(y.image[K],!0,i.maxCubemapSize):Me[K]=ne?y.image[K].image:y.image[K],Me[K]=Pe(y,Me[K]);const Ie=Me[0],De=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),$e=S(y.internalFormat,De,Se,y.colorSpace),Ge=y.isVideoTexture!==!0,at=$.__version===void 0||q===!0,D=j.dataReady;let he=P(y,Ie);Ue(s.TEXTURE_CUBE_MAP,y);let W;if(We){Ge&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,$e,Ie.width,Ie.height);for(let K=0;K<6;K++){W=Me[K].mipmaps;for(let me=0;me<W.length;me++){const pe=W[me];y.format!==Jt?De!==null?Ge?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,pe.width,pe.height,De,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,$e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,pe.width,pe.height,De,Se,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,$e,pe.width,pe.height,0,De,Se,pe.data)}}}else{if(W=y.mipmaps,Ge&&at){W.length>0&&he++;const K=fe(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,$e,K.width,K.height)}for(let K=0;K<6;K++)if(ne){Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me[K].width,Me[K].height,De,Se,Me[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,Me[K].width,Me[K].height,0,De,Se,Me[K].data);for(let me=0;me<W.length;me++){const Oe=W[me].image[K].image;Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Oe.width,Oe.height,De,Se,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,$e,Oe.width,Oe.height,0,De,Se,Oe.data)}}else{Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,De,Se,Me[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,De,Se,Me[K]);for(let me=0;me<W.length;me++){const pe=W[me];Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,De,Se,pe.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,$e,De,Se,pe.image[K])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),$.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function xe(T,y,F,q,j,$){const Ae=r.convert(F.format,F.colorSpace),ce=r.convert(F.type),_e=S(F.internalFormat,Ae,ce,F.colorSpace),We=n.get(y),ne=n.get(F);if(ne.__renderTarget=y,!We.__hasExternalTextures){const Me=Math.max(1,y.width>>$),Ie=Math.max(1,y.height>>$);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,$,_e,Me,Ie,y.depth,0,Ae,ce,null):t.texImage2D(j,$,_e,Me,Ie,0,Ae,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),ge(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,j,ne.__webglTexture,0,ee(y)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,j,ne.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(T,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const q=y.depthTexture,j=q&&q.isDepthTexture?q.type:null,$=_(y.stencilBuffer,j),Ae=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=ee(y);ge(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,$,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,T)}else{const q=y.textures;for(let j=0;j<q.length;j++){const $=q[j],Ae=r.convert($.format,$.colorSpace),ce=r.convert($.type),_e=S($.internalFormat,Ae,ce,$.colorSpace),We=ee(y);F&&ge(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,_e,y.width,y.height):ge(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,_e,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,_e,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const j=q.__webglTexture,$=ee(y);if(y.depthTexture.format===vi)ge(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(y.depthTexture.format===Ei)ge(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ve(T){const y=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(y.__webglFramebuffer,T)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),se(y.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),se(y.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,j)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(T,y,F){const q=n.get(T);y!==void 0&&xe(q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ve(T)}function Ye(T){const y=T.texture,F=n.get(T),q=n.get(y);T.addEventListener("dispose",C);const j=T.textures,$=T.isWebGLCubeRenderTarget===!0,Ae=j.length>1;if(Ae||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let _e=0;_e<y.mipmaps.length;_e++)F.__webglFramebuffer[ce][_e]=s.createFramebuffer()}else F.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)F.__webglFramebuffer[ce]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ce=0,_e=j.length;ce<_e;ce++){const We=n.get(j[ce]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&ge(T)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const _e=j[ce];F.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const We=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),Me=S(_e.internalFormat,We,ne,_e.colorSpace,T.isXRRenderTarget===!0),Ie=ee(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,Me,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),se(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)xe(F.__webglFramebuffer[ce][_e],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else xe(F.__webglFramebuffer[ce],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ce=0,_e=j.length;ce<_e;ce++){const We=j[ce],ne=n.get(We);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),Ue(s.TEXTURE_2D,We),xe(F.__webglFramebuffer,T,We,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),m(We)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,q.__webglTexture),Ue(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)xe(F.__webglFramebuffer[_e],T,y,s.COLOR_ATTACHMENT0,ce,_e);else xe(F.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,ce,0);m(y)&&p(ce),t.unbindTexture()}T.depthBuffer&&Ve(T)}function Q(T){const y=T.textures;for(let F=0,q=y.length;F<q;F++){const j=y[F];if(m(j)){const $=b(T),Ae=n.get(j).__webglTexture;t.bindTexture($,Ae),p($),t.unbindTexture()}}}const J=[],w=[];function we(T){if(T.samples>0){if(ge(T)===!1){const y=T.textures,F=T.width,q=T.height;let j=s.COLOR_BUFFER_BIT;const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(T),ce=y.length>1;if(ce)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const We=n.get(y[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,F,q,0,0,F,q,j,s.NEAREST),l===!0&&(J.length=0,w.length=0,J.push(s.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(J.push($),w.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,w)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const We=n.get(y[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ee(T){return Math.min(i.maxSamples,T.samples)}function ge(T){const y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ae(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Pe(T,y){const F=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==bi&&F!==Sn&&(je.getTransfer(F)===st?(q!==Jt||j!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function fe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=Te,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ge}function wg(s,e){function t(n,i=Sn){let r;const a=je.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===Ia)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return s.BYTE;if(n===Ll)return s.SHORT;if(n===Yi)return s.UNSIGNED_SHORT;if(n===Pa)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===ji)return s.HALF_FLOAT;if(n===Il)return s.ALPHA;if(n===Dl)return s.RGB;if(n===Jt)return s.RGBA;if(n===Nl)return s.LUMINANCE;if(n===Ul)return s.LUMINANCE_ALPHA;if(n===vi)return s.DEPTH_COMPONENT;if(n===Ei)return s.DEPTH_STENCIL;if(n===Fl)return s.RED;if(n===Na)return s.RED_INTEGER;if(n===Ol)return s.RG;if(n===Ua)return s.RG_INTEGER;if(n===Fa)return s.RGBA_INTEGER;if(n===Us||n===Fs||n===Os||n===Bs)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zr||n===Jr||n===jr||n===Qr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===ta)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===va||n===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ks)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===ya||n===xa||n===Ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:Ag,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends Ai{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new Rg,m=t.getContextAttributes();let p=null,b=null;const S=[],_=[],P=new re;let A=null;const C=new Dt;C.viewport=new dt;const I=new Dt;I.viewport=new dt;const E=[C,I],x=new Ku;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=S[X];return ie===void 0&&(ie=new xr,S[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=S[X];return ie===void 0&&(ie=new xr,S[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=S[X];return ie===void 0&&(ie=new xr,S[X]=ie),ie.getHandSpace()};function O(X){const ie=_.indexOf(X.inputSource);if(ie===-1)return;const xe=S[ie];xe!==void 0&&(xe.update(X.inputSource,X.frame,c||a),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Y);for(let X=0;X<S.length;X++){const ie=_[X];ie!==null&&(_[X]=null,S[X].disconnect(ie))}R=null,G=null,v.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,se=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?Ei:vi,se=m.stencil?Si:qn);const Ve={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Yn(f.textureWidth,f.textureHeight,{format:Jt,type:mn,depthTexture:new tc(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Yn(d.framebufferWidth,d.framebufferHeight,{format:Jt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(X){for(let ie=0;ie<X.removed.length;ie++){const xe=X.removed[ie],se=_.indexOf(xe);se>=0&&(_[se]=null,S[se].disconnect(xe))}for(let ie=0;ie<X.added.length;ie++){const xe=X.added[ie];let se=_.indexOf(xe);if(se===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=_.length){_.push(xe),se=Ve;break}else if(_[Ve]===null){_[Ve]=xe,se=Ve;break}if(se===-1)break}const Ce=S[se];Ce&&Ce.connect(xe)}}const V=new L,Z=new L;function z(X,ie,xe){V.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);const se=V.distanceTo(Z),Ce=ie.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,Te=Ce[14]/(Ce[10]-1),Ye=Ce[14]/(Ce[10]+1),Q=(Ce[9]+1)/Ce[5],J=(Ce[9]-1)/Ce[5],w=(Ce[8]-1)/Ce[0],we=(Ve[8]+1)/Ve[0],ee=Te*w,ge=Te*we,ae=se/(-w+we),Pe=ae*-w;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pe),X.translateZ(ae),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const fe=Te+ae,T=Ye+ae,y=ee-Pe,F=ge+(se-Pe),q=Q*Ye/T*fe,j=J*Ye/T*fe;X.projectionMatrix.makePerspective(y,F,q,j,fe,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function oe(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ie=X.near,xe=X.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),x.near=I.near=C.near=ie,x.far=I.far=C.far=xe,(R!==x.near||G!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,G=x.far),C.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,x.layers.mask=C.layers.mask|I.layers.mask;const se=X.parent,Ce=x.cameras;oe(x,se);for(let Ve=0;Ve<Ce.length;Ve++)oe(Ce[Ve],se);Ce.length===2?z(x,C,I):x.projectionMatrix.copy(C.projectionMatrix),de(X,x,se)};function de(X,ie,xe){xe===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ti*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ve=null;function Ue(X,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){const xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let se=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Te=0;Te<xe.length;Te++){const Ye=xe[Te];let Q=null;if(d!==null)Q=d.getViewport(Ye);else{const w=u.getViewSubImage(f,Ye);Q=w.viewport,Te===0&&(e.setRenderTargetTextures(b,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(b))}let J=E[Te];J===void 0&&(J=new Dt,J.layers.enable(Te),J.viewport=new dt,E[Te]=J),J.matrix.fromArray(Ye.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ye.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),Te===0&&(x.matrix.copy(J.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(J)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Te=u.getDepthInformation(xe[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,i.renderState)}}for(let xe=0;xe<S.length;xe++){const se=_[xe],Ce=S[xe];se!==null&&Ce!==void 0&&Ce.update(se,ie,c||a)}ve&&ve(X,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Xe=new dc;Xe.setAnimationLoop(Ue),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const Fn=new kt,Pg=new ot;function Ig(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,_=b.envMapRotation;S&&(m.envMap.value=S,Fn.copy(_),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Fn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dg(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const _=S.program;n.uniformBlockBinding(b,_)}function c(b,S){let _=i[b.id];_===void 0&&(g(b),_=h(b),i[b.id]=_,b.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(b,P);const A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){const S=u();b.__bindingPointIndex=S;const _=s.createBuffer(),P=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=i[b.id],_=b.uniforms,P=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,C=_.length;A<C;A++){const I=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,x=I.length;E<x;E++){const R=I[E];if(d(R,A,E,P)===!0){const G=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let Y=0;Y<O.length;Y++){const V=O[Y],Z=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,G+H,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,S,_,P){const A=b.value,C=S+"_"+_;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{const I=P[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return P[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(b){const S=b.uniforms;let _=0;const P=16;for(let C=0,I=S.length;C<I;C++){const E=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,R=E.length;x<R;x++){const G=E[x],O=Array.isArray(G.value)?G.value:[G.value];for(let H=0,Y=O.length;H<Y;H++){const V=O[H],Z=v(V),z=_%P,oe=z%Z.boundary,de=z+oe;_+=oe,de!==0&&P-de<Z.storage&&(_+=P-de),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=Z.storage}}}const A=_%P;return A>0&&(_+=P-A),b.__size=_,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Ng{constructor(e={}){const{canvas:t=Ph(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=bn,this.toneMappingExposure=1;const _=this;let P=!1,A=0,C=0,I=null,E=-1,x=null;const R=new dt,G=new dt;let O=null;const H=new ke(0);let Y=0,V=t.width,Z=t.height,z=1,oe=null,de=null;const ve=new dt(0,0,V,Z),Ue=new dt(0,0,V,Z);let Xe=!1;const X=new Ga;let ie=!1,xe=!1;this.transmissionResolutionScale=1;const se=new ot,Ce=new ot,Ve=new L,Te=new dt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function J(){return I===null?z:1}let w=n;function we(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),w===null){const N="webgl2";if(w=we(N,M),w===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ee,ge,ae,Pe,fe,T,y,F,q,j,$,Ae,ce,_e,We,ne,Me,Ie,De,Se,$e,Ge,at,D;function he(){ee=new Wp(w),ee.init(),Ge=new wg(w,ee),ge=new Op(w,ee,e,Ge),ae=new bg(w,ee),ge.reverseDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),Pe=new Yp(w),fe=new ug,T=new Tg(w,ee,ae,fe,ge,Ge,Pe),y=new kp(_),F=new Vp(_),q=new ju(w),at=new Up(w,q),j=new Xp(w,q,Pe,at),$=new Kp(w,j,q,Pe),De=new $p(w,ge,T),ne=new Bp(fe),Ae=new hg(_,y,F,ee,ge,at,ne),ce=new Ig(_,fe),_e=new fg,We=new yg(ee),Ie=new Np(_,y,F,ae,$,d,l),Me=new Sg(_,$,ge),D=new Dg(w,Pe,ge,ae),Se=new Fp(w,ee,Pe),$e=new qp(w,ee,Pe),Pe.programs=Ae.programs,_.capabilities=ge,_.extensions=ee,_.properties=fe,_.renderLists=_e,_.shadowMap=Me,_.state=ae,_.info=Pe}he();const W=new Lg(_,w);this.xr=W,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(V,Z,!1))},this.getSize=function(M){return M.set(V,Z)},this.setSize=function(M,N,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,Z=N,t.width=Math.floor(M*z),t.height=Math.floor(N*z),B===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(V*z,Z*z).floor()},this.setDrawingBufferSize=function(M,N,B){V=M,Z=N,z=B,t.width=Math.floor(M*B),t.height=Math.floor(N*B),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,N,B,k){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,N,B,k),ae.viewport(R.copy(ve).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,N,B,k){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,N,B,k),ae.scissor(G.copy(Ue).multiplyScalar(z).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(M){ae.setScissorTest(Xe=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,B=!0){let k=0;if(M){let U=!1;if(I!==null){const te=I.texture.format;U=te===Fa||te===Ua||te===Na}if(U){const te=I.texture.type,ue=te===mn||te===qn||te===Yi||te===Si||te===Ia||te===Da,ye=Ie.getClearColor(),Ee=Ie.getClearAlpha(),Ne=ye.r,Fe=ye.g,Re=ye.b;ue?(g[0]=Ne,g[1]=Fe,g[2]=Re,g[3]=Ee,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Ne,v[1]=Fe,v[2]=Re,v[3]=Ee,w.clearBufferiv(w.COLOR,0,v))}else k|=w.COLOR_BUFFER_BIT}N&&(k|=w.DEPTH_BUFFER_BIT),B&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ie.dispose(),_e.dispose(),We.dispose(),fe.dispose(),y.dispose(),F.dispose(),$.dispose(),at.dispose(),D.dispose(),Ae.dispose(),W.dispose(),W.removeEventListener("sessionstart",Qa),W.removeEventListener("sessionend",eo),Rn.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=Pe.autoReset,N=Me.enabled,B=Me.autoUpdate,k=Me.needsUpdate,U=Me.type;he(),Pe.autoReset=M,Me.enabled=N,Me.autoUpdate=B,Me.needsUpdate=k,Me.type=U}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const N=M.target;N.removeEventListener("dispose",Oe),ht(N)}function ht(M){St(M),fe.remove(M)}function St(M){const N=fe.get(M).programs;N!==void 0&&(N.forEach(function(B){Ae.releaseProgram(B)}),M.isShaderMaterial&&Ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,B,k,U,te){N===null&&(N=Ye);const ue=U.isMesh&&U.matrixWorld.determinant()<0,ye=bc(M,N,B,k,U);ae.setMaterial(k,ue);let Ee=B.index,Ne=1;if(k.wireframe===!0){if(Ee=j.getWireframeAttribute(B),Ee===void 0)return;Ne=2}const Fe=B.drawRange,Re=B.attributes.position;let Ke=Fe.start*Ne,et=(Fe.start+Fe.count)*Ne;te!==null&&(Ke=Math.max(Ke,te.start*Ne),et=Math.min(et,(te.start+te.count)*Ne)),Ee!==null?(Ke=Math.max(Ke,0),et=Math.min(et,Ee.count)):Re!=null&&(Ke=Math.max(Ke,0),et=Math.min(et,Re.count));const mt=et-Ke;if(mt<0||mt===1/0)return;at.setup(U,k,ye,B,Ee);let ut,Ze=Se;if(Ee!==null&&(ut=q.get(Ee),Ze=$e,Ze.setIndex(ut)),U.isMesh)k.wireframe===!0?(ae.setLineWidth(k.wireframeLinewidth*J()),Ze.setMode(w.LINES)):Ze.setMode(w.TRIANGLES);else if(U.isLine){let Le=k.linewidth;Le===void 0&&(Le=1),ae.setLineWidth(Le*J()),U.isLineSegments?Ze.setMode(w.LINES):U.isLineLoop?Ze.setMode(w.LINE_LOOP):Ze.setMode(w.LINE_STRIP)}else U.isPoints?Ze.setMode(w.POINTS):U.isSprite&&Ze.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Bn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Le=U._multiDrawStarts,Mt=U._multiDrawCounts,tt=U._multiDrawCount,qt=Ee?q.get(Ee).bytesPerElement:1,Kn=fe.get(k).currentProgram.getUniforms();for(let Ft=0;Ft<tt;Ft++)Kn.setValue(w,"_gl_DrawID",Ft),Ze.render(Le[Ft]/qt,Mt[Ft])}else if(U.isInstancedMesh)Ze.renderInstances(Ke,mt,U.count);else if(B.isInstancedBufferGeometry){const Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Mt=Math.min(B.instanceCount,Le);Ze.renderInstances(Ke,mt,Mt)}else Ze.render(Ke,mt)};function nt(M,N,B){M.transparent===!0&&M.side===Nt&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,ns(M,N,B),M.side=Tn,M.needsUpdate=!0,ns(M,N,B),M.side=Nt):ns(M,N,B)}this.compile=function(M,N,B=null){B===null&&(B=M),p=We.get(B),p.init(N),S.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==B&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const ye=te[ue];nt(ye,B,U),k.add(ye)}else nt(te,B,U),k.add(te)}),p=S.pop(),k},this.compileAsync=function(M,N,B=null){const k=this.compile(M,N,B);return new Promise(U=>{function te(){if(k.forEach(function(ue){fe.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){U(M);return}setTimeout(te,10)}ee.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Xt=null;function rn(M){Xt&&Xt(M)}function Qa(){Rn.stop()}function eo(){Rn.start()}const Rn=new dc;Rn.setAnimationLoop(rn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(M){Xt=M,W.setAnimationLoop(M),M===null?Rn.stop():Rn.start()},W.addEventListener("sessionstart",Qa),W.addEventListener("sessionend",eo),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,N,I),p=We.get(M,S.length),p.init(N),S.push(p),Ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Ce),xe=this.localClippingEnabled,ie=ne.init(this.clippingPlanes,xe),m=_e.get(M,b.length),m.init(),b.push(m),W.enabled===!0&&W.isPresenting===!0){const te=_.xr.getDepthSensingMesh();te!==null&&js(te,N,-1/0,_.sortObjects)}js(M,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(oe,de),Q=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Q&&Ie.addToRenderList(m,M),this.info.render.frame++,ie===!0&&ne.beginShadows();const B=p.state.shadowsArray;Me.render(B,M,N),ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const te=N.cameras;if(U.length>0)for(let ue=0,ye=te.length;ue<ye;ue++){const Ee=te[ue];no(k,U,M,Ee)}Q&&Ie.render(M);for(let ue=0,ye=te.length;ue<ye;ue++){const Ee=te[ue];to(m,M,Ee,Ee.viewport)}}else U.length>0&&no(k,U,M,N),Q&&Ie.render(M),to(m,M,N);I!==null&&C===0&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(_,M,N),at.resetDefaultState(),E=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&ne.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function js(M,N,B,k){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){k&&Te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);const ue=$.update(M),ye=M.material;ye.visible&&m.push(M,ue,ye,B,Te.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){const ue=$.update(M),ye=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Te.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Te.copy(ue.boundingSphere.center)),Te.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(ye)){const Ee=ue.groups;for(let Ne=0,Fe=Ee.length;Ne<Fe;Ne++){const Re=Ee[Ne],Ke=ye[Re.materialIndex];Ke&&Ke.visible&&m.push(M,ue,Ke,B,Te.z,Re)}}else ye.visible&&m.push(M,ue,ye,B,Te.z,null)}}const te=M.children;for(let ue=0,ye=te.length;ue<ye;ue++)js(te[ue],N,B,k)}function to(M,N,B,k){const U=M.opaque,te=M.transmissive,ue=M.transparent;p.setupLightsView(B),ie===!0&&ne.setGlobalState(_.clippingPlanes,B),k&&ae.viewport(R.copy(k)),U.length>0&&ts(U,N,B),te.length>0&&ts(te,N,B),ue.length>0&&ts(ue,N,B),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function no(M,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Yn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?ji:mn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const te=p.state.transmissionRenderTarget[k.id],ue=k.viewport||R;te.setSize(ue.z*_.transmissionResolutionScale,ue.w*_.transmissionResolutionScale);const ye=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(H),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Q&&Ie.render(B);const Ee=_.toneMapping;_.toneMapping=bn;const Ne=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ie===!0&&ne.setGlobalState(_.clippingPlanes,k),ts(M,B,k),T.updateMultisampleRenderTarget(te),T.updateRenderTargetMipmap(te),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Re=0,Ke=N.length;Re<Ke;Re++){const et=N[Re],mt=et.object,ut=et.geometry,Ze=et.material,Le=et.group;if(Ze.side===Nt&&mt.layers.test(k.layers)){const Mt=Ze.side;Ze.side=Ut,Ze.needsUpdate=!0,io(mt,B,k,ut,Ze,Le),Ze.side=Mt,Ze.needsUpdate=!0,Fe=!0}}Fe===!0&&(T.updateMultisampleRenderTarget(te),T.updateRenderTargetMipmap(te))}_.setRenderTarget(ye),_.setClearColor(H,Y),Ne!==void 0&&(k.viewport=Ne),_.toneMapping=Ee}function ts(M,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,te=M.length;U<te;U++){const ue=M[U],ye=ue.object,Ee=ue.geometry,Ne=k===null?ue.material:k,Fe=ue.group;ye.layers.test(B.layers)&&io(ye,N,B,Ee,Ne,Fe)}}function io(M,N,B,k,U,te){M.onBeforeRender(_,N,B,k,U,te),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(_,N,B,k,M,te),U.transparent===!0&&U.side===Nt&&U.forceSinglePass===!1?(U.side=Ut,U.needsUpdate=!0,_.renderBufferDirect(B,N,k,U,M,te),U.side=Tn,U.needsUpdate=!0,_.renderBufferDirect(B,N,k,U,M,te),U.side=Nt):_.renderBufferDirect(B,N,k,U,M,te),M.onAfterRender(_,N,B,k,U,te)}function ns(M,N,B){N.isScene!==!0&&(N=Ye);const k=fe.get(M),U=p.state.lights,te=p.state.shadowsArray,ue=U.state.version,ye=Ae.getParameters(M,U.state,te,N,B),Ee=Ae.getProgramCacheKey(ye);let Ne=k.programs;k.environment=M.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(M.isMeshStandardMaterial?F:y).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Oe),Ne=new Map,k.programs=Ne);let Fe=Ne.get(Ee);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===ue)return ro(M,ye),Fe}else ye.uniforms=Ae.getUniforms(M),M.onBeforeCompile(ye,_),Fe=Ae.acquireProgram(ye,Ee),Ne.set(Ee,Fe),k.uniforms=ye.uniforms;const Re=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=ne.uniform),ro(M,ye),k.needsLights=wc(M),k.lightsStateVersion=ue,k.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Fe,k.uniformsList=null,Fe}function so(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Gs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ro(M,N){const B=fe.get(M);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function bc(M,N,B,k,U){N.isScene!==!0&&(N=Ye),T.resetTextureUnits();const te=N.fog,ue=k.isMeshStandardMaterial?N.environment:null,ye=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bi,Ee=(k.isMeshStandardMaterial?F:y).get(k.envMap||ue),Ne=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!B.morphAttributes.position,Ke=!!B.morphAttributes.normal,et=!!B.morphAttributes.color;let mt=bn;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(mt=_.toneMapping);const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=ut!==void 0?ut.length:0,Le=fe.get(k),Mt=p.state.lights;if(ie===!0&&(xe===!0||M!==x)){const At=M===x&&k.id===E;ne.setState(k,M,At)}let tt=!1;k.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Mt.state.version||Le.outputColorSpace!==ye||U.isBatchedMesh&&Le.batching===!1||!U.isBatchedMesh&&Le.batching===!0||U.isBatchedMesh&&Le.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Le.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Le.instancing===!1||!U.isInstancedMesh&&Le.instancing===!0||U.isSkinnedMesh&&Le.skinning===!1||!U.isSkinnedMesh&&Le.skinning===!0||U.isInstancedMesh&&Le.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Le.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Le.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Le.instancingMorph===!1&&U.morphTexture!==null||Le.envMap!==Ee||k.fog===!0&&Le.fog!==te||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ne.numPlanes||Le.numIntersection!==ne.numIntersection)||Le.vertexAlphas!==Ne||Le.vertexTangents!==Fe||Le.morphTargets!==Re||Le.morphNormals!==Ke||Le.morphColors!==et||Le.toneMapping!==mt||Le.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,Le.__version=k.version);let qt=Le.currentProgram;tt===!0&&(qt=ns(k,N,U));let Kn=!1,Ft=!1,Pi=!1;const lt=qt.getUniforms(),Gt=Le.uniforms;if(ae.useProgram(qt.program)&&(Kn=!0,Ft=!0,Pi=!0),k.id!==E&&(E=k.id,Ft=!0),Kn||x!==M){ae.buffers.depth.getReversed()?(se.copy(M.projectionMatrix),Dh(se),Nh(se),lt.setValue(w,"projectionMatrix",se)):lt.setValue(w,"projectionMatrix",M.projectionMatrix),lt.setValue(w,"viewMatrix",M.matrixWorldInverse);const It=lt.map.cameraPosition;It!==void 0&&It.setValue(w,Ve.setFromMatrixPosition(M.matrixWorld)),ge.logarithmicDepthBuffer&&lt.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Ft=!0,Pi=!0)}if(U.isSkinnedMesh){lt.setOptional(w,U,"bindMatrix"),lt.setOptional(w,U,"bindMatrixInverse");const At=U.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),lt.setValue(w,"boneTexture",At.boneTexture,T))}U.isBatchedMesh&&(lt.setOptional(w,U,"batchingTexture"),lt.setValue(w,"batchingTexture",U._matricesTexture,T),lt.setOptional(w,U,"batchingIdTexture"),lt.setValue(w,"batchingIdTexture",U._indirectTexture,T),lt.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(w,"batchingColorTexture",U._colorsTexture,T));const zt=B.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&De.update(U,B,qt),(Ft||Le.receiveShadow!==U.receiveShadow)&&(Le.receiveShadow=U.receiveShadow,lt.setValue(w,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gt.envMap.value=Ee,Gt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Gt.envMapIntensity.value=N.environmentIntensity),Ft&&(lt.setValue(w,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&Tc(Gt,Pi),te&&k.fog===!0&&ce.refreshFogUniforms(Gt,te),ce.refreshMaterialUniforms(Gt,k,z,Z,p.state.transmissionRenderTarget[M.id]),Gs.upload(w,so(Le),Gt,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gs.upload(w,so(Le),Gt,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(w,"center",U.center),lt.setValue(w,"modelViewMatrix",U.modelViewMatrix),lt.setValue(w,"normalMatrix",U.normalMatrix),lt.setValue(w,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const At=k.uniformsGroups;for(let It=0,Qs=At.length;It<Qs;It++){const Ln=At[It];D.update(Ln,qt),D.bind(Ln,qt)}}return qt}function Tc(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function wc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,N,B){fe.get(M.texture).__webglTexture=N,fe.get(M.depthTexture).__webglTexture=B;const k=fe.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const B=fe.get(M);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const Ac=w.createFramebuffer();this.setRenderTarget=function(M,N=0,B=0){I=M,A=N,C=B;let k=!0,U=null,te=!1,ue=!1;if(M){const Ee=fe.get(M);if(Ee.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(Ee.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(Ee.__hasExternalTextures)T.rebindTextures(M,fe.get(M.texture).__webglTexture,fe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(Ee.__boundDepthTexture!==Re){if(Re!==null&&fe.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ue=!0);const Fe=fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?U=Fe[N][B]:U=Fe[N],te=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?U=fe.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[B]:U=Fe,R.copy(M.viewport),G.copy(M.scissor),O=M.scissorTest}else R.copy(ve).multiplyScalar(z).floor(),G.copy(Ue).multiplyScalar(z).floor(),O=Xe;if(B!==0&&(U=Ac),ae.bindFramebuffer(w.FRAMEBUFFER,U)&&k&&ae.drawBuffers(M,U),ae.viewport(R),ae.scissor(G),ae.setScissorTest(O),te){const Ee=fe.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ee.__webglTexture,B)}else if(ue){const Ee=fe.get(M.texture),Ne=N;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.__webglTexture,B,Ne)}else if(M!==null&&B!==0){const Ee=fe.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ee.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(M,N,B,k,U,te,ue){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(ye=ye[ue]),ye){ae.bindFramebuffer(w.FRAMEBUFFER,ye);try{const Ee=M.texture,Ne=Ee.format,Fe=Ee.type;if(!ge.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-k&&B>=0&&B<=M.height-U&&w.readPixels(N,B,k,U,Ge.convert(Ne),Ge.convert(Fe),te)}finally{const Ee=I!==null?fe.get(I).__webglFramebuffer:null;ae.bindFramebuffer(w.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(M,N,B,k,U,te,ue){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(ye=ye[ue]),ye){const Ee=M.texture,Ne=Ee.format,Fe=Ee.type;if(!ge.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-k&&B>=0&&B<=M.height-U){ae.bindFramebuffer(w.FRAMEBUFFER,ye);const Re=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Re),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),w.readPixels(N,B,k,U,Ge.convert(Ne),Ge.convert(Fe),0);const Ke=I!==null?fe.get(I).__webglFramebuffer:null;ae.bindFramebuffer(w.FRAMEBUFFER,Ke);const et=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Ih(w,et,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Re),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(Re),w.deleteSync(et),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,B=0){M.isTexture!==!0&&(Bn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(M.image.width*k),te=Math.floor(M.image.height*k),ue=N!==null?N.x:0,ye=N!==null?N.y:0;T.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,ue,ye,U,te),ae.unbindTexture()};const Cc=w.createFramebuffer(),Rc=w.createFramebuffer();this.copyTextureToTexture=function(M,N,B=null,k=null,U=0,te=null){M.isTexture!==!0&&(Bn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],N=arguments[2],te=arguments[3]||0,B=null),te===null&&(U!==0?(Bn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=U,U=0):te=0);let ue,ye,Ee,Ne,Fe,Re,Ke,et,mt;const ut=M.isCompressedTexture?M.mipmaps[te]:M.image;if(B!==null)ue=B.max.x-B.min.x,ye=B.max.y-B.min.y,Ee=B.isBox3?B.max.z-B.min.z:1,Ne=B.min.x,Fe=B.min.y,Re=B.isBox3?B.min.z:0;else{const zt=Math.pow(2,-U);ue=Math.floor(ut.width*zt),ye=Math.floor(ut.height*zt),M.isDataArrayTexture?Ee=ut.depth:M.isData3DTexture?Ee=Math.floor(ut.depth*zt):Ee=1,Ne=0,Fe=0,Re=0}k!==null?(Ke=k.x,et=k.y,mt=k.z):(Ke=0,et=0,mt=0);const Ze=Ge.convert(N.format),Le=Ge.convert(N.type);let Mt;N.isData3DTexture?(T.setTexture3D(N,0),Mt=w.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Mt=w.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Mt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,N.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,N.unpackAlignment);const tt=w.getParameter(w.UNPACK_ROW_LENGTH),qt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Kn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ft=w.getParameter(w.UNPACK_SKIP_ROWS),Pi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ut.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ut.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ne),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Re);const lt=M.isDataArrayTexture||M.isData3DTexture,Gt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const zt=fe.get(M),At=fe.get(N),It=fe.get(zt.__renderTarget),Qs=fe.get(At.__renderTarget);ae.bindFramebuffer(w.READ_FRAMEBUFFER,It.__webglFramebuffer),ae.bindFramebuffer(w.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let Ln=0;Ln<Ee;Ln++)lt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,fe.get(M).__webglTexture,U,Re+Ln),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,fe.get(N).__webglTexture,te,mt+Ln)),w.blitFramebuffer(Ne,Fe,ue,ye,Ke,et,ue,ye,w.DEPTH_BUFFER_BIT,w.NEAREST);ae.bindFramebuffer(w.READ_FRAMEBUFFER,null),ae.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||fe.has(M)){const zt=fe.get(M),At=fe.get(N);ae.bindFramebuffer(w.READ_FRAMEBUFFER,Cc),ae.bindFramebuffer(w.DRAW_FRAMEBUFFER,Rc);for(let It=0;It<Ee;It++)lt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zt.__webglTexture,U,Re+It):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,zt.__webglTexture,U),Gt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,At.__webglTexture,te,mt+It):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,At.__webglTexture,te),U!==0?w.blitFramebuffer(Ne,Fe,ue,ye,Ke,et,ue,ye,w.COLOR_BUFFER_BIT,w.NEAREST):Gt?w.copyTexSubImage3D(Mt,te,Ke,et,mt+It,Ne,Fe,ue,ye):w.copyTexSubImage2D(Mt,te,Ke,et,Ne,Fe,ue,ye);ae.bindFramebuffer(w.READ_FRAMEBUFFER,null),ae.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Gt?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Mt,te,Ke,et,mt,ue,ye,Ee,Ze,Le,ut.data):N.isCompressedArrayTexture?w.compressedTexSubImage3D(Mt,te,Ke,et,mt,ue,ye,Ee,Ze,ut.data):w.texSubImage3D(Mt,te,Ke,et,mt,ue,ye,Ee,Ze,Le,ut):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,te,Ke,et,ue,ye,Ze,Le,ut.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,te,Ke,et,ut.width,ut.height,Ze,ut.data):w.texSubImage2D(w.TEXTURE_2D,te,Ke,et,ue,ye,Ze,Le,ut);w.pixelStorei(w.UNPACK_ROW_LENGTH,tt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,qt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Kn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ft),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pi),te===0&&N.generateMipmaps&&w.generateMipmap(Mt),ae.unbindTexture()},this.copyTextureToTexture3D=function(M,N,B=null,k=null,U=0){return M.isTexture!==!0&&(Bn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,M=arguments[2],N=arguments[3],U=arguments[4]||0),Bn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,B,k,U)},this.initRenderTarget=function(M){fe.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),ae.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,ae.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Ra={low:{name:"low",pixelRatio:1,shadows:!1,shadowMapSize:512,maxParticles:250,drawDistance:350,cityDetail:40},medium:{name:"medium",pixelRatio:typeof window<"u"?Math.min(window.devicePixelRatio||1,1.5):1.5,shadows:!0,shadowMapSize:1024,maxParticles:600,drawDistance:500,cityDetail:80},high:{name:"high",pixelRatio:typeof window<"u"?Math.min(window.devicePixelRatio||1,2):2,shadows:!0,shadowMapSize:2048,maxParticles:1200,drawDistance:650,cityDetail:140}},qe={vehicle:{width:2.1,baseTopSpeed:82,boostTopSpeed:110,acceleration:48,brakingDecel:60,naturalDrag:.985,steerSpeed:3.4,steerReturnSpeed:5.5,maxSteerAngle:.42,driftLateralFriction:.975,driftSteerFactor:1.45,groundSnapY:.6},energy:{max:100,boostDrainPerSec:28,thrustDrainPerSec:32,passiveRechargeRate:9,pickupRechargeBonus:35},flight:{gravity:34,rampLaunchVerticalSpeed:24,rampLaunchForwardMult:1.25,thrusterLiftAccel:45,thrusterMaxRiseSpeed:30,airPitchSpeed:4.5,airRollSpeed:6.8,stuntThresholdAngle:Math.PI*1.85,landingMaxRollSafe:.52,landingMaxPitchSafe:.45},scoring:{distPointsPerMeter:1,energyPickupPoints:150,driftPointsPerSec:120,barrelRollPoints:500,flipPoints:600,stuntGatePoints:400,cleanLandingBonus:350,comboStep:.5,comboMax:8,comboDecayTime:3.2},world:{roadWidth:26,segmentLength:80,activeSegments:8,colors:{stuntRing:16711799}}};class Ug{currentState="LOADING";listeners=[];getState(){return this.currentState}is(e){return this.currentState===e}setState(e){if(this.currentState===e)return;const t=this.currentState;this.currentState=e;for(let n=0;n<this.listeners.length;n++)try{this.listeners[n](e,t)}catch(i){console.error("Error in state change listener:",i)}}onStateChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}}class Fg{ctx=null;masterGain=null;sfxGain=null;musicGain=null;engineOsc1=null;engineOsc2=null;engineFilter=null;engineGain=null;boostNoiseNode=null;boostGain=null;boostFilter=null;driftNoiseNode=null;driftGain=null;driftFilter=null;noiseBuffer=null;musicInterval=null;isMusicPlaying=!1;musicStep=0;isMuted=!1;masterVol=.8;sfxEnabled=!0;isInitialized=!1;constructor(){}init(){if(!this.isInitialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.masterVol,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(1,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(.28,this.ctx.currentTime),this.musicGain.connect(this.masterGain),this.createNoiseBuffer(),this.setupEngineSynth(),this.setupBoostSynth(),this.setupDriftSynth(),this.isInitialized=!0}catch(e){console.warn("Web Audio API not supported or blocked:",e)}}resumeContext(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}createNoiseBuffer(){if(!this.ctx)return;const e=this.ctx.sampleRate*2;this.noiseBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const t=this.noiseBuffer.getChannelData(0);for(let n=0;n<e;n++)t[n]=Math.random()*2-1}setupEngineSynth(){!this.ctx||!this.sfxGain||(this.engineOsc1=this.ctx.createOscillator(),this.engineOsc2=this.ctx.createOscillator(),this.engineFilter=this.ctx.createBiquadFilter(),this.engineGain=this.ctx.createGain(),this.engineOsc1.type="sawtooth",this.engineOsc2.type="triangle",this.engineOsc1.frequency.setValueAtTime(45,this.ctx.currentTime),this.engineOsc2.frequency.setValueAtTime(90,this.ctx.currentTime),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(250,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(2.5,this.ctx.currentTime),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.sfxGain),this.engineOsc1.start(),this.engineOsc2.start())}setupBoostSynth(){!this.ctx||!this.noiseBuffer||!this.sfxGain||(this.boostNoiseNode=this.ctx.createBufferSource(),this.boostNoiseNode.buffer=this.noiseBuffer,this.boostNoiseNode.loop=!0,this.boostFilter=this.ctx.createBiquadFilter(),this.boostFilter.type="bandpass",this.boostFilter.frequency.setValueAtTime(320,this.ctx.currentTime),this.boostFilter.Q.setValueAtTime(1.8,this.ctx.currentTime),this.boostGain=this.ctx.createGain(),this.boostGain.gain.setValueAtTime(0,this.ctx.currentTime),this.boostNoiseNode.connect(this.boostFilter),this.boostFilter.connect(this.boostGain),this.boostGain.connect(this.sfxGain),this.boostNoiseNode.start())}setupDriftSynth(){!this.ctx||!this.noiseBuffer||!this.sfxGain||(this.driftNoiseNode=this.ctx.createBufferSource(),this.driftNoiseNode.buffer=this.noiseBuffer,this.driftNoiseNode.loop=!0,this.driftFilter=this.ctx.createBiquadFilter(),this.driftFilter.type="bandpass",this.driftFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.driftFilter.Q.setValueAtTime(3.5,this.ctx.currentTime),this.driftGain=this.ctx.createGain(),this.driftGain.gain.setValueAtTime(0,this.ctx.currentTime),this.driftNoiseNode.connect(this.driftFilter),this.driftFilter.connect(this.driftGain),this.driftGain.connect(this.sfxGain),this.driftNoiseNode.start())}updateEngine(e,t,n,i){if(!this.ctx||!this.sfxEnabled)return;const r=this.ctx.currentTime;if(this.engineOsc1&&this.engineOsc2&&this.engineFilter&&this.engineGain){const a=45+e*220+(t?25:0)+(n?60:0),o=a*2.02,l=200+e*1800,c=.08+e*.22;this.engineOsc1.frequency.setTargetAtTime(a,r,.08),this.engineOsc2.frequency.setTargetAtTime(o,r,.08),this.engineFilter.frequency.setTargetAtTime(l,r,.08),this.engineGain.gain.setTargetAtTime(c,r,.05)}if(this.boostGain&&this.boostFilter){const a=n?.35:0,o=n?580:320;this.boostGain.gain.setTargetAtTime(a,r,.06),this.boostFilter.frequency.setTargetAtTime(o,r,.06)}if(this.driftGain){const a=i&&e>.2?.22:0;this.driftGain.gain.setTargetAtTime(a,r,.08)}}playPickup(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",n.type="sine",t.frequency.setValueAtTime(587.33,e),t.frequency.exponentialRampToValueAtTime(1174.66,e+.14),n.frequency.setValueAtTime(880,e),n.frequency.exponentialRampToValueAtTime(1760,e+.14),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(i),n.connect(i),i.connect(this.sfxGain),t.start(e),n.start(e),t.stop(e+.25),n.stop(e+.25)}playStuntSuccess(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{if(!this.ctx||!this.sfxGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+i*.06),a.gain.setValueAtTime(0,e),a.gain.setValueAtTime(.2,e+i*.06),a.gain.exponentialRampToValueAtTime(.001,e+i*.06+.35),r.connect(a),a.connect(this.sfxGain),r.start(e+i*.06),r.stop(e+i*.06+.36)})}playRampLaunch(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(440,e+.28);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(200,e),i.frequency.exponentialRampToValueAtTime(1800,e+.28),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+.35),t.connect(i),i.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.36)}playCleanLanding(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(35,e+.18),n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.001,e+.24),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.25)}playCrash(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime;if(this.noiseBuffer){const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(1200,e),n.frequency.exponentialRampToValueAtTime(100,e+.45);const i=this.ctx.createGain();i.gain.setValueAtTime(.6,e),i.gain.exponentialRampToValueAtTime(.001,e+.5),t.connect(n),n.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.5)}}playGatePass(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(880,e),t.frequency.setValueAtTime(1320,e+.08),n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.25)}startCyberMusic(){if(this.isMusicPlaying)return;this.isMusicPlaying=!0;const e=[87.31,87.31,0,87.31,103.83,87.31,0,116.54,87.31,87.31,0,77.78,87.31,0,130.81,103.83],t=140;this.musicStep=0,this.musicInterval=window.setInterval(()=>{if(!this.ctx||!this.musicGain||!this.sfxEnabled)return;const n=e[this.musicStep%e.length];if(this.musicStep++,n>0){const i=this.ctx.currentTime,r=this.ctx.createOscillator(),a=this.ctx.createBiquadFilter(),o=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(n,i),a.type="lowpass",a.frequency.setValueAtTime(500,i),a.frequency.exponentialRampToValueAtTime(150,i+.12),a.Q.setValueAtTime(3,i),o.gain.setValueAtTime(.12,i),o.gain.exponentialRampToValueAtTime(.001,i+.13),r.connect(a),a.connect(o),o.connect(this.musicGain),r.start(i),r.stop(i+.14)}},t)}stopCyberMusic(){this.musicInterval!==null&&(clearInterval(this.musicInterval),this.musicInterval=null),this.isMusicPlaying=!1}playNearMiss(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(150,e+.18),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.22)}playMissionComplete(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime;[392,523.25,659.25,783.99,1046.5].forEach((n,i)=>{if(!this.ctx||!this.sfxGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+i*.08),a.gain.setValueAtTime(0,e),a.gain.setValueAtTime(.25,e+i*.08),a.gain.exponentialRampToValueAtTime(.001,e+i*.08+.5),r.connect(a),a.connect(this.sfxGain),r.start(e+i*.08),r.stop(e+i*.08+.52)})}playAchievement(){if(!this.ctx||!this.sfxGain||!this.sfxEnabled)return;const e=this.ctx.currentTime;[587.33,739.99,880,1174.66].forEach((n,i)=>{if(!this.ctx||!this.sfxGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.07),a.gain.setValueAtTime(.2,e+i*.07),a.gain.exponentialRampToValueAtTime(.001,e+i*.07+.4),r.connect(a),a.connect(this.sfxGain),r.start(e+i*.07),r.stop(e+i*.07+.42)})}setMasterVolume(e){this.masterVol=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:this.masterVol,this.ctx.currentTime,.05)}setMusicVolume(e){const t=Math.max(0,Math.min(1,e))*.35;this.musicGain&&this.ctx&&this.musicGain.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setSfxVolume(e){const t=Math.max(0,Math.min(1,e));this.sfxGain&&this.ctx&&this.sfxGain.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setSfxEnabled(e){this.sfxEnabled=e}mute(e){this.isMuted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:this.masterVol,this.ctx.currentTime,.05)}cleanup(){this.stopCyberMusic(),this.ctx&&(this.ctx.close(),this.ctx=null),this.isInitialized=!1}}class Og{state={steerLeft:!1,steerRight:!1,accelerate:!1,brake:!1,boost:!1,drift:!1,thruster:!1,rollLeft:!1,rollRight:!1,pausePressed:!1};pauseCallbacks=[];boundKeyDown;boundKeyUp;boundBlur;constructor(){this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundBlur=this.handleBlur.bind(this),window.addEventListener("keydown",this.boundKeyDown,{passive:!1}),window.addEventListener("keyup",this.boundKeyUp,{passive:!1}),window.addEventListener("blur",this.boundBlur),this.setupTouchListeners()}getState(){return this.state}onPauseToggle(e){return this.pauseCallbacks.push(e),()=>{this.pauseCallbacks=this.pauseCallbacks.filter(t=>t!==e)}}handleKeyDown(e){switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),e.code){case"KeyW":case"ArrowUp":this.state.accelerate=!0;break;case"KeyS":case"ArrowDown":this.state.brake=!0;break;case"KeyA":case"ArrowLeft":this.state.steerLeft=!0;break;case"KeyD":case"ArrowRight":this.state.steerRight=!0;break;case"Space":this.state.boost=!0;break;case"ShiftLeft":case"ShiftRight":this.state.drift=!0;break;case"KeyF":this.state.thruster=!0;break;case"KeyQ":this.state.rollLeft=!0;break;case"KeyE":this.state.rollRight=!0;break;case"Escape":case"KeyP":e.repeat||this.triggerPause();break}}handleKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.state.accelerate=!1;break;case"KeyS":case"ArrowDown":this.state.brake=!1;break;case"KeyA":case"ArrowLeft":this.state.steerLeft=!1;break;case"KeyD":case"ArrowRight":this.state.steerRight=!1;break;case"Space":this.state.boost=!1;break;case"ShiftLeft":case"ShiftRight":this.state.drift=!1;break;case"KeyF":this.state.thruster=!1;break;case"KeyQ":this.state.rollLeft=!1;break;case"KeyE":this.state.rollRight=!1;break}}handleBlur(){this.reset()}reset(){this.state.steerLeft=!1,this.state.steerRight=!1,this.state.accelerate=!1,this.state.brake=!1,this.state.boost=!1,this.state.drift=!1,this.state.thruster=!1,this.state.rollLeft=!1,this.state.rollRight=!1,this.state.pausePressed=!1}triggerPause(){for(let e=0;e<this.pauseCallbacks.length;e++)this.pauseCallbacks[e]()}setupTouchListeners(){const e=(t,n)=>{const i=document.getElementById(t);if(!i)return;const r=l=>{if(l.preventDefault(),i.classList.add("active"),n(!0),i.setPointerCapture)try{i.setPointerCapture(l.pointerId)}catch{}},a=l=>{if(l.preventDefault(),i.classList.remove("active"),n(!1),i.releasePointerCapture)try{i.releasePointerCapture(l.pointerId)}catch{}},o=()=>{i.classList.remove("active"),n(!1)};i.addEventListener("pointerdown",r),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",o),i.addEventListener("pointerleave",o)};e("touch-steer-left",t=>{this.state.steerLeft=t}),e("touch-steer-right",t=>{this.state.steerRight=t}),e("touch-boost",t=>{this.state.boost=t}),e("touch-drift",t=>{this.state.drift=t}),e("touch-thrust",t=>{this.state.thruster=t}),e("touch-roll",t=>{this.state.rollRight=t})}dispose(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("blur",this.boundBlur)}}const On={titanium:{bodyColor:1185568,accentColor:61695,emissiveColor:53486,roughness:.22,metalness:.8},cyan:{bodyColor:658964,accentColor:61695,emissiveColor:61695,roughness:.22,metalness:.75},silver:{bodyColor:14476524,accentColor:61695,emissiveColor:55551,roughness:.15,metalness:.9},crimson:{bodyColor:11013410,accentColor:16724821,emissiveColor:16716083,roughness:.2,metalness:.7},electric:{bodyColor:26316,accentColor:61695,emissiveColor:61695,roughness:.18,metalness:.85},white:{bodyColor:16054267,accentColor:61695,emissiveColor:59135,roughness:.16,metalness:.75},solar:{bodyColor:1575685,accentColor:16733440,emissiveColor:16729088,roughness:.25,metalness:.7},violet:{bodyColor:1312282,accentColor:11544319,emissiveColor:10027263,roughness:.2,metalness:.8},stealth:{bodyColor:397832,accentColor:65416,emissiveColor:65382,roughness:.3,metalness:.85}};class vc{root;chassisGroup;wheelFL;wheelFR;wheelRL;wheelRR;wheels=[];rims=[];thrusterCoreLeft=null;thrusterCoreRight=null;underglowMesh=null;bodyMaterials=[];accentMaterials=[];customThrusterColor=61695;constructor(){this.root=new rt,this.chassisGroup=new rt,this.root.add(this.chassisGroup),this.wheelFL=new rt,this.wheelFR=new rt,this.wheelRL=new rt,this.wheelRR=new rt,this.buildVantaXR()}buildVantaXR(){const e=new xt({color:On.titanium.bodyColor,roughness:On.titanium.roughness,metalness:On.titanium.metalness});this.bodyMaterials.push(e);const t=new xt({color:On.titanium.accentColor,emissive:On.titanium.emissiveColor,emissiveIntensity:1.2,roughness:.3,metalness:.5});this.accentMaterials.push(t);const n=new xt({color:1119258,roughness:.5,metalness:.3}),i=new xt({color:529698,roughness:.08,metalness:.95,transparent:!0,opacity:.85}),r=new xt({color:61695,emissive:61695,emissiveIntensity:2.8,roughness:.1});this.accentMaterials.push(r);const a=new xt({color:16711731,emissive:16711731,emissiveIntensity:2.5,roughness:.1}),o=new Je(2,.16,4.6),l=new be(o,n);l.position.set(0,.15,0),l.castShadow=!0,l.receiveShadow=!0,this.chassisGroup.add(l);const c=new Je(1.86,.42,3.4),h=new be(c,e);h.position.set(0,.4,.1),h.castShadow=!0,this.chassisGroup.add(h);const u=new tn(.5,.93,1.4,4);u.rotateY(Math.PI/4);const f=new be(u,e);f.rotation.x=Math.PI/2,f.position.set(0,.35,-2.1),f.scale.set(1.9,1,.45),f.castShadow=!0,this.chassisGroup.add(f);const d=new Je(2.08,.06,.8),g=new be(d,n);g.position.set(0,.1,-2.25),g.castShadow=!0,this.chassisGroup.add(g);const v=new be(new Je(.08,.22,.4),n);v.position.set(-1.03,.2,-2.2);const m=v.clone();m.position.x=1.03,this.chassisGroup.add(v,m);const p=new Ji(.72,16,12);p.scale(1.15,.58,1.9);const b=new be(p,i);b.position.set(0,.68,-.15),b.castShadow=!0,this.chassisGroup.add(b);const S=new Je(.22,.14,1.2),_=new be(S,n);_.position.set(0,.98,-.1),_.castShadow=!0,this.chassisGroup.add(_);const P=new Je(.3,.35,1),A=new be(P,e);A.position.set(-.95,.45,-1.4),A.castShadow=!0;const C=A.clone();C.position.x=.95;const I=new be(new Je(.36,.42,1.2),e);I.position.set(-.98,.48,1.3),I.castShadow=!0;const E=I.clone();E.position.x=.98,this.chassisGroup.add(A,C,I,E);const x=new Je(.24,.3,1.5),R=new be(x,e);R.position.set(-.96,.38,-.05);const G=R.clone();G.position.x=.96,this.chassisGroup.add(R,G);const O=new Je(.04,.05,1.8),H=new be(O,t);H.position.set(-1.08,.36,-.05);const Y=H.clone();Y.position.x=1.08,this.chassisGroup.add(H,Y);const V=new Je(.35,.06,.15),Z=new be(V,r);Z.position.set(-.68,.38,-2.35),Z.rotation.y=-.25;const z=new be(V,r);z.position.set(.68,.38,-2.35),z.rotation.y=.25,this.chassisGroup.add(Z,z);const oe=new be(new Je(.12,.04,.04),r);oe.position.set(0,.42,-2.48),this.chassisGroup.add(oe);const de=new Je(1.9,.2,.8),ve=new be(de,n);ve.position.set(0,.2,2.1),ve.rotation.x=.18,ve.castShadow=!0,this.chassisGroup.add(ve);for(let ee=-3;ee<=3;ee++){const ge=new be(new Je(.04,.24,.6),n);ge.position.set(ee*.26,.18,2.15),this.chassisGroup.add(ge)}const Ue=new Je(2.1,.06,.45),Xe=new be(Ue,n);Xe.position.set(0,.82,2.05),Xe.rotation.x=-.08,Xe.castShadow=!0,this.chassisGroup.add(Xe);const X=new be(new Je(.06,.32,.2),n);X.position.set(-.55,.65,1.95);const ie=X.clone();ie.position.x=.55,this.chassisGroup.add(X,ie);const xe=new Je(1.7,.05,.06),se=new be(xe,a);se.position.set(0,.58,2.16),this.chassisGroup.add(se);const Ce=new tn(.18,.25,.5,14,1,!0);Ce.rotateX(Math.PI/2);const Ve=new xt({color:1712172,metalness:.9,roughness:.25,side:Nt}),Te=new be(Ce,Ve);Te.position.set(-.35,.38,2.15);const Ye=new be(Ce,Ve);Ye.position.set(.35,.38,2.15),this.chassisGroup.add(Te,Ye);const Q=new Xa(.16,12);Q.rotateY(Math.PI);const J=new Lt({color:61695,side:Nt,transparent:!0,opacity:.3});this.thrusterCoreLeft=new be(Q,J.clone()),this.thrusterCoreLeft.position.set(-.35,.38,2.3),this.thrusterCoreRight=new be(Q,J.clone()),this.thrusterCoreRight.position.set(.35,.38,2.3),this.chassisGroup.add(this.thrusterCoreLeft,this.thrusterCoreRight);const w=new Ri(1.6,3.8),we=new Lt({color:61695,transparent:!0,opacity:.25,side:Nt,blending:qi,depthWrite:!1});this.underglowMesh=new be(w,we),this.underglowMesh.rotation.x=Math.PI/2,this.underglowMesh.position.set(0,.04,0),this.chassisGroup.add(this.underglowMesh),this.wheelFL=this.createWheelGroup(-.98,.32,-1.4),this.wheelFR=this.createWheelGroup(.98,.32,-1.4),this.wheelRL=this.createWheelGroup(-1,.34,1.35),this.wheelRR=this.createWheelGroup(1,.34,1.35),this.root.add(this.wheelFL,this.wheelFR,this.wheelRL,this.wheelRR)}createWheelGroup(e,t,n){const i=new rt;i.position.set(e,t,n);const r=new rt,a=new tn(.35,.35,.28,18);a.rotateZ(Math.PI/2);const o=new xt({color:1184792,roughness:.85,metalness:.1}),l=new be(a,o);l.castShadow=!0,r.add(l);const c=new tn(.24,.24,.29,12);c.rotateZ(Math.PI/2);const h=new xt({color:9083816,roughness:.2,metalness:.9}),u=new be(c,h);r.add(u),this.rims.push(u);const f=new es(.18,.21,14);f.rotateY(Math.PI/2);const d=new Lt({color:61695,side:Nt}),g=new be(f,d);return g.position.x=e>0?.15:-.15,r.add(g),this.wheels.push(l),i.add(r),i}updateVisuals(e,t,n,i,r){this.wheelFL.rotation.y=t,this.wheelFR.rotation.y=t;const o=e*r/.35;[this.wheelFL,this.wheelFR,this.wheelRL,this.wheelRR].forEach(f=>{const d=f.children[0];d&&(d.rotation.x+=o)});const c=n||i&&e>20?1:.25,h=n?16733440:this.customThrusterColor;if(this.thrusterCoreLeft&&this.thrusterCoreRight){const f=this.thrusterCoreLeft.material,d=this.thrusterCoreRight.material;f.opacity=Tt.lerp(f.opacity,c,.2),d.opacity=Tt.lerp(d.opacity,c,.2),f.color.setHex(h),d.color.setHex(h)}const u=-t*.18;this.chassisGroup.rotation.z=Tt.lerp(this.chassisGroup.rotation.z,u,.15)}setLivery(e){const t=On[e]||On.titanium;this.bodyMaterials.forEach(n=>{n.color.setHex(t.bodyColor),n.roughness=t.roughness,n.metalness=t.metalness}),this.accentMaterials.forEach(n=>{n.color.setHex(t.accentColor),n.emissive.setHex(t.emissiveColor)}),this.underglowMesh&&this.underglowMesh.material.color.setHex(t.accentColor)}setPaint(e){this.setLivery(e)}setUnderglowColor(e){this.underglowMesh&&this.underglowMesh.material.color.setHex(e)}setThrusterColor(e){this.customThrusterColor=e}setWheelStyle(e){const t=e==="turbine"?11584734:e==="spoke"?13687008:9083816,n=e==="turbine"?.95:.85;this.rims.forEach(i=>{i.material.color.setHex(t),i.material.metalness=n})}getThrusterPositionLeft(e){this.thrusterCoreLeft?this.thrusterCoreLeft.getWorldPosition(e):(this.root.getWorldPosition(e),e.add(new L(-.35,.4,2.3)))}getThrusterPositionRight(e){this.thrusterCoreRight?this.thrusterCoreRight.getWorldPosition(e):(this.root.getWorldPosition(e),e.add(new L(.35,.4,2.3)))}}class Bg{position=new L(0,qe.vehicle.groundSnapY,0);rotation=new kt(0,0,0,"YXZ");quaternion=new Ci;forwardSpeed=0;lateralVelocity=0;verticalVelocity=0;steerAngle=0;energy=qe.energy.max;isAirborne=!1;isDrifting=!1;isBoosting=!1;isThrusting=!1;isCrashed=!1;airTime=0;driftDuration=0;totalDriftSeconds=0;totalBarrelRolls=0;totalFlips=0;cleanLandingsCount=0;crashesCount=0;gatesClearedCount=0;maxEnergy=qe.energy.max;baseTopSpeed=qe.vehicle.baseTopSpeed;acceleration=qe.vehicle.acceleration;steerSpeed=qe.vehicle.steerSpeed;driftLateralFriction=qe.vehicle.driftLateralFriction;thrusterLiftAccel=qe.flight.thrusterLiftAccel;passiveRechargeRate=qe.energy.passiveRechargeRate;accumulatedRoll=0;accumulatedPitch=0;stuntsThisJump=0;onStuntCallback=null;onCollisionCallback=null;trackHalfWidth=qe.world.roadWidth/2-qe.vehicle.width/2;constructor(){this.reset()}reset(){this.position.set(0,qe.vehicle.groundSnapY,0),this.rotation.set(0,0,0),this.quaternion.identity(),this.forwardSpeed=0,this.lateralVelocity=0,this.verticalVelocity=0,this.steerAngle=0,this.energy=this.maxEnergy,this.isAirborne=!1,this.isDrifting=!1,this.isBoosting=!1,this.isThrusting=!1,this.isCrashed=!1,this.airTime=0,this.driftDuration=0,this.totalDriftSeconds=0,this.accumulatedRoll=0,this.accumulatedPitch=0,this.stuntsThisJump=0,this.crashesCount=0,this.gatesClearedCount=0}applyUpgrades(e){this.baseTopSpeed=e.topSpeed,this.acceleration=e.acceleration,this.steerSpeed=e.steerSpeed,this.driftLateralFriction=e.driftGrip,this.thrusterLiftAccel=e.thrusterLift,this.passiveRechargeRate=e.rechargeRate,this.maxEnergy=e.maxEnergy,this.energy=Math.min(this.energy,this.maxEnergy)}update(e,t){if(this.isCrashed){this.forwardSpeed=Tt.lerp(this.forwardSpeed,0,5*e),this.position.z+=this.forwardSpeed*e;return}const n=qe,i=t.boost&&this.energy>3;this.isBoosting=i&&this.forwardSpeed>5,this.isBoosting?this.energy=Math.max(0,this.energy-n.energy.boostDrainPerSec*e):this.isThrusting||(this.energy=Math.min(this.maxEnergy,this.energy+this.passiveRechargeRate*e));const r=this.baseTopSpeed*1.34,a=this.isBoosting?r:this.baseTopSpeed,o=this.isBoosting?this.acceleration*1.6:this.acceleration;t.accelerate?this.forwardSpeed=Math.min(a,this.forwardSpeed+o*e):t.brake?this.forwardSpeed>0?this.forwardSpeed=Math.max(0,this.forwardSpeed-n.vehicle.brakingDecel*e):this.forwardSpeed=Math.max(-20,this.forwardSpeed-this.acceleration*.5*e):this.forwardSpeed*=Math.pow(n.vehicle.naturalDrag,e*60),this.isDrifting=t.drift&&this.forwardSpeed>25&&!this.isAirborne;const l=n.vehicle.maxSteerAngle*(this.isDrifting?n.vehicle.driftSteerFactor:1);let c=0;if(t.steerLeft&&(c-=l),t.steerRight&&(c+=l),c!==0?this.steerAngle=Tt.lerp(this.steerAngle,c,this.steerSpeed*e):this.steerAngle=Tt.lerp(this.steerAngle,0,n.vehicle.steerReturnSpeed*e),this.isDrifting?(this.driftDuration+=e,this.totalDriftSeconds+=e,this.lateralVelocity+=this.steerAngle*45*e):(this.driftDuration=0,this.lateralVelocity*=Math.pow(this.driftLateralFriction,e*60)),this.isAirborne){this.airTime+=e;const h=t.thruster&&this.energy>5;this.isThrusting=h,this.isThrusting?(this.energy=Math.max(0,this.energy-n.energy.thrustDrainPerSec*e),this.verticalVelocity=Math.min(n.flight.thrusterMaxRiseSpeed,this.verticalVelocity+this.thrusterLiftAccel*e)):this.verticalVelocity-=n.flight.gravity*e,this.position.y+=this.verticalVelocity*e,t.steerLeft&&(this.position.x+=16*e),t.steerRight&&(this.position.x-=16*e),this.enforceTrackBoundaries();let u=0;t.rollLeft?u=n.flight.airRollSpeed*e:t.rollRight&&(u=-6.8*e),this.rotation.z+=u,this.accumulatedRoll+=Math.abs(u);let f=0;t.accelerate?f=-4.5*e:t.brake&&(f=n.flight.airPitchSpeed*e),this.rotation.x+=f,this.accumulatedPitch+=Math.abs(f),this.accumulatedRoll>=n.flight.stuntThresholdAngle&&(this.accumulatedRoll-=Math.PI*2,this.totalBarrelRolls++,this.stuntsThisJump++,this.onStuntCallback&&this.onStuntCallback({type:"BARREL_ROLL",points:n.scoring.barrelRollPoints,label:"⚡ BARREL ROLL 360°!"})),this.accumulatedPitch>=n.flight.stuntThresholdAngle&&(this.accumulatedPitch-=Math.PI*2,this.totalFlips++,this.stuntsThisJump++,this.onStuntCallback&&this.onStuntCallback({type:"AERIAL_FLIP",points:n.scoring.flipPoints,label:"🌀 AERIAL FLIP 360°!"})),this.position.y<=n.vehicle.groundSnapY&&this.completeLanding()}else{const h=Math.min(1,Math.abs(this.forwardSpeed)/30),u=-this.steerAngle*this.forwardSpeed*.65*h;this.position.x+=(u+this.lateralVelocity)*e,this.enforceTrackBoundaries(),this.rotation.y=Tt.lerp(this.rotation.y,-this.steerAngle*.45,12*e),this.rotation.z=Tt.lerp(this.rotation.z,0,15*e),this.rotation.x=Tt.lerp(this.rotation.x,0,15*e),this.position.y=n.vehicle.groundSnapY,this.verticalVelocity=0}this.position.z+=this.forwardSpeed*e,this.quaternion.setFromEuler(this.rotation)}launchOffRamp(e=3.5){this.isAirborne||(this.isAirborne=!0,this.position.y+=.4,this.verticalVelocity=qe.flight.rampLaunchVerticalSpeed,this.forwardSpeed*=qe.flight.rampLaunchForwardMult,this.accumulatedRoll=0,this.accumulatedPitch=0,this.stuntsThisJump=0,this.airTime=0)}completeLanding(){const e=qe;this.isAirborne=!1,this.position.y=e.vehicle.groundSnapY,this.verticalVelocity=0;const t=Math.atan2(Math.sin(this.rotation.z),Math.cos(this.rotation.z)),n=Math.atan2(Math.sin(this.rotation.x),Math.cos(this.rotation.x)),i=Math.abs(t)<=e.flight.landingMaxRollSafe,r=Math.abs(n)<=e.flight.landingMaxPitchSafe;if(i&&r)this.cleanLandingsCount++,this.onStuntCallback&&this.onStuntCallback({type:"CLEAN_LANDING",points:e.scoring.cleanLandingBonus,label:"✨ CLEAN LANDING!"});else if(Math.abs(t)>Math.PI*.65){this.triggerCrash();return}else this.forwardSpeed*=.7,this.onStuntCallback&&this.onStuntCallback({type:"ROUGH_LANDING",points:50,label:"⚠️ ROUGH LANDING"});this.rotation.z=0,this.rotation.x=0,this.accumulatedRoll=0,this.accumulatedPitch=0,this.airTime=0}triggerCrash(){this.isCrashed||(this.isCrashed=!0,this.crashesCount++,this.onStuntCallback&&this.onStuntCallback({type:"CRASH",points:0,label:"💥 CRASH OVERLOAD!"}))}recoverFromCrash(){this.isCrashed=!1,this.position.y=qe.vehicle.groundSnapY,this.position.x=0,this.rotation.set(0,0,0),this.forwardSpeed=25,this.verticalVelocity=0,this.isAirborne=!1}enforceTrackBoundaries(){this.position.x<-this.trackHalfWidth?(this.position.x=-this.trackHalfWidth,this.lateralVelocity=8,this.forwardSpeed*=.78,this.onCollisionCallback&&this.onCollisionCallback("barrier")):this.position.x>this.trackHalfWidth&&(this.position.x=this.trackHalfWidth,this.lateralVelocity=-8,this.forwardSpeed*=.78,this.onCollisionCallback&&this.onCollisionCallback("barrier"))}addEnergyBonus(e){this.energy=Math.min(this.maxEnergy,this.energy+e)}getSpeedKmH(){return Math.round(this.forwardSpeed*3.6)}}const Xn={neon_dusk:{id:"neon_dusk",name:"Neon Skyline (Dusk)",tagline:"High-speed elevated expressway through a twilight cyberpunk metropolis.",skyColor:787992,fogColor:1182756,fogDensity:.0035,sunColor:16729224,sunIntensity:2.2,sunPosition:[30,40,-40],ambientColor:1708590,ambientIntensity:1.4,roadColor:527380,roadMarkingsColor:61695,barrierColor:922658,barrierGlowColor:53503,rampColor:1449518,rampGlowColor:16711799,obstacleColor:16722507,obstacleEmissive:16711731,hasRain:!1,hasDust:!1,skylineStyle:"cyber"},canyon_express:{id:"canyon_express",name:"Canyon Expressway",tagline:"Sun-drenched sandstone canyon highway with desert thermal updrafts.",skyColor:2362886,fogColor:2232842,fogDensity:.003,sunColor:16755268,sunIntensity:2.6,sunPosition:[40,50,-30],ambientColor:3547156,ambientIntensity:1.5,roadColor:1577744,roadMarkingsColor:16755200,barrierColor:2234386,barrierGlowColor:16742144,rampColor:2759700,rampGlowColor:16755200,obstacleColor:15094016,obstacleEmissive:16727296,hasRain:!1,hasDust:!0,skylineStyle:"canyon"},monsoon_highway:{id:"monsoon_highway",name:"Monsoon Highway",tagline:"Storm-swept wet expressway with falling rain, mist, and road spray.",skyColor:264208,fogColor:528414,fogDensity:.005,sunColor:6333946,sunIntensity:1.5,sunPosition:[10,45,-20],ambientColor:792102,ambientIntensity:1.2,roadColor:329484,roadMarkingsColor:3718648,barrierColor:660512,barrierGlowColor:165063,rampColor:1055272,rampGlowColor:61695,obstacleColor:15680580,obstacleEmissive:14427686,hasRain:!0,hasDust:!1,skylineStyle:"monsoon"},orbital_skyway:{id:"orbital_skyway",name:"Orbital Skyway",tagline:"Zero-gravity elevated highway suspended in low planetary orbit.",skyColor:131848,fogColor:395284,fogDensity:.0028,sunColor:12616956,sunIntensity:2.4,sunPosition:[0,60,-50],ambientColor:1446444,ambientIntensity:1.3,roadColor:395280,roadMarkingsColor:11544319,barrierColor:856096,barrierGlowColor:9647082,rampColor:1578032,rampGlowColor:14239471,obstacleColor:16007006,obstacleEmissive:14753096,hasRain:!1,hasDust:!1,skylineStyle:"orbital"}};class kg{group;zStart=0;zEnd=0;ramps=[];pickups=[];stuntGates=[];obstacles=[];constructor(e){this.group=e}}class Gg{root;currentTheme=Xn.neon_dusk;trackSeed=442001;segments=[];segmentLength=qe.world.segmentLength;activeSegmentCount=qe.world.activeSegments;roadMaterial;markingMaterial;barrierMaterial;barrierGlowMaterial;rampMaterial;rampGlowMaterial;pickupMaterial;gateMaterial;obstacleMaterial;skylineGroup;weatherGroup;rainGeometry=null;rainPositions=null;rainPoints=null;rainCount=1200;lightningIntensity=0;lightningTimer=0;constructor(){this.root=new rt,this.skylineGroup=new rt,this.weatherGroup=new rt,this.root.add(this.skylineGroup,this.weatherGroup),this.roadMaterial=new xt({color:this.currentTheme.roadColor,roughness:.65,metalness:.25}),this.markingMaterial=new Lt({color:this.currentTheme.roadMarkingsColor}),this.barrierMaterial=new xt({color:this.currentTheme.barrierColor,roughness:.5,metalness:.6}),this.barrierGlowMaterial=new Lt({color:this.currentTheme.barrierGlowColor}),this.rampMaterial=new xt({color:this.currentTheme.rampColor,roughness:.3,metalness:.7}),this.rampGlowMaterial=new Lt({color:this.currentTheme.rampGlowColor}),this.pickupMaterial=new xt({color:61695,emissive:61695,emissiveIntensity:2.2,roughness:.1,metalness:.8}),this.gateMaterial=new Lt({color:qe.world.colors.stuntRing}),this.obstacleMaterial=new xt({color:this.currentTheme.obstacleColor,emissive:this.currentTheme.obstacleEmissive,emissiveIntensity:1.6,roughness:.2,metalness:.8}),this.setupWeather(),this.buildSkyline(),this.initializeSegments()}setupWeather(){this.rainPositions=new Float32Array(this.rainCount*3);for(let t=0;t<this.rainCount;t++)this.rainPositions[t*3]=(Math.random()-.5)*50,this.rainPositions[t*3+1]=Math.random()*30+.5,this.rainPositions[t*3+2]=(Math.random()-.5)*80;this.rainGeometry=new pt,this.rainGeometry.setAttribute("position",new wt(this.rainPositions,3));const e=new Ha({color:8965375,size:.28,transparent:!0,opacity:.65});this.rainPoints=new Ql(this.rainGeometry,e),this.rainPoints.visible=!1,this.weatherGroup.add(this.rainPoints)}setEnvironment(e){this.currentTheme=e,this.roadMaterial.color.setHex(e.roadColor),this.roadMaterial.roughness=e.hasRain?.2:.65,this.roadMaterial.metalness=e.hasRain?.5:.25,this.markingMaterial.color.setHex(e.roadMarkingsColor),this.barrierMaterial.color.setHex(e.barrierColor),this.barrierGlowMaterial.color.setHex(e.barrierGlowColor),this.rampMaterial.color.setHex(e.rampColor),this.rampGlowMaterial.color.setHex(e.rampGlowColor),this.obstacleMaterial.color.setHex(e.obstacleColor),this.obstacleMaterial.emissive.setHex(e.obstacleEmissive),this.rainPoints&&(this.rainPoints.visible=e.hasRain),this.buildSkyline()}buildSkyline(){for(;this.skylineGroup.children.length>0;)this.skylineGroup.remove(this.skylineGroup.children[0]);const e=this.currentTheme.skylineStyle;if(e==="canyon"){const t=new xt({color:4004880,roughness:.9,metalness:.1});for(let n=0;n<45;n++){const r=(n%2===0?-1:1)*(Math.random()*90+40),a=n/45*800-100,o=Math.random()*40+25,l=Math.random()*70+35,c=new be(new tn(o*.7,o,l,6),t);c.position.set(r,l/2-10,a),this.skylineGroup.add(c)}}else if(e==="orbital"){const t=new xt({color:791588,roughness:.3,metalness:.8}),n=new Lt({color:2245887,wireframe:!0});for(let i=0;i<35;i++){const a=(i%2===0?-1:1)*(Math.random()*100+45),o=i/35*800-100,l=new rt;l.position.set(a,Math.random()*60+20,o);const c=new be(new Ji(10,12,12),t),h=new be(new Je(24,.4,8),n);h.position.x=-16;const u=h.clone();u.position.x=16,l.add(c,h,u),this.skylineGroup.add(l)}}else{const t=e==="monsoon"?60:75,n=new xt({color:e==="monsoon"?396312:659484,roughness:.7,metalness:.5}),i=new Lt({color:e==="monsoon"?3718648:this.currentTheme.roadMarkingsColor,transparent:!0,opacity:.6});for(let r=0;r<t;r++){const o=(r%2===0?-1:1)*(Math.random()*85+35),l=r/t*800-100,c=Math.random()*18+12,h=Math.random()*95+40,u=Math.random()*18+12,f=new be(new Je(1,1,1),n);if(f.scale.set(c,h,u),f.position.set(o,h/2-20,l),this.skylineGroup.add(f),Math.random()>.4){const d=new be(new tn(.2,1.2,16,6),i);d.position.set(o,h-12,l),this.skylineGroup.add(d)}}}}initializeSegments(){for(let e=0;e<this.activeSegmentCount;e++){const t=new rt;this.root.add(t);const n=new kg(t);this.segments.push(n),this.populateSegment(n,e*this.segmentLength)}}populateSegment(e,t){for(e.zStart=t,e.zEnd=t+this.segmentLength,e.group.position.set(0,0,t);e.group.children.length>0;)e.group.remove(e.group.children[0]);e.ramps=[],e.pickups=[],e.stuntGates=[],e.obstacles=[];const n=qe.world.roadWidth,i=this.segmentLength,r=new Je(n,.8,i),a=new be(r,this.roadMaterial);a.position.set(0,0,i/2),a.receiveShadow=!0,e.group.add(a);const o=4,l=n/o;for(let m=1;m<o;m++){const p=-n/2+m*l,b=8,S=5,_=(i-b*S)/b;for(let P=0;P<b;P++){const A=new Ri(.25,S),C=new be(A,this.markingMaterial);C.rotation.x=-Math.PI/2,C.position.set(p,.41,P*(S+_)+S/2),e.group.add(C)}}const c=new Je(.6,1.4,i),h=new Je(.2,.15,i),u=new be(c,this.barrierMaterial);u.position.set(-n/2+.3,.7,i/2);const f=new be(h,this.barrierGlowMaterial);f.position.set(-n/2+.3,1.45,i/2);const d=new be(c,this.barrierMaterial);d.position.set(n/2-.3,.7,i/2);const g=new be(h,this.barrierGlowMaterial);g.position.set(n/2-.3,1.45,i/2),e.group.add(u,f,d,g);const v=this.createGantry(n,i/2);if(e.group.add(v),t>100){const p=((Math.floor(t/this.segmentLength)+17)*9301+this.trackSeed%49297)%233280;if(p%3!==0&&p%2===1){const _=(p%3-1)*6,P=this.createRamp(_,i*.4,t);e.ramps.push(P),e.group.add(P.mesh);const A=this.createStuntGate(_,i*.75,7.5,t);e.stuntGates.push(A),e.group.add(A.mesh)}else{const _=(p%3-1)*6,P=this.createObstacle(_,i*.5,t);e.obstacles.push(P),e.group.add(P.mesh)}const S=((p+1)%3-1)*6;for(let _=0;_<3;_++){const P=i*.25+_*12,A=this.createPickup(S,P,1.1,t);e.pickups.push(A),e.group.add(A.mesh)}}}createGantry(e,t){const n=new rt;n.position.set(0,0,t);const i=new Je(.8,12,.8),r=new be(i,this.barrierMaterial);r.position.set(-e/2-.4,6,0);const a=r.clone();a.position.x=e/2+.4;const o=new Je(e+2,.8,.8),l=new be(o,this.barrierMaterial);l.position.set(0,11.6,0);const c=new Je(e,.15,.85),h=new be(c,this.markingMaterial);return h.position.set(0,11.6,0),n.add(r,a,l,h),n}createRamp(e,t,n){const i=new rt;i.position.set(e,.4,t);const r=12,a=4.2,o=3,l=new ac;l.moveTo(0,0),l.lineTo(0,o),l.lineTo(r,0),l.closePath();const c=new $a(l,{depth:a,bevelEnabled:!1});c.center();const h=new be(c,this.rampMaterial);h.rotation.y=-Math.PI/2,i.add(h);const u=new Je(a*.7,.1,.5);for(let g=0;g<3;g++){const v=new be(u,this.rampGlowMaterial);v.position.set(0,(g+1)*.75,(g-1)*3),v.rotation.x=.25,i.add(v)}const f=n+t,d=new wn(new L(e-a/2,0,f-r/2),new L(e+a/2,o,f+r/2));return{mesh:i,box:d,zStart:f-r/2,zEnd:f+r/2,height:o}}createPickup(e,t,n,i){const r=new rt;r.position.set(e,n,t);const a=new Ka(.75),o=new be(a,this.pickupMaterial);r.add(o);const l=new es(.9,1.05,16),c=new be(l,this.barrierGlowMaterial);return c.rotation.x=Math.PI/2,r.add(c),{mesh:r,pos:new L(e,n,i+t),active:!0,radius:1.4}}createStuntGate(e,t,n,i){const r=new rt;r.position.set(e,n,t);const a=new Za(3.6,.3,8,24),o=new be(a,this.gateMaterial);return r.add(o),{mesh:r,pos:new L(e,n,i+t),passed:!1,radius:3.6}}createObstacle(e,t,n){const i=new rt;i.position.set(e,.4,t);const r=3.6,a=1.8,o=new Je(r,a,1),l=new be(o,this.obstacleMaterial);l.position.y=a/2,i.add(l);const c=new Ji(.3,8,8),h=new be(c,new Lt({color:16777215}));h.position.y=a+.3,i.add(h);const u=n+t,f=new wn(new L(e-r/2,0,u-.8),new L(e+r/2,a,u+.8));return{mesh:i,box:f,active:!0}}update(e,t){for(let n=0;n<this.segments.length;n++){const i=this.segments[n];if(e-i.zEnd>50){let r=0;for(let a=0;a<this.segments.length;a++)this.segments[a].zEnd>r&&(r=this.segments[a].zEnd);this.populateSegment(i,r)}}for(let n=0;n<this.segments.length;n++){const i=this.segments[n];for(let r=0;r<i.pickups.length;r++){const a=i.pickups[r];a.active&&(a.mesh.rotation.y+=2.5*t,a.mesh.position.y=1.1+Math.sin(Date.now()*.004+r)*.25)}for(let r=0;r<i.stuntGates.length;r++)i.stuntGates[r].mesh.rotation.z+=.8*t}if(this.currentTheme.hasRain&&this.rainPositions&&this.rainGeometry){for(let n=0;n<this.rainCount;n++)this.rainPositions[n*3+1]-=45*t,this.rainPositions[n*3+1]<0&&(this.rainPositions[n*3+1]=25+Math.random()*5);this.rainGeometry.attributes.position.needsUpdate=!0,this.weatherGroup.position.z=e,this.lightningTimer+=t,this.lightningTimer>7+Math.random()*5&&(this.lightningTimer=0,this.lightningIntensity=1),this.lightningIntensity>0&&(this.lightningIntensity=Math.max(0,this.lightningIntensity-6*t))}this.skylineGroup.position.z=e-200}checkCollisions(e,t,n,i,r,a){for(let o=0;o<this.segments.length;o++){const l=this.segments[o];if(!(e.z<l.zStart-20||e.z>l.zEnd+20)){for(let c=0;c<l.ramps.length;c++){const h=l.ramps[c];e.z>=h.zStart&&e.z<=h.zEnd&&Math.abs(e.x-h.mesh.position.x)<2.2&&e.y<=1.5&&r(h)}for(let c=0;c<l.pickups.length;c++){const h=l.pickups[c];h.active&&e.distanceTo(h.pos)<h.radius+1.2&&(h.active=!1,h.mesh.visible=!1,n(h.pos))}for(let c=0;c<l.stuntGates.length;c++){const h=l.stuntGates[c];if(!h.passed&&Math.abs(e.z-h.pos.z)<2.5){const u=e.x-h.pos.x,f=e.y-h.pos.y;Math.sqrt(u*u+f*f)<h.radius&&(h.passed=!0,i(h.pos))}}for(let c=0;c<l.obstacles.length;c++){const h=l.obstacles[c];h.active&&h.box.intersectsBox(t)&&(h.active=!1,h.mesh.visible=!1,a())}}}}reset(e){e!==void 0&&(this.trackSeed=e);for(let t=0;t<this.segments.length;t++)this.populateSegment(this.segments[t],t*this.segmentLength)}}class zg{root;maxParticles;positions;colors;sizes;geometry;pointsMesh;pool=[];activeCount=0;speedLinesMesh=null;constructor(e=1e3){this.root=new rt,this.maxParticles=e,this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e);for(let a=0;a<e;a++)this.pool.push({pos:new L,vel:new L,color:new ke,size:1,life:0,maxLife:1});this.geometry=new pt,this.geometry.setAttribute("position",new wt(this.positions,3)),this.geometry.setAttribute("color",new wt(this.colors,3)),this.geometry.setAttribute("size",new wt(this.sizes,1));const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d");if(n){const a=n.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(0,240,255,0.8)"),a.addColorStop(.7,"rgba(0,180,255,0.2)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,64,64)}const i=new ec(t),r=new Ha({size:.8,map:i,transparent:!0,blending:qi,vertexColors:!0,depthWrite:!1});this.pointsMesh=new Ql(this.geometry,r),this.root.add(this.pointsMesh),this.setupSpeedLines()}setupSpeedLines(){const t=new Float32Array(360);for(let r=0;r<60;r++){const a=(Math.random()-.5)*30,o=Math.random()*12+.5,l=Math.random()*80,c=4+Math.random()*6,h=r*6;t[h]=a,t[h+1]=o,t[h+2]=l,t[h+3]=a,t[h+4]=o,t[h+5]=l+c}const n=new pt;n.setAttribute("position",new wt(t,3));const i=new za({color:61695,transparent:!0,opacity:0,blending:qi});this.speedLinesMesh=new jl(n,i),this.root.add(this.speedLinesMesh)}spawn(e,t,n,i,r,a,o,l,c){if(this.activeCount>=this.maxParticles)return;const h=this.pool[this.activeCount];h.pos.set(e,t,n),h.vel.set(i,r,a),h.color.setHex(o),h.size=l,h.life=c,h.maxLife=c,this.activeCount++}emitThrusterPlume(e,t,n){const i=n?4:2,r=n?16733440:61695,a=n?-18:-10;for(let o=0;o<i;o++)this.spawn(e.x+(Math.random()-.5)*.15,e.y+(Math.random()-.5)*.15,e.z+(Math.random()-.5)*.1,(Math.random()-.5)*2,(Math.random()-.5)*2,a+(Math.random()-.5)*4,r,n?1.4:.8,.28),this.spawn(t.x+(Math.random()-.5)*.15,t.y+(Math.random()-.5)*.15,t.z+(Math.random()-.5)*.1,(Math.random()-.5)*2,(Math.random()-.5)*2,a+(Math.random()-.5)*4,r,n?1.4:.8,.28)}emitDriftSmoke(e,t,n){for(let i=0;i<2;i++)this.spawn(e+(Math.random()-.5)*1.6,t+.15,n+(Math.random()-.5)*.5,(Math.random()-.5)*3,Math.random()*2+1,(Math.random()-.5)*3,5605546,1.2,.45)}emitLandingImpact(e,t){const n=t?35:55,i=t?61695:16733440;for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=Math.random()*14+6;this.spawn(e.x,e.y+.1,e.z,Math.cos(a)*o,Math.random()*6+2,Math.sin(a)*o,i,1.5,.45)}}emitPickupExplosion(e){for(let t=0;t<25;t++){const n=Math.random()*Math.PI*2,i=(Math.random()-.5)*10,r=Math.random()*8+4;this.spawn(e.x,e.y,e.z,Math.cos(n)*r,i,Math.sin(n)*r,61695,1.8,.5)}}emitGatePass(e){for(let t=0;t<30;t++){const n=Math.random()*Math.PI*2,i=6;this.spawn(e.x+Math.cos(n)*i,e.y+Math.sin(n)*i,e.z,(Math.random()-.5)*4,(Math.random()-.5)*4,Math.random()*8+4,16711799,1.6,.4)}}update(e,t,n){const i=this.geometry.attributes.position,r=this.geometry.attributes.color,a=this.geometry.attributes.size;let o=0;for(let l=0;l<this.activeCount;l++){const c=this.pool[l];if(c.life-=e,c.life>0){c.pos.addScaledVector(c.vel,e);const h=c.life/c.maxLife;if(this.positions[o*3]=c.pos.x,this.positions[o*3+1]=c.pos.y,this.positions[o*3+2]=c.pos.z,this.colors[o*3]=c.color.r*h,this.colors[o*3+1]=c.color.g*h,this.colors[o*3+2]=c.color.b*h,this.sizes[o]=c.size*(.4+.6*h),o!==l){const u=this.pool[o];this.pool[o]=c,this.pool[l]=u}o++}}this.activeCount=o;for(let l=o;l<Math.min(this.maxParticles,o+30);l++)this.sizes[l]=0;if(i.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,this.geometry.setDrawRange(0,this.activeCount),this.speedLinesMesh){const l=Math.max(0,Math.min(1,(n-50)/50));this.speedLinesMesh.material.opacity=l*.45,this.speedLinesMesh.position.z=t.z-20}}setMaxParticles(e){this.maxParticles=Math.min(e,this.pool.length)}}const Nr="aerorush_skybound_records_v1";class Hg{currentScore=0;comboMultiplier=1;maxComboAchieved=1;distanceMeters=0;stuntsCount=0;cleanLandingsCount=0;energyPickupsCount=0;maxSpeedKmH=0;comboTimer=0;lastZPos=0;onTrickAnnouncement=null;onComboChange=null;constructor(){this.reset()}reset(){this.currentScore=0,this.comboMultiplier=1,this.maxComboAchieved=1,this.distanceMeters=0,this.stuntsCount=0,this.cleanLandingsCount=0,this.energyPickupsCount=0,this.maxSpeedKmH=0,this.comboTimer=0,this.lastZPos=0}update(e,t,n,i){if(t>this.lastZPos){const r=t-this.lastZPos;this.distanceMeters+=r,this.currentScore+=Math.floor(r*qe.scoring.distPointsPerMeter),this.lastZPos=t}if(n>this.maxSpeedKmH&&(this.maxSpeedKmH=n),i){const r=Math.floor(qe.scoring.driftPointsPerSec*e*this.comboMultiplier);this.currentScore+=r,this.refreshCombo()}this.comboMultiplier>1&&(this.comboTimer-=e,this.comboTimer<=0&&this.resetCombo())}addStuntPoints(e,t){this.stuntsCount++,this.bumpCombo();const n=Math.floor(e*this.comboMultiplier);this.currentScore+=n,this.onTrickAnnouncement&&this.onTrickAnnouncement(t,n)}addCleanLandingPoints(e){this.cleanLandingsCount++,this.bumpCombo();const t=Math.floor(e*this.comboMultiplier);this.currentScore+=t,this.onTrickAnnouncement&&this.onTrickAnnouncement("✨ CLEAN LANDING!",t)}addPickupPoints(){this.energyPickupsCount++,this.bumpCombo();const e=Math.floor(qe.scoring.energyPickupPoints*this.comboMultiplier);this.currentScore+=e,this.onTrickAnnouncement&&this.onTrickAnnouncement("⚡ ENERGY CELL!",e)}addGatePoints(){this.bumpCombo(1);const e=Math.floor(qe.scoring.stuntGatePoints*this.comboMultiplier);this.currentScore+=e,this.onTrickAnnouncement&&this.onTrickAnnouncement("🎯 STUNT GATE CLEARED!",e)}onCrashOrCollision(){this.resetCombo()}bumpCombo(e){const t=e||qe.scoring.comboStep;this.comboMultiplier=Math.min(qe.scoring.comboMax,+(this.comboMultiplier+t).toFixed(1)),this.comboTimer=qe.scoring.comboDecayTime,this.comboMultiplier>this.maxComboAchieved&&(this.maxComboAchieved=this.comboMultiplier),this.onComboChange&&this.onComboChange(this.comboMultiplier)}refreshCombo(){this.comboTimer=qe.scoring.comboDecayTime}resetCombo(){this.comboMultiplier>1&&(this.comboMultiplier=1,this.comboTimer=0,this.onComboChange&&this.onComboChange(1))}finalizeSummary(){const e=this.getRecords(),t=e.length===0||this.currentScore>e[0].score;return this.currentScore>0&&this.saveRecord({score:this.currentScore,distance:Math.round(this.distanceMeters),stunts:this.stuntsCount,date:new Date().toLocaleDateString()}),{finalScore:this.currentScore,distanceMeters:Math.round(this.distanceMeters),stuntsExecuted:this.stuntsCount,cleanLandings:this.cleanLandingsCount,energyPickups:this.energyPickupsCount,maxSpeedKmH:this.maxSpeedKmH,maxCombo:this.maxComboAchieved,isNewRecord:t&&this.currentScore>0}}getRecords(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(Nr);if(e)return JSON.parse(e)}}catch(e){console.warn("Could not read records from localStorage:",e)}return[{score:14500,distance:1850,stunts:12,date:"PILOT A1"},{score:9800,distance:1240,stunts:8,date:"PILOT X"},{score:6200,distance:890,stunts:5,date:"PILOT V"}]}saveRecord(e){try{if(typeof localStorage<"u"){const t=this.getRecords();t.push(e),t.sort((i,r)=>r.score-i.score);const n=t.slice(0,5);localStorage.setItem(Nr,JSON.stringify(n))}}catch(t){console.warn("Could not save record to localStorage:",t)}}clearRecords(){try{typeof localStorage<"u"&&localStorage.removeItem(Nr)}catch(e){console.warn("Could not clear records:",e)}}}class Vg{camera;currentPos=new L(0,4,-10);currentLookAt=new L(0,1.2,10);shakeIntensity=0;shakeTimer=0;reducedMotion=!1;constructor(e=60,t=16/9,n=.2,i=600){this.camera=new Dt(e,t,n,i),this.camera.position.copy(this.currentPos)}update(e,t,n,i,r,a){const o=60+t*10+(n?6:0);this.camera.fov=Tt.lerp(this.camera.fov,o,6*a),this.camera.updateProjectionMatrix();const l=r?3.6:2.8,c=n?-7.8:-7,h=-i*1.5,u=new L(e.x*.75+h,e.y+l,e.z+c),f=new L(e.x*.4,e.y+1.2,e.z+12),d=1-Math.exp(-12*a),g=1-Math.exp(-15*a);if(this.currentPos.lerp(u,d),this.currentLookAt.lerp(f,g),!this.reducedMotion&&this.shakeTimer>0){this.shakeTimer-=a;const v=Math.max(0,this.shakeTimer),m=(Math.random()-.5)*this.shakeIntensity*v,p=(Math.random()-.5)*this.shakeIntensity*v;this.camera.position.set(this.currentPos.x+m,this.currentPos.y+p,this.currentPos.z)}else this.camera.position.copy(this.currentPos);this.camera.lookAt(this.currentLookAt)}triggerImpactShake(e=.5,t=.25){this.reducedMotion||(this.shakeIntensity=e,this.shakeTimer=t)}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}}class Wg{root;camera;car;turntable;turntablePlatform;rotationAngle=0;isAutoRotating=!0;isPointerDown=!1;prevPointerX=0;prevPointerY=0;cameraDistance=7.5;cameraPitch=.35;constructor(e){this.root=new rt,this.car=e,this.camera=new Dt(50,window.innerWidth/window.innerHeight,.1,100),this.turntable=new rt,this.root.add(this.turntable);const t=new tn(4.5,4.8,.3,36),n=new xt({color:791068,roughness:.2,metalness:.8});this.turntablePlatform=new be(t,n),this.turntablePlatform.position.y=-.15,this.turntablePlatform.receiveShadow=!0,this.turntable.add(this.turntablePlatform);const i=new es(4.2,4.38,36),r=new Lt({color:61695,side:Nt}),a=new be(i,r);a.rotation.x=-Math.PI/2,a.position.y=.01,this.turntable.add(a);const o=new Zu(20,20,61695,1318960);o.position.y=-.16,this.root.add(o);const l=new Aa(16777215,2.5);l.position.set(5,8,5);const c=new Aa(61695,3);c.position.set(-6,4,-5);const h=new $u(1582136,1.2);this.root.add(l,c,h),this.setupInteractivity(),this.updateCamera()}activate(){this.root.visible=!0,this.turntable.add(this.car.root),this.car.root.position.set(0,0,0),this.car.root.rotation.set(0,0,0),this.isAutoRotating=!0}deactivate(){this.root.visible=!1,this.turntable.remove(this.car.root)}setupInteractivity(){const e=document.getElementById("webgl-canvas");e&&(e.addEventListener("pointerdown",t=>{this.root.visible&&(this.isPointerDown=!0,this.isAutoRotating=!1,this.prevPointerX=t.clientX,this.prevPointerY=t.clientY)}),window.addEventListener("pointermove",t=>{if(!this.root.visible||!this.isPointerDown)return;const n=t.clientX-this.prevPointerX,i=t.clientY-this.prevPointerY;this.prevPointerX=t.clientX,this.prevPointerY=t.clientY,this.rotationAngle+=n*.008,this.cameraPitch=Math.max(.1,Math.min(.8,this.cameraPitch-i*.005)),this.updateCamera()}),window.addEventListener("pointerup",()=>{this.isPointerDown=!1}),e.addEventListener("wheel",t=>{this.root.visible&&(this.cameraDistance=Math.max(4.5,Math.min(12,this.cameraDistance+t.deltaY*.005)),this.updateCamera())},{passive:!0}))}updateCamera(){const e=Math.sin(this.rotationAngle)*this.cameraDistance*Math.cos(this.cameraPitch),t=Math.cos(this.rotationAngle)*this.cameraDistance*Math.cos(this.cameraPitch),n=Math.sin(this.cameraPitch)*this.cameraDistance+.8;this.camera.position.set(e,n,t),this.camera.lookAt(0,.6,0)}update(e){this.root.visible&&this.isAutoRotating&&(this.rotationAngle+=.4*e,this.updateCamera())}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}}const Xg=[{id:"titanium",name:"Titanium Graphite",cost:0,desc:"Factory matte graphite composite.",colorHex:1185311},{id:"silver",name:"Pearl Silver",cost:800,desc:"Multi-coat metallic platinum pearl.",colorHex:14213868},{id:"crimson",name:"Crimson Red",cost:1200,desc:"High-gloss racing crimson finish.",colorHex:13373736},{id:"electric",name:"Electric Blue",cost:1500,desc:"Hyper-saturated metallic electric cyan.",colorHex:50431},{id:"white",name:"Pearl White",cost:2e3,desc:"Ultra-pure iridescent pearl enamel.",colorHex:16120060},{id:"solar",name:"Solar Blaze",cost:1200,desc:"Blazing metallic copper-orange.",colorHex:16733440},{id:"violet",name:"Neon Violet",cost:1600,desc:"Deep ultraviolet nebula sheen.",colorHex:11018495},{id:"stealth",name:"Stealth Emerald",cost:2200,desc:"Military stealth metallic emerald.",colorHex:58998}],qg=[{id:"aero",name:"Aero Blade GT",cost:0,desc:"Low-drag aerodynamic disc alloys."},{id:"spoke",name:"Cyber Spoke R",cost:1e3,desc:"Lightweight forged carbon multi-spoke."},{id:"turbine",name:"Turbine Vortex",cost:1800,desc:"Active directional cooling fins."}],_c=[{id:"cyan",name:"Pulse Cyan",cost:0,desc:"Signature electric cyan neon.",colorHex:61695},{id:"orange",name:"Solar Flame",cost:600,desc:"High-intensity amber glow.",colorHex:16737792},{id:"magenta",name:"Neon Magenta",cost:800,desc:"Cyberpunk ultraviolet neon.",colorHex:16711816},{id:"emerald",name:"Bio Emerald",cost:1e3,desc:"Vibrant green neon flood.",colorHex:65382},{id:"ice",name:"Arctic Ice",cost:1200,desc:"Pure cryogenic blue-white glow.",colorHex:8970495}],yc=[{id:"cyan",name:"Hyper Cyan",cost:0,desc:"Classic electric propulsion flame.",colorHex:61695},{id:"solar",name:"Solar Core",cost:700,desc:"Thermal rocket orange exhaust.",colorHex:16733440},{id:"violet",name:"Plasma Violet",cost:900,desc:"Sub-atomic ion violet plume.",colorHex:11150079},{id:"emerald",name:"Antimatter Green",cost:1100,desc:"High-energy exotic particle flame.",colorHex:65399}],vl=[0,500,1200,2400,4500],_l="aerorush_save_v2",yl="2.0.0";class Yg{data;onDataChangedCallbacks=[];constructor(){this.data=this.loadOrDefault()}getDefaultData(){return{version:yl,credits:1200,upgrades:{engine:1,handling:1,thrusters:1,kers:1},cosmetics:{paint:"titanium",wheels:"aero",underglow:"cyan",thruster:"cyan"},unlockedPaints:["titanium","silver"],unlockedWheels:["aero"],unlockedUnderglows:["cyan"],unlockedThrusters:["cyan"],completedMissions:{},unlockedAchievements:[],careerProgress:0,settings:{quality:"medium",masterVolume:.8,musicVolume:.6,sfxVolume:.9,reducedMotion:!1,vibration:!0,touchLayout:"standard"}}}loadOrDefault(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(_l);if(e){const t=JSON.parse(e);if(t&&typeof t.credits=="number")return this.validateAndMigrate(t)}}}catch(e){console.warn("Could not read save data from storage, using defaults:",e)}return this.getDefaultData()}validateAndMigrate(e){const t=this.getDefaultData();return{version:yl,credits:Math.max(0,e.credits??t.credits),upgrades:{engine:Math.min(5,Math.max(1,e.upgrades?.engine??1)),handling:Math.min(5,Math.max(1,e.upgrades?.handling??1)),thrusters:Math.min(5,Math.max(1,e.upgrades?.thrusters??1)),kers:Math.min(5,Math.max(1,e.upgrades?.kers??1))},cosmetics:{paint:e.cosmetics?.paint||"titanium",wheels:e.cosmetics?.wheels||"aero",underglow:e.cosmetics?.underglow||"cyan",thruster:e.cosmetics?.thruster||"cyan"},unlockedPaints:e.unlockedPaints||t.unlockedPaints,unlockedWheels:e.unlockedWheels||t.unlockedWheels,unlockedUnderglows:e.unlockedUnderglows||t.unlockedUnderglows,unlockedThrusters:e.unlockedThrusters||t.unlockedThrusters,completedMissions:e.completedMissions||{},unlockedAchievements:e.unlockedAchievements||[],careerProgress:e.careerProgress??0,settings:{quality:e.settings?.quality||"medium",masterVolume:e.settings?.masterVolume??.8,musicVolume:e.settings?.musicVolume??.6,sfxVolume:e.settings?.sfxVolume??.9,reducedMotion:!!e.settings?.reducedMotion,vibration:e.settings?.vibration!==!1,touchLayout:e.settings?.touchLayout||"standard"}}}save(){try{typeof localStorage<"u"&&localStorage.setItem(_l,JSON.stringify(this.data))}catch(e){console.warn("Failed to save progression data to localStorage:",e)}this.notify()}getData(){return this.data}addCredits(e){return this.data.credits+=Math.max(0,Math.floor(e)),this.save(),this.data.credits}canAfford(e){return this.data.credits>=e}spendCredits(e){return this.canAfford(e)?(this.data.credits-=e,this.save(),!0):!1}upgradeComponent(e){const t=this.data.upgrades[e];if(t>=5)return{success:!1,message:"Component already at maximum level 5!"};const n=vl[t];return this.spendCredits(n)?(this.data.upgrades[e]=t+1,this.save(),{success:!0,message:`Upgraded to Level ${t+1}!`}):{success:!1,message:`Insufficient AeroCredits. Requires ${n.toLocaleString()} AC.`}}getUpgradeCost(e){const t=this.data.upgrades[e];return t<5?vl[t]:null}buyCosmetic(e,t){const n=e==="paint"?"unlockedPaints":e==="wheels"?"unlockedWheels":e==="underglow"?"unlockedUnderglows":"unlockedThrusters",i=this.data[n];return i.includes(t.id)?(this.data.cosmetics[e]=t.id,this.save(),{success:!0,message:`${t.name} equipped!`}):this.spendCredits(t.cost)?(i.push(t.id),this.data.cosmetics[e]=t.id,this.save(),{success:!0,message:`Purchased and equipped ${t.name}!`}):{success:!1,message:`Insufficient AeroCredits. Requires ${t.cost.toLocaleString()} AC.`}}equipCosmetic(e,t){const n=e==="paint"?"unlockedPaints":e==="wheels"?"unlockedWheels":e==="underglow"?"unlockedUnderglows":"unlockedThrusters";return this.data[n].includes(t)?(this.data.cosmetics[e]=t,this.save(),!0):!1}recordMissionComplete(e,t,n){const i=this.data.completedMissions[e],r={bronze:1,silver:2,gold:3};(!i||r[t]>r[i.medal]||n>i.highScore)&&(this.data.completedMissions[e]={medal:i&&r[i.medal]>r[t]?i.medal:t,highScore:Math.max(n,i?.highScore||0)},this.save())}unlockAchievement(e){return this.data.unlockedAchievements.includes(e)?!1:(this.data.unlockedAchievements.push(e),this.save(),!0)}advanceCareerProgress(e){e>this.data.careerProgress&&(this.data.careerProgress=e,this.save())}updateSettings(e){this.data.settings={...this.data.settings,...e},this.save()}resetLocalData(){this.data=this.getDefaultData(),this.save()}onDataChanged(e){return this.onDataChangedCallbacks.push(e),()=>{this.onDataChangedCallbacks=this.onDataChangedCallbacks.filter(t=>t!==e)}}notify(){for(let e=0;e<this.onDataChangedCallbacks.length;e++)try{this.onDataChangedCallbacks[e](this.data)}catch(t){console.error("Error in progression callback:",t)}}getAppliedHandlingModifiers(){const e=this.data.upgrades,t=qe.vehicle,n=qe.energy,i=qe.flight;return{topSpeed:t.baseTopSpeed+(e.engine-1)*3.5,acceleration:t.acceleration+(e.engine-1)*4,steerSpeed:t.steerSpeed+(e.handling-1)*.25,driftGrip:t.driftLateralFriction-(e.handling-1)*.005,thrusterLift:i.thrusterLiftAccel+(e.thrusters-1)*5,rechargeRate:n.passiveRechargeRate+(e.kers-1)*2.5,maxEnergy:n.max+(e.kers-1)*10}}}const ja=[{id:"m1_ignition",title:"Mission 01: Systems Ignition",subtitle:"Calibrate the VANTA XR telemetry on the Neon Dusk expressway.",environmentId:"neon_dusk",stageLength:1200,briefing:{character:"Mira",role:"Chief Aerodynamics Engineer",avatar:"mira",message:"Pilot, welcome to the cockpit. The VANTA XR dual turbines are primed. Accelerate smoothly, maintain lane control, and reach the 1,000-meter marker.",postReactionSuccess:"Telemetry verified! Motor curves and steering response are rock solid. Ready for the canyon run.",postReactionFail:"Watch your line on the track barriers. Keep the throttle engaged and try again."},objectives:[{type:"distance",target:1e3,label:"Reach 1,000m"},{type:"maxSpeed",target:180,label:"Hit 180 km/h"}],medalThresholds:{bronzeScore:1800,silverScore:3200,goldScore:5e3},rewards:{bronzeAC:400,silverAC:700,goldAC:1200}},{id:"m2_canyon_thrust",title:"Mission 02: Canyon Velocity",subtitle:"Harness high-altitude desert thermals and test hyper-boost.",environmentId:"canyon_express",stageLength:1800,briefing:{character:"Eon Vale",role:"Skybound League Founder",avatar:"eon",message:"The Canyon Expressway has long straights and thin air. Hold [SPACE] to boost, collect energy cells, and show me what this machine can really do.",postReactionSuccess:"Spectacular velocity! The press is going to love these numbers. You've earned your race wings.",postReactionFail:"You ran out of boost before the straight ended. Collect those blue energy cells!"},objectives:[{type:"distance",target:1500,label:"Reach 1,500m"},{type:"score",target:4500,label:"Earn 4,500 pts"}],medalThresholds:{bronzeScore:4500,silverScore:7e3,goldScore:1e4},rewards:{bronzeAC:500,silverAC:900,goldAC:1500}},{id:"m3_monsoon_drift",title:"Mission 03: Storm Slider",subtitle:"Master friction management on a rain-drenched monsoon highway.",environmentId:"monsoon_highway",stageLength:2e3,briefing:{character:"Mira",role:"Chief Aerodynamics Engineer",avatar:"mira",message:"Heavy rain cuts tire traction by 25%. Tap [SHIFT] to enter high-speed drifts around corners. Chain your drift points to keep the combo multiplier alive.",postReactionSuccess:"Incredible drift balance! You carved through that water spray like an arrow.",postReactionFail:"The wet asphalt bit back. Counter-steer earlier when initiating drift slides."},objectives:[{type:"driftTime",target:4,label:"Drift for 4.0s total"},{type:"distance",target:1600,label:"Reach 1,600m"}],medalThresholds:{bronzeScore:6e3,silverScore:9500,goldScore:14e3},rewards:{bronzeAC:600,silverAC:1100,goldAC:1800}},{id:"m4_canyon_jumper",title:"Mission 04: Canyon Jumper",subtitle:"Launch off highway ramps and execute flawless clean landings.",environmentId:"canyon_express",stageLength:2400,briefing:{character:"Eon Vale",role:"Skybound League Founder",avatar:"eon",message:"Ramps ahead! Hit them at full speed to launch into the sky. Keep your car level before touching down for the Clean Landing bonus.",postReactionSuccess:"Butter-smooth touchdown! That suspension telemetry is pure art.",postReactionFail:"Rough touchdown! Align your pitch and roll before the wheels hit the tarmac."},objectives:[{type:"stunts",target:1,label:"Complete 1 Ramp Launch"},{type:"cleanLandings",target:1,label:"Perform 1 Clean Landing"},{type:"distance",target:2e3,label:"Reach 2,000m"}],medalThresholds:{bronzeScore:8e3,silverScore:12500,goldScore:18e3},rewards:{bronzeAC:700,silverAC:1300,goldAC:2e3}},{id:"m5_monsoon_acrobat",title:"Mission 05: Aerial Acrobat",subtitle:"Perform 360° Barrel Rolls and fly through mid-air stunt rings.",environmentId:"monsoon_highway",stageLength:2600,briefing:{character:"Mira",role:"Chief Aerodynamics Engineer",avatar:"mira",message:"Once airborne, press [Q] or [E] (or tap Roll) to execute a full 360° barrel roll. Hit [F] for vertical thruster lift to sail right through the stunt gates!",postReactionSuccess:"Flawless roll execution! You made an 1,800-horsepower hypercar dance in mid-air.",postReactionFail:"Don't hesitate on the thrusters. Use [F] in the air to gain altitude for the stunt rings."},objectives:[{type:"stunts",target:2,label:"Complete 2 Barrel Rolls"},{type:"gates",target:2,label:"Clear 2 Stunt Gates"}],medalThresholds:{bronzeScore:1e4,silverScore:16e3,goldScore:23e3},rewards:{bronzeAC:800,silverAC:1500,goldAC:2400}},{id:"m6_orbital_apex",title:"Mission 06: Orbital Apex Championship",subtitle:"The ultimate test on the low-gravity Orbital Skyway.",environmentId:"orbital_skyway",stageLength:3200,briefing:{character:"Eon Vale",role:"Skybound League Founder",avatar:"eon",message:"This is it, pilot. The Orbital Skyway. 3,000 meters above the stratosphere. Zero room for error. Score 15,000+ points and claim the championship trophy!",postReactionSuccess:"LEGENDARY RUN! You've mastered the skies and the highway. You are the Apex Champion of AERORUSH: SKYBOUND!",postReactionFail:"The void was unforgiving. Upgrade your thrusters and handling in the Garage, then reclaim the track."},objectives:[{type:"distance",target:3e3,label:"Cover 3,000m"},{type:"score",target:15e3,label:"Score 15,000 pts"},{type:"zeroCrash",target:0,label:"Zero Overload Crashes"}],medalThresholds:{bronzeScore:15e3,silverScore:22e3,goldScore:3e4},rewards:{bronzeAC:1200,silverAC:2200,goldAC:3500}}];class $g{activeMission=null;startMission(e){const t=ja.find(n=>n.id===e);return this.activeMission=t||null,this.activeMission}getActiveMission(){return this.activeMission}clearActiveMission(){this.activeMission=null}evaluateMission(e){if(!this.activeMission)return null;const t=this.activeMission,n=t.objectives.map(c=>{let h=!1;switch(c.type){case"distance":h=e.distanceM>=c.target;break;case"score":h=e.score>=c.target;break;case"stunts":h=e.stuntsCount>=c.target;break;case"cleanLandings":h=e.cleanLandings>=c.target;break;case"gates":h=e.gatesCleared>=c.target;break;case"driftTime":h=e.driftSeconds>=c.target;break;case"maxSpeed":h=e.maxSpeedKmH>=c.target;break;case"zeroCrash":h=e.crashesCount===0;break}return{label:c.label,completed:h}}),i=n.every(c=>c.completed);let r=null,a=0;(i||e.score>=t.medalThresholds.bronzeScore)&&(e.score>=t.medalThresholds.goldScore&&i?(r="gold",a=t.rewards.goldAC):e.score>=t.medalThresholds.silverScore?(r="silver",a=t.rewards.silverAC):(r="bronze",a=t.rewards.bronzeAC));const o=r!==null,l=o?t.briefing.postReactionSuccess:t.briefing.postReactionFail;return{mission:t,passed:o,medal:r,score:e.score,creditsEarned:a,objectivesStatus:n,feedbackMessage:l}}}const xl="aerorush_player_uid",Ml="aerorush_pilot_callsign",Ur="aerorush_offline_leaderboard";class xc{supabaseUrl;supabaseAnonKey;isConfigured;lastSubmissionTime=0;submissionCooldownMs=5e3;constructor(){this.supabaseUrl="".trim(),this.supabaseAnonKey="".trim(),this.isConfigured=!!(this.supabaseUrl&&this.supabaseAnonKey)}getOrCreatePlayerId(){if(typeof localStorage>"u")return"pilot-anon";let e=localStorage.getItem(xl);return e||(e="plt-"+Math.random().toString(36).substring(2,10)+"-"+Date.now().toString(36),localStorage.setItem(xl,e)),e}getPlayerName(){return typeof localStorage>"u"?"PILOT 01":localStorage.getItem(Ml)||"PILOT 01"}setPlayerName(e){const t=this.sanitizePlayerName(e);return typeof localStorage<"u"&&localStorage.setItem(Ml,t),t}sanitizePlayerName(e){if(!e)return"PILOT 01";let t=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,"").replace(/<[^>]*>/g,"").replace(/[^\w\s\-_]/g,"").trim();return t.length===0&&(t="PILOT 01"),t.length>15&&(t=t.substring(0,15)),t.toUpperCase()}generateVerificationToken(e){const n=`${e.playerName}:${e.score}:${e.distanceMeters}:${e.environmentId}:AERORUSH_XR_SIG_2026`;let i=0;for(let r=0;r<n.length;r++){const a=n.charCodeAt(r);i=(i<<5)-i+a,i|=0}return"sig_"+Math.abs(i).toString(16)}validateSubmission(e){return e.score<0||e.score>1e7?{valid:!1,reason:"Score out of valid bounds."}:e.distanceMeters<0||e.distanceMeters>5e5?{valid:!1,reason:"Distance out of physical limits."}:e.maxSpeedKmH<0||e.maxSpeedKmH>650?{valid:!1,reason:"Max speed telemetries invalid."}:{valid:!0}}async submitScore(e){const t=this.validateSubmission(e);if(!t.valid)return{success:!1,message:t.reason||"Invalid telemetry data"};const n=Date.now();if(n-this.lastSubmissionTime<this.submissionCooldownMs)return{success:!1,message:"Please wait a moment between score transmissions."};this.lastSubmissionTime=n;const i=this.getOrCreatePlayerId(),r=this.sanitizePlayerName(e.playerName),a=this.generateVerificationToken(e),o=e.challengeType||"all_time",l={playerId:i,playerName:r,score:Math.floor(e.score),distanceMeters:Math.floor(e.distanceMeters),maxSpeedKmH:Math.floor(e.maxSpeedKmH),stuntsExecuted:e.stuntsExecuted||0,environmentId:e.environmentId,challengeType:o,challengeDate:e.challengeDate,createdAt:new Date().toISOString()};if(this.saveToOfflineStore(l),this.isConfigured)try{const c=new AbortController,h=setTimeout(()=>c.abort(),6e3),u=await fetch(`${this.supabaseUrl}/rest/v1/leaderboards`,{method:"POST",headers:{"Content-Type":"application/json",apikey:this.supabaseAnonKey,Authorization:`Bearer ${this.supabaseAnonKey}`,Prefer:"return=representation"},body:JSON.stringify({player_id:l.playerId,player_name:l.playerName,score:l.score,distance_meters:l.distanceMeters,max_speed_kmh:l.maxSpeedKmH,stunts_count:l.stuntsExecuted,environment_id:l.environmentId,challenge_type:l.challengeType,challenge_date:l.challengeDate,verification_hash:a}),signal:c.signal});return clearTimeout(h),u.ok?{success:!0,message:"Record transmitted to global leaderboards!"}:(console.warn("Online leaderboard server error, saved locally:",u.status),{success:!0,message:"Record saved to local pilot profile (Cloud sync pending)."})}catch(c){return console.warn("Network timeout / offline during score submission, saved locally:",c),{success:!0,message:"Offline mode active. Record cached locally."}}return{success:!0,message:"Score saved to local telemetry profile."}}async fetchLeaderboard(e){const t=e.challengeType||"all_time",n=e.limit||20,i=e.offset||0;if(this.isConfigured)try{const r=new AbortController,a=setTimeout(()=>r.abort(),5e3);let o=`${this.supabaseUrl}/rest/v1/leaderboards?select=*&challenge_type=eq.${t}`;e.environmentId&&e.environmentId!=="all"&&(o+=`&environment_id=eq.${e.environmentId}`),e.challengeDate&&(o+=`&challenge_date=eq.${e.challengeDate}`),o+=`&order=score.desc&limit=${n}&offset=${i}`;const l=await fetch(o,{method:"GET",headers:{apikey:this.supabaseAnonKey,Authorization:`Bearer ${this.supabaseAnonKey}`,"Range-Unit":"items",Prefer:"count=exact"},signal:r.signal});if(clearTimeout(a),l.ok){const c=await l.json(),h=l.headers.get("content-range"),u=h&&parseInt(h.split("/")[1],10)||c.length,f=c.map((v,m)=>({id:v.id,playerId:v.player_id,playerName:v.player_name,score:v.score,distanceMeters:v.distance_meters,maxSpeedKmH:v.max_speed_kmh,stuntsExecuted:v.stunts_count,environmentId:v.environment_id,challengeType:v.challenge_type,challengeDate:v.challenge_date,createdAt:v.created_at,rank:i+m+1})),d=this.getOrCreatePlayerId(),g=f.find(v=>v.playerId===d);return{success:!0,entries:f,totalCount:u,personalRank:g?.rank,isOfflineFallback:!1}}}catch(r){console.warn("Leaderboard fetch network error, reverting to local:",r)}return this.getOfflineLeaderboard(t,e.environmentId,n,i)}getOfflineLeaderboard(e,t,n=20,i=0){let r=[];if(typeof localStorage<"u")try{const u=localStorage.getItem(Ur);u&&(r=JSON.parse(u))}catch{}r.length===0&&(r=this.getSeedLeaderboard(),this.saveOfflineList(r));let a=r.filter(u=>u.challengeType===e);t&&t!=="all"&&(a=a.filter(u=>u.environmentId===t)),a.sort((u,f)=>f.score-u.score);const o=a.length,l=a.slice(i,i+n).map((u,f)=>({...u,rank:i+f+1})),c=this.getOrCreatePlayerId(),h=a.findIndex(u=>u.playerId===c);return{success:!0,entries:l,totalCount:o,personalRank:h>=0?h+1:void 0,isOfflineFallback:!0}}saveToOfflineStore(e){if(!(typeof localStorage>"u"))try{const t=localStorage.getItem(Ur),n=t?JSON.parse(t):this.getSeedLeaderboard(),i=n.findIndex(r=>r.playerId===e.playerId&&r.challengeType===e.challengeType&&r.environmentId===e.environmentId);i>=0?e.score>n[i].score&&(n[i]=e):n.push(e),this.saveOfflineList(n)}catch{}}saveOfflineList(e){if(!(typeof localStorage>"u"))try{localStorage.setItem(Ur,JSON.stringify(e.slice(0,50)))}catch{}}getSeedLeaderboard(){return[{playerId:"plt-apex",playerName:"APEX_VALE",score:142850,distanceMeters:4850,maxSpeedKmH:382,stuntsExecuted:14,environmentId:"neon_dusk",challengeType:"all_time",createdAt:"2026-10-18T12:00:00Z"},{playerId:"plt-mira",playerName:"MIRA_CHIEF",score:118400,distanceMeters:3950,maxSpeedKmH:364,stuntsExecuted:11,environmentId:"orbital_skyway",challengeType:"all_time",createdAt:"2026-10-18T14:30:00Z"},{playerId:"plt-ghost01",playerName:"CYBER_PHANTOM",score:95200,distanceMeters:3200,maxSpeedKmH:350,stuntsExecuted:8,environmentId:"monsoon_highway",challengeType:"all_time",createdAt:"2026-10-19T08:15:00Z"},{playerId:"plt-drift99",playerName:"VORTEX_99",score:78500,distanceMeters:2900,maxSpeedKmH:338,stuntsExecuted:6,environmentId:"canyon_express",challengeType:"all_time",createdAt:"2026-10-19T10:00:00Z"}]}}class Fr{static ENVIRONMENTS_CYCLE=[{id:"neon_dusk",name:"Neon Dusk"},{id:"canyon_express",name:"Canyon Express"},{id:"monsoon_highway",name:"Monsoon Highway"},{id:"orbital_skyway",name:"Orbital Skyway"}];static mulberry32(e){return()=>{let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}static hashDateString(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}static getUtcDateString(e=new Date){const t=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}-${n}-${i}`}static getDailyChallenge(e=new Date){const t=this.getUtcDateString(e),n=this.hashDateString(`daily_${t}`),i=this.mulberry32(n),r=Math.floor(i()*this.ENVIRONMENTS_CYCLE.length),a=this.ENVIRONMENTS_CYCLE[r],o=2500+Math.floor(i()*4)*500,l=1e5+Math.floor(i()*899999),c=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()+1,0,0,0)),h=Math.max(0,c.getTime()-e.getTime()),u=["TURBINE OVERDRIVE","APEX VELOCITY","SKYLINE INVERSION","MONSOON SURGE","COSMIC RUNWAY","AERO DRIFT PROTOCOL"],f=Math.floor(i()*u.length);return{id:`daily-${t}`,type:"daily",dateStr:t,environmentId:a.id,environmentName:a.name,seed:l,targetDistance:o,title:u[f],description:`Complete the ${o.toLocaleString()}m course in ${a.name}. Master stunts to top the leaderboard.`,rewardCredits:1500,timeRemainingMs:h}}static formatCountdown(e){const t=Math.floor(e/1e3),n=Math.floor(t/3600),i=Math.floor(t%3600/60),r=t%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`}}class Ns{static PREFIX="AERO";static encodeChallenge(e){const t={version:1,creatorName:e.creatorName.trim().slice(0,16)||"PILOT",environmentId:e.environmentId,seed:Math.floor(Math.abs(e.seed)),targetDistance:Math.floor(Math.abs(e.targetDistance)),targetScore:Math.floor(Math.abs(e.targetScore)),stuntsTarget:e.stuntsTarget||0,createdTimestamp:Date.now()},n=JSON.stringify(t),i=btoa(unescape(encodeURIComponent(n))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");return`${this.PREFIX}-${i}`}static decodeChallenge(e){if(!e||typeof e!="string")return null;let t=e.trim();t.startsWith(`${this.PREFIX}-`)?t=t.slice(this.PREFIX.length+1):t.startsWith(this.PREFIX)&&(t=t.slice(this.PREFIX.length));try{let n=t.replace(/-/g,"+").replace(/_/g,"/");for(;n.length%4;)n+="=";const i=decodeURIComponent(escape(atob(n))),r=JSON.parse(i);return!r||typeof r.seed!="number"||typeof r.targetScore!="number"?null:{version:r.version||1,creatorName:(r.creatorName||"PILOT").slice(0,16),environmentId:r.environmentId||"neon_dusk",seed:Math.max(1,Math.floor(r.seed)),targetDistance:Math.max(500,Math.min(2e4,r.targetDistance||3e3)),targetScore:Math.max(0,Math.floor(r.targetScore)),stuntsTarget:r.stuntsTarget?Math.floor(r.stuntsTarget):0,createdTimestamp:r.createdTimestamp||Date.now()}}catch{return null}}static getShareUrl(e){return`${typeof window<"u"?window.location.origin+window.location.pathname:"https://aerorush.app"}?challenge=${encodeURIComponent(e)}`}static getChallengeFromUrl(){return typeof window>"u"?null:new URLSearchParams(window.location.search).get("challenge")}}class Mc{clientId;cooldownMs;runFrequency;isDevMode;lastAdTimestamp=0;completedRunsCount=0;isAdShowing=!1;isInitialized=!1;constructor(e){this.clientId=e?.clientId||void 0||"",this.cooldownMs=e?.interstitialCooldownMs??18e4,this.runFrequency=e?.interstitialRunFrequency??3,this.isDevMode=e?.isDevMode??!1,this.initAdSense()}initAdSense(){if(typeof window>"u")return;if(!this.clientId){this.isDevMode&&console.log("[AdManager] Running in ad-free / offline mode (No VITE_ADSENSE_CLIENT_ID provided).");return}if(document.querySelector('script[src*="adsbygoogle.js"]'))this.isInitialized=!0;else{const t=document.createElement("script");t.async=!0,t.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(this.clientId)}`,t.crossOrigin="anonymous",t.onload=()=>{this.isInitialized=!0,this.isDevMode&&console.log("[AdManager] AdSense H5 SDK initialized.")},t.onerror=()=>{console.warn("[AdManager] Ad blocker active or offline. Ads safely disabled.")},document.head.appendChild(t)}}onRunCompleted(){this.completedRunsCount++}canShowInterstitial(){return!(this.isAdShowing||this.completedRunsCount<this.runFrequency||Date.now()-this.lastAdTimestamp<this.cooldownMs)}showInterstitial(e){if(!this.canShowInterstitial()){e();return}if(this.isAdShowing=!0,this.lastAdTimestamp=Date.now(),this.completedRunsCount=0,!this.isInitialized){this.isAdShowing=!1,e();return}const t=window;t.adBreak?t.adBreak({type:"next",name:"race_complete_interstitial",beforeAd:()=>{this.isDevMode&&console.log("[AdManager] Interstitial starting.")},afterAd:()=>{this.isAdShowing=!1,e()},adBreakDone:()=>{this.isAdShowing=!1,e()}}):(this.isDevMode&&console.log("[AdManager] Mock interstitial displayed."),setTimeout(()=>{this.isAdShowing=!1,e()},500))}showRewardedAd(e,t){if(this.isAdShowing){t("An ad transmission is already in progress.");return}if(typeof navigator<"u"&&!navigator.onLine){t("Device is offline. Ad rewards require network connectivity.");return}this.isAdShowing=!0;const n=500;let i=!1;const r=window;r.adBreak&&this.isInitialized?r.adBreak({type:"reward",name:"sponsor_aero_credits",beforeAd:()=>{this.isDevMode&&console.log("[AdManager] Rewarded ad started.")},afterAd:()=>{this.isAdShowing=!1,i?e(n):t("Transmission closed before reward completion.")},beforeReward:a=>{a()},adDismissed:()=>{this.isAdShowing=!1,t("Transmission skipped.")},adViewed:()=>{i=!0},adBreakDone:()=>{this.isAdShowing=!1}}):this.isDevMode?(console.log("[AdManager] Dev mode: Simulating 2-second rewarded transmission."),setTimeout(()=>{this.isAdShowing=!1,e(n)},1500)):(this.isAdShowing=!1,t("Sponsor network unavailable at this time."))}}class Sl{static generateCanvas(e,t){const n=document.createElement("canvas");n.width=1200,n.height=630;const i=n.getContext("2d");if(!i)return n;const r=i.createLinearGradient(0,0,1200,630);r.addColorStop(0,"#04070d"),r.addColorStop(.5,"#080e1a"),r.addColorStop(1,"#020306"),i.fillStyle=r,i.fillRect(0,0,1200,630),i.strokeStyle="rgba(0, 240, 255, 0.08)",i.lineWidth=1;for(let d=0;d<=1200;d+=60)i.beginPath(),i.moveTo(d,0),i.lineTo(d,630),i.stroke();for(let d=0;d<=630;d+=45)i.beginPath(),i.moveTo(0,d),i.lineTo(1200,d),i.stroke();const a=i.createLinearGradient(0,0,1200,300);a.addColorStop(0,"rgba(0, 240, 255, 0.25)"),a.addColorStop(.5,"rgba(255, 0, 85, 0.15)"),a.addColorStop(1,"transparent"),i.fillStyle=a,i.beginPath(),i.moveTo(0,0),i.lineTo(800,0),i.lineTo(400,630),i.lineTo(0,630),i.closePath(),i.fill(),i.strokeStyle="#00f0ff",i.lineWidth=3,i.strokeRect(30,30,1140,570),i.fillStyle="#00f0ff",i.fillRect(25,25,30,6),i.fillRect(25,25,6,30),i.fillRect(1145,25,30,6),i.fillRect(1169,25,6,30),i.fillRect(25,599,30,6),i.fillRect(25,575,6,30),i.fillRect(1145,599,30,6),i.fillRect(1169,575,6,30),i.font='900 38px "Rajdhani", "Segoe UI", sans-serif',i.fillStyle="#ffffff",i.fillText("AERORUSH: ",70,95);const o=i.measureText("AERORUSH: ").width;i.fillStyle="#00f0ff",i.fillText("SKYBOUND",70+o,95),i.font='600 15px "Rajdhani", sans-serif',i.fillStyle="rgba(255, 255, 255, 0.6)",i.letterSpacing="3px",i.fillText("EXPERIMENTAL 3D ELECTRIC HYPERCAR TELEMETRY",70,125),i.fillStyle="rgba(0, 240, 255, 0.15)",i.strokeStyle="#00f0ff",i.lineWidth=1,i.beginPath(),i.roundRect(820,60,310,70,8),i.fill(),i.stroke(),i.font="700 13px sans-serif",i.fillStyle="#00f0ff",i.fillText("CALLSIGN",840,85),i.font="900 20px sans-serif",i.fillStyle="#ffffff",i.fillText(t.pilotName.toUpperCase(),840,112),this.drawCarSilhouette(i,800,310),i.font="700 18px sans-serif",i.fillStyle="#00f0ff",i.fillText("FINAL FLIGHT SCORE",70,205),i.font='900 84px "Rajdhani", sans-serif',i.fillStyle="#ffffff",i.shadowColor="#00f0ff",i.shadowBlur=25,i.fillText(e.finalScore.toLocaleString(),70,285),i.shadowBlur=0;const l=[{label:"DISTANCE TRAVELED",value:`${e.distanceMeters.toLocaleString()} M`,icon:"📍"},{label:"TOP VELOCITY",value:`${e.maxSpeedKmH} KM/H`,icon:"⚡"},{label:"STUNTS EXECUTED",value:`${e.stuntsExecuted}`,icon:"🌀"},{label:"CLEAN LANDINGS",value:`${e.cleanLandings}`,icon:"🎯"},{label:"ENERGY CELLS",value:`${e.energyPickups}`,icon:"🔋"},{label:"PEAK COMBO MULT",value:`${e.maxCombo.toFixed(1)}x`,icon:"🔥"}],c=70,h=325,u=220,f=70;return l.forEach((d,g)=>{const v=g%3,m=Math.floor(g/3),p=c+v*(u+20),b=h+m*(f+15);i.fillStyle="rgba(255, 255, 255, 0.04)",i.strokeStyle="rgba(255, 255, 255, 0.1)",i.lineWidth=1,i.beginPath(),i.roundRect(p,b,u,f,6),i.fill(),i.stroke(),i.font="700 11px sans-serif",i.fillStyle="rgba(255, 255, 255, 0.55)",i.fillText(`${d.icon} ${d.label}`,p+15,b+25),i.font='900 24px "Rajdhani", sans-serif',i.fillStyle="#00f0ff",i.fillText(d.value,p+15,b+55)}),i.strokeStyle="rgba(255, 255, 255, 0.15)",i.beginPath(),i.moveTo(70,520),i.lineTo(1130,520),i.stroke(),i.font="700 13px sans-serif",i.fillStyle="#ffffff",i.fillText(`ZONE: ${t.environmentName.toUpperCase()}  •  TRACK SEED: #${t.seed}`,70,555),i.font="500 12px sans-serif",i.fillStyle="rgba(255, 255, 255, 0.45)",i.fillText(`DATE: ${new Date().toLocaleDateString()}  •  VANTA XR v2.0`,70,578),i.font='800 15px "Rajdhani", sans-serif',i.fillStyle="#ff0055",i.textAlign="right",i.fillText("Made by Deepesh Kumar Pankaj",1130,555),i.font="500 12px sans-serif",i.fillStyle="rgba(255, 255, 255, 0.45)",i.fillText("OFFLINE PWA 3D HYPERCAR ENGINE",1130,578),i.textAlign="left",n}static drawCarSilhouette(e,t,n){e.save(),e.translate(t,n);const i=e.createRadialGradient(0,40,20,0,40,160);i.addColorStop(0,"rgba(0, 240, 255, 0.45)"),i.addColorStop(1,"transparent"),e.fillStyle=i,e.beginPath(),e.arc(0,40,160,0,Math.PI*2),e.fill(),e.strokeStyle="#00f0ff",e.lineWidth=2.5,e.beginPath(),e.moveTo(170,30),e.lineTo(90,15),e.lineTo(20,-35),e.lineTo(-60,-35),e.lineTo(-130,5),e.lineTo(-160,-10),e.lineTo(-165,25),e.lineTo(-145,45),e.lineTo(-115,45),e.arc(-85,45,30,Math.PI,0,!1),e.lineTo(65,45),e.arc(95,45,30,Math.PI,0,!1),e.lineTo(165,45),e.closePath(),e.stroke(),e.fillStyle="rgba(0, 240, 255, 0.2)",e.strokeStyle="rgba(0, 240, 255, 0.6)",e.lineWidth=1.5,e.beginPath(),e.moveTo(15,-30),e.lineTo(-55,-30),e.lineTo(-75,10),e.lineTo(35,10),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#111822",e.strokeStyle="#00f0ff",e.lineWidth=2,e.beginPath(),e.arc(-85,45,24,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(95,45,24,0,Math.PI*2),e.fill(),e.stroke();const r=e.createLinearGradient(-165,15,-240,15);r.addColorStop(0,"#00f0ff"),r.addColorStop(.5,"#ff0055"),r.addColorStop(1,"transparent"),e.fillStyle=r,e.beginPath(),e.moveTo(-165,10),e.lineTo(-240,15),e.lineTo(-165,20),e.closePath(),e.fill(),e.restore()}static downloadCard(e,t){const i=this.generateCanvas(e,t).toDataURL("image/png"),r=document.createElement("a");r.download=`AERORUSH_${t.pilotName}_${e.finalScore}.png`,r.href=i,document.body.appendChild(r),r.click(),document.body.removeChild(r)}static async shareScore(e,t,n,i){const r=`🚀 I just scored ${e.finalScore.toLocaleString()} pts in AERORUSH: SKYBOUND (${t.environmentName})! Can you beat my telemetry?`;if(typeof navigator<"u"&&navigator.share)try{const a=this.generateCanvas(e,t),o=await new Promise(l=>a.toBlob(l,"image/png"));if(o&&navigator.canShare&&navigator.canShare({files:[new File([o],"aerorush-score.png",{type:"image/png"})]})){const l=new File([o],"aerorush-score.png",{type:"image/png"});await navigator.share({title:"AERORUSH: SKYBOUND Telemetry",text:r,url:n,files:[l]}),i("Flight record shared successfully!");return}else{await navigator.share({title:"AERORUSH: SKYBOUND Telemetry",text:r,url:n}),i("Flight record shared successfully!");return}}catch(a){if(a.name==="AbortError")return}if(typeof navigator<"u"&&navigator.clipboard)try{await navigator.clipboard.writeText(`${r}
Play & beat my record: ${n}`),i("Telemetry & Challenge Link copied to clipboard!");return}catch{}i(`Challenge Code: #${t.seed} - ${e.finalScore} PTS`)}}class Sc{phase="SETUP";player1Name="PILOT 1";player2Name="PILOT 2";trackSeed=442001;environmentId="neon_dusk";targetDistance=3e3;player1Result=null;player2Result=null;initDuel(e,t,n,i,r){this.player1Name=e.trim()||"PILOT 1",this.player2Name=t.trim()||"PILOT 2",this.environmentId=n,this.targetDistance=i,this.trackSeed=r||1e5+Math.floor(Math.random()*899999),this.phase="SETUP",this.player1Result=null,this.player2Result=null}getPhase(){return this.phase}getPlayer1Name(){return this.player1Name}getPlayer2Name(){return this.player2Name}getTrackSeed(){return this.trackSeed}getEnvironmentId(){return this.environmentId}getTargetDistance(){return this.targetDistance}startPlayer1Turn(){this.phase="PLAYER1_RACING"}completePlayer1Turn(e,t){this.player1Result={playerName:this.player1Name,summary:e,ghostData:t},this.phase="HANDOFF"}startPlayer2Turn(){this.phase="PLAYER2_RACING"}completePlayer2Turn(e,t){this.player2Result={playerName:this.player2Name,summary:e,ghostData:t},this.phase="COMPARISON"}getPlayer1Result(){return this.player1Result}getPlayer2Result(){return this.player2Result}evaluateDuelWinner(){const e=this.player1Result?.summary.finalScore||0,t=this.player2Result?.summary.finalScore||0,n=this.player1Result?.summary.distanceMeters||0,i=this.player2Result?.summary.distanceMeters||0,r=this.player1Result?.summary.maxSpeedKmH||0,a=this.player2Result?.summary.maxSpeedKmH||0;let o="TIE",l="EVEN SPLIT";return e>t?(o="PLAYER_1",l=this.player1Name):t>e&&(o="PLAYER_2",l=this.player2Name),{winner:o,winnerName:l,scoreDiff:Math.abs(e-t),distDiff:Math.abs(n-i),speedDiff:Math.abs(r-a)}}reset(){this.phase="SETUP",this.player1Result=null,this.player2Result=null}}class Ec{ws=null;serverUrl;status="OFFLINE";playerId="";currentRoom=null;opponentCar;opponentMeshRoot;opponentState=null;nameplateMesh=null;lastTelemetrySent=0;telemetryIntervalMs=66;onStatusChange;onRoomUpdated;onRaceCountdown;onRaceStart;onOpponentFinished;onOpponentDisconnected;onError;constructor(){this.serverUrl="ws://localhost:8080",this.opponentCar=new vc,this.opponentMeshRoot=new rt,this.opponentMeshRoot.add(this.opponentCar.root),this.opponentMeshRoot.visible=!1,this.opponentCar.setPaint("crimson_red"),this.opponentCar.setUnderglowColor(16711765),this.opponentCar.setThrusterColor(16755200),this.createNameplate("RIVAL PILOT")}createNameplate(e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d");n&&(n.fillStyle="rgba(10, 16, 26, 0.85)",n.strokeStyle="#ff0055",n.lineWidth=3,n.beginPath(),n.roundRect(10,10,236,44,8),n.fill(),n.stroke(),n.font='bold 22px "Rajdhani", sans-serif',n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(e,128,32));const i=new ec(t),r=new Zl({map:i,transparent:!0,depthTest:!1});this.nameplateMesh&&this.opponentMeshRoot.remove(this.nameplateMesh),this.nameplateMesh=new ou(r),this.nameplateMesh.scale.set(3.5,.9,1),this.nameplateMesh.position.set(0,1.8,0),this.opponentMeshRoot.add(this.nameplateMesh)}updateNameplate(e){this.createNameplate(e)}getStatus(){return this.status}getCurrentRoom(){return this.currentRoom}connect(e,t){if(this.ws&&(this.ws.readyState===WebSocket.OPEN||this.ws.readyState===WebSocket.CONNECTING)){e&&e();return}this.status="CONNECTING",this.onStatusChange&&this.onStatusChange("CONNECTING");try{this.ws=new WebSocket(this.serverUrl);const n=setTimeout(()=>{if(this.status==="CONNECTING"){this.disconnect();const i="Connection to multiplayer server timed out.";t&&t(i),this.onError&&this.onError(i)}},5e3);this.ws.onopen=()=>{clearTimeout(n),this.status="CONNECTED",this.onStatusChange&&this.onStatusChange("CONNECTED"),e&&e()},this.ws.onmessage=i=>{try{const r=JSON.parse(i.data);this.handlePacket(r)}catch{}},this.ws.onerror=()=>{clearTimeout(n);const i=`Could not reach multiplayer relay at ${this.serverUrl}.`;this.status="OFFLINE",this.onStatusChange&&this.onStatusChange("OFFLINE",i),t&&t(i)},this.ws.onclose=()=>{clearTimeout(n),this.status="OFFLINE",this.currentRoom=null,this.opponentMeshRoot.visible=!1,this.onStatusChange&&this.onStatusChange("OFFLINE")}}catch(n){this.status="OFFLINE",t&&t(n?.message||"WebSocket connection error")}}disconnect(){if(this.ws){try{this.ws.close()}catch{}this.ws=null}this.status="OFFLINE",this.currentRoom=null,this.opponentMeshRoot.visible=!1,this.opponentState=null,this.onStatusChange&&this.onStatusChange("OFFLINE")}createRoom(e){if(!this.ws||this.ws.readyState!==WebSocket.OPEN){this.onError&&this.onError("Not connected to multiplayer relay.");return}this.ws.send(JSON.stringify({type:"CREATE_ROOM",playerName:e.playerName,environmentId:e.environmentId,seed:e.seed,stageLength:e.stageLength,carPaint:e.carPaint}))}joinRoom(e,t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN){this.onError&&this.onError("Not connected to multiplayer relay.");return}this.ws.send(JSON.stringify({type:"JOIN_ROOM",roomCode:e.trim().toUpperCase(),playerName:t,carPaint:n}))}toggleReady(e){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify({type:"SET_READY",ready:e}))}leaveRoom(){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({type:"LEAVE_ROOM"})),this.currentRoom=null,this.opponentMeshRoot.visible=!1,this.opponentState=null,this.status="CONNECTED",this.onStatusChange&&this.onStatusChange("CONNECTED")}sendTelemetry(e,t,n,i,r,a){if(this.status!=="RACING"||!this.ws||this.ws.readyState!==WebSocket.OPEN)return;const o=performance.now();o-this.lastTelemetrySent<this.telemetryIntervalMs||(this.lastTelemetrySent=o,this.ws.send(JSON.stringify({type:"SYNC_TELEMETRY",x:Number(e.x.toFixed(2)),y:Number(e.y.toFixed(2)),z:Number(e.z.toFixed(2)),rotX:Number(t.x.toFixed(3)),rotY:Number(t.y.toFixed(3)),rotZ:Number(t.z.toFixed(3)),speed:Number(n.toFixed(1)),isBoosting:i,isAirborne:r,currentStunt:a})))}sendFinish(e,t,n){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify({type:"PLAYER_FINISH",score:e,distance:t,elapsedTime:n}))}update(e){if(!this.opponentState||!this.opponentMeshRoot.visible)return;const t=Math.min(1,e*15);this.opponentState.currentPos.lerp(this.opponentState.targetPos,t),this.opponentState.currentRot.x+=(this.opponentState.targetRot.x-this.opponentState.currentRot.x)*t,this.opponentState.currentRot.y+=(this.opponentState.targetRot.y-this.opponentState.currentRot.y)*t,this.opponentState.currentRot.z+=(this.opponentState.targetRot.z-this.opponentState.currentRot.z)*t,this.opponentCar.root.position.copy(this.opponentState.currentPos),this.opponentCar.root.rotation.copy(this.opponentState.currentRot),this.opponentCar.updateVisuals(this.opponentState.speed,0,this.opponentState.isBoosting,this.opponentState.isAirborne,e)}getOpponentDistance(){return!this.opponentState||!this.opponentMeshRoot.visible?null:this.opponentState.currentPos.z}handlePacket(e){switch(e.type){case"CONNECTED":this.playerId=e.playerId;break;case"ROOM_CREATED":case"ROOM_JOINED":this.status="IN_ROOM",this.currentRoom={code:e.roomCode,isHost:e.type==="ROOM_CREATED",environmentId:e.environmentId,seed:e.seed,stageLength:e.stageLength,players:e.players},this.onStatusChange&&this.onStatusChange("IN_ROOM"),this.onRoomUpdated&&this.onRoomUpdated(this.currentRoom);break;case"ROOM_UPDATED":this.currentRoom&&(this.currentRoom.players=e.players,this.onRoomUpdated&&this.onRoomUpdated(this.currentRoom));break;case"RACE_COUNTDOWN":this.status="STARTING",this.onStatusChange&&this.onStatusChange("STARTING"),this.onRaceCountdown&&this.onRaceCountdown(e.countdownSeconds);break;case"RACE_START":this.status="RACING",this.opponentMeshRoot.visible=!0,this.initOpponentState(),this.onStatusChange&&this.onStatusChange("RACING"),this.onRaceStart&&this.onRaceStart();break;case"OPPONENT_TELEMETRY":this.opponentState||this.initOpponentState(),this.opponentState&&(this.opponentState.targetPos.set(e.x,e.y,e.z),this.opponentState.targetRot.set(e.rotX,e.rotY,e.rotZ),this.opponentState.speed=e.speed,this.opponentState.isBoosting=e.isBoosting,this.opponentState.isAirborne=e.isAirborne,this.opponentState.currentStunt=e.currentStunt,this.opponentState.lastUpdate=performance.now());break;case"OPPONENT_FINISHED":this.onOpponentFinished&&this.onOpponentFinished({name:e.name,finalScore:e.finalScore,distanceM:e.distanceM});break;case"OPPONENT_DISCONNECTED":this.opponentMeshRoot.visible=!1,this.onOpponentDisconnected&&this.onOpponentDisconnected(e.message);break;case"ERROR":this.onError&&this.onError(e.message);break}}initOpponentState(){const e=this.currentRoom?.players.find(n=>n.id!==this.playerId),t=e?e.name:"RIVAL";this.updateNameplate(t),this.opponentState={playerId:e?e.id:"rival",name:t,targetPos:new L(2.5,0,0),targetRot:new kt(0,0,0),currentPos:new L(2.5,0,0),currentRot:new kt(0,0,0),speed:0,isBoosting:!1,isAirborne:!1,currentStunt:null,lastUpdate:performance.now()},this.opponentCar.root.position.copy(this.opponentState.currentPos)}}class Kg{stateMgr;scoreMgr;progression;careerMgr;achieveMgr;handlers;onlineLeaderboard;adManager;passAndPlay;mpClient;activeGarageTab="upgrades";selectedQuickEnvId="neon_dusk";selectedQuickDist=3e3;selectedQuickGhost=!0;selectedMpEnvId="neon_dusk";selectedMpDist=3e3;selectedDuelEnvId="neon_dusk";activeLeaderboardTab="global";activeEnvFilter="all";lastSummary=null;dailyChallengeInfo;pendingFriendChallenge=null;globalCreditsVal;garageCreditsVal;networkStatusText;networkDot;hudContainer;hudScore;hudComboBadge;hudComboMult;hudTrickBanner;hudDistance;hudTimer;hudSpeed;hudSpeedArc;hudEnergyBar;hudEnergyPercent;hudFlightIndicator;hudCountdown;hudCountdownNumber;hudCrashAlert;hudTutorial;hudGhostDelta;dialogOverlay;dialogText;dialogCharName;dialogCharRole;dialogAvatarIcon;pendingDialogCallback=null;toastEl;toastTitle;toastDesc;toastReward;toastTimeout=null;raceStartTime=0;trickTimeout=null;isMyMpReady=!1;constructor(e,t,n,i,r,a,o){this.stateMgr=e,this.scoreMgr=t,this.progression=n,this.careerMgr=i,this.achieveMgr=r,this.handlers=a,this.onlineLeaderboard=o?.onlineLeaderboard||new xc,this.adManager=o?.adManager||new Mc,this.passAndPlay=o?.passAndPlay||new Sc,this.mpClient=o?.mpClient||new Ec,this.dailyChallengeInfo=Fr.getDailyChallenge(),this.globalCreditsVal=document.getElementById("global-credits-val"),this.garageCreditsVal=document.getElementById("garage-credits-val"),this.networkStatusText=document.getElementById("network-status-text"),this.networkDot=document.querySelector(".status-dot"),this.hudContainer=document.getElementById("game-hud"),this.hudScore=document.getElementById("hud-score"),this.hudComboBadge=document.getElementById("hud-combo-badge"),this.hudComboMult=document.getElementById("hud-combo-mult"),this.hudTrickBanner=document.getElementById("hud-trick-notification"),this.hudDistance=document.getElementById("hud-distance"),this.hudTimer=document.getElementById("hud-timer"),this.hudSpeed=document.getElementById("hud-speed"),this.hudSpeedArc=document.getElementById("speed-meter-arc"),this.hudEnergyBar=document.getElementById("hud-energy-bar"),this.hudEnergyPercent=document.getElementById("hud-energy-percent"),this.hudFlightIndicator=document.getElementById("hud-flight-indicator"),this.hudCountdown=document.getElementById("hud-countdown"),this.hudCountdownNumber=document.getElementById("countdown-number"),this.hudCrashAlert=document.getElementById("hud-crash-alert"),this.hudTutorial=document.getElementById("hud-tutorial"),this.hudGhostDelta=document.getElementById("hud-ghost-delta"),this.dialogOverlay=document.getElementById("dialog-overlay"),this.dialogText=document.getElementById("dialog-text"),this.dialogCharName=document.getElementById("dialog-char-name"),this.dialogCharRole=document.getElementById("dialog-char-role"),this.dialogAvatarIcon=document.getElementById("dialog-avatar-icon"),this.toastEl=document.getElementById("toast-achievement"),this.toastTitle=document.getElementById("toast-title"),this.toastDesc=document.getElementById("toast-desc"),this.toastReward=document.getElementById("toast-reward"),this.bindDomEvents(),this.setupNetworkMonitor(),this.updateCreditsDisplay(),this.setupMultiplayerListeners(),this.setupDailyChallengeTicker(),this.checkUrlForFriendChallenge(),this.stateMgr.onStateChange((l,c)=>this.handleStateTransition(l,c)),this.scoreMgr.onTrickAnnouncement=(l,c)=>{this.showTrickBanner(`${l} +${c}`)},this.scoreMgr.onComboChange=l=>{this.hudComboBadge&&this.hudComboMult&&(l>1?(this.hudComboBadge.classList.remove("hidden"),this.hudComboMult.textContent=`${l.toFixed(1)}x`):this.hudComboBadge.classList.add("hidden"))},this.progression.onDataChanged(()=>{this.updateCreditsDisplay(),this.stateMgr.is("GARAGE")&&this.renderGarageTabContent()}),this.achieveMgr.onAchievementUnlocked=l=>{this.showAchievementToast(l)}}setupNetworkMonitor(){const e=()=>{const t=navigator.onLine;this.networkStatusText&&this.networkDot&&(t?(this.networkStatusText.textContent="ONLINE",this.networkDot.className="status-dot online"):(this.networkStatusText.textContent="OFFLINE (PWA)",this.networkDot.className="status-dot offline"))};window.addEventListener("online",e),window.addEventListener("offline",e),e()}updateCreditsDisplay(){const e=this.progression.getData().credits.toLocaleString();this.globalCreditsVal&&(this.globalCreditsVal.textContent=e),this.garageCreditsVal&&(this.garageCreditsVal.textContent=e)}bindDomEvents(){document.getElementById("btn-main-play")?.addEventListener("click",()=>this.stateMgr.setState("PLAY_SELECT")),document.getElementById("btn-nav-career")?.addEventListener("click",()=>this.openCareer()),document.getElementById("btn-nav-quick")?.addEventListener("click",()=>this.openQuickRun()),document.getElementById("btn-nav-stunts")?.addEventListener("click",()=>this.stateMgr.setState("STUNT_SCHOOL")),document.getElementById("btn-nav-garage")?.addEventListener("click",()=>this.handlers.onOpenGarage()),document.getElementById("btn-nav-leaderboard")?.addEventListener("click",()=>this.openLeaderboard()),document.getElementById("btn-nav-achievements")?.addEventListener("click",()=>this.openAchievements()),document.getElementById("btn-nav-how")?.addEventListener("click",()=>this.stateMgr.setState("HOW_TO_PLAY")),document.getElementById("btn-nav-settings")?.addEventListener("click",()=>this.openSettings()),document.getElementById("btn-nav-credits")?.addEventListener("click",()=>this.stateMgr.setState("CREDITS")),document.getElementById("btn-nav-privacy")?.addEventListener("click",()=>this.stateMgr.setState("PRIVACY")),document.getElementById("btn-play-select-back")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("card-mode-career")?.addEventListener("click",()=>this.openCareer()),document.getElementById("card-mode-quick")?.addEventListener("click",()=>this.openQuickRun()),document.getElementById("card-mode-stunts")?.addEventListener("click",()=>this.stateMgr.setState("STUNT_SCHOOL")),document.getElementById("card-mode-multiplayer")?.addEventListener("click",()=>this.openMultiplayerLobby()),document.getElementById("card-mode-2p")?.addEventListener("click",()=>this.openPassAndPlaySetup()),document.getElementById("card-mode-daily")?.addEventListener("click",()=>this.openDailyChallenge()),document.getElementById("card-mode-friend")?.addEventListener("click",()=>this.stateMgr.setState("FRIEND_CHALLENGE")),document.getElementById("btn-quick-back")?.addEventListener("click",()=>this.stateMgr.setState("PLAY_SELECT")),document.getElementById("btn-quick-launch")?.addEventListener("click",()=>{this.handlers.onStartRace({environmentId:this.selectedQuickEnvId,stageLength:this.selectedQuickDist,isGhost:this.selectedQuickGhost})});const e=document.querySelectorAll("#group-distance .group-btn");e.forEach(d=>{d.addEventListener("click",()=>{e.forEach(g=>g.classList.remove("active")),d.classList.add("active"),this.selectedQuickDist=parseInt(d.getAttribute("data-dist")||"3000",10)})}),document.getElementById("check-ghost")?.addEventListener("change",d=>{this.selectedQuickGhost=d.target.checked}),document.getElementById("btn-career-back")?.addEventListener("click",()=>this.stateMgr.setState("PLAY_SELECT")),document.getElementById("btn-stunts-back")?.addEventListener("click",()=>this.stateMgr.setState("PLAY_SELECT")),document.querySelectorAll(".stunt-module-card").forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-module")||"roll";this.handlers.onStartRace({environmentId:g==="drift"?"monsoon_highway":"canyon_express",stageLength:2500})})}),document.getElementById("btn-garage-back")?.addEventListener("click",()=>this.handlers.onCloseGarage());const i=document.querySelectorAll(".garage-tab");i.forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-tab");g&&(i.forEach(v=>v.classList.remove("active")),d.classList.add("active"),this.activeGarageTab=g,this.renderGarageTabContent())})}),document.getElementById("btn-dialog-skip")?.addEventListener("click",()=>{this.dialogOverlay?.classList.add("hidden"),this.pendingDialogCallback&&(this.pendingDialogCallback(),this.pendingDialogCallback=null)}),document.getElementById("btn-dialog-continue")?.addEventListener("click",()=>{this.dialogOverlay?.classList.add("hidden"),this.pendingDialogCallback&&(this.pendingDialogCallback(),this.pendingDialogCallback=null)}),document.getElementById("btn-how-back")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-how-play")?.addEventListener("click",()=>this.stateMgr.setState("PLAY_SELECT")),document.getElementById("btn-settings-back")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-settings-save")?.addEventListener("click",()=>this.stateMgr.setState("MENU"));const r=document.querySelectorAll("#group-quality .group-btn");r.forEach(d=>{d.addEventListener("click",()=>{r.forEach(v=>v.classList.remove("active")),d.classList.add("active");const g=d.getAttribute("data-quality")||"medium";this.progression.updateSettings({quality:g}),this.handlers.onQualityChange(Ra[g])})}),document.getElementById("slider-volume")?.addEventListener("input",d=>{const g=parseInt(d.target.value,10)/100;this.progression.updateSettings({masterVolume:g}),this.handlers.onMasterVolumeChange(g)}),document.getElementById("slider-music")?.addEventListener("input",d=>{const g=parseInt(d.target.value,10)/100;this.progression.updateSettings({musicVolume:g}),this.handlers.onMusicVolumeChange(g)}),document.getElementById("slider-sfx")?.addEventListener("input",d=>{const g=parseInt(d.target.value,10)/100;this.progression.updateSettings({sfxVolume:g}),this.handlers.onSfxVolumeChange(g)}),document.getElementById("check-motion")?.addEventListener("change",d=>{const g=d.target.checked;this.progression.updateSettings({reducedMotion:g}),this.handlers.onReducedMotionToggle(g)}),document.getElementById("check-vibration")?.addEventListener("change",d=>{const g=d.target.checked;this.progression.updateSettings({vibration:g}),this.handlers.onVibrationToggle(g)}),document.getElementById("btn-reset-data")?.addEventListener("click",()=>{confirm("Are you sure you want to reset all AERORUSH saved progress, upgrades, and high scores?")&&(this.handlers.onResetData(),alert("All local progress reset to factory state."),this.stateMgr.setState("MENU"))}),document.getElementById("btn-credits-back")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-credits-close")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-privacy-back")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-privacy-close")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-pause")?.addEventListener("click",()=>this.handlers.onPause()),document.getElementById("btn-pause-resume")?.addEventListener("click",()=>this.handlers.onResume()),document.getElementById("btn-pause-restart")?.addEventListener("click",()=>this.handlers.onRestartRace()),document.getElementById("btn-pause-settings")?.addEventListener("click",()=>this.stateMgr.setState("SETTINGS")),document.getElementById("btn-pause-quit")?.addEventListener("click",()=>this.handlers.onAbortToMenu()),document.getElementById("btn-records-back")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-records-close")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-records-clear")?.addEventListener("click",()=>{confirm("Clear local offline records?")&&(this.scoreMgr.clearRecords(),this.fetchAndRenderLeaderboard())}),document.getElementById("btn-records-refresh")?.addEventListener("click",()=>this.fetchAndRenderLeaderboard()),document.getElementById("btn-save-callsign")?.addEventListener("click",()=>{const d=document.getElementById("input-records-callsign");if(d){const g=this.onlineLeaderboard.setPlayerName(d.value);d.value=g,alert(`Pilot Callsign set to: ${g}`)}});const u=document.querySelectorAll("[data-board-tab]");u.forEach(d=>{d.addEventListener("click",()=>{u.forEach(g=>g.classList.remove("active")),d.classList.add("active"),this.activeLeaderboardTab=d.getAttribute("data-board-tab")||"global",this.fetchAndRenderLeaderboard()})});const f=document.querySelectorAll("[data-env-filter]");f.forEach(d=>{d.addEventListener("click",()=>{f.forEach(g=>g.classList.remove("active")),d.classList.add("active"),this.activeEnvFilter=d.getAttribute("data-env-filter")||"all",this.fetchAndRenderLeaderboard()})}),document.getElementById("btn-results-retry")?.addEventListener("click",()=>{this.adManager.canShowInterstitial()?this.adManager.showInterstitial(()=>this.handlers.onRestartRace()):this.handlers.onRestartRace()}),document.getElementById("btn-results-menu")?.addEventListener("click",()=>{this.adManager.canShowInterstitial()?this.adManager.showInterstitial(()=>this.handlers.onAbortToMenu()):this.handlers.onAbortToMenu()}),document.getElementById("btn-results-submit")?.addEventListener("click",()=>this.submitResultsToLeaderboard()),document.getElementById("btn-results-card")?.addEventListener("click",()=>this.downloadScoreCard()),document.getElementById("btn-results-share")?.addEventListener("click",()=>this.shareResults()),document.getElementById("btn-results-ad")?.addEventListener("click",()=>this.watchRewardedAd()),document.getElementById("btn-mp-back")?.addEventListener("click",()=>{this.mpClient.disconnect(),this.stateMgr.setState("PLAY_SELECT")}),document.getElementById("tab-mp-host")?.addEventListener("click",()=>{document.getElementById("tab-mp-host")?.classList.add("active"),document.getElementById("tab-mp-join")?.classList.remove("active"),document.getElementById("panel-mp-host")?.classList.remove("hidden"),document.getElementById("panel-mp-join")?.classList.add("hidden")}),document.getElementById("tab-mp-join")?.addEventListener("click",()=>{document.getElementById("tab-mp-join")?.classList.add("active"),document.getElementById("tab-mp-host")?.classList.remove("active"),document.getElementById("panel-mp-join")?.classList.remove("hidden"),document.getElementById("panel-mp-host")?.classList.add("hidden")}),document.getElementById("btn-mp-create-room")?.addEventListener("click",()=>{const d=this.onlineLeaderboard.getPlayerName();this.mpClient.createRoom({playerName:d,environmentId:this.selectedMpEnvId,seed:1e5+Math.floor(Math.random()*899999),stageLength:this.selectedMpDist,carPaint:this.progression.getData().cosmetics.paint})}),document.getElementById("btn-mp-join-room")?.addEventListener("click",()=>{const d=document.getElementById("input-mp-room-code"),g=d?d.value.trim().toUpperCase():"";if(!g){alert("Please enter a 6-character room code.");return}const v=this.onlineLeaderboard.getPlayerName();this.mpClient.joinRoom(g,v,this.progression.getData().cosmetics.paint)}),document.getElementById("btn-mp-copy-code")?.addEventListener("click",()=>{const d=this.mpClient.getCurrentRoom();d&&typeof navigator<"u"&&navigator.clipboard&&(navigator.clipboard.writeText(d.code),alert(`Room Code ${d.code} copied to clipboard! Share it with your rival pilot.`))}),document.getElementById("btn-mp-ready")?.addEventListener("click",()=>{this.isMyMpReady=!this.isMyMpReady,this.mpClient.toggleReady(this.isMyMpReady);const d=document.getElementById("btn-mp-ready");d&&(d.textContent=this.isMyMpReady?"WAITING FOR RIVAL...":"TOGGLE READY")}),document.getElementById("btn-mp-leave")?.addEventListener("click",()=>{this.mpClient.leaveRoom(),document.getElementById("mp-view-lobby")?.classList.add("hidden"),document.getElementById("mp-view-tabs")?.classList.remove("hidden")}),document.getElementById("btn-duel-setup-back")?.addEventListener("click",()=>this.stateMgr.setState("PLAY_SELECT")),document.getElementById("btn-duel-start-p1")?.addEventListener("click",()=>this.startDuelPlayer1()),document.getElementById("btn-duel-start-p2")?.addEventListener("click",()=>this.startDuelPlayer2()),document.getElementById("btn-duel-rematch")?.addEventListener("click",()=>{this.passAndPlay.reset(),this.openPassAndPlaySetup()}),document.getElementById("btn-duel-menu")?.addEventListener("click",()=>this.stateMgr.setState("MENU")),document.getElementById("btn-daily-back")?.addEventListener("click",()=>this.stateMgr.setState("PLAY_SELECT")),document.getElementById("btn-daily-launch")?.addEventListener("click",()=>this.launchDailyChallenge()),document.getElementById("btn-friend-back")?.addEventListener("click",()=>this.stateMgr.setState("PLAY_SELECT")),document.getElementById("btn-friend-parse")?.addEventListener("click",()=>this.parseFriendChallengeCode()),document.getElementById("btn-friend-launch")?.addEventListener("click",()=>this.launchFriendChallenge())}openMultiplayerLobby(){const e=document.getElementById("mp-connection-status");e&&(e.textContent="STATUS: CONNECTING TO RELAY...");const t=document.getElementById("mp-env-selector-grid");t&&(t.innerHTML="",Object.values(Xn).forEach(i=>{const r=document.createElement("div");r.className=`env-card ${i.id===this.selectedMpEnvId?"active":""}`,r.innerHTML=`<div class="env-card-title">${i.name}</div><div class="env-card-tagline">${i.tagline}</div>`,r.addEventListener("click",()=>{t.querySelectorAll(".env-card").forEach(a=>a.classList.remove("active")),r.classList.add("active"),this.selectedMpEnvId=i.id}),t.appendChild(r)}));const n=document.querySelectorAll("#group-mp-distance .group-btn");n.forEach(i=>{i.addEventListener("click",()=>{n.forEach(r=>r.classList.remove("active")),i.classList.add("active"),this.selectedMpDist=parseInt(i.getAttribute("data-dist")||"3000",10)})}),document.getElementById("mp-view-lobby")?.classList.add("hidden"),document.getElementById("mp-view-tabs")?.classList.remove("hidden"),this.stateMgr.setState("MULTIPLAYER"),this.mpClient.connect(()=>{e&&(e.textContent="STATUS: CONNECTED TO RELAY (READY)")},i=>{e&&(e.textContent=`STATUS: OFFLINE (${i})`)})}setupMultiplayerListeners(){this.mpClient.onRoomUpdated=e=>{document.getElementById("mp-view-tabs")?.classList.add("hidden"),document.getElementById("mp-view-lobby")?.classList.remove("hidden");const t=document.getElementById("lbl-mp-room-code");t&&(t.textContent=e.code);const n=e.players[0],i=e.players[1],r=document.getElementById("lbl-mp-p1-name"),a=document.getElementById("lbl-mp-p1-status");n&&r&&a&&(r.textContent=n.name+(n.isHost?" (HOST)":""),a.textContent=n.isReady?"READY":"NOT READY",a.className=`slot-status ${n.isReady?"ready-tag":"waiting-tag"}`);const o=document.getElementById("lbl-mp-p2-name"),l=document.getElementById("lbl-mp-p2-status");o&&l&&(i?(o.textContent=i.name,l.textContent=i.isReady?"READY":"NOT READY",l.className=`slot-status ${i.isReady?"ready-tag":"waiting-tag"}`):(o.textContent="WAITING FOR RIVAL PILOT...",l.textContent="OPEN SLOT",l.className="slot-status waiting-tag"))},this.mpClient.onRaceCountdown=e=>{const t=document.getElementById("lbl-mp-countdown");t&&(t.classList.remove("hidden"),t.textContent=`SYNCHRONIZING ENGINES... ${e}`)},this.mpClient.onRaceStart=()=>{const e=this.mpClient.getCurrentRoom();e&&this.handlers.onStartRace({environmentId:e.environmentId,stageLength:e.stageLength,seed:e.seed,isGhost:!1})},this.mpClient.onError=e=>{alert(`Multiplayer relay message: ${e}`)},this.mpClient.onOpponentFinished=e=>{this.showTrickBanner(`RIVAL ${e.name} FINISHED! Score: ${e.finalScore.toLocaleString()}`)}}openPassAndPlaySetup(){const e=document.getElementById("duel-env-selector-grid");e&&(e.innerHTML="",Object.values(Xn).forEach(t=>{const n=document.createElement("div");n.className=`env-card ${t.id===this.selectedDuelEnvId?"active":""}`,n.innerHTML=`<div class="env-card-title">${t.name}</div><div class="env-card-tagline">${t.tagline}</div>`,n.addEventListener("click",()=>{e.querySelectorAll(".env-card").forEach(i=>i.classList.remove("active")),n.classList.add("active"),this.selectedDuelEnvId=t.id}),e.appendChild(n)})),this.stateMgr.setState("DUEL_SETUP")}startDuelPlayer1(){const e=document.getElementById("input-duel-p1"),t=document.getElementById("input-duel-p2"),n=e?e.value.trim():"PILOT 1",i=t?t.value.trim():"PILOT 2";this.passAndPlay.initDuel(n,i,this.selectedDuelEnvId,2500),this.passAndPlay.startPlayer1Turn(),this.handlers.onStartRace({environmentId:this.passAndPlay.getEnvironmentId(),stageLength:this.passAndPlay.getTargetDistance(),seed:this.passAndPlay.getTrackSeed(),isGhost:!1})}showDuelHandoff(e){const t=document.getElementById("lbl-duel-p1-benchmark");t&&(t.textContent=`${e.finalScore.toLocaleString()} PTS`);const n=document.getElementById("lbl-duel-p2-name");n&&(n.textContent=this.passAndPlay.getPlayer2Name()),this.stateMgr.setState("DUEL_HANDOFF")}startDuelPlayer2(){this.passAndPlay.startPlayer2Turn();const e=this.passAndPlay.getPlayer1Result();this.handlers.onStartRace({environmentId:this.passAndPlay.getEnvironmentId(),stageLength:this.passAndPlay.getTargetDistance(),seed:this.passAndPlay.getTrackSeed(),isGhost:!0,customGhost:e?.ghostData})}showDuelResults(){const e=this.passAndPlay.getPlayer1Result(),t=this.passAndPlay.getPlayer2Result();if(!e||!t)return;const n=this.passAndPlay.evaluateDuelWinner(),i=document.getElementById("duel-winner-badge");i&&(n.winner==="TIE"?i.textContent="⚖️ EVEN SPLIT (TIE RACE)!":i.textContent=`🏆 ${n.winnerName} VICTORIOUS!`);const r=document.getElementById("duel-winner-subtitle");r&&(r.textContent=n.winner==="TIE"?"Identical flight scores across the seeded skyway!":`Margin of victory: +${n.scoreDiff.toLocaleString()} PTS`);const a=document.getElementById("lbl-duel-col-p1-name"),o=document.getElementById("lbl-duel-col-p1-score"),l=document.getElementById("lbl-duel-col-p1-dist"),c=document.getElementById("lbl-duel-col-p1-speed"),h=document.getElementById("lbl-duel-col-p1-stunts"),u=document.getElementById("lbl-duel-col-p1-landings");a&&(a.textContent=e.playerName),o&&(o.textContent=e.summary.finalScore.toLocaleString()),l&&(l.textContent=`${e.summary.distanceMeters} M`),c&&(c.textContent=`${e.summary.maxSpeedKmH} KM/H`),h&&(h.textContent=`${e.summary.stuntsExecuted}`),u&&(u.textContent=`${e.summary.cleanLandings}`);const f=document.getElementById("lbl-duel-col-p2-name"),d=document.getElementById("lbl-duel-col-p2-score"),g=document.getElementById("lbl-duel-col-p2-dist"),v=document.getElementById("lbl-duel-col-p2-speed"),m=document.getElementById("lbl-duel-col-p2-stunts"),p=document.getElementById("lbl-duel-col-p2-landings");f&&(f.textContent=t.playerName),d&&(d.textContent=t.summary.finalScore.toLocaleString()),g&&(g.textContent=`${t.summary.distanceMeters} M`),v&&(v.textContent=`${t.summary.maxSpeedKmH} KM/H`),m&&(m.textContent=`${t.summary.stuntsExecuted}`),p&&(p.textContent=`${t.summary.cleanLandings}`),this.stateMgr.setState("DUEL_RESULTS")}openDailyChallenge(){this.dailyChallengeInfo=Fr.getDailyChallenge();const e=document.getElementById("lbl-daily-date"),t=document.getElementById("lbl-daily-title"),n=document.getElementById("lbl-daily-desc"),i=document.getElementById("lbl-daily-env"),r=document.getElementById("lbl-daily-dist");e&&(e.textContent=`MISSION DATE: ${this.dailyChallengeInfo.dateStr} (UTC)`),t&&(t.textContent=this.dailyChallengeInfo.title),n&&(n.textContent=this.dailyChallengeInfo.description),i&&(i.textContent=this.dailyChallengeInfo.environmentName.toUpperCase()),r&&(r.textContent=`${this.dailyChallengeInfo.targetDistance.toLocaleString()} M`),this.stateMgr.setState("DAILY_CHALLENGE")}setupDailyChallengeTicker(){setInterval(()=>{const e=new Date,t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()+1,0,0,0)),n=Math.max(0,t.getTime()-e.getTime()),i=document.getElementById("lbl-daily-timer");i&&(i.textContent=`RESETS IN ${Fr.formatCountdown(n)}`)},1e3)}launchDailyChallenge(){const e=this.dailyChallengeInfo;this.handlers.onStartRace({environmentId:e.environmentId,stageLength:e.targetDistance,seed:e.seed,isGhost:!0})}checkUrlForFriendChallenge(){const e=Ns.getChallengeFromUrl();e&&setTimeout(()=>{const t=document.getElementById("input-friend-code");t&&(t.value=e),this.parseFriendChallengeCode(),this.stateMgr.setState("FRIEND_CHALLENGE")},800)}parseFriendChallengeCode(){const e=document.getElementById("input-friend-code"),t=e?e.value.trim():"",n=Ns.decodeChallenge(t),i=document.getElementById("friend-challenge-preview");if(!n){alert("Invalid or corrupted Friend Challenge Code."),i?.classList.add("hidden"),this.pendingFriendChallenge=null;return}this.pendingFriendChallenge=n;const r=document.getElementById("lbl-friend-creator"),a=document.getElementById("lbl-friend-env"),o=document.getElementById("lbl-friend-dist"),l=document.getElementById("lbl-friend-score");r&&(r.textContent=n.creatorName),a&&(a.textContent=n.environmentId.replace("_"," ").toUpperCase()),o&&(o.textContent=`${n.targetDistance.toLocaleString()} M`),l&&(l.textContent=`${n.targetScore.toLocaleString()} PTS`),i?.classList.remove("hidden")}launchFriendChallenge(){if(!this.pendingFriendChallenge)return;const e=this.pendingFriendChallenge;this.handlers.onStartRace({environmentId:e.environmentId,stageLength:e.targetDistance,seed:e.seed,isGhost:!0})}openLeaderboard(){const e=document.getElementById("input-records-callsign");e&&(e.value=this.onlineLeaderboard.getPlayerName()),this.fetchAndRenderLeaderboard(),this.stateMgr.setState("LEADERBOARD")}async fetchAndRenderLeaderboard(){const e=document.getElementById("records-list");if(!e)return;e.innerHTML='<div class="loader-label text-center p-1rem">CONNECTING TO GLOBAL TELEMETRY...</div>';const t=await this.onlineLeaderboard.fetchLeaderboard({challengeType:this.activeLeaderboardTab==="daily"?"daily":"all_time",environmentId:this.activeEnvFilter==="all"?void 0:this.activeEnvFilter,challengeDate:this.activeLeaderboardTab==="daily"?this.dailyChallengeInfo.dateStr:void 0,limit:25});e.innerHTML="";const n=document.getElementById("lbl-records-offline-note");if(n&&(n.textContent=t.isOfflineFallback?"⚡ Offline Mode / Local Cache Active: Showing verified local records.":"🌐 Global Cloud Connected: Live rankings synchronized with master database."),t.entries.length===0){e.innerHTML='<div class="text-center p-1rem text-muted">No telemetry entries found for this category. Be the first to set a record!</div>';return}t.entries.forEach(i=>{const r=document.createElement("div");r.className="record-row";const a=i.playerId===this.onlineLeaderboard.getOrCreatePlayerId();a&&r.classList.add("personal-record-row"),r.innerHTML=`
        <span class="record-rank">#${i.rank||"-"}</span>
        <span class="record-name">${i.playerName} ${a?"★":""}</span>
        <span class="record-score">${i.score.toLocaleString()} PTS</span>
        <span class="record-meta">${i.distanceMeters} M • ${i.maxSpeedKmH} KM/H</span>
        <span class="record-env">${i.environmentId.replace("_"," ").toUpperCase()}</span>
      `,e.appendChild(r)})}populateResults(e,t){this.lastSummary=e,this.adManager.onRunCompleted();const n=document.getElementById("results-score"),i=document.getElementById("results-dist"),r=document.getElementById("results-stunts"),a=document.getElementById("results-landings"),o=document.getElementById("results-pickups"),l=document.getElementById("results-maxspeed"),c=document.getElementById("results-maxcombo"),h=document.getElementById("results-record-alert"),u=document.getElementById("results-credits-reward");n&&(n.textContent=e.finalScore.toLocaleString()),i&&(i.textContent=`${e.distanceMeters} M`),r&&(r.textContent=`${e.stuntsExecuted}`),a&&(a.textContent=`${e.cleanLandings}`),o&&(o.textContent=`${e.energyPickups}`),l&&(l.textContent=`${e.maxSpeedKmH} KM/H`),c&&(c.textContent=`${e.maxCombo.toFixed(1)}x`),u&&(u.textContent=`+${t.toLocaleString()} AeroCredits Earned`),h&&(e.isNewRecord?h.classList.remove("hidden"):h.classList.add("hidden"));const f=document.getElementById("btn-results-submit");f&&(f.removeAttribute("disabled"),f.innerHTML='<span class="btn-icon">🌐</span><span>TRANSMIT SCORE</span>')}async submitResultsToLeaderboard(){if(!this.lastSummary)return;const e=document.getElementById("btn-results-submit");e&&(e.setAttribute("disabled","true"),e.innerHTML='<span class="btn-icon">⏳</span><span>TRANSMITTING...</span>');const t=this.onlineLeaderboard.getPlayerName(),n=this.selectedQuickEnvId,i=await this.onlineLeaderboard.submitScore({playerName:t,score:this.lastSummary.finalScore,distanceMeters:this.lastSummary.distanceMeters,maxSpeedKmH:this.lastSummary.maxSpeedKmH,stuntsExecuted:this.lastSummary.stuntsExecuted,environmentId:n,challengeType:"all_time"});e&&(e.innerHTML='<span class="btn-icon">✓</span><span>TRANSMITTED</span>'),alert(i.message)}downloadScoreCard(){if(!this.lastSummary)return;const e={pilotName:this.onlineLeaderboard.getPlayerName(),environmentName:this.selectedQuickEnvId.replace("_"," ").toUpperCase(),environmentId:this.selectedQuickEnvId,seed:Math.floor(1e5+Math.random()*899999)};Sl.downloadCard(this.lastSummary,e)}shareResults(){if(!this.lastSummary)return;const e={pilotName:this.onlineLeaderboard.getPlayerName(),environmentName:this.selectedQuickEnvId.replace("_"," ").toUpperCase(),environmentId:this.selectedQuickEnvId,seed:Math.floor(1e5+Math.random()*899999)},t=Ns.encodeChallenge({creatorName:e.pilotName,environmentId:e.environmentId,seed:e.seed,targetDistance:this.lastSummary.distanceMeters,targetScore:this.lastSummary.finalScore,stuntsTarget:this.lastSummary.stuntsExecuted}),n=Ns.getShareUrl(t);Sl.shareScore(this.lastSummary,e,n,i=>{alert(i)})}watchRewardedAd(){const e=document.getElementById("btn-results-ad");e&&e.setAttribute("disabled","true"),this.adManager.showRewardedAd(t=>{this.progression.addCredits(t),this.updateCreditsDisplay(),alert(`Sponsor Transmission Verified! +${t} AeroCredits credited to your balance.`),e&&(e.innerHTML='<span class="btn-icon">✓</span><span>CREDITED</span>')},t=>{alert(t),e&&e.removeAttribute("disabled")})}handleStateTransition(e,t){document.querySelectorAll(".screen").forEach(a=>a.classList.remove("active"));const r={LOADING:"screen-loading",MENU:"screen-menu",PLAY_SELECT:"screen-play-select",CAREER:"screen-career",QUICK_RUN:"screen-quick",STUNT_SCHOOL:"screen-stunt-school",MULTIPLAYER:"screen-multiplayer",DUEL_SETUP:"screen-duel-setup",DUEL_HANDOFF:"screen-duel-handoff",DUEL_RESULTS:"screen-duel-results",DAILY_CHALLENGE:"screen-daily-challenge",FRIEND_CHALLENGE:"screen-friend-challenge",GARAGE:"screen-garage",LEADERBOARD:"screen-records",ACHIEVEMENTS:"screen-achievements",SETTINGS:"screen-settings",HOW_TO_PLAY:"screen-how",CREDITS:"screen-credits",PRIVACY:"screen-privacy",PAUSED:"screen-paused",RESULTS:"screen-results",ERROR:"screen-error"}[e];if(r){const a=document.getElementById(r);a&&a.classList.add("active")}e==="PLAYING"||e==="COUNTDOWN"||e==="CRASHED"?(this.hudContainer?.classList.remove("hidden"),e==="PLAYING"&&this.raceStartTime===0&&(this.raceStartTime=Date.now())):this.hudContainer?.classList.add("hidden"),e==="CRASHED"?this.hudCrashAlert?.classList.remove("hidden"):this.hudCrashAlert?.classList.add("hidden")}showCountdown(e){!this.hudCountdown||!this.hudCountdownNumber||(this.hudCountdown.classList.remove("hidden"),this.hudCountdownNumber.textContent=`${e}`)}hideCountdown(){this.hudCountdown?.classList.add("hidden")}updateHud(e,t,n,i,r,a,o){if(this.hudScore&&(this.hudScore.textContent=Math.floor(e).toLocaleString()),this.hudDistance&&(this.hudDistance.textContent=`${Math.floor(r)} M`),this.hudSpeed&&(this.hudSpeed.textContent=`${Math.round(t)}`),this.hudSpeedArc){const c=Math.min(1,t/350),h=157,u=h-h*c;this.hudSpeedArc.style.strokeDashoffset=`${u}`}if(this.hudEnergyBar&&this.hudEnergyPercent){const l=Math.min(100,Math.max(0,Math.round(n/i*100)));this.hudEnergyBar.style.width=`${l}%`,this.hudEnergyPercent.textContent=`${l}%`}if(this.hudFlightIndicator&&(a?this.hudFlightIndicator.classList.remove("hidden"):this.hudFlightIndicator.classList.add("hidden")),this.hudGhostDelta&&o!==void 0){this.hudGhostDelta.classList.remove("hidden");const l=o>=0?"+":"";this.hudGhostDelta.textContent=`${l}${o.toFixed(1)} M vs GHOST`}else this.hudGhostDelta&&this.hudGhostDelta.classList.add("hidden");if(this.hudTimer&&this.raceStartTime>0){const l=Math.floor((Date.now()-this.raceStartTime)/1e3),c=Math.floor(l/60).toString().padStart(2,"0"),h=(l%60).toString().padStart(2,"0");this.hudTimer.textContent=`${c}:${h}`}}showTrickBanner(e){this.hudTrickBanner&&(this.hudTrickBanner.textContent=e,this.hudTrickBanner.classList.add("show"),this.trickTimeout!==null&&clearTimeout(this.trickTimeout),this.trickTimeout=window.setTimeout(()=>{this.hudTrickBanner?.classList.remove("show"),this.trickTimeout=null},1800))}showAchievementToast(e){!this.toastEl||!this.toastTitle||!this.toastDesc||!this.toastReward||(this.toastTitle.textContent=e.title,this.toastDesc.textContent=e.desc,this.toastReward.textContent=`+${e.rewardAC} AC`,this.toastEl.classList.remove("hidden"),this.toastTimeout!==null&&clearTimeout(this.toastTimeout),this.toastTimeout=window.setTimeout(()=>{this.toastEl?.classList.add("hidden"),this.toastTimeout=null},4e3))}showDialogue(e,t,n,i){this.dialogOverlay&&(this.dialogCharName&&(this.dialogCharName.textContent=e),this.dialogCharRole&&(this.dialogCharRole.textContent=t),this.dialogText&&(this.dialogText.textContent=n),this.dialogAvatarIcon&&(this.dialogAvatarIcon.textContent=e.includes("MIRA")?"👩‍🚀":"👨‍💼"),this.pendingDialogCallback=i,this.dialogOverlay.classList.remove("hidden"))}resetRaceTimer(){this.raceStartTime=0,this.hudTimer&&(this.hudTimer.textContent="00:00")}openCareer(){this.populateCareerMissions(),this.stateMgr.setState("CAREER")}populateCareerMissions(){const e=document.getElementById("career-missions-list");if(!e)return;e.innerHTML="";const t=this.progression.getData().careerProgress;ja.forEach((n,i)=>{const r=i>t,o=this.progression.getData().completedMissions[n.id]?.medal,l=document.createElement("div");l.className=`mission-card ${r?"locked":""}`,l.innerHTML=`
        <div class="mission-num">STAGE ${i+1}</div>
        <div class="mission-info">
          <div class="mission-title">${n.title}</div>
          <div class="mission-desc">${n.subtitle}</div>
          <div class="mission-meta">ZONE: ${n.environmentId.replace("_"," ").toUpperCase()} • ${n.stageLength}M</div>
        </div>
        <div class="mission-medal">
          ${o==="gold"?"🥇 GOLD":o==="silver"?"🥈 SILVER":o==="bronze"?"🥉 BRONZE":r?"🔒":"⚪ OPEN"}
        </div>
        <button class="btn-primary btn-small" ${r?"disabled":""}>
          ${r?"LOCKED":o?"REPLAY":"LAUNCH"}
        </button>
      `,r||l.querySelector("button")?.addEventListener("click",()=>{this.careerMgr.startMission(n.id),this.showDialogue(n.briefing.character,n.briefing.role,n.briefing.message,()=>{this.handlers.onStartRace({environmentId:n.environmentId,stageLength:n.stageLength,isCareer:!0,isGhost:!0})})}),e.appendChild(l)})}openQuickRun(){const e=document.getElementById("env-selector-grid");e&&(e.innerHTML="",Object.values(Xn).forEach(t=>{const n=document.createElement("div");n.className=`env-card ${t.id===this.selectedQuickEnvId?"active":""}`,n.innerHTML=`
          <div class="env-card-title">${t.name}</div>
          <div class="env-card-tagline">${t.tagline}</div>
        `,n.addEventListener("click",()=>{document.querySelectorAll(".env-card").forEach(i=>i.classList.remove("active")),n.classList.add("active"),this.selectedQuickEnvId=t.id}),e.appendChild(n)})),this.stateMgr.setState("QUICK_RUN")}renderGarageTabContent(){const e=document.getElementById("garage-tab-content");if(!e)return;e.innerHTML="";const t=this.progression.getData();if(this.activeGarageTab==="upgrades"){const n=document.createElement("div");n.className="upgrades-container",[{id:"engine",label:"TURBINE MOTOR",desc:"Increases top speed (up to 345 km/h) and forward torque."},{id:"handling",label:"ACTIVE AERO & GRIP",desc:"Sharper steering recovery and stable high-speed drift control."},{id:"thrusters",label:"VERTICAL FLIGHT LIFT",desc:"Stronger vertical thrust and flight climb rate."},{id:"kers",label:"KINETIC KERS TANK",desc:"Expands hyper-energy capacity from 100 to 140 and faster recharge."}].forEach(r=>{const a=t.upgrades[r.id],o=this.progression.getUpgradeCost(r.id),l=document.createElement("div");l.className="upgrade-row",l.innerHTML=`
          <div>
            <div class="upgrade-name">${r.label} (LVL ${a}/5)</div>
            <div class="setting-sub">${r.desc}</div>
          </div>
          <div class="upgrade-dots">
            ${[1,2,3,4,5].map(c=>`<div class="upgrade-dot ${c<=a?"filled":""}"></div>`).join("")}
          </div>
          <button class="btn-primary btn-small" ${a>=5?"disabled":""}>
            ${a>=5?"MAX LEVEL":`UPGRADE ⚡ ${o} AC`}
          </button>
        `,a<5&&l.querySelector("button")?.addEventListener("click",()=>{const c=this.progression.upgradeComponent(r.id);c.success||alert(c.message)}),n.appendChild(l)}),e.appendChild(n)}else{const n=document.createElement("div");n.className="garage-items-grid";const i=this.activeGarageTab==="paints"?Xg:this.activeGarageTab==="wheels"?qg:this.activeGarageTab==="underglow"?_c:yc,r=this.activeGarageTab==="paints"?"paint":this.activeGarageTab==="wheels"?"wheels":this.activeGarageTab==="underglow"?"underglow":"thruster",a=t.cosmetics[r],o=r==="paint"?t.unlockedPaints:r==="wheels"?t.unlockedWheels:r==="underglow"?t.unlockedUnderglows:t.unlockedThrusters;i.forEach(l=>{const c=l.id===a,h=o.includes(l.id),u=document.createElement("div");u.className=`shop-item-card ${c?"equipped":""}`,u.innerHTML=`
          <div class="shop-item-swatch" style="background: ${l.colorHex?"#"+l.colorHex.toString(16).padStart(6,"0"):"#00f0ff"};"></div>
          <div class="shop-item-name">${l.name}</div>
          <div class="shop-item-status ${c?"status-equipped":h?"status-owned":"status-cost"}">
            ${c?"EQUIPPED":h?"OWNED":`⚡ ${l.cost} AC`}
          </div>
        `,u.addEventListener("click",()=>{const f=this.progression.buyCosmetic(r,l);f.success||alert(f.message)}),n.appendChild(u)}),e.appendChild(n)}}openAchievements(){const e=document.getElementById("achievements-list");if(!e)return;e.innerHTML="",this.achieveMgr.getAll().forEach(n=>{const i=document.createElement("div");i.className=`achieve-card ${n.unlocked?"unlocked":""}`,i.innerHTML=`
        <div class="achieve-icon">${n.unlocked?n.def.icon:"🔒"}</div>
        <div>
          <div class="achieve-title">${n.def.title}</div>
          <div class="achieve-desc">${n.def.desc}</div>
        </div>
        <div class="achieve-reward">⚡ ${n.def.rewardAC} AC</div>
      `,e.appendChild(i)}),this.stateMgr.setState("ACHIEVEMENTS")}openSettings(){const e=this.progression.getData().settings,t=document.getElementById("slider-volume");t&&(t.value=`${Math.round(e.masterVolume*100)}`);const n=document.getElementById("slider-music");n&&(n.value=`${Math.round(e.musicVolume*100)}`);const i=document.getElementById("slider-sfx");i&&(i.value=`${Math.round(e.sfxVolume*100)}`);const r=document.getElementById("check-motion");r&&(r.checked=e.reducedMotion);const a=document.getElementById("check-vibration");a&&(a.checked=e.vibration),this.stateMgr.setState("SETTINGS")}}const El=[{id:"first_spark",title:"First Spark",desc:"Launch your first run in AERORUSH: SKYBOUND.",icon:"⚡",rewardAC:200},{id:"mach_break",title:"Mach Break",desc:"Reach a top speed exceeding 350 km/h.",icon:"🚀",rewardAC:400},{id:"aero_acrobat",title:"Aero Acrobat",desc:"Execute a full 360° Barrel Roll while airborne.",icon:"🌪️",rewardAC:500},{id:"somersault",title:"Somersault",desc:"Execute a complete Aerial Flip.",icon:"🔄",rewardAC:500},{id:"smooth_operator",title:"Smooth Operator",desc:"Perform 3 Clean Landings in a single run.",icon:"✨",rewardAC:600},{id:"drift_prodigy",title:"Drift Prodigy",desc:"Sustain a continuous drift slide for over 3 seconds.",icon:"💨",rewardAC:400},{id:"skyway_commuter",title:"Skyway Commuter",desc:"Travel over 5,000 meters in a single race session.",icon:"🛣️",rewardAC:800},{id:"overdrive",title:"Overdrive",desc:"Collect 10 Energy Cells in one run.",icon:"🔋",rewardAC:500},{id:"ring_master",title:"Ring Master",desc:"Soar through 5 Stunt Gates.",icon:"🎯",rewardAC:700},{id:"tuned_perfection",title:"Tuned to Perfection",desc:"Fully upgrade any vehicle component to Level 5.",icon:"🔧",rewardAC:1e3},{id:"stylist",title:"Hypercar Stylist",desc:"Unlock and equip a custom paint or wheel style.",icon:"🎨",rewardAC:300},{id:"apex_champion",title:"Apex Champion",desc:"Achieve Gold medals across all Career missions.",icon:"👑",rewardAC:2500}];class Zg{progression;onAchievementUnlocked=null;constructor(e){this.progression=e}checkAchievement(e){const t=El.find(i=>i.id===e);if(!t)return;this.progression.getData().unlockedAchievements.includes(e)||(this.progression.unlockAchievement(e),this.progression.addCredits(t.rewardAC),this.onAchievementUnlocked&&this.onAchievementUnlocked(t))}isUnlocked(e){return this.progression.getData().unlockedAchievements.includes(e)}getAll(){const e=this.progression.getData().unlockedAchievements;return El.map(t=>({def:t,unlocked:e.includes(t.id)}))}}class Jg{recording=!1;currentFrames=[];lastSampleTime=0;sampleInterval=.1;maxFrames=1200;ghostMesh;ghostBody;ghostActive=!1;playbackTime=0;loadedRecording=null;isSharedDeviceMode=!1;activePlayerTurn=1;player1Score=0;player1Time=0;player2Score=0;player2Time=0;constructor(){this.ghostMesh=new rt,this.ghostMesh.visible=!1;const e=new Je(1.86,.45,4.4),t=new Lt({color:61695,wireframe:!0,transparent:!0,opacity:.35});this.ghostBody=new be(e,t),this.ghostBody.position.y=.35,this.ghostMesh.add(this.ghostBody);const n=new qa(.3,.6,4);n.rotateX(Math.PI);const i=new be(n,new Lt({color:61695,wireframe:!0}));i.position.set(0,2.2,0),this.ghostMesh.add(i)}startRecording(){this.recording=!0,this.currentFrames=[],this.lastSampleTime=0}recordFrame(e,t,n,i){this.recording&&(this.currentFrames.length>=this.maxFrames||(this.currentFrames.length===0||e-this.lastSampleTime>=this.sampleInterval)&&(this.currentFrames.push({t:parseFloat(e.toFixed(2)),x:parseFloat(t.x.toFixed(2)),y:parseFloat(t.y.toFixed(2)),z:parseFloat(t.z.toFixed(2)),rx:parseFloat(n.x.toFixed(2)),ry:parseFloat(n.y.toFixed(2)),rz:parseFloat(n.z.toFixed(2)),s:parseFloat(i.toFixed(1))}),this.lastSampleTime=e))}lastCreatedRecording=null;getLastRecording(){return this.lastCreatedRecording}loadCustomGhost(e){e&&e.frames&&e.frames.length>0&&(this.loadedRecording=e,this.ghostActive=!0,this.ghostMesh.visible=!0,this.playbackTime=0)}stopRecording(e,t,n,i="Personal Best"){if(this.recording=!1,this.currentFrames.length<2)return null;const r={version:1,environmentId:e,totalTime:this.currentFrames[this.currentFrames.length-1].t,totalScore:t,totalDistance:n,date:new Date().toLocaleDateString(),playerName:i,frames:this.currentFrames};return this.lastCreatedRecording=r,this.saveBestGhost(e,r),r}loadGhost(e){const t=this.getBestGhost(e);return t&&t.frames.length>0?(this.loadedRecording=t,this.ghostActive=!0,this.ghostMesh.visible=!0,this.playbackTime=0,!0):(this.ghostActive=!1,this.ghostMesh.visible=!1,!1)}updatePlayback(e){if(!this.ghostActive||!this.loadedRecording)return;this.playbackTime+=e;const t=this.loadedRecording.frames;if(t.length===0)return;let n=t[0],i=t[t.length-1];for(let o=0;o<t.length-1;o++)if(this.playbackTime>=t[o].t&&this.playbackTime<=t[o+1].t){n=t[o],i=t[o+1];break}if(this.playbackTime>i.t){this.ghostMesh.visible=!1;return}const r=Math.max(.001,i.t-n.t),a=Math.max(0,Math.min(1,(this.playbackTime-n.t)/r));this.ghostMesh.position.set(Tt.lerp(n.x,i.x,a),Tt.lerp(n.y,i.y,a),Tt.lerp(n.z,i.z,a)),this.ghostMesh.rotation.set(Tt.lerp(n.rx,i.rx,a),Tt.lerp(n.ry,i.ry,a),Tt.lerp(n.rz,i.rz,a))}hideGhost(){this.ghostActive=!1,this.ghostMesh.visible=!1}saveBestGhost(e,t){try{if(typeof localStorage<"u"){const n=`aerorush_ghost_${e}`,i=this.getBestGhost(e);(!i||t.totalScore>i.totalScore)&&localStorage.setItem(n,JSON.stringify(t))}}catch(n){console.warn("Could not save ghost to storage:",n)}}getBestGhost(e){try{if(typeof localStorage<"u"){const t=`aerorush_ghost_${e}`,n=localStorage.getItem(t);if(n)return JSON.parse(n)}}catch(t){console.warn("Could not load ghost from storage:",t)}return null}}class jg{renderer;scene;chaseCamera;stateMgr;soundMgr;inputMgr;carModel;physics;trackMgr;particles;scoreMgr;garageScene;uiMgr;progression;careerMgr;achieveMgr;ghostSystem;onlineLeaderboard;adManager;passAndPlay;mpClient;hemiLight;dirLight;headLightL;headLightR;activeEnvironment=Xn.neon_dusk;activeTargetDistance=3e3;isCareerMode=!1;raceElapsedTime=0;countdownTimer=0;countdownStep=3;crashRecoveryTimer=0;quality=Ra.medium;lastTime=0;animFrameId=null;isTabVisible=!0;carWorldPos=new L;carBoundingBox=new wn;thrusterLPos=new L;thrusterRPos=new L;constructor(){this.boot()}boot(){const e=document.getElementById("webgl-canvas");if(!e){console.error("WebGL canvas element not found.");return}try{this.renderer=new Ng({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(this.quality.pixelRatio),this.renderer.shadowMap.enabled=this.quality.shadows,this.renderer.shadowMap.type=Tl,this.renderer.toneMapping=Al,this.renderer.toneMappingExposure=1.15}catch(i){console.error("WebGL Initialization failed:",i);const r=document.getElementById("screen-error");r&&r.classList.add("active");return}this.scene=new ru,this.scene.background=new ke(this.activeEnvironment.skyColor),this.scene.fog=new Ws(this.activeEnvironment.fogColor,this.activeEnvironment.fogDensity),this.setupLighting(),this.stateMgr=new Ug,this.soundMgr=new Fg,this.inputMgr=new Og,this.scoreMgr=new Hg,this.chaseCamera=new Vg(60,window.innerWidth/window.innerHeight),this.progression=new Yg,this.careerMgr=new $g,this.achieveMgr=new Zg(this.progression),this.ghostSystem=new Jg,this.onlineLeaderboard=new xc,this.adManager=new Mc,this.passAndPlay=new Sc,this.mpClient=new Ec,this.carModel=new vc,this.scene.add(this.carModel.root),this.scene.add(this.ghostSystem.ghostMesh),this.scene.add(this.mpClient.opponentMeshRoot),this.physics=new Bg,this.trackMgr=new Gg,this.scene.add(this.trackMgr.root),this.particles=new zg(this.quality.maxParticles),this.scene.add(this.particles.root),this.garageScene=new Wg(this.carModel),this.scene.add(this.garageScene.root),this.garageScene.deactivate(),this.applyCosmeticsAndUpgrades(),this.physics.onStuntCallback=i=>{switch(i.type){case"BARREL_ROLL":this.scoreMgr.addStuntPoints(i.points,i.label),this.soundMgr.playStuntSuccess(),this.chaseCamera.triggerImpactShake(.3,.2),this.achieveMgr.checkAchievement("aero_acrobat"),this.vibrate([40,30,40]);break;case"AERIAL_FLIP":this.scoreMgr.addStuntPoints(i.points,i.label),this.soundMgr.playStuntSuccess(),this.chaseCamera.triggerImpactShake(.3,.2),this.achieveMgr.checkAchievement("somersault"),this.vibrate([40,30,40]);break;case"CLEAN_LANDING":this.scoreMgr.addCleanLandingPoints(i.points),this.soundMgr.playCleanLanding(),this.carModel.root.getWorldPosition(this.carWorldPos),this.particles.emitLandingImpact(this.carWorldPos,!0),this.chaseCamera.triggerImpactShake(.4,.25),this.physics.cleanLandingsCount>=3&&this.achieveMgr.checkAchievement("smooth_operator"),this.vibrate(60);break;case"ROUGH_LANDING":this.soundMgr.playCleanLanding(),this.carModel.root.getWorldPosition(this.carWorldPos),this.particles.emitLandingImpact(this.carWorldPos,!1),this.chaseCamera.triggerImpactShake(.6,.3),this.vibrate(100);break;case"CRASH":this.handleCrash();break}},this.physics.onCollisionCallback=i=>{this.soundMgr.playCrash(),this.chaseCamera.triggerImpactShake(.5,.25),this.scoreMgr.onCrashOrCollision(),this.vibrate(120),i==="barrier"&&(this.carModel.root.getWorldPosition(this.carWorldPos),this.particles.emitLandingImpact(this.carWorldPos,!1))},this.inputMgr.onPauseToggle(()=>{this.stateMgr.is("PLAYING")?this.pauseGame():this.stateMgr.is("PAUSED")&&this.resumeGame()}),this.uiMgr=new Kg(this.stateMgr,this.scoreMgr,this.progression,this.careerMgr,this.achieveMgr,{onStartRace:i=>this.startRace(i),onRestartRace:()=>this.restartRace(),onResume:()=>this.resumeGame(),onPause:()=>this.pauseGame(),onAbortToMenu:()=>this.abortToMenu(),onOpenGarage:()=>this.openGarage(),onCloseGarage:()=>this.closeGarage(),onQualityChange:i=>this.applyQuality(i),onMasterVolumeChange:i=>this.soundMgr.setMasterVolume(i),onMusicVolumeChange:i=>this.soundMgr.setMusicVolume(i),onSfxVolumeChange:i=>this.soundMgr.setSfxVolume(i),onReducedMotionToggle:i=>{this.chaseCamera.reducedMotion=i},onVibrationToggle:i=>{this.progression.updateSettings({vibration:i})},onResetData:()=>{this.progression.resetLocalData(),this.applyCosmeticsAndUpgrades()}},{onlineLeaderboard:this.onlineLeaderboard,adManager:this.adManager,passAndPlay:this.passAndPlay,mpClient:this.mpClient});const t=this.progression.getData().settings;this.soundMgr.setMasterVolume(t.masterVolume),this.soundMgr.setMusicVolume(t.musicVolume),this.soundMgr.setSfxVolume(t.sfxVolume),this.chaseCamera.reducedMotion=t.reducedMotion,this.applyQuality(Ra[t.quality]),window.addEventListener("resize",()=>this.handleResize()),document.addEventListener("visibilitychange",()=>this.handleVisibilityChange()),this.registerServiceWorker();const n=document.getElementById("loader-bar");n&&(n.style.width="100%"),setTimeout(()=>{this.stateMgr.setState("MENU")},600),this.lastTime=performance.now(),this.loop()}setupLighting(){const e=this.activeEnvironment;this.hemiLight=new Xu(e.ambientColor,329484,e.ambientIntensity),this.scene.add(this.hemiLight),this.dirLight=new Aa(e.sunColor,e.sunIntensity),this.dirLight.position.set(...e.sunPosition),this.dirLight.castShadow=this.quality.shadows,this.dirLight.shadow.mapSize.width=this.quality.shadowMapSize,this.dirLight.shadow.mapSize.height=this.quality.shadowMapSize,this.dirLight.shadow.camera.near=1,this.dirLight.shadow.camera.far=140,this.dirLight.shadow.camera.left=-25,this.dirLight.shadow.camera.right=25,this.dirLight.shadow.camera.top=25,this.dirLight.shadow.camera.bottom=-25,this.scene.add(this.dirLight),this.headLightL=new Xo(61695,4,45,Math.PI/6,.4,1.5),this.headLightR=new Xo(61695,4,45,Math.PI/6,.4,1.5),this.scene.add(this.headLightL,this.headLightR),this.scene.add(this.headLightL.target,this.headLightR.target)}applyCosmeticsAndUpgrades(){const e=this.progression.getData();this.carModel.setPaint(e.cosmetics.paint),this.carModel.setWheelStyle(e.cosmetics.wheels);const t=_c.find(r=>r.id===e.cosmetics.underglow);t&&t.colorHex&&this.carModel.setUnderglowColor(t.colorHex);const n=yc.find(r=>r.id===e.cosmetics.thruster);n&&n.colorHex&&this.carModel.setThrusterColor(n.colorHex);const i=this.progression.getAppliedHandlingModifiers();this.physics.applyUpgrades(i)}setEnvironment(e){const t=Xn[e]||Xn.neon_dusk;this.activeEnvironment=t,this.scene.background=new ke(t.skyColor),this.scene.fog=new Ws(t.fogColor,t.fogDensity),this.hemiLight.color.setHex(t.ambientColor),this.hemiLight.intensity=t.ambientIntensity,this.dirLight.color.setHex(t.sunColor),this.dirLight.intensity=t.sunIntensity,this.dirLight.position.set(...t.sunPosition),this.trackMgr.setEnvironment(t)}startRace(e){this.soundMgr.resumeContext(),this.soundMgr.startCyberMusic();const t=e?.environmentId||this.activeEnvironment.id;this.setEnvironment(t),this.activeTargetDistance=e?.stageLength||3e3,this.isCareerMode=!!e?.isCareer,this.applyCosmeticsAndUpgrades(),this.physics.reset(),this.trackMgr.reset(e?.seed),this.scoreMgr.reset(),this.uiMgr.resetRaceTimer(),this.raceElapsedTime=0,e?.customGhost?this.ghostSystem.loadCustomGhost(e.customGhost):e?.isGhost?this.ghostSystem.loadGhost(t):this.ghostSystem.hideGhost(),this.ghostSystem.startRecording(),this.carModel.root.position.copy(this.physics.position),this.carModel.root.rotation.copy(this.physics.rotation),this.achieveMgr.checkAchievement("first_spark"),this.stateMgr.setState("COUNTDOWN"),this.countdownStep=3,this.countdownTimer=0,this.uiMgr.showCountdown(this.countdownStep)}restartRace(){this.startRace({environmentId:this.activeEnvironment.id,stageLength:this.activeTargetDistance,isCareer:this.isCareerMode,isGhost:!0})}pauseGame(){this.stateMgr.is("PLAYING")&&(this.stateMgr.setState("PAUSED"),this.soundMgr.updateEngine(0,!1,!1,!1))}resumeGame(){this.stateMgr.is("PAUSED")&&(this.stateMgr.setState("PLAYING"),this.lastTime=performance.now())}abortToMenu(){this.soundMgr.stopCyberMusic(),this.soundMgr.updateEngine(0,!1,!1,!1),this.ghostSystem.hideGhost(),this.mpClient.opponentMeshRoot.visible=!1,this.mpClient.leaveRoom(),this.passAndPlay.reset(),this.stateMgr.setState("MENU"),this.scene.add(this.carModel.root),this.carModel.root.position.set(0,0,0),this.carModel.root.rotation.set(0,0,0)}openGarage(){this.soundMgr.resumeContext(),this.stateMgr.setState("GARAGE"),this.applyCosmeticsAndUpgrades(),this.garageScene.activate()}closeGarage(){this.garageScene.deactivate(),this.scene.add(this.carModel.root),this.applyCosmeticsAndUpgrades(),this.stateMgr.setState("MENU")}applyQuality(e){this.quality=e,this.renderer.setPixelRatio(e.pixelRatio),this.renderer.shadowMap.enabled=e.shadows,this.particles.setMaxParticles(e.maxParticles)}handleCrash(){this.stateMgr.setState("CRASHED"),this.soundMgr.playCrash(),this.chaseCamera.triggerImpactShake(.9,.5),this.carModel.root.getWorldPosition(this.carWorldPos),this.particles.emitLandingImpact(this.carWorldPos,!1),this.vibrate(200),this.crashRecoveryTimer=1.6}vibrate(e){if(this.progression.getData().settings.vibration&&typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(e)}catch{}}registerServiceWorker(){typeof window<"u"&&"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{console.log("AERORUSH PWA Service Worker active:",e.scope)}).catch(e=>{console.warn("Service Worker registration skipped or blocked:",e)})})}handleResize(){const e=window.innerWidth,t=window.innerHeight,n=e/t;this.renderer.setSize(e,t),this.chaseCamera.setAspect(n),this.garageScene.setAspect(n)}handleVisibilityChange(){this.isTabVisible=!document.hidden,this.isTabVisible?this.lastTime=performance.now():this.stateMgr.is("PLAYING")&&this.pauseGame()}loop=()=>{this.animFrameId=requestAnimationFrame(this.loop);const e=performance.now();let t=(e-this.lastTime)/1e3;if(this.lastTime=e,t=Math.min(t,.05),!this.isTabVisible)return;const n=this.stateMgr.getState();if(n==="GARAGE"){this.garageScene.update(t),this.renderer.render(this.scene,this.garageScene.camera);return}if(n==="COUNTDOWN"&&(this.countdownTimer+=t,this.countdownTimer>=.85&&(this.countdownTimer=0,this.countdownStep--,this.countdownStep>0?(this.uiMgr.showCountdown(this.countdownStep),this.soundMgr.playGatePass()):this.countdownStep===0?(this.uiMgr.showCountdown("GO!"),this.soundMgr.playStuntSuccess()):(this.uiMgr.hideCountdown(),this.stateMgr.setState("PLAYING")))),n==="CRASHED"&&(this.crashRecoveryTimer-=t,this.physics.update(t,this.inputMgr.getState()),this.carModel.root.position.copy(this.physics.position),this.crashRecoveryTimer<=0&&(this.physics.recoverFromCrash(),this.stateMgr.setState("PLAYING"))),n==="PLAYING"){const r=this.inputMgr.getState();this.raceElapsedTime+=t,this.physics.update(t,r),this.ghostSystem.recordFrame(this.raceElapsedTime,this.physics.position,this.physics.rotation,this.physics.forwardSpeed),this.ghostSystem.updatePlayback(t),this.carModel.root.position.copy(this.physics.position),this.carModel.root.rotation.copy(this.physics.rotation),this.carModel.updateVisuals(this.physics.forwardSpeed,this.physics.steerAngle,this.physics.isBoosting,this.physics.isAirborne,t),this.carModel.root.getWorldPosition(this.carWorldPos),this.headLightL.position.set(this.carWorldPos.x-.7,this.carWorldPos.y+.4,this.carWorldPos.z+.5),this.headLightR.position.set(this.carWorldPos.x+.7,this.carWorldPos.y+.4,this.carWorldPos.z+.5),this.headLightL.target.position.set(this.carWorldPos.x-.7,this.carWorldPos.y,this.carWorldPos.z+25),this.headLightR.target.position.set(this.carWorldPos.x+.7,this.carWorldPos.y,this.carWorldPos.z+25),this.trackMgr.update(this.physics.position.z,t),this.carBoundingBox.setFromObject(this.carModel.root),this.trackMgr.checkCollisions(this.physics.position,this.carBoundingBox,h=>{this.soundMgr.playPickup(),this.physics.addEnergyBonus(qe.energy.pickupRechargeBonus),this.scoreMgr.addPickupPoints(),this.particles.emitPickupExplosion(h),this.scoreMgr.energyPickupsCount>=10&&this.achieveMgr.checkAchievement("overdrive")},h=>{this.soundMgr.playGatePass(),this.physics.gatesClearedCount++,this.scoreMgr.addGatePoints(),this.particles.emitGatePass(h),this.chaseCamera.triggerImpactShake(.35,.2),this.physics.gatesClearedCount>=5&&this.achieveMgr.checkAchievement("ring_master")},h=>{this.soundMgr.playRampLaunch(),this.physics.launchOffRamp(h.height),this.chaseCamera.triggerImpactShake(.3,.2)},()=>{this.physics.triggerCrash(),this.handleCrash()}),(this.physics.isBoosting||this.physics.isThrusting)&&(this.carModel.getThrusterPositionLeft(this.thrusterLPos),this.carModel.getThrusterPositionRight(this.thrusterRPos),this.particles.emitThrusterPlume(this.thrusterLPos,this.thrusterRPos,this.physics.isBoosting)),this.physics.isDrifting&&(this.particles.emitDriftSmoke(this.carWorldPos.x,this.carWorldPos.y,this.carWorldPos.z+1.2),this.physics.driftDuration>=3&&this.achieveMgr.checkAchievement("drift_prodigy")),this.particles.update(t,this.carWorldPos,this.physics.forwardSpeed);const a=this.physics.getSpeedKmH();this.scoreMgr.update(t,this.physics.position.z,a,this.physics.isDrifting),a>=350&&this.achieveMgr.checkAchievement("mach_break"),this.scoreMgr.distanceMeters>=5e3&&this.achieveMgr.checkAchievement("skyway_commuter");const o=Math.min(1,this.physics.forwardSpeed/qe.vehicle.baseTopSpeed);this.soundMgr.updateEngine(o,r.accelerate,this.physics.isBoosting||this.physics.isThrusting,this.physics.isDrifting),this.mpClient.getStatus()==="RACING"&&(this.mpClient.sendTelemetry(this.physics.position,this.physics.rotation,this.physics.forwardSpeed,this.physics.isBoosting||this.physics.isThrusting,this.physics.isAirborne),this.mpClient.update(t));let l;const c=this.mpClient.getOpponentDistance();c!==null&&this.mpClient.getStatus()==="RACING"?l=this.physics.position.z-c:this.ghostSystem.ghostMesh.visible&&(l=this.physics.position.z-this.ghostSystem.ghostMesh.position.z),this.uiMgr.updateHud(this.scoreMgr.currentScore,a,this.physics.energy,this.physics.maxEnergy,this.scoreMgr.distanceMeters,this.physics.isAirborne,l),this.scoreMgr.distanceMeters>=this.activeTargetDistance&&this.completeRun()}const i=Math.min(1,this.physics.forwardSpeed/qe.vehicle.boostTopSpeed);this.chaseCamera.update(this.carModel.root.position,i,this.physics.isBoosting,this.physics.steerAngle,this.physics.isAirborne,t),this.renderer.render(this.scene,this.chaseCamera.camera)};completeRun(){this.soundMgr.updateEngine(0,!1,!1,!1);const e=this.ghostSystem.stopRecording(this.activeEnvironment.id,this.scoreMgr.currentScore,this.scoreMgr.distanceMeters),t=this.scoreMgr.finalizeSummary();if(this.mpClient.getStatus()==="RACING"&&this.mpClient.sendFinish(t.finalScore,t.distanceMeters,this.raceElapsedTime),this.passAndPlay.getPhase()==="PLAYER1_RACING"){this.passAndPlay.completePlayer1Turn(t,e||void 0),this.uiMgr.showDuelHandoff(t);return}else if(this.passAndPlay.getPhase()==="PLAYER2_RACING"){this.passAndPlay.completePlayer2Turn(t,e||void 0),this.uiMgr.showDuelResults();return}this.stateMgr.setState("RESULTS");let n=Math.floor(t.distanceMeters/10)+t.stuntsExecuted*50+t.cleanLandings*40+t.energyPickups*15;if(this.isCareerMode){const i=this.careerMgr.evaluateMission({score:t.finalScore,distanceM:t.distanceMeters,stuntsCount:t.stuntsExecuted,cleanLandings:t.cleanLandings,gatesCleared:this.physics.gatesClearedCount,driftSeconds:this.physics.totalDriftSeconds,maxSpeedKmH:t.maxSpeedKmH,crashesCount:this.physics.crashesCount});if(i&&i.passed&&i.medal){this.soundMgr.playMissionComplete(),n+=i.creditsEarned,this.progression.recordMissionComplete(i.mission.id,i.medal,t.finalScore);const r=this.careerMgr.getActiveMission();if(r){const a=ja.findIndex(o=>o.id===r.id);this.progression.advanceCareerProgress(a+1)}setTimeout(()=>{this.uiMgr.showDialogue(i.mission.briefing.character,i.mission.briefing.role,i.feedbackMessage,()=>{})},600)}}this.progression.addCredits(n),this.uiMgr.populateResults(t,n)}dispose(){this.animFrameId!==null&&cancelAnimationFrame(this.animFrameId),this.inputMgr.dispose(),this.soundMgr.cleanup(),this.renderer.dispose()}}window.addEventListener("DOMContentLoaded",()=>{new jg});
//# sourceMappingURL=index-Ca-6kOdI.js.map
