const Hitable = require('../hitable.js');
const HitRecord = require('../hitrecord.js');


/**
 * Sphere
 * @class
 *
 */
class Sphere extends Hitable {

  /**
   * @constructor
   * @param {Vec3} center
   * @param {number} radius
   * @param {Material} material
   */
  constructor(center, radius, material) {
    super();
    this.center = center;
    this.radius = radius;
    this.material = material;
  }

  /** @inheritdoc */
  hit(ray, tmin, tmax) {
    const oc = ray.origin.sub(this.center),
          a = vec3.dot(ray.direction, ray.direction),
          b = vec3.dot(oc, ray.direction),
          c = vec3.dot(oc, oc) - this.radius * this.radius,
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

  /** inheritdoc */
  aabb() {
    return new AABB(this.center.sub(vec3(this.radius, this.radius, this.radius)), this.center.add(vec3(this.radius, this.radius, this.radius)));
  }

  /** @private */
  _isIn(t, tmin, tmax) {
    return t < tmax && t > tmin;
  }

  /** @private */
  _getRecord(t, ray) {
    const p = ray.point(t),
          n = p.sub(this.center).div(this.radius);
    return new HitRecord(t, p, n, this.material);
  }

}

module.exports = Sphere;
