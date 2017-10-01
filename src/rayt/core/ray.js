/**
 * Class represents ray
 * @class
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

  /**
   * gets origin
   * @return {Vec3} origin
   */
  get origin() {
    return this._origin;
  }

  /**
   * gets direction
   * @return {Vec3} direction
   */
  get direction() {
    return this._direction;
  }

  /**
   * gets the point at (origin + t * direction)
   * @public
   * @param {number} t
   * @return {Vec3} point at (origin + t * direction)
   */
  point(t) {
    return this._origin.add(this._direction.mult(t));
  }

}

module.exports = Ray;
