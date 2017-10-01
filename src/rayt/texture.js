const ConstantTexture = require('./texture/constanttexture.js'),
      CheckerTexture = require('./texture/checkertexture.js'),
      Perlintexture = require('./texture/perlintexture.js'),
      CustomTexture = require('./texture/customtexture.js');

// Object which has Texture class
const texture = {
  ConstantTexture: ConstantTexture,
  CheckerTexture: CheckerTexture,
  PerlinTexture: Perlintexture,
  CustomTexture: CustomTexture
};

module.exports = texture;
