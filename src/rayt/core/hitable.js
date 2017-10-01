/**
 * Interface for hitable objects
 * Hitable Objects must inherit this class
 * @class
 */
class Hitable {

  /**
   * @abstract
   * @param {Ray} ray
   * @param {number} tmin
   * @param {number} tmax
   * @return {HitRecord|null}
   */
  hit(ray, tmin, tmax) {
    /* abstract method */
    return null;
  }

  /**
   *
   * @param {AABB} box
   * @return {AABB} whether ray hits bounding box or not, returns null if it difficult to define AABB (e.g. infinite plane)
   */
  aabb() {
    /** abstract method */
    return null;
  }


}

module.exports = Hitable;

/* operation for hitable */

const TranslatedHitable = require('../operation/translatedhitable.js'),
      RotatedHitable = require('../operation/rotatedhitable.js'),
      FlippedHitable = require('../operation/flippedhitable.js'),
      vec3 = require('../vec3.js');

/**
 * gets translated hitable object
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {Hitable} translated hitable object
 */
Hitable.prototype.translate = function(x, y, z) {
  return new TranslatedHitable(this, vec3(x, y, z));
}

/**
 * gets rotated hitable object
 * @param {number} x degree for x
 * @param {number} y degree for y
 * @param {number} z degree for z
 * @return {Hitable} rotated hitable object
 */
Hitable.prototype.rotate = function(x, y, z) {
  return new RotatedHitable(this, vec3(x, y, z));
}

/**
 * gets normal flipped object
 * @return {Hitable} normal flipped object
 */
Hitable.prototype.flip = function() {
  return new FlippedHitable(this);
}
