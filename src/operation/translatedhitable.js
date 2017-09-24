const Hitable = require('../hitable.js'),
      HitRecord = require('../hitrecord.js'),
      Ray = require('../ray.js'),
      vec3 = require('../vec3.js');

class TranslatedHitable extends Hitable {

  /**
   *
   * @param {Hitable} hitable
   * @param {Vec3} offset
   */
  constructor(hitable, offset) {
    super();
    this._hitable = hitable;
    this._offset = offset;
  }

  hit(ray, tmin, tmax) {
    const ray_ = new Ray(ray.origin.sub(this._offset), ray.direction),
          rec = this._hitable.hit(ray_, tmin, tmax);
    if (rec) {
      const p = rec.p.add(this._offset);
      return new HitRecord(rec.t, p, rec.normal, rec.material);
    }

    return null;
  }

  aabb() {
    const aabb = this._hitable.aabb();
    return aabb ? new AABB(aabb.min.add(this._offset), aabb.max.add(this._offset)) : null;
  }

}

module.exports = TranslatedHitable;
