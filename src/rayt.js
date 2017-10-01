const vec3 = require('./rayt/vec3.js'),
      noise = require('./rayt/noise.js'),
      primitive = require('./rayt/primitive.js'),
      material = require('./rayt/material.js'),
      camera = require('./rayt/camera.js'),
      texture = require('./rayt/texture.js'),
      bvh = require('./rayt/bvh.js'),
      extension = require('./rayt/extension.js'),
      HitableList = require('./rayt/hitablelist.js'),
      Scene = require('./rayt/scene.js');

const rayt = {
  vec3: vec3,
  noise: noise,
  primitive: primitive,
  material: material,
  camera: camera,
  texture: texture,
  extension: extension,
  bvh: bvh,
  HitableList: HitableList,
  Scene: Scene
};

module.exports = rayt;
