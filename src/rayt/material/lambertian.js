const vec3 = require('../vec3.js'),
      Material = require('./material.js'),
      Ray = require('../core/ray.js');

/**
 * Lambertian material
 * @class
 *
 *
 */
class Lambertian extends Material {
  /**
   * @constructor
   * @param {BaseTexture} albedo
   */
  constructor(texture) {
    super();
    this.albedo = texture;
  }

  /** inheritdoc */
  scatter(ray, rec) {
    const dir = vec3.add(rec.normal, vec3.randomInUnitSphere());
    return {
      ray: new Ray(rec.p, dir),
      attenuation: this.albedo.value(0, 0, rec.p)
    };
  }
}

module.exports = Lambertian;
