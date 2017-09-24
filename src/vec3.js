
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

class Vec3 {
  /**
   *
   * @constructor
   */
  constructor(x, y, z) {
    if (x && !y && !z) {
      this.x = x;
      this.y = x;
      this.z = x;
    } else {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
  }

  /**
   * gets vallue of red
   * @public
   * @return {number}
   */
  get r() {
    return this.x;
  }

  /**
   * gets value of green
   * @public
   * @return {number}
   */
  get g() {
    return this.y;
  }

  /**
   * gets value of blue
   *
   */
  get b() {
    return this.z;
  }

  /**
   * clones vec3
   * @public
   * @return {Vec3}
   */
  clone() {
    return new Vec3(this.x, this.y, this.z);
  }

  /**
   * @public
   * @param {...Vec3|number}
   * @return {Vec3}
   */
  add() {
    const args = Array.prototype.slice.call(arguments, 0);
    return args.reduce((v1, v2) => {
      return v1._add(v2);
    }, this.clone());
  }

  /**
   * @private
   */
  _add(v) {
    return v instanceof Vec3 ? this._addVec3(v) : this._addScalar(v);
    //return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  /**
   * @private
   */
  _addVec3(v) {
    return this._applyVec3(v, add);
  }

  /**
   * @private
   */
  _addScalar(a) {
    return this._applyScalar(a, add);
  }

  /**
   * @public
   * @param {... Vec3|number}
   * @return {Vec3}
   */
  sub() {
    const args = Array.prototype.slice.call(arguments, 0);
    return args.reduce((v1, v2) => {
      return v1._sub(v2);
    }, this.clone());
  }

  /**
   * @private
   */
  _sub(v) {
    return v instanceof Vec3 ? this._subVec3(v) : this._subScalar(v);
  }

  /**
   * @private
   */
  _subVec3(v) {
    return this._applyVec3(v, sub);
  }

  /**
   * @private
   */
  _subScalar(a) {
    return this._applyScalar(a, sub);
  }

  /**
   * @public
   * @param {Vec3|number} v
   * @return {Vec3}
   */
  mult(v) {
    if (v instanceof Vec3) {
      return this._multWithVec3(v);
    }
    return this._multWithScalar(v);
  }

  /**
   * @private
   */
  _multWithVec3(v) {
    return this._applyVec3(v, mult);
  }

  /**
   * @private
   */
  _multWithScalar(a) {
    return this._applyScalar(a, mult);
  }

  /**
   * @public
   * @param {Vec3|number} v
   * @return {Vec3}
   */
  div(v) {
    if (v instanceof Vec3) {
      return this._divByVec3(v);
    }
    return this._divByScalar(v);
  }

  /**
   * @private
   */
  _divByVec3(v) {
    return this._applyVec3(v, div);
  }

  /**
   * @private
   */
  _divByScalar(a) {
    return this._applyScalar(a, div);
  }

  /**
   * @private
   */
  _applyVec3(v, f) {
    return new Vec3(f(this.x, v.x), f(this.y, v.y), f(this.z, v.z));
  }

  /**
   * @private
   */
  _applyScalar(a, f) {
    return new Vec3(f(this.x, a), f(this.y, a), f(this.z, a));
  }

  /**
   * @public
   * @return {number}
   */
  length() {
    return Math.sqrt(this.squaredLength());
  }

  /**
   * @public
   * @return {number}
   */
  squaredLength() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  /**
   * gets dot product
   * @public
   * @param {Vec3} v
   * @return {number}
   */
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  /**
   * @public
   * @param {Vec3} v
   * @return {Vec3}
   */
  cross(v) {
    return vec3(this.y * v.z - this.z * v.y,
               -(this.x * v.z - this.z * v.x),
               this.x * v.y - this.y * v.x);
  }

  map(f) {
    return new Vec3(f(this.x), f(this.y), f(this.z));
  }

  normalize() {
    return this.div(this.length());
  }

}

vec3 = function(x, y, z) {
  return new Vec3(x, y, z);
};

vec3.add = function(v1, v2) {
  return v1.add(v2);
}

vec3.sub = function(v1, v2) {
  return v1.sub(v2);
}

vec3.dot = function(v1, v2) {
  return v1.dot(v2);
}

vec3.cross = function(v1, v2) {
  return v1.cross(v2);
}

vec3.lerp = function(v1, v2, t) {
  return vec3.add(v1.mult(t), v2.mult(1 - t));
}

vec3.min = function(v1, v2) {
    return vec3(Math.min(v1.x, v2.x), Math.min(v1.y, v2.y), Math.min(v1.z, v2.z));
}

vec3.max = function(v1, v2) {
    return vec3(Math.max(v1.x, v2.x), Math.max(v1.y, v2.y), Math.max(v1.z, v2.z));
}

vec3.zero = function() {
  return vec3(0, 0, 0);
}

vec3.reflect = function(v, n) {
  return v.sub(n.mult(2).mult(vec3.dot(v, n)));
}

/**
 *
 * @param {Vec3} v incidence vector
 * @param {Vec3} n normal vector
 * @param {number} ri refative index
 * @return {Vec3|null} refracted vector
 */
vec3.refract = function(v, n, ri) {
  const uv = v.normalize(),
        dt = vec3.dot(uv, n),
        discriminant = 1.0 - ri * ri * (1 - dt * dt);
  if (discriminant > 0) {
    const a = uv.sub(n.mult(dt)).mult(ri),
          b = n.mult(Math.sqrt(discriminant));
    return a.sub(b);
  } else {
    return null;
  }
}

vec3.random = function() {
  return new Vec3(Math.random(), Math.random(), Math.random());
}

/**
 * returns random vec3 in unit circle
 * @return {Vec3}
 */
vec3.randomInUnitCircle = function() {
  while(true) {
    const v = vec3(Math.random(), Math.random(), 0).mult(2).sub(vec3(1, 1, 0));
    if (v.squaredLength() <= 1) {
      return v;
    }
  }
}

/**
 * returns random vec3 in unit sphere
 * @return {Vec3}
 */
vec3.randomInUnitSphere = function() {
  while(true) {
    const v = vec3.random().mult(2).sub(1);
    if (v.squaredLength() <= 1) {
      return v;
    }
  }
}

module.exports = vec3;
