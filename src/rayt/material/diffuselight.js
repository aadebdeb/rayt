const vec3 = require('../vec3.js'),
      Material = require('./material.js')

class DiffuseLight extends Material {

  /**
   * @constructor
   * @param {Texture} texture - texture
   * @param {number} intensity - intensity of light
   */
  constructor(texture, intensity) {
    super();
    this._texture = texture
    this._intensity = intensity !== undefined ? intensity : 1;
  }

  /** @inheritdoc */
  scatter(ray, rec) {
    return null;
  }

  /** @inheritdoc */
  emit(u, v, p) {
    return this._texture.value(u, v, p).mult(this._intensity);
  }

}

module.exports = DiffuseLight;
