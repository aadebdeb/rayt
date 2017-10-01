/**
 * sample08
 *
 * Scene of cornel box
 *
 */

 const rayt = require('../../src/rayt.js');

 const vec3 = rayt.vec3,
       Scene = rayt.Scene,
       HitableList = rayt.HitableList,
       Rectangle = rayt.primitive.Rectangle,
       Sphere = rayt.primitive.Sphere,
       Box = rayt.primitive.Box,
       Lambertian = rayt.material.Lambertian,
       Metal = rayt.material.Metal,
       Dielectric = rayt.material.Dielectric,
       DiffuseLight = rayt.material.DiffuseLight,
       ConstantTexture = rayt.texture.ConstantTexture,
       CheckerTexture = rayt.texture.CheckerTexture
       PerlinTexture = rayt.texture.PerlinTexture,
       ProjectiveCamera = rayt.camera.ProjectiveCamera;

 const nx = 500,
       ny = 500;

const list = new HitableList();

const red = new Lambertian(new ConstantTexture(vec3(0.65, 0.05, 0.05))),
      white = new Lambertian(new ConstantTexture(vec3(0.73, 0.73, 0.73))),
      green = new Lambertian(new ConstantTexture(vec3(0.12, 0.45, 0.15))),
      light = new DiffuseLight(new ConstantTexture(vec3(15, 15, 15)));

const size = 555,
      half = size / 2;

list.add((new Rectangle(size, size, green)).rotate(0, -90, 0).translate(half, 0, 0)); // left
list.add((new Rectangle(size, size, red)).rotate(0, 90, 0).translate(-half, 0, 0)); // light
list.add((new Rectangle(size, size, white)).rotate(90, 0, 0).translate(0, half, 0)); // top
list.add((new Rectangle(size, size, white)).rotate(-90, 0, 0).translate(0, -half, 0)); // bottom
list.add((new Rectangle(size, size, white)).translate(0, 0, half).flip()); // back
list.add((new Rectangle(130, 105, light)).rotate(90, 0, 0).translate(0, half - 1, 0)); // light
list.add((new Box(165, 165, 165, white)).rotate(0, -18, 0).translate(130 -half + 82.5, -half + 82.5, 65 -half + 82.5));
list.add((new Box(165, 330, 165, white)).rotate(0, 15, 0).translate(265 - half + 82.5, -half + 165, 295 -half + 82.5));

const camera = new ProjectiveCamera({
  lookfrom: vec3(0, 0, -800 - half),
  lookat: vec3(0, 0, 0),
  vup: vec3(0, 1, 0),
  vfov: 40,
  aspect: nx / ny,
  aperture: 0.0,
  focusDist: 10.0
});

const scene = new rayt.Scene({
  screenX: nx,
  screenY: ny,
  hitable: list,
  camera: camera,
  reflectionNum: 50,
  samplingNum: 100,
  background: function(ray) {
    return vec3(0, 0, 0);
  }
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
