
/**
 *
 * @class
 *
 */
class HitRecord {

  /**
   *
   * @param {number} t
   * @param {Vec3} p
   * @param {Vec3} normal
   * @param {BaseMaterial} material
   */
  constructor(t, p, normal, material) {
    this.t = t;
    this.p = p;
    this.normal = normal;
    this.material = material;
  }

}

module.exports = HitRecord;
