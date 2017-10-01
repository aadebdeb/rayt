const Hitable = require('../core/hitable.js'),
      HitRecord = require('../core/hitrecord.js'),
      AABB = require('../bvh/aabb.js'),
      vec3 = require('../vec3.js');

/**
 * Class represents Rectangle
 * @class
 *
 */
class Rectangle extends Hitable {

  /**
   * @constructor
   * @param {number} width - size along with x axis
   * @param {number} height - size alng with y axis
   * @param {BaseMaterial} material
   */
  constructor(width, height, material) {
    super();
    width = width || 10;
    height = height || 10;
    material = material;

    this.x1 = -width / 2;
    this.x2 = width / 2;
    this.y1 = -height / 2;
    this.y2 = height / 2;
    this.z = 0;
    this.material = material;
  }

  hit(ray, tmin, tmax) {
    // if ray is parallel with rectangle, ray never hit with rectangle
    if (ray.direction.z === 0) {
      return null;
    }
    const t = (this.z - ray.origin.z) / ray.direction.z;
    if (t < tmin || t > tmax) {
      return null;
    }

    const x = ray.origin.x + t * ray.direction.x,
          y = ray.origin.y + t * ray.direction.y;

    if (x < this.x1 || x > this.x2 || y < this.y1 || y > this.y2) {
      return null;
    }

    return new HitRecord(t, ray.point(t), vec3(0, 0, 1), this.material);

  }

  /** inheritdoc */
  aabb() {
    return new AABB(vec3(this.x1, this.y1, -0.0001), vec3(this.x2, this.y2, 0.0001));
  }

}

module.exports = Rectangle;
