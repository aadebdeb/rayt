const vec3 = require('../vec3.js'),
      Texture = require('./texture.js');

/**
 * Class represents texture of constant color
 * @class
 */
class ConstantTexture extends Texture {

  /**
   * @constructor
   * @param {Number|Vec3} r - red | Vec3 instance which has rbg color
   * @param {Number} g - green
   * @param {Number} b - blue
   */
  constructor(r, g, b) {
    super();
    this._color = r instanceof vec3.zero().constructor ? r : vec3(r, g, b);
  }

  /** @inheritdoc */
  value(u, v, p) {
    return this._color;
  }

}

module.exports = ConstantTexture;
