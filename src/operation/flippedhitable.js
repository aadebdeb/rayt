const Hitable = require('../hitable.js'),
      HitRecord = require('../hitrecord.js');

class FlippedHitable extends Hitable {

  /**
   *
   * @param {Hitable} hitable
   *
   */
  constructor(hitable) {
    super();
    this._hitable = hitable;
  }

  hit(ray, tmin, tmax) {
    const rec = this._hitable.hit(ray, tmin, tmax);
    if (rec) {
      const normal_ = rec.normal.mult(-1);
      return new HitRecord(rec.t, rec.p, normal_, rec.material);
    }

    return null;
  }

  aabb() {
    return this._hitable.aabb();
  }

}

module.exports = FlippedHitable;
