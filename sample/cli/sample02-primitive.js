/**
 * sample02
 *
 * Scene with primitive objects.
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
      ConstantTexture = rayt.texture.ConstantTexture,
      ProjectiveCamera = rayt.camera.ProjectiveCamera;

const nx = 400,
      ny = 300;

const hitableList = new HitableList(),
      rect = new Rectangle(10, 10, new Metal(new ConstantTexture(1.0, 1.0, 1.0), 1)).rotate(-90, 0, 0);
      sphere = new Sphere(1, new Lambertian(new ConstantTexture(0.8, 0.2, 0.2))).translate(2, 1, 0);
      box = new Box(2, 2, 2, new Lambertian(new ConstantTexture(0.2, 0.2, 0.8))).translate(-2, 1, 0);
hitableList.add(rect);
hitableList.add(sphere);
hitableList.add(box);

const camera = new ProjectiveCamera({
  lookfrom: vec3(3, 5, 5),
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
  samplingNum: 5,
  background: function(ray) {
    const c1 = vec3(0.6, 0.6, 0.9),
          c2 = vec3(0.95, 0.95, 0.95),
          v = (ray.direction.y + 1.0) * 0.5;
    return vec3.lerp(c1, c2, v);
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
