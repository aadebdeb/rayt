const vec3 = require('../vec3.js'),
      BaseMaterial = require('./basematerial.js'),
      Ray = require('../ray.js');

/**
 * Metal material
 * @class
 *
 */
class Metal extends BaseMaterial {

  /**
   * @constructor
   * @param {BaseMaterial} albedo
   * @param {number} fuzz - fuzziness
   */
  constructor(albedo, fuzz) {
    super();
    this.albedo = albedo;
    this.fuzz = fuzz ? fuzz : 0;
  }

  /** inheritdoc */
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
