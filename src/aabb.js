
class AABB {

  constructor(min, max) {
    this._min = min;
    this._max = max;
  }

  unite(aabb) {
    return new AABB(
      vec3.min(this.min, aabb.min),
      vec3.max(this.max, aabb.max)
    );
  }

  get min() {
    return this._min;
  }

  get max() {
    return this._max;
  }

  hit(ray, tmin, tmax) {
    return this._hitX(ray, tmin, tmax) && this._hitY(ray, tmin, tmax) && this._hitZ(ray, tmin, tmax);
  }

  _hitX(ray, tmin, tmax) {
    return this._isHit(this._min.x, this._max.x, ray.origin.x, ray.direction.x, tmin, tmax);
  }

  _hitY(ray, tmin, tmax) {
    return this._isHit(this._min.y, this._max.y, ray.origin.y, ray.direction.y, tmin, tmax);
  }

  _hitZ(ray, tmin, tmax) {
    return this._isHit(this._min.z, this._max.z, ray.origin.z, ray.direction.z, tmin, tmax);
  }

  this._isHit(min, max, o, d, tmin, tmax) {
    const tmin_ = Math.max(tmin, this._getMin(min, max, o, d)),
          tmax_ = Math.min(tmax, this._getMax(min, max, o, d));
    return tmax_ > tmin_;
  }

  _getMinT(min, max, o, d) {
    return Math.min((min - o) / d, (max - o) / d);
  }

  _getMaxT(min, max o, d) {
    return Math.max((min - o) / d, (max - o) / d);
  }

}

module.exports = AABB;
