
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
   * @constructor
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  /**
   * gets value of x
   * @public
   * @return {number} - value of x
   */
  get x() {
    return this._x;
  }

  /**
   * gets value of y
   * @public
   * @return {number} - value of y
   */
  get y() {
    return this._y;
  }

  /**
   * gets value of z
   * @public
   * @return {number} - value of z
   */
  get z() {
    return this._z;
  }

  /**
   * gets vallue of red
   * @public
   * @return {number} - value of red
   */
  get r() {
    return this.x;
  }

  /**
   * gets value of green
   * @public
   * @return {number} - value of green
   */
  get g() {
    return this.y;
  }

  /**
   * gets value of blue
   * @public
   * @return {number} -value of blue
   */
  get b() {
    return this.z;
  }

  /**
   * returns a new Vec3 instance which has same xyz values
   * @public
   * @return {Vec3} - vector which has same xyz values
   */
  clone() {
    return new Vec3(this.x, this.y, this.z);
  }

  /**
   * returns a new Vec3 instance which added scalars and vectors
   * @public
   * @param {...Vec3|number} - scalars and vectors to add
   * @return {Vec3} - vector which added scalars and vectors
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
   * returns a new Vec3 instance which subtracted scalars and vectors
   * @public
   * @param {...Vec3|number} - scalars and vectors to subtract
   * @return {Vec3} - vector which subtracted scalars and vectors
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
   * returns a new Vec3 instance which mulitiplied with a scalar or a vector
   * @public
   * @param {Vec3|number} v - a scalar or a vector to multiply with
   * @return {Vec3} - vector which multiplied with a scalar or a vector
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
   * returns a new Vec3 instance which divided by a scalar or a vector
   * @public
   * @param {Vec3|number} v - a scalar or a vector to divide
   * @return {Vec3} - vector which divided by a scalar or a vector
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
   * returns the length
   * @public
   * @return {number} - length
   */
  length() {
    return Math.sqrt(this.squaredLength());
  }

  /**
   * returns the squared length
   * @public
   * @return {number}
   */
  squaredLength() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  /**
   * calculates dot product
   * @public
   * @param {Vec3} v - vector
   * @return {number} - the result of dot product
   */
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  /**
   * calculates cross product
   * @public
   * @param {Vec3} v - vector
   * @return {Vec3} - the result of cross product
   */
  cross(v) {
    return new Vec3(this.y * v.z - this.z * v.y,
                    this.z * v.x - this.x * v.z,
                    this.x * v.y - this.y * v.x);
  }

  /**
   * returns a vector which xyz values are applied given function
   * @public
   * @param {function} - function which gets a number as argument returns a number
   */
  map(f) {
    return new Vec3(f(this.x), f(this.y), f(this.z));
  }

  /**
   * returns a normalized vector
   * @public
   * @return {Vec3} - normalized vector
   */
  normalize() {
    return this.div(this.length());
  }

}


/**
 * gets new Vec3 instance
 * @param {number} x - if y and z is not given, xyz values are this value
 * @param {number} y
 * @param {number} z
 * @return {Vec3}
 */
const vec3 = function(x, y, z) {
  if (x !== undefined && y === undefined && z === undefined) {
    return new Vec3(x, x, x);
  }
  return new Vec3(x, y, z);
};

/**
 * gets a vector which v2 added to v1
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
vec3.add = function(v1, v2) {
  return v1.add(v2);
}

/**
 * gets a vector which v2 subtracted from v1
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
vec3.sub = function(v1, v2) {
  return v1.sub(v2);
}

/**
 * calculates dot product from v1 and v2
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
vec3.dot = function(v1, v2) {
  return v1.dot(v2);
}

/**
 * calculates cross product by v2 crossed to v1
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
vec3.cross = function(v1, v2) {
  return v1.cross(v2);
}

/**
 * gets a interpolated vector between v1 and v2
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @param {number} t - be in [0, 1];
 * @return {Vec3} - a vector which has interpolated xyz values
 */
vec3.lerp = function(v1, v2, t) {
  const t_ = t < 0 ? 0 :
             t > 1 ? 1 : t;
  return vec3.add(v1.mult(t), v2.mult(1 - t_));
}

/**
 * gets a vector with minimum xyz values
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @param {Vec3} - a vector with minimum xyz values
 */
vec3.min = function(v1, v2) {
    return vec3(Math.min(v1.x, v2.x), Math.min(v1.y, v2.y), Math.min(v1.z, v2.z));
}

/**
 * gets a vector with maximum xyz values
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @param {Vec3} - a vector with maximum xyz values
 */
vec3.max = function(v1, v2) {
    return vec3(Math.max(v1.x, v2.x), Math.max(v1.y, v2.y), Math.max(v1.z, v2.z));
}

/**
 * gets a vector with zero
 * @return {Vec3} - a vector with zero
 */
vec3.zero = function() {
  return vec3(0, 0, 0);
}

/**
 * calculates reflected vector
 * @param {Vec3} v - incidence vector
 * @param {Vec3} n - normal vector
 * @return {Vec3} - reflected vector
 */
vec3.reflect = function(v, n) {
  return v.sub(n.mult(2).mult(vec3.dot(v, n)));
}

/**
 * calculates refracted vector
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

/**
 * returns a vector with random values
 * @return {Vec3} a vector with random values
 */
vec3.random = function() {
  return new Vec3(Math.random(), Math.random(), Math.random());
}

/**
 * returns random vec3 in unit circle
 * @return {Vec3} a vector within unit circle
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
 * @return {Vec3} a vector within unit sphere
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
