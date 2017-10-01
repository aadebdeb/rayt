const vec3 = require('../vec3.js');

/**
 * Interface for Material class
 * @abstract
 *
 */
class Material {

  /**
   * scatters ray
   * @param {Ray} ray
   * @param {HitRecord} rec
   * @return {Ray|null} returns null if there is no way to scatter
   */
  scatter(ray, rec) {
    /** abstract method */
    return null;
  }

  emit(u, v, p) {
    return vec3(0, 0, 0);
  }

}

module.exports = Material;
