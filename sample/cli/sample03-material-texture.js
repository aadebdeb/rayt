/**
 * sample03
 *
 * Scene with various materials and textures
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

const floorTex1 = new ConstantTexture(0.9, 0.9, 0.9),
      floorTex2 = new ConstantTexture(0.0, 0.0, 0.1),
      floorTex = new CheckerTexture(floorTex1, floorTex2, {offset: vec3(0, 0.01, 0)}),
      floorMat = new Lambertian(floorTex),
      floor = new Rectangle(20, 20, floorMat).rotate(-90, 0, 0);
hitableList.add(floor);

const dielectric = new Dielectric(1.5);
      dielectricBox = new Box(2, 2, 2, dielectric).translate(0, 1, 0);
hitableList.add(dielectricBox);

const metalTex = new ConstantTexture(1.0, 1.0, 1.0),
      metalMat = new Metal(metalTex),
      metalSphere = new Sphere(2, metalMat).translate(3.5, 1, 0);
hitableList.add(metalSphere);

const noiseTex = new PerlinTexture(),
      noiseMat = new Metal(noiseTex),
      noiseSphere = new Sphere(2, noiseMat).translate(-3.5, 1, 0);
hitableList.add(noiseSphere);

const camera = new ProjectiveCamera({
  lookfrom: vec3(0, 7, 5),
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
  samplingNum: 50,
  background: function(ray) {
    const c1 = vec3(0.8, 0.8, 0.9),
          c2 = vec3(1.0, 1.0, 1.0),
          v = (ray.origin.y + 1.0) * 0.5;
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
