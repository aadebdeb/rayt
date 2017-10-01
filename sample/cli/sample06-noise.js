/**
 * sample06
 *
 * Scene with objects with noise texture
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
      ProjectiveCamera = rayt.camera.ProjectiveCamera;

const nx = 400,
      ny = 300;

const hitableList = new HitableList();

const noiseTex1 = new CustomTexture(function(u, v, p) {
  return vec3(1, 1, 1).mult(Math.sin(p.z + 10 * noise.fbm(p)) + 1).mult(0.5);
});
const noiseSphere1 = new Sphere(2.5, new Lambertian(noiseTex1)).translate(3, 0, 3);
hitableList.add(noiseSphere1);

const noiseTex2 = new CustomTexture(function(u, v, p) {
  return vec3(1, 1, 1).mult(noise.fbm(p) * 10.0);
});
const noiseSphere2 = new Sphere(2.5, new Lambertian(noiseTex2)).translate(-3, 0, 3);
hitableList.add(noiseSphere2);

const noiseTex3 = new CustomTexture(function(u, v, p) {
  const c1 = vec3(0.1, 0.3, 1.0),
        c2 = vec3(1.0, 0.8, 0.5);
  return vec3.lerp(c1, c2, noise.fbm(p.add(((noise.fbm(p) * 2) - 1) * 5.0)));
});
const noiseSphere3 = new Sphere(2.5, new Lambertian(noiseTex3)).translate(-3, 0, -3);
hitableList.add(noiseSphere3);

const noiseTex4 = new CustomTexture(function(u, v, p) {
  const r = noise.fbm(p.add(1000).mult(2.0)),
        g = noise.fbm(p.add(2000).mult(2.5)),
        b = noise.fbm(p.add(3000).mult(3.5));
  return vec3(r, g, b);
});
const noiseSphere4 = new Sphere(2.5, new Lambertian(noiseTex4)).translate(3, 0, -3);
hitableList.add(noiseSphere4);

const camera = new ProjectiveCamera({
  lookfrom: vec3(3, 7, 5),
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
  reflectionNum: 30,
  samplingNum: 100,
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
