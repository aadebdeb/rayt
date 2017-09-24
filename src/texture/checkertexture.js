const BaseTexture = require('./basetexture.js');

class CheckerTexture extends BaseTexture {

  constructor(tex1, tex2, scale) {
    super();
    this.tex1 = tex1;
    this.tex2 = tex2;
    this.scale = scale;
  }

  value(u, v, p) {
    const s = Math.sin(p.x * this.scale) * Math.sin(p.y * this.scale) * Math.sin(p.z * this.scale);
    return s > 0 ? this.tex1.value(u, v, p) : this.tex2.value(u, v, p);
  }

}

module.exports = CheckerTexture;
