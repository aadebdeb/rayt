
const vec3 = require('../vec3.js'),
      BaseCamera = require('./basecamera.js'),
      Ray = require('../ray.js');

/**
 * Projective Camera
 * @public
 *
 */
class ProjectiveCamera extends BaseCamera {

  /**
   *
   * @param {Vec3} lookfrom
   * @param {Vec3} lookat
   * @param {Vec3} vup
   * @param {number} vfov field of view (in degrees)
   * @param {number} aspect
   * @param {number} aperture
   * @param {number} focusDist
   */
  constructor(lookfrom, lookat, vup, vfov, aspect, aperture, focusDist) {
    super();
    const theta = vfov * Math.PI / 180,
          halfHeight = Math.tan(theta / 2),
          halfWidth = aspect * halfHeight;
    this.back = vec3.sub(lookfrom, lookat).normalize();
    this.right = vec3.cross(vup, this.back).normalize();
    this.up = vec3.cross(this.back, this.right);
    this.origin = lookfrom;
    this.lowerleft = this.origin.sub(
      this.right.mult(focusDist * halfWidth),
      this.up.mult(focusDist * halfHeight),
      this.back.mult(focusDist));
    this.horizontal = this.right.mult(2 * focusDist * halfWidth);
    this.vertical = this.up.mult(2 * focusDist * halfHeight);
    this.lensRadius = aperture / 2;
  }

  /** inheritdoc */
  getRay(s, t) {
    const rd = vec3.randomInUnitCircle().mult(this.lensRadius),
          offset = vec3.add(this.right.mult(rd.x), this.up.mult(rd.y)),
          origin_ = this.origin.add(offset);
    return new Ray(origin_, this.lowerleft.add(this.horizontal.mult(s), this.vertical.mult(t)).sub(origin_));
  }

}

module.exports = ProjectiveCamera;
