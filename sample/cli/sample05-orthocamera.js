

const rayt = require('../../src/rayt.js');

const vec3 = rayt.vec3,
      Scene = rayt.Scene,
      HitableList = rayt.HitableList,
      Box = rayt.primitive.Box,
      Dielectric = rayt.material.Dielectric,
      BVHNode = rayt.bvh.BVHNode
      OrthographicCamera = rayt.camera.OrthographicCamera,
      ConstantTexture = rayt.texture.ConstantTexture,
      CheckerTexture = rayt.texture.CheckerTexture,
      Lambertian = rayt.material.Lambertian,
      Rectangle = rayt.primitive.Rectangle,
      ProjectiveCamera = rayt.camera.ProjectiveCamera;

const nx = 400,
      ny = 300;

const hitableList = new HitableList();

const floorTex1 = new ConstantTexture(0.9, 0.9, 0.9),
      floorTex2 = new ConstantTexture(0.0, 0.0, 0.1),
      floorTex = new CheckerTexture(floorTex1, floorTex2, {scale: 3.0, offset: vec3(0, 0.01, 0)}),
      floorMat = new Lambertian(floorTex),
      floor = new Rectangle(40, 40, floorMat).rotate(-90, 0, 0).translate(0, -4, 0);
hitableList.add(floor);

const bvh = new BVHNode();
for (let x = -1; x <= 1; x++) {
  for (let y = -1; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      const box = new Box(1.8, 1.8, 1.8, new Dielectric(1.5)).translate(x * 2, y * 2, z * 2);
      bvh.add(box)
    }
  }
}
bvh.constructTree();

hitableList.add(bvh);


const camera = new OrthographicCamera({
  lookfrom: vec3(5, 7, 5),
  lookat: vec3(0, 0, 0),
  vup: vec3(0, 1, 0),
  width: 10 * nx / ny,
  height: 10
});

const scene = new rayt.Scene({
  screenX: nx,
  screenY: ny,
  hitable: hitableList,
  camera: camera,
  reflectionNum: 50,
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
