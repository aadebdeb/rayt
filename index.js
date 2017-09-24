
const rayt = require('./src/rayt.js');

const vec3 = rayt.vec3,
      Sphere = rayt.primitive.Sphere,
      Rectangle = rayt.primitive.Rectangle,
      Box = rayt.primitive.Box,
      HitableList = rayt.HitableList,
      Lambertian = rayt.material.Lambertian,
      Metal = rayt.material.Metal,
      Dielectric = rayt.material.Dielectric,
      DiffuseLight = rayt.material.DiffuseLight,
      ProjectiveCamera = rayt.camera.ProjectiveCamera,
      OrthographicCamera = rayt.camera.OrthographicCamera,
      ConstantTexture = rayt.texture.ConstantTexture,
      CheckerTexture = rayt.texture.CheckerTexture,
      PerlinTexture = rayt.texture.PerlinTexture,
      ConstantMedium = rayt.ConstantMedium;


function randomScene() {
  const n = 500,
        list = new HitableList();

  list.add(new Sphere(vec3(0, -1000, 0), 1000, new Lambertian(vec3(0.5, 0.5, 0.5))));
  for (let a = -11; a < 11; a++) {
    for (let b = -11; b < 11; b++) {
      const matProb = Math.random(),
            center = vec3(a + 0.9 * Math.random(), 0.2, b + 0.9 * Math.random());
      if (center.sub(vec3(4, 0.2, 0)).length() > 0.9) {
        if (matProb < 0.8) {
          list.add(new Sphere(center, 0.2, new Lambertian(vec3.random().mult(vec3.random()))));
        } else if (matProb < 0.9) {
          list.add(new Sphere(center, 0.2, new Metal(vec3(vec3.random().add(1).mult(0.5), 0.5 * Math.random()))));
        } else {
          list.add(new Sphere(center, 0.2, new Dielectric(1.5)));
        }
      }
    }
  }

  list.add(new Sphere(vec3(0, 1, 0), 1.0, new Dielectric(1.5)));
  list.add(new Sphere(vec3(-4, 1, 0), 1.0, new Lambertian(vec3(0.4, 0.2, 0.5), 0.1)));
  list.add(new Sphere(vec3(4, 1, 0), 1.0, new Metal(vec3(0.7, 0.6, 0.5), 0.0)));
  return list;
}

function twoPerlinSpheres() {
  const pertext = new PerlinTexture(),
        list = new HitableList();
  list.add(new Sphere(vec3(0, -1000, 0), 1000, new Lambertian(pertext)));
  list.add(new Sphere(vec3(0, 2, 0), 2, new Lambertian(pertext)));
  // list.add(new Sphere(vec3(0, 2, 0), 2, new DiffuseLight(pertext)));
  // list.add(new Sphere(vec3(0, 7, 0), 2, new DiffuseLight(new ConstantTexture(vec3(4, 4, 4)))));
  list.add(new Rectangle(vec3(0, 0, -2), 5, 5, new DiffuseLight(new ConstantTexture(vec3(10, 10, 10)))));

  return list;
}

function cornellBox() {
  const list = new HitableList(),
        red = new Lambertian(new ConstantTexture(vec3(0.65, 0.05, 0.05))),
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

  // list.add((new Box(165, 165, 165, white)).rotate(0, -18, 0).translate(130 -half + 82.5, -half + 82.5, 65 -half + 82.5));
  // list.add((new Box(165, 330, 165, white)).rotate(0, 15, 0).translate(265 - half + 82.5, -half + 165, 295 -half + 82.5));

  const b1 = (new Box(165, 165, 165, white)).rotate(0, -18, 0).translate(130 -half + 82.5, -half + 82.5, 65 -half + 82.5);
  const b2 = (new Box(165, 330, 165, white)).rotate(0, 15, 0).translate(265 - half + 82.5, -half + 165, 295 -half + 82.5);

  list.add(new ConstantMedium(b1, 0.01, new ConstantTexture(vec3(1.0, 1.0, 1.0))));
  list.add(new ConstantMedium(b2, 0.01, new ConstantTexture(vec3(0.0, 0.0, 0.0))));

  return list;
}

function color(ray, hitable, depth) {
  const hitRecord = hitable.hit(ray, 0.001, Number.POSITIVE_INFINITY);
  if (hitRecord) {
    const scattered = hitRecord.material.scatter(ray, hitRecord),
          emitted = hitRecord.material.emit(hitRecord.u, hitRecord.v, hitRecord.p);

    if (scattered && depth < 50) {
      return vec3.add(emitted, color(scattered.ray, hitable, ++depth).mult(scattered.attenuation));
    } else {
      return emitted;
    }
    // const target = hitRecord.p.add(hitRecord.normal, vec3.randomInUnitSphere());
    // return color(new Ray(hitRecord.p, target.sub(hitRecord.p)), hitable, ++depth).mult(0.5);
  } else {
    return vec3(0.0, 0.0, 0.0);
  }

  // const d = ray.direction.normalize(),
  //       t = 0.5 * (d.y + 1);
  // return vec3.lerp(vec3(0.5, 0.7, 1.0), vec3(1, 1, 1), t);
}

const nx = 500,
      ny = 500;

const lowerleft = vec3(-2, -1, -1),
      horizontal = vec3(4, 0, 0),
      vertical = vec3(0, 2, 0),
      origin = vec3(0, 0, 0);

// const checker = new CheckerTexture(
//   new ConstantTexture(vec3(0.2, 0.3, 0.1)),
//   new ConstantTexture(vec3(0.9, 0.9, 0.9)), 10);
//
// const hitableList = new HitableList();
// hitableList.add(new Sphere(vec3(0, 0, -1), 0.5, new Lambertian(new ConstantTexture(vec3(0.8, 0.3, 0.3)))));
// hitableList.add(new Sphere(vec3(0, -100.5, -1), 100, new Lambertian(checker)));
// hitableList.add(new Sphere(vec3(1, 0, -1), 0.5, new Metal(checker, 0.2)));
// hitableList.add(new Sphere(vec3(-1, 0, -1), 0.5, new Dielectric(1.5)));
//
// const lookfrom = vec3(3, 3, 2),
//       lookat = vec3(0, 0, -1),
//       distToFocus = lookfrom.sub(lookat).length(),
//       aperture = 0.0,
//       camera = new ProjectiveCamera(lookfrom, lookat, vec3(0, 1, 0), 20, nx / ny, aperture, distToFocus);

// const hitableList = twoPerlinSpheres();
//
// const lookfrom = vec3(20, 7, 7),
//       lookat = vec3(0, 0, 0),
//       distToFocus = 10.0,
//       aperture = 0.0,
//       camera = new ProjectiveCamera(lookfrom, lookat, vec3(0, 1, 0), 20, nx / ny, aperture, distToFocus);


// const hitableList = randomScene();
//
// const lookfrom = vec3(13, 2, 3),
//       lookat = vec3(0, 0, 0),
//       distToFocus = 10.0,
//       aperture = 0.1,
//       camera = new ProjectiveCamera(lookfrom, lookat, vec3(0, 1, 0), 20, nx / ny, aperture, distToFocus);


const hitableList = cornellBox();

const lookfrom = vec3(0, 0, -800 - 555/2),
      lookat = vec3(0, 0, 0),
      distToFocus = 10.0,
      aperture = 0.0,
      vfov = 40.0;
      camera = new ProjectiveCamera(lookfrom, lookat, vec3(0, 1, 0), vfov, nx / ny, aperture, distToFocus);


console.log("P3");
console.log(nx + " " + ny);
console.log("255");

const ns = 100;

for (let y = ny - 1; y >= 0; y--) {
  for (let x = 0; x < nx; x++) {
    let c = vec3(0, 0, 0);
    for (let i = 0; i < ns; i++) {
      const u = (x + Math.random()) / nx,
            v = (y + Math.random()) / ny,
            ray = camera.getRay(u, v),
            c_ = color(ray, hitableList, 0);
      c = c.add(c_);
    }

    c = c.div(ns);
    c = c.mult(255.99).map(Math.floor);
    console.log(c.r + " " + c.g + " " + c.b);

  }
}
