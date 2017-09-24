const vec3 = require('./vec3.js'),
      primitive = require('./primitive.js'),
      material = require('./material.js'),
      camera = require('./camera.js'),
      texture = require('./texture.js'),
      HitableList = require('./hitablelist.js'),
      ConstantMedium = require('./constantmedium.js');

const rayt = {
  vec3: vec3,
  primitive: primitive,
  material: material,
  camera: camera,
  texture: texture,
  HitableList: HitableList,
  ConstantMedium: ConstantMedium
};

module.exports = rayt;
