const Texture = require('./texture.js'),
      noise = require('../noise.js'),
      vec3 = require('../vec3.js');

/**
 * Class represents texture of perlin
 * @class
 */
class PerlinTexture extends Texture {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /** @inheritdoc */
  value(u, v, p) {
    return vec3(1, 1, 1).mult(noise.fbm(p));
  }

}

module.exports = PerlinTexture;
