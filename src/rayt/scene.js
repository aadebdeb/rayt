const vec3 = require('./vec3.js'),
      Sphere = require('./primitive/sphere.js'),
      ProjectiveCamera = require('./camera/projectivecamera.js');

/**
 * Class represents scene
 * @class
 *
 */
class Scene {

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
  constructor(obj) {
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
  at(x, y) {
    let sum = vec3.zero();
    for (let i = 0; i < this._samplingNum; i++) {
      const u = (x + Math.random()) / this._screenX,
            v = (y + Math.random()) / this._screenY;
      const ray = this._camera.getRay(u, v);
      sum = sum.add(this._process(ray, 0));
    }
    return sum.div(this._samplingNum);
  }

  _process(ray, recursion) {
    const rec = this._hitable.hit(ray, 0.0001, Number.POSITIVE_INFINITY);
    if (rec) {
      const scattered = rec.material.scatter(ray, rec),
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

  _defaultBackground(ray) {
    const c1 = vec3(0.7, 0.2, 0.0),
          c2 = vec3(0.0, 0.2, 0.7),
          v = (ray.direction.y + 1.0) * 0.5;
    return vec3.lerp(c1, c2, v);
  }

}

module.exports = Scene;
