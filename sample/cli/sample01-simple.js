/**
 * sample01
 *
 * Simple scene with a sphere.
 *
 */

const rayt = require('../../src/rayt.js');

const nx = 400,
      ny = 300;

const scene = new rayt.Scene({
  screenX: nx,
  screenY: ny
});

console.log("P3");
console.log(nx + " " + ny);
console.log("255");

for (let y = ny - 1; y >= 0; y--) {
  for (let x = 0; x < nx; x++) {
    const c = scene.at(x, y).mult(255.99).map(Math.floor);
    console.log(c.r + " " + c.g + " " + c.b);
  }
}
