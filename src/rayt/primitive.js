const Sphere = require('./primitive/sphere.js'),
      Rectangle = require('./primitive/rectangle.js'),
      Box = require('./primitive/box.js');

// Object which has Primitive class
const primitive = {
  Sphere: Sphere,
  Rectangle: Rectangle,
  Box: Box
}

module.exports = primitive;
