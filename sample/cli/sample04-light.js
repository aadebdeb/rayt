/**
 * sample04
 *
 * Scene with some lights
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

 const nx = 400,
       ny = 300;

const hitableList = new HitableList();

const floorMat = new Lambertian(new ConstantTexture(1, 1, 1)),
      floor = new Rectangle(20, 20, floorMat).rotate(-90, 0, 0).translate(0, -3, 0);
hitableList.add(floor);

const cyanMat = new DiffuseLight(new ConstantTexture(0, 1, 1), 4),
      cyanRad = Math.PI * 2 / 3 * 0,
      cyan = new Sphere(1, cyanMat).translate(2 * Math.cos(cyanRad), 0, 2 * Math.sin(cyanRad));
hitableList.add(cyan);

const magentaMat = new DiffuseLight(new ConstantTexture(1, 0, 1), 4),
      magentaRad = Math.PI * 2 / 3 * 1,
      magenta = new Sphere(1, magentaMat).translate(2 * Math.cos(magentaRad), 0, 2 * Math.sin(magentaRad));
hitableList.add(magenta);

const yellowMat = new DiffuseLight(new ConstantTexture(1, 1, 0), 4),
      yellowRad = Math.PI * 2 / 3 * 2;
      yellow = new Sphere(1, yellowMat).translate(2 * Math.cos(yellowRad), 0, 2 * Math.sin(yellowRad));
hitableList.add(yellow);

const camera = new ProjectiveCamera({
  lookfrom: vec3(5, 7, 5),
  lookat: vec3(0, 0, 0),
  vup: vec3(0, 1, 0),
  vfov: 60,
  aspect: nx / ny
});

const scene = new rayt.Scene({
  screenX: nx,
  screenY: ny,
  hitable: hitableList,
  camera: camera,
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
