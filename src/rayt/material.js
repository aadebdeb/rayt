const Lambertian = require('./material/lambertian.js'),
      Metal = require('./material/metal.js'),
      Dielectric = require('./material/dielectric.js'),
      DiffuseLight = require('./material/diffuselight.js');

// Object which has material class
const material = {
  Lambertian: Lambertian,
  Metal: Metal,
  Dielectric: Dielectric,
  DiffuseLight: DiffuseLight
};

module.exports = material;
