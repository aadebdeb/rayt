const Texture = require('./texture.js');

/**
 * Class represents texture of checker pattern
 * @class
 *
 */
class CheckerTexture extends Texture {

  /**
   * @constructor
   * @param {Texture} tex1 - first texture
   * @param {Texture} tex2 - second texture
   * @param {Object} options
   * @param {number} options.scale - scale
   * @param {Vec3} options.offset - offset
   */
  constructor(tex1, tex2, options) {
    super();
    this._tex1 = tex1;
    this._tex2 = tex2;
    options = options || {};
    this._scale = options.scale !== undefined ? options.scale : 1;
    this._offset = options.offset ||vec3(0, 0, 0);
  }

  /** @inheritdoc */
  value(u, v, p) {
    const s = Math.sin(p.x * this._scale + this._offset.x) *
              Math.sin(p.y * this._scale + this._offset.y) *
              Math.sin(p.z * this._scale + this._offset.z);
    return s > 0 ? this._tex1.value(u, v, p) : this._tex2.value(u, v, p);
  }

}

module.exports = CheckerTexture;
