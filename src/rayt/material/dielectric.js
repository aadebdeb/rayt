const vec3 = require('../vec3.js'),
      Material = require('./material.js'),
      Ray = require('../core/ray.js');

/**
 * Class represents dielectric material
 * @class
 */
class Dielectric extends Material {

  /**
   * @constructor
   * @param {number} refractiveIndex refractive index
   *
   */
  constructor(refractiveIndex) {
    super();
    this.refractiveIndex = refractiveIndex;
  }

  /** @inheritdoc */
  scatter(ray, rec) {
    const reflected = vec3.reflect(ray.direction, rec.normal);

    let outerNormal, ri, cosine;
    if (vec3.dot(ray.direction, rec.normal) > 0) {
      outerNormal = rec.normal.mult(-1);
      ri = this.refractiveIndex;
      cosine = this.refractiveIndex * vec3.dot(ray.direction, rec.normal) / ray.direction.length();
    } else {
      outerNormal = rec.normal;
      ri = 1 / this.refractiveIndex;
      cosine = -vec3.dot(ray.direction, rec.normal) / ray.direction.length();
    }

    const refracted = vec3.refract(ray.direction, outerNormal, ri);

    const reflectProb = refracted ? this._schlcick(cosine, this.refractiveIndex) : 1.0;

    return Math.random() < reflectProb ? {
      ray: new Ray(rec.p, reflected),
      attenuation: vec3(1, 1, 1)
    } : {
      ray: new Ray(rec.p, refracted),
      attenuation: vec3(1, 1, 1)
    };
  }

  _schlcick(cosine, ri) {
    const r0 = (1 - ri) / (1 + ri),
          r = r0 * r0;
    return r + (1 - r) * Math.pow(1 - cosine, 5);
  }
}

module.exports = Dielectric;
