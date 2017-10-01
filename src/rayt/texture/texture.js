/**
 * Interface for Texture Class
 * @class
 *
 */
class Texture {

  /**
   * gets value at specified point
   * @param {number} u
   * @param {number} v
   * @param {Vec3} p
   * @return {Object}
   */
  value(u, v, p) {
    /* abstract method */
  }

}

module.exports = Texture;
