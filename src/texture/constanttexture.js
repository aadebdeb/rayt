const BaseTexture = require('./basetexture.js');

/**
 * Texture with constant color
 * @class
 *
 */
class ConstantTexture extends BaseTexture {

  /**
   * @constructor
   * @param {Vec3} color
   *
   */
  constructor(color) {
    super();
    this.color = color;
  }

  value(u, v, p) {
    return this.color;
  }


}

module.exports = ConstantTexture;
