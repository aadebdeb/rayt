//const Translate = require('./operation/translate.js');

/**
 * Interface for hitable objects
 *
 *
 */

// const Translate = require('./operation/translate.js');

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

const TranslatedHitable = require('./operation/translatedhitable.js'),
      RotatedHitable = require('./operation/rotatedhitable.js'),
      FlippedHitable = require('./operation/flippedhitable.js'),
      vec3 = require('./vec3.js');

Hitable.prototype.translate = function(x, y, z) {
  return new TranslatedHitable(this, vec3(x, y, z));
}

Hitable.prototype.rotate = function(x, y, z) {
  return new RotatedHitable(this, vec3(x, y, z));
}

Hitable.prototype.flip = function() {
  return new FlippedHitable(this);
}
