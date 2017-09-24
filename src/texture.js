
const ConstantTexture = require('./texture/constanttexture.js'),
      CheckerTexture = require('./texture/checkertexture.js'),
      Perlintexture = require('./texture/perlintexture.js');

const texture = {
  ConstantTexture: ConstantTexture,
  CheckerTexture: CheckerTexture,
  PerlinTexture: Perlintexture
};

module.exports = texture;
