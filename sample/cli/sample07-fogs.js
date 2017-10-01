/**
 * sample07
 *
 * Scene with fogs
 *
 */

const rayt = require('../../src/rayt.js');

const vec3 = rayt.vec3,
      noise = rayt.noise,
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
      CustomTexture = rayt.texture.CustomTexture,
      ProjectiveCamera = rayt.camera.ProjectiveCamera,
      ConstantMedium = rayt.extension.ConstantMedium;

const nx = 400,
      ny = 300;

const hitableList = new HitableList();

const boxTex = new ConstantTexture(0.5, 0.5, 1.0);
      boxMat = new Lambertian(boxTex),
      box = new Box(3, 3, 3, boxMat).translate(-1.5, 0, 0);
      boxFog = new ConstantMedium(box, 1.0, boxTex);
hitableList.add(boxFog);

const sphereTex = new ConstantTexture(1.0, 0.5, 0.5),
      sphereMat = new Lambertian(sphereTex),
      sphere = new Sphere(1.5, sphereMat).translate(1.5, 0, 0),
      sphereFog = new ConstantMedium(sphere, 0.5, sphereTex);
hitableList.add(sphereFog);

const camera = new ProjectiveCamera({
  lookfrom: vec3(-2, 3, 5),
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
  reflectionNum: 10,
  samplingNum: 30,
  background: function(ray) {
    const c1 = vec3(1.0, 1.0, 1.0),
          c2 = vec3(0.8, 0.8, 0.8),
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
