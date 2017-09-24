const vec3 = require('../vec3.js'),
      BaseCamera = require('./basecamera.js'),
      Ray = require('../ray.js');

/**
 * Orthographic Camera
 */
class OrthographicCamera extends BaseCamera {

  /**
   *
   * @param {Vec3} lookfrom
   * @param {Vec3} lookat
   * @param {Vec3} vup
   * @param {number} width
   * @param {number} height
   */
  constructor(lookfrom, lookat, vup, width, height) {
    super();
    const back = vec3.sub(lookfrom, lookat).normalize(),
          right = vec3.cross(vup, back).normalize(),
          up = vec3.cross(back, right);
    this.lowerleft = lookfrom.sub(
      right.mult(width / 2),
      up.mult(height / 2));
    this.horizontal = right.mult(width);
    this.vertical = up.mult(height);
    this.direction = vec3.sub(lookat, lookfrom).normalize();
  }

  /** inheritdoc */
  getRay(s, t) {
    const origin = this.lowerleft.add(
      this.horizontal.mult(s),
      this.vertical.mult(t));
    return new Ray(origin, this.direction);
  }

}

module.exports = OrthographicCamera;
