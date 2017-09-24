const vec3 = require('../vec3.js'),
      BaseMaterial = require('./basematerial.js')

class DiffuseLight extends BaseMaterial {

  constructor(texture) {
    super();
    this.texture = texture;
  }

  scatter(ray, rec) {
    return null;
  }

  emit(u, v, p) {
    return this.texture.value(u, v, p);
  }

}

module.exports = DiffuseLight;
