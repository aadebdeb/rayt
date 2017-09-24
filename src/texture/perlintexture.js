const BaseTexture = require('./basetexture.js'),
      noise = require('../noise.js'),
      vec3 = require('../vec3.js');

class PerlinTexture extends BaseTexture {

  constructor() {
    super();
  }

  value(u, v, p) {
    // return vec3(1, 1, 1).mult(noise.fbm(p));
    return vec3(1, 1, 1).mult(Math.sin(p.z + 10 * noise.fbm(p)) + 1).mult(0.5);
  }

}

module.exports = PerlinTexture;
