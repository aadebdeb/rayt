const vec3 = require('../vec3.js'),
      Hitable = require('../core/hitable.js'),
      HitRecord = require('../core/hitrecord.js'),
      AABB = require('../bvh/aabb.js'),
      Lambertian = require('../material/lambertian.js'),
      ConstantTexture = require('../texture/constanttexture.js');

/**
 * Class represents Sphere
 * @class
 *
 */
class Sphere extends Hitable {

  /**
   * @constructor
   * @param {number} radius - radious [1]
   * @param {Material} material - material
   */
  constructor(radius, material) {
    super();
    this._radius = radius || 1;
    this._material = material || new Lambertian(new ConstantTexture(vec3(0.5, 0.5, 0.8)));
  }

  /** @inheritdoc */
  hit(ray, tmin, tmax) {
    const oc = ray.origin,
          a = vec3.dot(ray.direction, ray.direction),
          b = vec3.dot(oc, ray.direction),
          c = vec3.dot(oc, oc) - this._radius * this._radius,
          discriminant = b * b - a * c;

    if (discriminant > 0) {
      const t1 = (-b - Math.sqrt(discriminant)) / a;
      if (this._isIn(t1, tmin, tmax)) {
        return this._getRecord(t1, ray);
      }
      const t2 = (-b + Math.sqrt(discriminant)) / a;
      if (this._isIn(t2, tmin, tmax)) {
        return this._getRecord(t2, ray);
      }
    }
    return null;
  }

  /** @inheritdoc */
  aabb() {
    return new AABB(vec3(this._radius).mult(-1), vec3(this._radius));
  }

  /** @private */
  _isIn(t, tmin, tmax) {
    return t < tmax && t > tmin;
  }

  /** @private */
  _getRecord(t, ray) {
    const p = ray.point(t),
          n = p.div(this._radius);
    return new HitRecord(t, p, n, this._material);
  }

}

module.exports = Sphere;
