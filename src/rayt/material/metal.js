const vec3 = require('../vec3.js'),
      Material = require('./material.js'),
      Ray = require('../core/ray.js');

/**
 * Class represents metal material
 * @class
 *
 */
class Metal extends Material {

  /**
   * @constructor
   * @param {Material} albedo
   * @param {number} fuzz - fuzziness. default is 0.
   */
  constructor(albedo, fuzz) {
    super();
    this.albedo = albedo;
    this.fuzz = fuzz !== undefined ? fuzz : 0;
  }

  /** @inheritdoc */
  scatter(ray, rec) {
    const reflected = vec3.reflect(ray.direction.normalize(), rec.normal),
          scattered = new Ray(rec.p, reflected.add(vec3.randomInUnitSphere().mult(this.fuzz)));
    return vec3.dot(scattered.direction, rec.normal) > 0 ? {
      ray: scattered,
      attenuation: this.albedo.value(0, 0, rec.p)
    } : null;
  }

}

module.exports = Metal;
