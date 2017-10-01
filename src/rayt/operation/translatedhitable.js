const Hitable = require('../core/hitable.js'),
      HitRecord = require('../core/hitrecord.js'),
      Ray = require('../core/ray.js'),
      vec3 = require('../vec3.js'),
      AABB = require('../bvh/aabb.js');

/**
 * Class represents translated hitable
 * @class
 *
 */
class TranslatedHitable extends Hitable {

  /**
   * @constructor
   * @param {Hitable} hitable - target hitable
   * @param {Vec3} offset - offset of (x, y, z)
   */
  constructor(hitable, offset) {
    super();
    this._hitable = hitable;
    this._offset = offset;
  }

  /** @inheritdoc */
  hit(ray, tmin, tmax) {
    const ray_ = new Ray(ray.origin.sub(this._offset), ray.direction),
          rec = this._hitable.hit(ray_, tmin, tmax);
    if (rec) {
      const p = rec.p.add(this._offset);
      return new HitRecord(rec.t, p, rec.normal, rec.material);
    }

    return null;
  }

  /** @inheritdoc */
  aabb() {
    const aabb = this._hitable.aabb();
    return aabb ? new AABB(aabb.min.add(this._offset), aabb.max.add(this._offset)) : null;
  }

}

module.exports = TranslatedHitable;
