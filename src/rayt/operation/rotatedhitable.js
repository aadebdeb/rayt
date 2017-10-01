const Hitable = require('../core/hitable.js'),
      Ray = require('../core/ray.js'),
      HitRecord = require('../core/hitrecord.js'),
      vec3 = require('../vec3.js');

class RotatedHitable extends Hitable {

  /**
   * @constructor
   * @param {Hitable} hitable
   * @param {Vec3} degrees
   */
  constructor(hitable, degrees) {
    super();
    this._hitable = hitable;
    this._radian = degrees.map((v) => {return v / 180 * Math.PI;});
  }

  /** @inheritdoc */
  hit(ray, tmin, tmax) {
    const ray_ = this._rotateRay(ray);
    const rec =  this._hitable.hit(ray_, tmin, tmax);
    if (rec) {
      const p_ = this._rotateForward(rec.p);
      const n_ = this._rotateForward(rec.normal);
      return new HitRecord(rec.t, p_, n_, rec.material);
    }

    return null;
  }

  /** @inheritdoc */
  aabb() {
    const aabb = this._hitable.aabb();
    let min = vec3(Number.NEGATIVE_INFINITY),
        max = vec3(Number.NEGATIVE_INFINITY);
    for (let xi = 0; xi < 2; xi++) {
      for (let yi = 0; yi < 2; yi++) {
        for (let zi = 0; zi < 2; zi++) {
          const x = xi * aabb.min.x + (1 - xi) * aabb.max.x,
                y = yi * aabb.min.y + (1 - yi) * aabb.max.y,
                z = zi * aabb.min.z + (1 - zi) * aabb.max.y;
          const v = this._rotateForward(vec3(x, y, z));
          min = vec3.min(min, v);
          max = vec3.max(max, v);
        }
      }
    }
    return new AABB(min, max);
  }

  _rotateRay(ray) {
    const origin = this._rotateBackward(ray.origin);
    const dir = this._rotateBackward(ray.direction);
    return new Ray(origin, dir);
  }

  _rotate2D(x, y, radian) {
    const sin = Math.sin(radian),
          cos = Math.cos(radian);
    return {
      x: cos * x - sin * y,
      y: sin * x + cos * y
    };
  }

  _rotateForward(v) {
    return this._rotate(v, this._radian);
  }

  _rotateBackward(v) {
    return this._rotate(v, this._radian.mult(-1));
  }

  _rotate(v, radian) {
    return this._rotateZ(this._rotateY(this._rotateX(v, radian.x), radian.y), radian.z);
  }

  _rotateX(v, radian) {
    const vYZ = this._rotate2D(v.y, v.z, radian);
    return vec3(v.x, vYZ.x, vYZ.y);
  }

  _rotateY(v, radian) {
    const vZX = this._rotate2D(v.z, v.x, radian);
    return vec3(vZX.y, v.y, vZX.x);
  }

  _rotateZ(v, radian) {
    const vXY = this._rotate2D(v.x, v.y, radian);
    return vec3(vXY.x, vXY.y, v.z);
  }

}

module.exports = RotatedHitable;
