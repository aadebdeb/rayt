const Hitable = require('../hitable.js'),
      HitRecord = require('../hitrecord.js');

class Rectangle extends Hitable {

  /**
   *
   *
   * @param {number} width
   * @param {number} height
   * @param {BaseMaterial} material
   */
  constructor(width, height, material) {
    super();
    this.x1 = -width / 2;
    this.x2 = width / 2;
    this.y1 = -height / 2;
    this.y2 = height / 2;
    this.z = 0;
    this.material = material;
  }

  // constructor(x1, y1, x2, y2, z, material) {
  //   super();
  //   this.x1 = x1;
  //   this.y1 = y1;
  //   this.x2 = x2;
  //   this.y2 = y2;
  //   this.z = z;
  //   this.material = material;
  // }

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
