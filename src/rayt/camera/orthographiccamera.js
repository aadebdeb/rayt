const vec3 = require('../vec3.js'),
      Camera = require('./camera.js'),
      Ray = require('../core/ray.js');

/**
 * class represents Orthographic Camera
 * @class
 */
class OrthographicCamera extends Camera {

  /**
   * @constructor
   * @param {Obj} params - parameters for orthographic camera
   * @param {Vec3} params.lookfrom - positon where camera look from. default is vec3(0, 0, 1)
   * @param {Vec3} params.lootat - position where camera look at. default is vec3(0, 0, 0)
   * @param {Vec3} params.vup - upper direction of camera. default is vec3(0, 1, 0)
   * @param {number} params.width - screen width. default is 400
   * @param {number} params.height - screen height. default is 300
   */
  constructor(params) {
    super();

    params = params || {};
    const lookfrom = params.lookfrom || vec3(0, 0, 1),
          lookat = params.lookat || vec3(0, 0, 0),
          vup = params.vup || vec3(0, 1, 0),
          width = params.width !== undefined ? params.width : 400,
          height = params.height !== undefined ? params.height : 300;

    const back = vec3.sub(lookfrom, lookat).normalize(),
          right = vec3.cross(vup, back).normalize(),
          up = vec3.cross(back, right);
    this._lowerleft = lookfrom.sub(right.mult(width / 2), up.mult(height / 2));
    this._horizontal = right.mult(width);
    this._vertical = up.mult(height);
    this._direction = vec3.sub(lookat, lookfrom).normalize();
  }

  /** inheritdoc */
  getRay(s, t) {
    const origin = this._lowerleft.add(this._horizontal.mult(s), this._vertical.mult(t));
    return new Ray(origin, this._direction.clone());
  }

}

module.exports = OrthographicCamera;
