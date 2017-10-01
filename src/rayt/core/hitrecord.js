/**
 * Class whcich manages hit record
 * @class
 *
 */
class HitRecord {

  /**
   * @constructor
   * @param {number} t t
   * @param {Vec3} p position
   * @param {Vec3} normal normal
   * @param {BaseMaterial} material material
   */
  constructor(t, p, normal, material) {
    this._t = t;
    this._p = p;
    this._normal = normal;
    this._material = material;
  }

  /**
   * gets t
   * @return {number} t
   */
  get t() {
    return this._t;
  }

  /**
   * gets p
   * @return {Vec3} p
   */
  get p() {
    return this._p;
  }

  /**
   * gets normal
   * @return {Vec3} normal
   */
  get normal() {
    return this._normal;
  }

  /**
   * gets material
   * @return {Material} normal
   */
  get material() {
    return this._material;
  }

}

module.exports = HitRecord;
