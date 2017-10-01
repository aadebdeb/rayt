const Texture = require('./texture.js');

/**
 * class to custom by user
 * @class
 */
class CustomTexture extends Texture {

  /**
   * @constructor
   * @param {function} value - value function
   */
  constructor(value) {
    super();
    this._value = value;
  }

  /** @inheritdoc */
  value(u, v, p) {
    return this._value(u, v, p);
  }

}

module.exports = CustomTexture;
