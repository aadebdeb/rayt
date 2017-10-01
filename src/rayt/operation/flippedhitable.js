const Hitable = require('../core/hitable.js'),
      HitRecord = require('../core/hitrecord.js');

/**
 * Class represents normal flipped hitable
 *
 */
class FlippedHitable extends Hitable {

  /**
   * @constructor
   * @param {Hitable} hitable - target hitable
   */
  constructor(hitable) {
    super();
    this._hitable = hitable;
  }

  /** @inheritdoc */
  hit(ray, tmin, tmax) {
    const rec = this._hitable.hit(ray, tmin, tmax);
    if (rec) {
      const normal_ = rec.normal.mult(-1);
      return new HitRecord(rec.t, rec.p, normal_, rec.material);
    }

    return null;
  }

  /** @inheritdoc */
  aabb() {
    return this._hitable.aabb();
  }

}

module.exports = FlippedHitable;
