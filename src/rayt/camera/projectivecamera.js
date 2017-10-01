const vec3 = require('../vec3.js'),
      Camera = require('./camera.js'),
      Ray = require('../core/ray.js');

/**
 * class represents Projective Camera
 * @public
 */
class ProjectiveCamera extends Camera {

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
  constructor(params) {
    super();
    params = params || {};
    const lookfrom = params.lookfrom || vec3(0, 0, 5),
          lookat = params.lookat || vec3(0, 0, 0),
          vup = params.vup || vec3(0, 1, 0),
          vfov = params.vfov || 40,
          aspect = params.aspect || 4/3,
          aperture = params.aperture || 0.0,
          focusDist = params.focusDist || 1.0;

    const theta = vfov * Math.PI / 180,
          halfHeight = Math.tan(theta / 2),
          halfWidth = aspect * halfHeight;

    this._back = vec3.sub(lookfrom, lookat).normalize();
    this._right = vec3.cross(vup, this._back).normalize();
    this._up = vec3.cross(this._back, this._right);
    this._origin = lookfrom;
    this._lowerleft = this._origin.sub(
      this._right.mult(focusDist * halfWidth),
      this._up.mult(focusDist * halfHeight),
      this._back.mult(focusDist));
    this._horizontal = this._right.mult(2 * focusDist * halfWidth);
    this._vertical = this._up.mult(2 * focusDist * halfHeight);
    this._lensRadius = aperture / 2;
  }

  /** @inheritdoc */
  getRay(s, t) {
    const rd = vec3.randomInUnitCircle().mult(this._lensRadius),
          offset = vec3.add(this._right.mult(rd.x), this._up.mult(rd.y)),
          origin_ = this._origin.add(offset);
    return new Ray(origin_, this._lowerleft.add(this._horizontal.mult(s), this._vertical.mult(t)).sub(origin_));
  }

}

module.exports = ProjectiveCamera;
