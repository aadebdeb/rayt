(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Vec3 = function () {
  /**
   * @constructor
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  function Vec3(x, y, z) {
    _classCallCheck(this, Vec3);

    this._x = x;
    this._y = y;
    this._z = z;
  }

  /**
   * gets value of x
   * @public
   * @return {number} - value of x
   */


  _createClass(Vec3, [{
    key: "clone",


    /**
     * returns a new Vec3 instance which has same xyz values
     * @public
     * @return {Vec3} - vector which has same xyz values
     */
    value: function clone() {
      return new Vec3(this.x, this.y, this.z);
    }

    /**
     * returns a new Vec3 instance which added scalars and vectors
     * @public
     * @param {...Vec3|number} - scalars and vectors to add
     * @return {Vec3} - vector which added scalars and vectors
     */

  }, {
    key: "add",
    value: function add() {
      var args = Array.prototype.slice.call(arguments, 0);
      return args.reduce(function (v1, v2) {
        return v1._add(v2);
      }, this.clone());
    }

    /**
     * @private
     */

  }, {
    key: "_add",
    value: function _add(v) {
      return v instanceof Vec3 ? this._addVec3(v) : this._addScalar(v);
    }

    /**
     * @private
     */

  }, {
    key: "_addVec3",
    value: function _addVec3(v) {
      return this._applyVec3(v, add);
    }

    /**
     * @private
     */

  }, {
    key: "_addScalar",
    value: function _addScalar(a) {
      return this._applyScalar(a, add);
    }

    /**
     * returns a new Vec3 instance which subtracted scalars and vectors
     * @public
     * @param {...Vec3|number} - scalars and vectors to subtract
     * @return {Vec3} - vector which subtracted scalars and vectors
     */

  }, {
    key: "sub",
    value: function sub() {
      var args = Array.prototype.slice.call(arguments, 0);
      return args.reduce(function (v1, v2) {
        return v1._sub(v2);
      }, this.clone());
    }

    /**
     * @private
     */

  }, {
    key: "_sub",
    value: function _sub(v) {
      return v instanceof Vec3 ? this._subVec3(v) : this._subScalar(v);
    }

    /**
     * @private
     */

  }, {
    key: "_subVec3",
    value: function _subVec3(v) {
      return this._applyVec3(v, sub);
    }

    /**
     * @private
     */

  }, {
    key: "_subScalar",
    value: function _subScalar(a) {
      return this._applyScalar(a, sub);
    }

    /**
     * returns a new Vec3 instance which mulitiplied with a scalar or a vector
     * @public
     * @param {Vec3|number} v - a scalar or a vector to multiply with
     * @return {Vec3} - vector which multiplied with a scalar or a vector
     */

  }, {
    key: "mult",
    value: function mult(v) {
      if (v instanceof Vec3) {
        return this._multWithVec3(v);
      }
      return this._multWithScalar(v);
    }

    /**
     * @private
     */

  }, {
    key: "_multWithVec3",
    value: function _multWithVec3(v) {
      return this._applyVec3(v, mult);
    }

    /**
     * @private
     */

  }, {
    key: "_multWithScalar",
    value: function _multWithScalar(a) {
      return this._applyScalar(a, mult);
    }

    /**
     * returns a new Vec3 instance which divided by a scalar or a vector
     * @public
     * @param {Vec3|number} v - a scalar or a vector to divide
     * @return {Vec3} - vector which divided by a scalar or a vector
     */

  }, {
    key: "div",
    value: function div(v) {
      if (v instanceof Vec3) {
        return this._divByVec3(v);
      }
      return this._divByScalar(v);
    }

    /**
     * @private
     */

  }, {
    key: "_divByVec3",
    value: function _divByVec3(v) {
      return this._applyVec3(v, div);
    }

    /**
     * @private
     */

  }, {
    key: "_divByScalar",
    value: function _divByScalar(a) {
      return this._applyScalar(a, div);
    }

    /**
     * @private
     */

  }, {
    key: "_applyVec3",
    value: function _applyVec3(v, f) {
      return new Vec3(f(this.x, v.x), f(this.y, v.y), f(this.z, v.z));
    }

    /**
     * @private
     */

  }, {
    key: "_applyScalar",
    value: function _applyScalar(a, f) {
      return new Vec3(f(this.x, a), f(this.y, a), f(this.z, a));
    }

    /**
     * returns the length
     * @public
     * @return {number} - length
     */

  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.squaredLength());
    }

    /**
     * returns the squared length
     * @public
     * @return {number}
     */

  }, {
    key: "squaredLength",
    value: function squaredLength() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    /**
     * calculates dot product
     * @public
     * @param {Vec3} v - vector
     * @return {number} - the result of dot product
     */

  }, {
    key: "dot",
    value: function dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    /**
     * calculates cross product
     * @public
     * @param {Vec3} v - vector
     * @return {Vec3} - the result of cross product
     */

  }, {
    key: "cross",
    value: function cross(v) {
      return new Vec3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }

    /**
     * returns a vector which xyz values are applied given function
     * @public
     * @param {function} - function which gets a number as argument returns a number
     */

  }, {
    key: "map",
    value: function map(f) {
      return new Vec3(f(this.x), f(this.y), f(this.z));
    }

    /**
     * returns a normalized vector
     * @public
     * @return {Vec3} - normalized vector
     */

  }, {
    key: "normalize",
    value: function normalize() {
      return this.div(this.length());
    }
  }, {
    key: "x",
    get: function get() {
      return this._x;
    }

    /**
     * gets value of y
     * @public
     * @return {number} - value of y
     */

  }, {
    key: "y",
    get: function get() {
      return this._y;
    }

    /**
     * gets value of z
     * @public
     * @return {number} - value of z
     */

  }, {
    key: "z",
    get: function get() {
      return this._z;
    }

    /**
     * gets vallue of red
     * @public
     * @return {number} - value of red
     */

  }, {
    key: "r",
    get: function get() {
      return this.x;
    }

    /**
     * gets value of green
     * @public
     * @return {number} - value of green
     */

  }, {
    key: "g",
    get: function get() {
      return this.y;
    }

    /**
     * gets value of blue
     * @public
     * @return {number} -value of blue
     */

  }, {
    key: "b",
    get: function get() {
      return this.z;
    }
  }]);

  return Vec3;
}();

/**
 * gets new Vec3 instance
 * @param {number} x - if y and z is not given, xyz values are this value
 * @param {number} y
 * @param {number} z
 * @return {Vec3}
 */


var vec3 = function vec3(x, y, z) {
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
vec3.add = function (v1, v2) {
  return v1.add(v2);
};

/**
 * gets a vector which v2 subtracted from v1
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
vec3.sub = function (v1, v2) {
  return v1.sub(v2);
};

/**
 * calculates dot product from v1 and v2
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
vec3.dot = function (v1, v2) {
  return v1.dot(v2);
};

/**
 * calculates cross product by v2 crossed to v1
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
vec3.cross = function (v1, v2) {
  return v1.cross(v2);
};

/**
 * gets a interpolated vector between v1 and v2
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @param {number} t - be in [0, 1];
 * @return {Vec3} - a vector which has interpolated xyz values
 */
vec3.lerp = function (v1, v2, t) {
  var t_ = t < 0 ? 0 : t > 1 ? 1 : t;
  return vec3.add(v1.mult(t), v2.mult(1 - t_));
};

/**
 * gets a vector with minimum xyz values
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @param {Vec3} - a vector with minimum xyz values
 */
vec3.min = function (v1, v2) {
  return vec3(Math.min(v1.x, v2.x), Math.min(v1.y, v2.y), Math.min(v1.z, v2.z));
};

/**
 * gets a vector with maximum xyz values
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @param {Vec3} - a vector with maximum xyz values
 */
vec3.max = function (v1, v2) {
  return vec3(Math.max(v1.x, v2.x), Math.max(v1.y, v2.y), Math.max(v1.z, v2.z));
};

/**
 * gets a vector with zero
 * @return {Vec3} - a vector with zero
 */
vec3.zero = function () {
  return vec3(0, 0, 0);
};

/**
 * calculates reflected vector
 * @param {Vec3} v - incidence vector
 * @param {Vec3} n - normal vector
 * @return {Vec3} - reflected vector
 */
vec3.reflect = function (v, n) {
  return v.sub(n.mult(2).mult(vec3.dot(v, n)));
};

/**
 * calculates refracted vector
 * @param {Vec3} v incidence vector
 * @param {Vec3} n normal vector
 * @param {number} ri refative index
 * @return {Vec3|null} refracted vector
 */
vec3.refract = function (v, n, ri) {
  var uv = v.normalize(),
      dt = vec3.dot(uv, n),
      discriminant = 1.0 - ri * ri * (1 - dt * dt);
  if (discriminant > 0) {
    var a = uv.sub(n.mult(dt)).mult(ri),
        b = n.mult(Math.sqrt(discriminant));
    return a.sub(b);
  } else {
    return null;
  }
};

/**
 * returns a vector with random values
 * @return {Vec3} a vector with random values
 */
vec3.random = function () {
  return new Vec3(Math.random(), Math.random(), Math.random());
};

/**
 * returns random vec3 in unit circle
 * @return {Vec3} a vector within unit circle
 */
vec3.randomInUnitCircle = function () {
  while (true) {
    var v = vec3(Math.random(), Math.random(), 0).mult(2).sub(vec3(1, 1, 0));
    if (v.squaredLength() <= 1) {
      return v;
    }
  }
};

/**
 * returns random vec3 in unit sphere
 * @return {Vec3} a vector within unit sphere
 */
vec3.randomInUnitSphere = function () {
  while (true) {
    var v = vec3.random().mult(2).sub(1);
    if (v.squaredLength() <= 1) {
      return v;
    }
  }
};

module.exports = vec3;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Interface for hitable objects
 * Hitable Objects must inherit this class
 * @class
 */
var Hitable = function () {
  function Hitable() {
    _classCallCheck(this, Hitable);
  }

  _createClass(Hitable, [{
    key: 'hit',


    /**
     * @abstract
     * @param {Ray} ray
     * @param {number} tmin
     * @param {number} tmax
     * @return {HitRecord|null}
     */
    value: function hit(ray, tmin, tmax) {
      /* abstract method */
      return null;
    }

    /**
     *
     * @param {AABB} box
     * @return {AABB} whether ray hits bounding box or not, returns null if it difficult to define AABB (e.g. infinite plane)
     */

  }, {
    key: 'aabb',
    value: function aabb() {
      /** abstract method */
      return null;
    }
  }]);

  return Hitable;
}();

module.exports = Hitable;

/* operation for hitable */

var TranslatedHitable = __webpack_require__(17),
    RotatedHitable = __webpack_require__(18),
    FlippedHitable = __webpack_require__(19),
    vec3 = __webpack_require__(0);

/**
 * gets translated hitable object
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {Hitable} translated hitable object
 */
Hitable.prototype.translate = function (x, y, z) {
  return new TranslatedHitable(this, vec3(x, y, z));
};

/**
 * gets rotated hitable object
 * @param {number} x degree for x
 * @param {number} y degree for y
 * @param {number} z degree for z
 * @return {Hitable} rotated hitable object
 */
Hitable.prototype.rotate = function (x, y, z) {
  return new RotatedHitable(this, vec3(x, y, z));
};

/**
 * gets normal flipped object
 * @return {Hitable} normal flipped object
 */
Hitable.prototype.flip = function () {
  return new FlippedHitable(this);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class represents ray
 * @class
 */
var Ray = function () {

  /**
   * @constructor
   * @param {Vec3} origin
   * @param {Vec3} direction
   */
  function Ray(origin, direction) {
    _classCallCheck(this, Ray);

    this._origin = origin;
    this._direction = direction.normalize();
  }

  /**
   * gets origin
   * @return {Vec3} origin
   */


  _createClass(Ray, [{
    key: "point",


    /**
     * gets the point at (origin + t * direction)
     * @public
     * @param {number} t
     * @return {Vec3} point at (origin + t * direction)
     */
    value: function point(t) {
      return this._origin.add(this._direction.mult(t));
    }
  }, {
    key: "origin",
    get: function get() {
      return this._origin;
    }

    /**
     * gets direction
     * @return {Vec3} direction
     */

  }, {
    key: "direction",
    get: function get() {
      return this._direction;
    }
  }]);

  return Ray;
}();

module.exports = Ray;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class whcich manages hit record
 * @class
 *
 */
var HitRecord = function () {

  /**
   * @constructor
   * @param {number} t t
   * @param {Vec3} p position
   * @param {Vec3} normal normal
   * @param {BaseMaterial} material material
   */
  function HitRecord(t, p, normal, material) {
    _classCallCheck(this, HitRecord);

    this._t = t;
    this._p = p;
    this._normal = normal;
    this._material = material;
  }

  /**
   * gets t
   * @return {number} t
   */


  _createClass(HitRecord, [{
    key: "t",
    get: function get() {
      return this._t;
    }

    /**
     * gets p
     * @return {Vec3} p
     */

  }, {
    key: "p",
    get: function get() {
      return this._p;
    }

    /**
     * gets normal
     * @return {Vec3} normal
     */

  }, {
    key: "normal",
    get: function get() {
      return this._normal;
    }

    /**
     * gets material
     * @return {Material} normal
     */

  }, {
    key: "material",
    get: function get() {
      return this._material;
    }
  }]);

  return HitRecord;
}();

module.exports = HitRecord;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = __webpack_require__(0);

/**
 * Interface for Material class
 * @abstract
 *
 */

var Material = function () {
  function Material() {
    _classCallCheck(this, Material);
  }

  _createClass(Material, [{
    key: 'scatter',


    /**
     * scatters ray
     * @param {Ray} ray
     * @param {HitRecord} rec
     * @return {Ray|null} returns null if there is no way to scatter
     */
    value: function scatter(ray, rec) {
      /** abstract method */
      return null;
    }
  }, {
    key: 'emit',
    value: function emit(u, v, p) {
      return vec3(0, 0, 0);
    }
  }]);

  return Material;
}();

module.exports = Material;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = __webpack_require__(0);

var AABB = function () {

  /**
   * @constructor
   * @param {Vec3} min - minimum value for each axis
   * @param {Vec3} max - max value for each axis
   */
  function AABB(min, max) {
    _classCallCheck(this, AABB);

    this._min = min;
    this._max = max;
  }

  /**
   * unites aabb
   * @param {AABB}
   * @return {AABB} - united aabb
   */


  _createClass(AABB, [{
    key: 'unite',
    value: function unite(aabb) {
      return new AABB(vec3.min(this.min, aabb.min), vec3.max(this.max, aabb.max));
    }

    /**
     * gets minmum value
     * @return {Vec3}
     */

  }, {
    key: 'hit',


    /**
     *
     * @param {Ray} ray
     * @param {number} tmin
     * @param {number} tmax
     */
    value: function hit(ray, tmin, tmax) {
      return this._hitX(ray, tmin, tmax) && this._hitY(ray, tmin, tmax) && this._hitZ(ray, tmin, tmax);
    }
  }, {
    key: '_hitX',
    value: function _hitX(ray, tmin, tmax) {
      return this._isHit(this._min.x, this._max.x, ray.origin.x, ray.direction.x, tmin, tmax);
    }
  }, {
    key: '_hitY',
    value: function _hitY(ray, tmin, tmax) {
      return this._isHit(this._min.y, this._max.y, ray.origin.y, ray.direction.y, tmin, tmax);
    }
  }, {
    key: '_hitZ',
    value: function _hitZ(ray, tmin, tmax) {
      return this._isHit(this._min.z, this._max.z, ray.origin.z, ray.direction.z, tmin, tmax);
    }
  }, {
    key: '_isHit',
    value: function _isHit(min, max, o, d, tmin, tmax) {
      var tmin_ = Math.max(tmin, this._getMinT(min, max, o, d)),
          tmax_ = Math.min(tmax, this._getMaxT(min, max, o, d));
      return tmax_ > tmin_;
    }
  }, {
    key: '_getMinT',
    value: function _getMinT(min, max, o, d) {
      return Math.min((min - o) / d, (max - o) / d);
    }
  }, {
    key: '_getMaxT',
    value: function _getMaxT(min, max, o, d) {
      return Math.max((min - o) / d, (max - o) / d);
    }
  }, {
    key: 'min',
    get: function get() {
      return this._min;
    }

    /**
     * gets maximum value
     * @return {Vec3}
     */

  }, {
    key: 'max',
    get: function get() {
      return this._max;
    }
  }]);

  return AABB;
}();

module.exports = AABB;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Interface for Texture Class
 * @class
 *
 */
var Texture = function () {
  function Texture() {
    _classCallCheck(this, Texture);
  }

  _createClass(Texture, [{
    key: "value",


    /**
     * gets value at specified point
     * @param {number} u
     * @param {number} v
     * @param {Vec3} p
     * @return {Object}
     */
    value: function value(u, v, p) {
      /* abstract method */
    }
  }]);

  return Texture;
}();

module.exports = Texture;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vec3 = __webpack_require__(0);

var randfloat = [];
for (var i = 0; i < 256; i++) {
  randfloat.push(Math.random());
}

var randvec3 = [];
for (var _i = 0; _i < 256; _i++) {
  randvec3.push(vec3.random().mult(2).sub(1));
}

function shuffle(array) {
  var shuffled = [];
  while (array.length !== 0) {
    shuffled.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
  }
  return shuffled;
}

var permX = [],
    permY = [],
    permZ = [];

for (var _i2 = 0; _i2 < 256; _i2++) {
  permX.push(_i2);
  permY.push(_i2);
  permZ.push(_i2);
}
permX = shuffle(permX);
permY = shuffle(permY);
permZ = shuffle(permZ);

function trilinearInterp(c, u, v, w) {
  var accum = 0;
  for (var _i3 = 0; _i3 < 2; _i3++) {
    for (var j = 0; j < 2; j++) {
      for (var k = 0; k < 2; k++) {
        accum += (_i3 * u + (1 - _i3) * (1 - u)) * (j * v + (1 - j) * (1 - v)) * (k * w + (1 - k) * (1 - w)) * c[_i3][j][k];
      }
    }
  }
  return accum;
}

function block(p) {
  var i = p.x & 255,
      j = p.y & 255,
      k = p.z & 255;
  return randfloat[permX[i] ^ permY[j] ^ permZ[k]];
}

/**
 *
 * @param {Vec3} p
 * @return {number}
 */
function value(p) {
  var i = Math.floor(p.x),
      j = Math.floor(p.y),
      k = Math.floor(p.z);
  var u = p.x - i,
      v = p.y - j,
      w = p.z - k,
      c = [[[0, 0], [0, 0]], [[0, 0], [0, 0]]];
  u = u * u * (3 - 2 * u);
  v = v * v * (3 - 2 * v);
  w = w * w * (3 - 2 * w);
  for (var di = 0; di < 2; di++) {
    for (var dj = 0; dj < 2; dj++) {
      for (var dk = 0; dk < 2; dk++) {
        c[di][dj][dk] = block(vec3(i, j, k).add(vec3(di, dj, dk)));
      }
    }
  }
  return trilinearInterp(c, u, v, w);
}

function perlinInterp(c, u, v, w) {
  var uu = u * u * (3 - 2 * u),
      vv = v * v * (3 - 2 * v),
      ww = w * w * (3 - 2 * w);
  var accum = 0;
  for (var _i4 = 0; _i4 < 2; _i4++) {
    for (var j = 0; j < 2; j++) {
      for (var k = 0; k < 2; k++) {
        var weight = vec3(uu - _i4, vv - j, ww - k);
        accum += (_i4 * uu + (1 - _i4) * (1 - uu)) * (j * vv + (1 - j) * (1 - vv)) * (k * ww + (1 - k) * (1 - ww)) * vec3.dot(c[_i4][j][k], weight);
      }
    }
  }
  return (accum + 1) * 0.5;
}

function perlin(p) {
  var i = Math.floor(p.x),
      j = Math.floor(p.y),
      k = Math.floor(p.z),
      u = p.x - i,
      v = p.y - j,
      w = p.z - k;
  c = [[[null, null], [null, null]], [[null, null], [null, null]]];
  for (var di = 0; di < 2; di++) {
    for (var dj = 0; dj < 2; dj++) {
      for (var dk = 0; dk < 2; dk++) {
        c[di][dj][dk] = randvec3[permX[i + di & 255] ^ permY[j + dj & 255] ^ permZ[k + dk & 255]];
      }
    }
  }
  return perlinInterp(c, u, v, w);
}

function fbm(p) {
  var v = 0.0,
      weight = 0.5,
      p_ = p.clone();
  for (var _i5 = 0; _i5 < 7; _i5++) {
    v += weight * (perlin(p_) * 2 - 1);
    weight *= 0.5;
    p_ = p_.mult(2 + randfloat[_i5] * 0.01);
  }

  return (v + 1) * 0.5;
}

var noise = {

  perlin: perlin,
  fbm: fbm

};

module.exports = noise;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = __webpack_require__(0),
    Hitable = __webpack_require__(1),
    HitRecord = __webpack_require__(3),
    AABB = __webpack_require__(5),
    Lambertian = __webpack_require__(9),
    ConstantTexture = __webpack_require__(10);

/**
 * Class represents Sphere
 * @class
 *
 */

var Sphere = function (_Hitable) {
  _inherits(Sphere, _Hitable);

  /**
   * @constructor
   * @param {number} radius - radious [1]
   * @param {Material} material - material
   */
  function Sphere(radius, material) {
    _classCallCheck(this, Sphere);

    var _this = _possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).call(this));

    _this._radius = radius || 1;
    _this._material = material || new Lambertian(new ConstantTexture(vec3(0.5, 0.5, 0.8)));
    return _this;
  }

  /** @inheritdoc */


  _createClass(Sphere, [{
    key: 'hit',
    value: function hit(ray, tmin, tmax) {
      var oc = ray.origin,
          a = vec3.dot(ray.direction, ray.direction),
          b = vec3.dot(oc, ray.direction),
          c = vec3.dot(oc, oc) - this._radius * this._radius,
          discriminant = b * b - a * c;

      if (discriminant > 0) {
        var t1 = (-b - Math.sqrt(discriminant)) / a;
        if (this._isIn(t1, tmin, tmax)) {
          return this._getRecord(t1, ray);
        }
        var t2 = (-b + Math.sqrt(discriminant)) / a;
        if (this._isIn(t2, tmin, tmax)) {
          return this._getRecord(t2, ray);
        }
      }
      return null;
    }

    /** @inheritdoc */

  }, {
    key: 'aabb',
    value: function aabb() {
      return new AABB(vec3(this._radius).mult(-1), vec3(this._radius));
    }

    /** @private */

  }, {
    key: '_isIn',
    value: function _isIn(t, tmin, tmax) {
      return t < tmax && t > tmin;
    }

    /** @private */

  }, {
    key: '_getRecord',
    value: function _getRecord(t, ray) {
      var p = ray.point(t),
          n = p.div(this._radius);
      return new HitRecord(t, p, n, this._material);
    }
  }]);

  return Sphere;
}(Hitable);

module.exports = Sphere;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = __webpack_require__(0),
    Material = __webpack_require__(4),
    Ray = __webpack_require__(2);

/**
 * Lambertian material
 * @class
 *
 *
 */

var Lambertian = function (_Material) {
  _inherits(Lambertian, _Material);

  /**
   * @constructor
   * @param {BaseTexture} albedo
   */
  function Lambertian(texture) {
    _classCallCheck(this, Lambertian);

    var _this = _possibleConstructorReturn(this, (Lambertian.__proto__ || Object.getPrototypeOf(Lambertian)).call(this));

    _this.albedo = texture;
    return _this;
  }

  /** inheritdoc */


  _createClass(Lambertian, [{
    key: 'scatter',
    value: function scatter(ray, rec) {
      var dir = vec3.add(rec.normal, vec3.randomInUnitSphere());
      return {
        ray: new Ray(rec.p, dir),
        attenuation: this.albedo.value(0, 0, rec.p)
      };
    }
  }]);

  return Lambertian;
}(Material);

module.exports = Lambertian;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = __webpack_require__(0),
    Texture = __webpack_require__(6);

/**
 * Class represents texture of constant color
 * @class
 */

var ConstantTexture = function (_Texture) {
  _inherits(ConstantTexture, _Texture);

  /**
   * @constructor
   * @param {Number|Vec3} r - red | Vec3 instance which has rbg color
   * @param {Number} g - green
   * @param {Number} b - blue
   */
  function ConstantTexture(r, g, b) {
    _classCallCheck(this, ConstantTexture);

    var _this = _possibleConstructorReturn(this, (ConstantTexture.__proto__ || Object.getPrototypeOf(ConstantTexture)).call(this));

    _this._color = r instanceof vec3.zero().constructor ? r : vec3(r, g, b);
    return _this;
  }

  /** @inheritdoc */


  _createClass(ConstantTexture, [{
    key: 'value',
    value: function value(u, v, p) {
      return this._color;
    }
  }]);

  return ConstantTexture;
}(Texture);

module.exports = ConstantTexture;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hitable = __webpack_require__(1),
    HitRecord = __webpack_require__(3),
    AABB = __webpack_require__(5),
    vec3 = __webpack_require__(0);

/**
 * Class represents Rectangle
 * @class
 *
 */

var Rectangle = function (_Hitable) {
  _inherits(Rectangle, _Hitable);

  /**
   * @constructor
   * @param {number} width - size along with x axis
   * @param {number} height - size alng with y axis
   * @param {BaseMaterial} material
   */
  function Rectangle(width, height, material) {
    _classCallCheck(this, Rectangle);

    var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

    width = width || 10;
    height = height || 10;
    material = material;

    _this.x1 = -width / 2;
    _this.x2 = width / 2;
    _this.y1 = -height / 2;
    _this.y2 = height / 2;
    _this.z = 0;
    _this.material = material;
    return _this;
  }

  _createClass(Rectangle, [{
    key: 'hit',
    value: function hit(ray, tmin, tmax) {
      // if ray is parallel with rectangle, ray never hit with rectangle
      if (ray.direction.z === 0) {
        return null;
      }
      var t = (this.z - ray.origin.z) / ray.direction.z;
      if (t < tmin || t > tmax) {
        return null;
      }

      var x = ray.origin.x + t * ray.direction.x,
          y = ray.origin.y + t * ray.direction.y;

      if (x < this.x1 || x > this.x2 || y < this.y1 || y > this.y2) {
        return null;
      }

      return new HitRecord(t, ray.point(t), vec3(0, 0, 1), this.material);
    }

    /** inheritdoc */

  }, {
    key: 'aabb',
    value: function aabb() {
      return new AABB(vec3(this.x1, this.y1, -0.0001), vec3(this.x2, this.y2, 0.0001));
    }
  }]);

  return Rectangle;
}(Hitable);

module.exports = Rectangle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hitable = __webpack_require__(1);

/**
 * Containier for hitable objects
 * @class
 *
 */

var HitableList = function (_Hitable) {
  _inherits(HitableList, _Hitable);

  /**
   * @constructor
   *
   */
  function HitableList() {
    _classCallCheck(this, HitableList);

    var _this = _possibleConstructorReturn(this, (HitableList.__proto__ || Object.getPrototypeOf(HitableList)).call(this));

    _this._list = [];
    return _this;
  }

  /** @inheritdoc */


  _createClass(HitableList, [{
    key: 'hit',
    value: function hit(ray, tmin, tmax) {
      return this._list.reduce(function (accum, hitable) {
        var tmax_ = accum ? accum.t : tmax;
        return hitable.hit(ray, tmin, tmax_) || accum;
      }, null);
    }

    /** @inheritdoc */

  }, {
    key: 'aabb',
    value: function aabb() {
      if (this._list.length === 0) {
        return null;
      }

      return this._list.reduce(function (united, hitable) {
        var aabb = hitable.aabb();
        return united && aabb ? united.unite(aabb) : null;
      });
    }

    /**
     * adds hitable object
     * @public
     * @param {Hitable} hitable
     */

  }, {
    key: 'add',
    value: function add(hitable) {
      this._list.push(hitable);
    }
  }]);

  return HitableList;
}(Hitable);

module.exports = HitableList;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = __webpack_require__(0),
    Camera = __webpack_require__(14),
    Ray = __webpack_require__(2);

/**
 * class represents Projective Camera
 * @public
 */

var ProjectiveCamera = function (_Camera) {
      _inherits(ProjectiveCamera, _Camera);

      /**
       * @constructor
       * @param {Object} params - parameters for projective camera
       * @param {Vec3} params.lookfrom - position where camera look from. default is vec3(0, 0, 1)
       * @param {Vec3} params.lookat - position where camera look at. default is vec3(0, 0, 0)
       * @param {Vec3} params.vup - uppder direction of camera. default is vec3(0, 1, 0)
       * @param {number} params.vfov - vertical field of view (in degree). default is 40
       * @param {number} params.aspect - aspect of camera (width / height). default is 4/3
       * @param {number} params.aperture - aperture of camera. If aperture is bigger, final picture ls more blured. default is 0.0
       * @param {number} params.focusDist - distance to focus position. default is 1.0
       */
      function ProjectiveCamera(params) {
            _classCallCheck(this, ProjectiveCamera);

            var _this = _possibleConstructorReturn(this, (ProjectiveCamera.__proto__ || Object.getPrototypeOf(ProjectiveCamera)).call(this));

            params = params || {};
            var lookfrom = params.lookfrom || vec3(0, 0, 5),
                lookat = params.lookat || vec3(0, 0, 0),
                vup = params.vup || vec3(0, 1, 0),
                vfov = params.vfov || 40,
                aspect = params.aspect || 4 / 3,
                aperture = params.aperture || 0.0,
                focusDist = params.focusDist || 1.0;

            var theta = vfov * Math.PI / 180,
                halfHeight = Math.tan(theta / 2),
                halfWidth = aspect * halfHeight;

            _this._back = vec3.sub(lookfrom, lookat).normalize();
            _this._right = vec3.cross(vup, _this._back).normalize();
            _this._up = vec3.cross(_this._back, _this._right);
            _this._origin = lookfrom;
            _this._lowerleft = _this._origin.sub(_this._right.mult(focusDist * halfWidth), _this._up.mult(focusDist * halfHeight), _this._back.mult(focusDist));
            _this._horizontal = _this._right.mult(2 * focusDist * halfWidth);
            _this._vertical = _this._up.mult(2 * focusDist * halfHeight);
            _this._lensRadius = aperture / 2;
            return _this;
      }

      /** @inheritdoc */


      _createClass(ProjectiveCamera, [{
            key: 'getRay',
            value: function getRay(s, t) {
                  var rd = vec3.randomInUnitCircle().mult(this._lensRadius),
                      offset = vec3.add(this._right.mult(rd.x), this._up.mult(rd.y)),
                      origin_ = this._origin.add(offset);
                  return new Ray(origin_, this._lowerleft.add(this._horizontal.mult(s), this._vertical.mult(t)).sub(origin_));
            }
      }]);

      return ProjectiveCamera;
}(Camera);

module.exports = ProjectiveCamera;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Interface for Camera class
 * @class
 */
var Camera = function () {
  function Camera() {
    _classCallCheck(this, Camera);
  }

  _createClass(Camera, [{
    key: "getRay",


    /**
     * gets ray to screen position at (s, t)
     * @param {number} s - screen positon at x. must be in [0, 1]
     * @param {number} t - screen position at y. must be in [0, 1]
     * @return {Ray}
     */
    value: function getRay(s, t) {
      /** abstract method */
      return null;
    }
  }]);

  return Camera;
}();

module.exports = Camera;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vec3 = __webpack_require__(0),
    noise = __webpack_require__(7),
    primitive = __webpack_require__(16),
    material = __webpack_require__(21),
    camera = __webpack_require__(25),
    texture = __webpack_require__(27),
    bvh = __webpack_require__(31),
    extension = __webpack_require__(33),
    HitableList = __webpack_require__(12),
    Scene = __webpack_require__(35);

var rayt = {
  vec3: vec3,
  noise: noise,
  primitive: primitive,
  material: material,
  camera: camera,
  texture: texture,
  extension: extension,
  bvh: bvh,
  HitableList: HitableList,
  Scene: Scene
};

module.exports = rayt;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sphere = __webpack_require__(8),
    Rectangle = __webpack_require__(11),
    Box = __webpack_require__(20);

// Object which has Primitive class
var primitive = {
  Sphere: Sphere,
  Rectangle: Rectangle,
  Box: Box
};

module.exports = primitive;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hitable = __webpack_require__(1),
    HitRecord = __webpack_require__(3),
    Ray = __webpack_require__(2),
    vec3 = __webpack_require__(0),
    AABB = __webpack_require__(5);

/**
 * Class represents translated hitable
 * @class
 *
 */

var TranslatedHitable = function (_Hitable) {
  _inherits(TranslatedHitable, _Hitable);

  /**
   * @constructor
   * @param {Hitable} hitable - target hitable
   * @param {Vec3} offset - offset of (x, y, z)
   */
  function TranslatedHitable(hitable, offset) {
    _classCallCheck(this, TranslatedHitable);

    var _this = _possibleConstructorReturn(this, (TranslatedHitable.__proto__ || Object.getPrototypeOf(TranslatedHitable)).call(this));

    _this._hitable = hitable;
    _this._offset = offset;
    return _this;
  }

  /** @inheritdoc */


  _createClass(TranslatedHitable, [{
    key: 'hit',
    value: function hit(ray, tmin, tmax) {
      var ray_ = new Ray(ray.origin.sub(this._offset), ray.direction),
          rec = this._hitable.hit(ray_, tmin, tmax);
      if (rec) {
        var p = rec.p.add(this._offset);
        return new HitRecord(rec.t, p, rec.normal, rec.material);
      }

      return null;
    }

    /** @inheritdoc */

  }, {
    key: 'aabb',
    value: function aabb() {
      var aabb = this._hitable.aabb();
      return aabb ? new AABB(aabb.min.add(this._offset), aabb.max.add(this._offset)) : null;
    }
  }]);

  return TranslatedHitable;
}(Hitable);

module.exports = TranslatedHitable;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hitable = __webpack_require__(1),
    Ray = __webpack_require__(2),
    HitRecord = __webpack_require__(3),
    vec3 = __webpack_require__(0);

var RotatedHitable = function (_Hitable) {
  _inherits(RotatedHitable, _Hitable);

  /**
   * @constructor
   * @param {Hitable} hitable
   * @param {Vec3} degrees
   */
  function RotatedHitable(hitable, degrees) {
    _classCallCheck(this, RotatedHitable);

    var _this = _possibleConstructorReturn(this, (RotatedHitable.__proto__ || Object.getPrototypeOf(RotatedHitable)).call(this));

    _this._hitable = hitable;
    _this._radian = degrees.map(function (v) {
      return v / 180 * Math.PI;
    });
    return _this;
  }

  /** @inheritdoc */


  _createClass(RotatedHitable, [{
    key: 'hit',
    value: function hit(ray, tmin, tmax) {
      var ray_ = this._rotateRay(ray);
      var rec = this._hitable.hit(ray_, tmin, tmax);
      if (rec) {
        var p_ = this._rotateForward(rec.p);
        var n_ = this._rotateForward(rec.normal);
        return new HitRecord(rec.t, p_, n_, rec.material);
      }

      return null;
    }

    /** @inheritdoc */

  }, {
    key: 'aabb',
    value: function aabb() {
      var aabb = this._hitable.aabb();
      var min = vec3(Number.NEGATIVE_INFINITY),
          max = vec3(Number.NEGATIVE_INFINITY);
      for (var xi = 0; xi < 2; xi++) {
        for (var yi = 0; yi < 2; yi++) {
          for (var zi = 0; zi < 2; zi++) {
            var x = xi * aabb.min.x + (1 - xi) * aabb.max.x,
                y = yi * aabb.min.y + (1 - yi) * aabb.max.y,
                z = zi * aabb.min.z + (1 - zi) * aabb.max.y;
            var v = this._rotateForward(vec3(x, y, z));
            min = vec3.min(min, v);
            max = vec3.max(max, v);
          }
        }
      }
      return new AABB(min, max);
    }
  }, {
    key: '_rotateRay',
    value: function _rotateRay(ray) {
      var origin = this._rotateBackward(ray.origin);
      var dir = this._rotateBackward(ray.direction);
      return new Ray(origin, dir);
    }
  }, {
    key: '_rotate2D',
    value: function _rotate2D(x, y, radian) {
      var sin = Math.sin(radian),
          cos = Math.cos(radian);
      return {
        x: cos * x - sin * y,
        y: sin * x + cos * y
      };
    }
  }, {
    key: '_rotateForward',
    value: function _rotateForward(v) {
      return this._rotate(v, this._radian);
    }
  }, {
    key: '_rotateBackward',
    value: function _rotateBackward(v) {
      return this._rotate(v, this._radian.mult(-1));
    }
  }, {
    key: '_rotate',
    value: function _rotate(v, radian) {
      return this._rotateZ(this._rotateY(this._rotateX(v, radian.x), radian.y), radian.z);
    }
  }, {
    key: '_rotateX',
    value: function _rotateX(v, radian) {
      var vYZ = this._rotate2D(v.y, v.z, radian);
      return vec3(v.x, vYZ.x, vYZ.y);
    }
  }, {
    key: '_rotateY',
    value: function _rotateY(v, radian) {
      var vZX = this._rotate2D(v.z, v.x, radian);
      return vec3(vZX.y, v.y, vZX.x);
    }
  }, {
    key: '_rotateZ',
    value: function _rotateZ(v, radian) {
      var vXY = this._rotate2D(v.x, v.y, radian);
      return vec3(vXY.x, vXY.y, v.z);
    }
  }]);

  return RotatedHitable;
}(Hitable);

module.exports = RotatedHitable;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hitable = __webpack_require__(1),
    HitRecord = __webpack_require__(3);

/**
 * Class represents normal flipped hitable
 *
 */

var FlippedHitable = function (_Hitable) {
  _inherits(FlippedHitable, _Hitable);

  /**
   * @constructor
   * @param {Hitable} hitable - target hitable
   */
  function FlippedHitable(hitable) {
    _classCallCheck(this, FlippedHitable);

    var _this = _possibleConstructorReturn(this, (FlippedHitable.__proto__ || Object.getPrototypeOf(FlippedHitable)).call(this));

    _this._hitable = hitable;
    return _this;
  }

  /** @inheritdoc */


  _createClass(FlippedHitable, [{
    key: 'hit',
    value: function hit(ray, tmin, tmax) {
      var rec = this._hitable.hit(ray, tmin, tmax);
      if (rec) {
        var normal_ = rec.normal.mult(-1);
        return new HitRecord(rec.t, rec.p, normal_, rec.material);
      }

      return null;
    }

    /** @inheritdoc */

  }, {
    key: 'aabb',
    value: function aabb() {
      return this._hitable.aabb();
    }
  }]);

  return FlippedHitable;
}(Hitable);

module.exports = FlippedHitable;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hitable = __webpack_require__(1),
    HitableList = __webpack_require__(12),
    Rectangle = __webpack_require__(11),
    AABB = __webpack_require__(5),
    vec3 = __webpack_require__(0);

/**
 * Class represents Box
 * @class
 *
 */

var Box = function (_Hitable) {
      _inherits(Box, _Hitable);

      /**
       * @constructor
       * @param {number} width
       * @param {number} height
       * @param {number} depth
       * @param {BaseMaterial} material
       */
      function Box(width, height, depth, material) {
            _classCallCheck(this, Box);

            var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this));

            _this._width = width || 1;
            _this._height = height || 1;
            _this._depth = depth || 1;
            _this._material = material;

            var w = width / 2,
                h = height / 2,
                d = depth / 2;
            var top = new Rectangle(width, depth, material).rotate(-90, 0, 0).translate(0, h, 0),
                bottom = new Rectangle(width, depth, material).rotate(90, 0, 0).translate(0, -h, 0),
                front = new Rectangle(width, height, material).translate(0, 0, d),
                back = new Rectangle(width, height, material).translate(0, 0, -d).flip(),
                left = new Rectangle(depth, height, material).rotate(0, -90, 0).translate(-w, 0, 0),
                right = new Rectangle(depth, height, material).rotate(0, 90, 0).translate(w, 0, 0);
            _this._rects = new HitableList();
            _this._rects.add(top);
            _this._rects.add(bottom);
            _this._rects.add(front);
            _this._rects.add(back);
            _this._rects.add(left);
            _this._rects.add(right);
            return _this;
      }

      /** inheritdoc */


      _createClass(Box, [{
            key: 'hit',
            value: function hit(ray, tmin, tmax) {
                  return this._rects.hit(ray, tmin, tmax);
            }

            /** inheritdoc */

      }, {
            key: 'aabb',
            value: function aabb() {
                  var w = this._width / 2,
                      h = this._height / 2,
                      d = this._depth / 2;
                  return new AABB(vec3(-w, -h, -d), vec3(w, h, d));
            }
      }]);

      return Box;
}(Hitable);

module.exports = Box;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Lambertian = __webpack_require__(9),
    Metal = __webpack_require__(22),
    Dielectric = __webpack_require__(23),
    DiffuseLight = __webpack_require__(24);

// Object which has material class
var material = {
  Lambertian: Lambertian,
  Metal: Metal,
  Dielectric: Dielectric,
  DiffuseLight: DiffuseLight
};

module.exports = material;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = __webpack_require__(0),
    Material = __webpack_require__(4),
    Ray = __webpack_require__(2);

/**
 * Class represents metal material
 * @class
 *
 */

var Metal = function (_Material) {
  _inherits(Metal, _Material);

  /**
   * @constructor
   * @param {Material} albedo
   * @param {number} fuzz - fuzziness. default is 0.
   */
  function Metal(albedo, fuzz) {
    _classCallCheck(this, Metal);

    var _this = _possibleConstructorReturn(this, (Metal.__proto__ || Object.getPrototypeOf(Metal)).call(this));

    _this.albedo = albedo;
    _this.fuzz = fuzz !== undefined ? fuzz : 0;
    return _this;
  }

  /** @inheritdoc */


  _createClass(Metal, [{
    key: 'scatter',
    value: function scatter(ray, rec) {
      var reflected = vec3.reflect(ray.direction.normalize(), rec.normal),
          scattered = new Ray(rec.p, reflected.add(vec3.randomInUnitSphere().mult(this.fuzz)));
      return vec3.dot(scattered.direction, rec.normal) > 0 ? {
        ray: scattered,
        attenuation: this.albedo.value(0, 0, rec.p)
      } : null;
    }
  }]);

  return Metal;
}(Material);

module.exports = Metal;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = __webpack_require__(0),
    Material = __webpack_require__(4),
    Ray = __webpack_require__(2);

/**
 * Class represents dielectric material
 * @class
 */

var Dielectric = function (_Material) {
  _inherits(Dielectric, _Material);

  /**
   * @constructor
   * @param {number} refractiveIndex refractive index
   *
   */
  function Dielectric(refractiveIndex) {
    _classCallCheck(this, Dielectric);

    var _this = _possibleConstructorReturn(this, (Dielectric.__proto__ || Object.getPrototypeOf(Dielectric)).call(this));

    _this.refractiveIndex = refractiveIndex;
    return _this;
  }

  /** @inheritdoc */


  _createClass(Dielectric, [{
    key: 'scatter',
    value: function scatter(ray, rec) {
      var reflected = vec3.reflect(ray.direction, rec.normal);

      var outerNormal = void 0,
          ri = void 0,
          cosine = void 0;
      if (vec3.dot(ray.direction, rec.normal) > 0) {
        outerNormal = rec.normal.mult(-1);
        ri = this.refractiveIndex;
        cosine = this.refractiveIndex * vec3.dot(ray.direction, rec.normal) / ray.direction.length();
      } else {
        outerNormal = rec.normal;
        ri = 1 / this.refractiveIndex;
        cosine = -vec3.dot(ray.direction, rec.normal) / ray.direction.length();
      }

      var refracted = vec3.refract(ray.direction, outerNormal, ri);

      var reflectProb = refracted ? this._schlcick(cosine, this.refractiveIndex) : 1.0;

      return Math.random() < reflectProb ? {
        ray: new Ray(rec.p, reflected),
        attenuation: vec3(1, 1, 1)
      } : {
        ray: new Ray(rec.p, refracted),
        attenuation: vec3(1, 1, 1)
      };
    }
  }, {
    key: '_schlcick',
    value: function _schlcick(cosine, ri) {
      var r0 = (1 - ri) / (1 + ri),
          r = r0 * r0;
      return r + (1 - r) * Math.pow(1 - cosine, 5);
    }
  }]);

  return Dielectric;
}(Material);

module.exports = Dielectric;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = __webpack_require__(0),
    Material = __webpack_require__(4);

var DiffuseLight = function (_Material) {
  _inherits(DiffuseLight, _Material);

  /**
   * @constructor
   * @param {Texture} texture - texture
   * @param {number} intensity - intensity of light
   */
  function DiffuseLight(texture, intensity) {
    _classCallCheck(this, DiffuseLight);

    var _this = _possibleConstructorReturn(this, (DiffuseLight.__proto__ || Object.getPrototypeOf(DiffuseLight)).call(this));

    _this._texture = texture;
    _this._intensity = intensity !== undefined ? intensity : 1;
    return _this;
  }

  /** @inheritdoc */


  _createClass(DiffuseLight, [{
    key: 'scatter',
    value: function scatter(ray, rec) {
      return null;
    }

    /** @inheritdoc */

  }, {
    key: 'emit',
    value: function emit(u, v, p) {
      return this._texture.value(u, v, p).mult(this._intensity);
    }
  }]);

  return DiffuseLight;
}(Material);

module.exports = DiffuseLight;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ProjectiveCamera = __webpack_require__(13),
    OrthographicCamera = __webpack_require__(26);

// Object which has camera class
var camera = {
  ProjectiveCamera: ProjectiveCamera,
  OrthographicCamera: OrthographicCamera
};

module.exports = camera;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = __webpack_require__(0),
    Camera = __webpack_require__(14),
    Ray = __webpack_require__(2);

/**
 * class represents Orthographic Camera
 * @class
 */

var OrthographicCamera = function (_Camera) {
      _inherits(OrthographicCamera, _Camera);

      /**
       * @constructor
       * @param {Obj} params - parameters for orthographic camera
       * @param {Vec3} params.lookfrom - positon where camera look from. default is vec3(0, 0, 1)
       * @param {Vec3} params.lootat - position where camera look at. default is vec3(0, 0, 0)
       * @param {Vec3} params.vup - upper direction of camera. default is vec3(0, 1, 0)
       * @param {number} params.width - screen width. default is 400
       * @param {number} params.height - screen height. default is 300
       */
      function OrthographicCamera(params) {
            _classCallCheck(this, OrthographicCamera);

            var _this = _possibleConstructorReturn(this, (OrthographicCamera.__proto__ || Object.getPrototypeOf(OrthographicCamera)).call(this));

            params = params || {};
            var lookfrom = params.lookfrom || vec3(0, 0, 1),
                lookat = params.lookat || vec3(0, 0, 0),
                vup = params.vup || vec3(0, 1, 0),
                width = params.width !== undefined ? params.width : 400,
                height = params.height !== undefined ? params.height : 300;

            var back = vec3.sub(lookfrom, lookat).normalize(),
                right = vec3.cross(vup, back).normalize(),
                up = vec3.cross(back, right);
            _this._lowerleft = lookfrom.sub(right.mult(width / 2), up.mult(height / 2));
            _this._horizontal = right.mult(width);
            _this._vertical = up.mult(height);
            _this._direction = vec3.sub(lookat, lookfrom).normalize();
            return _this;
      }

      /** inheritdoc */


      _createClass(OrthographicCamera, [{
            key: 'getRay',
            value: function getRay(s, t) {
                  var origin = this._lowerleft.add(this._horizontal.mult(s), this._vertical.mult(t));
                  return new Ray(origin, this._direction.clone());
            }
      }]);

      return OrthographicCamera;
}(Camera);

module.exports = OrthographicCamera;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ConstantTexture = __webpack_require__(10),
    CheckerTexture = __webpack_require__(28),
    Perlintexture = __webpack_require__(29),
    CustomTexture = __webpack_require__(30);

// Object which has Texture class
var texture = {
  ConstantTexture: ConstantTexture,
  CheckerTexture: CheckerTexture,
  PerlinTexture: Perlintexture,
  CustomTexture: CustomTexture
};

module.exports = texture;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Texture = __webpack_require__(6);

/**
 * Class represents texture of checker pattern
 * @class
 *
 */

var CheckerTexture = function (_Texture) {
  _inherits(CheckerTexture, _Texture);

  /**
   * @constructor
   * @param {Texture} tex1 - first texture
   * @param {Texture} tex2 - second texture
   * @param {Object} options
   * @param {number} options.scale - scale
   * @param {Vec3} options.offset - offset
   */
  function CheckerTexture(tex1, tex2, options) {
    _classCallCheck(this, CheckerTexture);

    var _this = _possibleConstructorReturn(this, (CheckerTexture.__proto__ || Object.getPrototypeOf(CheckerTexture)).call(this));

    _this._tex1 = tex1;
    _this._tex2 = tex2;
    options = options || {};
    _this._scale = options.scale !== undefined ? options.scale : 1;
    _this._offset = options.offset || vec3(0, 0, 0);
    return _this;
  }

  /** @inheritdoc */


  _createClass(CheckerTexture, [{
    key: 'value',
    value: function value(u, v, p) {
      var s = Math.sin(p.x * this._scale + this._offset.x) * Math.sin(p.y * this._scale + this._offset.y) * Math.sin(p.z * this._scale + this._offset.z);
      return s > 0 ? this._tex1.value(u, v, p) : this._tex2.value(u, v, p);
    }
  }]);

  return CheckerTexture;
}(Texture);

module.exports = CheckerTexture;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Texture = __webpack_require__(6),
    noise = __webpack_require__(7),
    vec3 = __webpack_require__(0);

/**
 * Class represents texture of perlin
 * @class
 */

var PerlinTexture = function (_Texture) {
  _inherits(PerlinTexture, _Texture);

  /**
   * @constructor
   */
  function PerlinTexture() {
    _classCallCheck(this, PerlinTexture);

    return _possibleConstructorReturn(this, (PerlinTexture.__proto__ || Object.getPrototypeOf(PerlinTexture)).call(this));
  }

  /** @inheritdoc */


  _createClass(PerlinTexture, [{
    key: 'value',
    value: function value(u, v, p) {
      return vec3(1, 1, 1).mult(noise.fbm(p));
    }
  }]);

  return PerlinTexture;
}(Texture);

module.exports = PerlinTexture;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Texture = __webpack_require__(6);

/**
 * class to custom by user
 * @class
 */

var CustomTexture = function (_Texture) {
  _inherits(CustomTexture, _Texture);

  /**
   * @constructor
   * @param {function} value - value function
   */
  function CustomTexture(value) {
    _classCallCheck(this, CustomTexture);

    var _this = _possibleConstructorReturn(this, (CustomTexture.__proto__ || Object.getPrototypeOf(CustomTexture)).call(this));

    _this._value = value;
    return _this;
  }

  /** @inheritdoc */


  _createClass(CustomTexture, [{
    key: 'value',
    value: function value(u, v, p) {
      return this._value(u, v, p);
    }
  }]);

  return CustomTexture;
}(Texture);

module.exports = CustomTexture;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BVHNode = __webpack_require__(32);

// Object which has bvh
var bvh = {
  BVHNode: BVHNode
};

module.exports = bvh;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hitable = __webpack_require__(1);

var BVHNode = function (_Hitable) {
  _inherits(BVHNode, _Hitable);

  /**
   * @constructor
   * @param {Hitable[]} hitables
   */
  function BVHNode(hitables) {
    _classCallCheck(this, BVHNode);

    var _this = _possibleConstructorReturn(this, (BVHNode.__proto__ || Object.getPrototypeOf(BVHNode)).call(this));

    _this._hitables = hitables || [];
    _this._left = null;
    _this._right = null;
    _this._aabb = null;
    return _this;
  }

  /**
   * adds hitale object
   * @param {Hitable} hitable
   */


  _createClass(BVHNode, [{
    key: 'add',
    value: function add(hitable) {
      this._hitables.push(hitable);
    }

    /**
     * constructs BVH tree
     * @return {BVHNode} this
     */

  }, {
    key: 'constructTree',
    value: function constructTree() {
      if (this._hitables.length === 0) {
        this._left = null;
        this._right = null;
      } else if (this._hitables.length === 1) {
        this._left = this._hitables[0];
        this._right = null;
      } else if (this._hitables.length === 2) {
        this._left = this._hitables[0];
        this._right = this._hitables[1];
      } else {
        this._hitables.sort(this._getCompareFunc());
        this._left = new BVHNode(this._hitables.slice(0, this._hitables.length / 2)).constructTree();
        this._right = new BVHNode(this._hitables.slice(this._hitables.length / 2, this._hitables.length)).constructTree();
      }
      var leftAabb = this._left ? this._left.aabb() : null,
          rightAabb = this._right ? this._right.aabb() : null;
      this._aabb = leftAabb && rightAabb ? leftAabb.unite(rightAabb) : leftAabb ? leftAabb : rightAabb ? rightAabb : null;
      return this;
    }
  }, {
    key: '_getCompareFunc',
    value: function _getCompareFunc() {
      var rand = Math.random() * 3;
      if (rand < 1.0) {
        return this._compareByAxis('x');
      } else if (rand < 2.0) {
        return this._compareByAxis('y');
      } else {
        return this._compareByAxis('z');
      }
    }
  }, {
    key: '_compareByAxis',
    value: function _compareByAxis(axis) {
      return function (hitable1, hitable2) {
        var aabb1 = hitable1.aabb(),
            aabb2 = hitable2.aabb();
        if (aabb1.min[axis] < aabb2.min[axis]) {
          return -1;
        } else {
          return 0;
        }
      };
    }
  }, {
    key: 'hit',
    value: function hit(ray, tmin, tmax) {
      if (this._aabb && this._aabb.hit(ray, tmin, tmax)) {
        var leftRec = this._left ? this._left.hit(ray, tmin, tmax) : null,
            rightRec = this._right ? this._right.hit(ray, tmin, tmax) : null;
        if (leftRec && rightRec) {
          return leftRec.t < rightRec.t ? leftRec : rightRec;
        }
        if (leftRec) {
          return leftRec;
        }
        if (rightRec) {
          return rightRec;
        }
      }
      return null;
    }
  }, {
    key: 'aabb',
    value: function aabb() {
      return this._aabb;
    }
  }]);

  return BVHNode;
}(Hitable);

module.exports = BVHNode;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ConstantMedium = __webpack_require__(34);

// Object which has extension class
var extension = {
  ConstantMedium: ConstantMedium
};

module.exports = extension;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hitable = __webpack_require__(1),
    Ray = __webpack_require__(2),
    Material = __webpack_require__(4),
    HitRecord = __webpack_require__(3),
    vec3 = __webpack_require__(0);

/**
 * Class represents isotropic material
 * @class
 *
 */

var Isotropic = function (_Material) {
  _inherits(Isotropic, _Material);

  function Isotropic(texture) {
    _classCallCheck(this, Isotropic);

    var _this = _possibleConstructorReturn(this, (Isotropic.__proto__ || Object.getPrototypeOf(Isotropic)).call(this));

    _this._albedo = texture;
    return _this;
  }

  _createClass(Isotropic, [{
    key: 'scatter',
    value: function scatter(ray, rec) {
      var dir = vec3.randomInUnitSphere();
      return {
        ray: new Ray(rec.p, dir),
        attenuation: this._albedo.value(rec.u, rec.v, rec.p)
      };
    }
  }]);

  return Isotropic;
}(Material);

/**
 * Class represents smoke and fog
 * @class
 *
 */


var ConstantMedium = function (_Hitable) {
  _inherits(ConstantMedium, _Hitable);

  /**
   * @constructor
   * @param {Hitable} hitable
   * @param {number} density
   * @param {Texture} texture
   */
  function ConstantMedium(hitable, density, texture) {
    _classCallCheck(this, ConstantMedium);

    var _this2 = _possibleConstructorReturn(this, (ConstantMedium.__proto__ || Object.getPrototypeOf(ConstantMedium)).call(this));

    _this2._hitable = hitable;
    _this2._density = density;
    _this2._material = new Isotropic(texture);
    return _this2;
  }

  _createClass(ConstantMedium, [{
    key: 'hit',
    value: function hit(ray, tmin, tmax) {
      var rec1 = this._hitable.hit(ray, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY),
          rec2 = rec1 ? this._hitable.hit(ray, rec1.t + 0.0001, Number.POSITIVE_INFINITY) : null;

      if (!rec2) {
        return null;
      }

      if (rec1.t < tmin) {
        rec1 = new HitRecord(tmin, rec1.p, rec1.n, rec1.material);
      }
      if (rec2.t > tmax) {
        rec2 = new HitRecord(tmax, rec2.p, rec2.n, rec2.mateiral);
      }

      if (rec1.t >= rec2.t) {
        return null;
      }

      if (rec1.t < 0) {
        rec1 = new HitRecord(0, rec1.p, rec1.n, rec1.material);
      }

      var distance = (rec2.t - rec1.t) * ray.direction.length(),
          hitDistance = -(1 / this._density) * Math.log(Math.random());

      if (hitDistance < distance) {
        var t = rec1.t + hitDistance / ray.direction.length(),
            p = ray.point(t),
            n = vec3(1, 0, 0);
        return new HitRecord(t, p, n, this._material);
      }

      return null;
    }
  }]);

  return ConstantMedium;
}(Hitable);

module.exports = ConstantMedium;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = __webpack_require__(0),
    Sphere = __webpack_require__(8),
    ProjectiveCamera = __webpack_require__(13);

/**
 * Class represents scene
 * @class
 *
 */

var Scene = function () {

  /**
   * @constructor
   * @param {Object} obj
   * @param {number} obj.screenX - screen size of x [400]
   * @param {number} obj.screenY - screen size of y [300]
   * @param {Hitable} obj.hitable - hitable object [new Sphere()]
   * @param {Camera} obj.camera - camera [ProjectiveCamera]
   * @param {number} obj.scatteringNum - number of scatering [50]
   * @param {number} obj.samplingNum - number of sampling for computing a pixel [50]
   * @param {Function} obj.background -function to redner background
   */
  function Scene(obj) {
    _classCallCheck(this, Scene);

    this._screenX = obj.screenX || 400;
    this._screenY = obj.screenY || 300;
    this._hitable = obj.hitable || new Sphere();
    this._camera = obj.camera || new ProjectiveCamera();
    this._reflectionNum = obj.reflectionNum !== undefined ? obj.reflectionNum : 50;
    this._samplingNum = obj.samplingNum !== undefined ? obj.samplingNum : 50;
    this._background = obj.background || this._defaultBackground;
  }

  /**
   * gets computed color at (x, y)
   * @param {number} x
   * @param {number} y
   * @return {Vec3} rbg color in [0, 1]
   */


  _createClass(Scene, [{
    key: 'at',
    value: function at(x, y) {
      var sum = vec3.zero();
      for (var i = 0; i < this._samplingNum; i++) {
        var u = (x + Math.random()) / this._screenX,
            v = (y + Math.random()) / this._screenY;
        var ray = this._camera.getRay(u, v);
        sum = sum.add(this._process(ray, 0));
      }
      return sum.div(this._samplingNum);
    }
  }, {
    key: '_process',
    value: function _process(ray, recursion) {
      var rec = this._hitable.hit(ray, 0.0001, Number.POSITIVE_INFINITY);
      if (rec) {
        var scattered = rec.material.scatter(ray, rec),
            emitted = rec.material.emit(rec.u, rec.v, rec.p);
        if (scattered && recursion < this._reflectionNum) {
          return vec3.add(emitted, this._process(scattered.ray, ++recursion).mult(scattered.attenuation));
        } else {
          return emitted;
        }
      } else {
        return this._background(ray);
      }
    }
  }, {
    key: '_defaultBackground',
    value: function _defaultBackground(ray) {
      var c1 = vec3(0.7, 0.2, 0.0),
          c2 = vec3(0.0, 0.2, 0.7),
          v = (ray.direction.y + 1.0) * 0.5;
      return vec3.lerp(c1, c2, v);
    }
  }]);

  return Scene;
}();

module.exports = Scene;

/***/ })
/******/ ]);
});