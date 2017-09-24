//const vec3 = require('./vec3.js');

/**
 * Ray
 * @class
 *
 */
class Ray {

  /**
   * @constructor
   * @param {Vec3} origin
   * @param {Vec3} direction
   */
  constructor(origin, direction) {
    this._origin = origin;
    this._direction = direction.normalize();
  }

  get origin() {
    return this._origin;
  }

  get direction() {
    return this._direction;
  }

  /**
   * gets the point at (origin + t * direction)
   * @public
   * @param {number} t
   * @return {Vec3}
   */
  point(t) {
    return this._origin.add(this._direction.mult(t));
  }

}

module.exports = Ray;
