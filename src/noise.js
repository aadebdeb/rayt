const vec3 = require('./vec3.js');

const randfloat = [];
for (let i = 0; i < 256; i++) {
  randfloat.push(Math.random());
}

const randvec3 = [];
for (let i = 0; i < 256; i++) {
  randvec3.push(vec3.random().mult(2).sub(1));
}

function shuffle(array) {
  const shuffled = [];
  while(array.length !== 0) {
    shuffled.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
  }
  return shuffled;
}

let permX = [],
      permY = [],
      permZ = [];

for (let i = 0; i < 256; i++) {
  permX.push(i);
  permY.push(i);
  permZ.push(i);
}
permX = shuffle(permX);
permY = shuffle(permY);
permZ = shuffle(permZ);


function trilinearInterp(c, u, v, w) {
  let accum = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        accum += (i * u + (1 - i) * (1 - u)) *
                 (j * v + (1 - j) * (1 - v)) *
                 (k * w + (1 - k) * (1 - w)) * c[i][j][k];
      }
    }
  }
  return accum;
}

function block(p) {
  const i = p.x & 255,
        j = p.y & 255,
        k = p.z & 255;
  return randfloat[permX[i] ^ permY[j] ^ permZ[k]];
}

/**
 *
 * @param {Vec3} p
 * @return {number}
 */
function value(p) {
  const i = Math.floor(p.x),
        j = Math.floor(p.y),
        k = Math.floor(p.z);
  let u = p.x - i,
        v = p.y - j,
        w = p.z - k,
        c = [[[0, 0], [0, 0]], [[0, 0], [0, 0]]];
  u = u * u * (3 - 2 * u);
  v = v * v * (3 - 2 * v);
  w = w * w * (3 - 2 * w)
  for (let di = 0; di < 2; di++) {
    for (let dj = 0; dj < 2; dj++) {
      for(let dk = 0; dk < 2; dk++) {
        c[di][dj][dk] = block(vec3(i, j, k).add(vec3(di, dj, dk)));
      }
    }
  }
  return trilinearInterp(c, u, v, w);
}

function perlinInterp(c, u, v, w) {
  const uu = u * u * (3 - 2 * u),
        vv = v * v * (3 - 2 * v),
        ww = w * w * (3 - 2 * w);
  let accum = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        const weight = vec3(uu - i, vv - j, ww - k);
        accum += (i * uu + (1 - i) * (1 - uu)) *
                 (j * vv + (1 - j) * (1 - vv)) *
                 (k * ww + (1 - k) * (1 - ww)) * vec3.dot(c[i][j][k], weight);
      }
    }
  }
  return (accum + 1) * 0.5;
}

function perlin(p) {
  const i = Math.floor(p.x),
        j = Math.floor(p.y),
        k = Math.floor(p.z),
        u = p.x - i,
        v = p.y - j,
        w = p.z - k;
        c = [[[null, null], [null, null]], [[null, null], [null, null]]];
  for (let di = 0; di < 2; di++) {
    for (let dj = 0; dj < 2; dj++) {
      for (let dk = 0; dk < 2; dk++) {
        c[di][dj][dk] = randvec3[permX[(i + di) & 255] ^ permY[(j + dj) & 255] ^ permZ[(k + dk) & 255]];
      }
    }
  }
  return perlinInterp(c, u, v, w);
}

function fbm(p) {
  let v = 0.0,
      weight = 0.5,
      p_ = p.clone();
  for (let i = 0; i < 7; i++) {
    v += weight * (perlin(p_) * 2 - 1);
    weight *= 0.5;
    p_ = p_.mult(2 + (randfloat[i] * 0.01));
  }

  return (v + 1) * 0.5;
}

const noise = {

  perlin: perlin,
  fbm: fbm

}


module.exports = noise;
