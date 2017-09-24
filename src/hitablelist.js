const Hitable = require('./hitable.js');

/**
 * Containier for hitable objects
 * @class
 *
 *
 */
class HitableList extends Hitable {

  /**
   * @constructor
   *
   */
  constructor() {
    super();
    this._list = [];
  }

  /** @inheritdoc */
  hit(ray, tmin, tmax) {
    return this._list.reduce((accum, hitable) => {
      const tmax_ = accum ? accum.t : tmax;
      return hitable.hit(ray, tmin, tmax_) || accum;
    }, null);
  }

  aabb() {
    if (this._list.length === 0) {
      return null;
    }

    return this._list.reduce((united, hitable) => {
      const aabb = hitable.aabb();
      return united && aabb ? : united.unite(aabb) : null;
    });
  }

  /**
   * adds hitable object
   * @public
   * @param {Hitable} hitable
   */
  add(hitable) {
    this._list.push(hitable);
  }
}

module.exports = HitableList;
