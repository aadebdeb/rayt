// const vec3 = require('./vec3.js');
// const Ray = require('./ray.js');
//
//
// function reflect(v, n) {
//   return v.sub(n.mult(2).mult(vec3.dot(v, n)));
// }
//
// /**
//  *
//  * @param {Vec3} v incidence vector
//  * @param {Vec3} n normal vector
//  * @param {number} ri refative index
//  * @return {Vec3|null}
//  */
// function refract(v, n, ri) {
//   const uv = v.normalize(),
//         dt = vec3.dot(uv, n),
//         discriminant = 1.0 - ri * ri * (1 - dt * dt);
//   if (discriminant > 0) {
//     const a = uv.sub(n.mult(dt)).mult(ri),
//           b = n.mult(Math.sqrt(discriminant));
//     return a.sub(b);
//   } else {
//     return null;
//   }
// }
//
// /**
//  * Interface for materials
//  * @class
//  * @abstract
//  */
// class Material {
//   /**
//    *
//    * @param {Ray} ray
//    * @param {HitRecord} hitRecord
//    * @param {Object}
//    */
//   scatter(ray, hitRecord) {
//     /* abstract method */
//     return null;
//   }
// }
//
// /**
//  * Material for lambertian reflection
//  * @class
//  *
//  */
// class Lambertian extends Material {
//
//   /**
//    * @constructor
//    * @param {Vec3} albedo
//    */
//   constructor(albedo) {
//     super();
//     this.albedo = albedo;
//   }
//
//   scatter(ray, hitRecord) {
//     const dir = vec3.add(hitRecord.normal, vec3.randomInUnitSphere());
//     return {
//       ray: new Ray(hitRecord.p, dir),
//       attenuation: this.albedo
//     };
//   }
// }
//
// function lambertian(albedo) {
//   return new Lambertian(albedo);
// }
//
// /**
//  * Metal class
//  * @class
//  *
//  */
// class Metal extends Material{
//
//   /**
//    * @constructor
//    * @param {Vec3} albedo
//    * @param {number} fuzz - fuzziness
//    */
//   constructor(albedo, fuzz) {
//     super();
//     this.albedo = albedo;
//     this.fuzz = fuzz;
//   }
//
//   scatter(ray, hitRecord) {
//     const reflected = reflect(ray.direction.normalize(), hitRecord.normal),
//           scattered = new Ray(hitRecord.p, reflected.add(vec3.randomInUnitSphere().mult(this.fuzz)));
//     return vec3.dot(scattered.direction, hitRecord.normal) > 0 ? {
//       ray: scattered,
//       attenuation: this.albedo
//     } : null;
//   }
//
// }
//
// function metal(albedo, fuzz) {
//   return new Metal(albedo, fuzz);
// }
//
// class Dielectric extends Material {
//
//   /**
//    * @constructor
//    * @param {number} refractiveIndex
//    */
//   constructor(refractiveIndex) {
//     super();
//     this.refractiveIndex = refractiveIndex;
//   }
//
//   /** inheritdoc */
//   scatter(ray, rec) {
//     const reflected = vec3.reflect(ray.direction, rec.normal);
//
//     let outerNormal, ri, cosine;
//     if (vec3.dot(ray.direction, rec.normal) > 0) {
//       outerNormal = rec.normal.mult(-1);
//       ri = this.refractiveIndex;
//       cosine = this.refractiveIndex * vec3.dot(ray.direction, rec.normal) / ray.direction.length();
//     } else {
//       outerNormal = rec.normal;
//       ri = 1 / this.refractiveIndex;
//       cosine = -vec3.dot(ray.direction, rec.normal) / ray.direction.length();
//     }
//
//     const refracted = refract(ray.direction, outerNormal, ri);
//
//     const reflectProb = refracted ? this._schlcick(cosine, this.refractiveIndex) : 1.0;
//
//     return Math.random() < reflectProb ? {
//       ray: new Ray(rec.p, reflected),
//       attenuation: vec3(1, 1, 1)
//     } : {
//       ray: new Ray(rec.p, refracted),
//       attenuation: vec3(1, 1, 1)
//     };
//   }
//
//   _schlcick(cosine, ri) {
//     const r0 = (1 - ri) / (1 + ri),
//           r = r0 * r0;
//     return r + (1 - r) * Math.pow(1 - cosine, 5);
//   }
// }
//
// function dielectric(ri) {
//   return new Dielectric(ri);
// }
//
// const material = {};
// material.lambertian = lambertian;
// material.metal = metal;
// material.dielectric = dielectric;
//
// module.exports = material;


const Lambertian = require('./material/lambertian.js'),
      Metal = require('./material/metal.js'),
      Dielectric = require('./material/dielectric.js'),
      DiffuseLight = require('./material/diffuselight.js');

const material = {
  Lambertian: Lambertian,
  Metal: Metal,
  Dielectric: Dielectric,
  DiffuseLight: DiffuseLight
};

module.exports = material;
