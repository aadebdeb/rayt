const expect = require('chai').expect,
      noise = require('../src/noise.js'),
      vec3 = require('../src/vec3.js');

describe('noise', () => {
  describe('#perlin', () => {
    console.log(noise.perlin(vec3(1.99, 2.99, 3.99)));
    console.log(noise.perlin(vec3(2, 3, 4)));
    console.log(noise.perlin(vec3(2.01, 3.01, 4.01)));

    // console.log(noise.perlin(vec3(1.23, 5, 3)));
    // console.log(noise.perlin(vec3(1.342, 10.432, 3)));
    // console.log(noise.perlin(vec3(199, 150, 399)));


  });
});
