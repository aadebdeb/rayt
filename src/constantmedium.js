
const Hitable = require('./hitable.js'),
      Ray = require('./ray.js'),
      BaseMaterial = require('./material/baseMaterial.js'),
      HitRecord = require('./hitrecord.js');


class Isotropic extends BaseMaterial {
  constructor(texture) {
    super();
    this._albedo = texture;
  }

  scatter(ray, rec) {
    const dir = vec3.randomInUnitSphere();
    return {
      ray: new Ray(rec.p, dir),
      attenuation: this._albedo.value(rec.u, rec.v, rec.p)
    };
  }
}

class ConstantMedium extends Hitable {

  constructor(hitable, density, texture) {
    super();
    this._hitable = hitable;
    this._density = density;
    this._material = new Isotropic(texture);
  }

  hit(ray, tmin, tmax) {
    let rec1 = this._hitable.hit(ray, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY),
          rec2 = rec1 ? this._hitable.hit(ray, rec1.t + 0.0001, Number.POSITIVE_INFINITY) : null;

    if (!rec2) {
      return null;
    }

    if (rec1.t < tmin) {
      rec1 = new HitRecord(tmin, rec1.p, rec1.n, rec1.material);
    }
    if (rec2.t > tmax) {
      rec2 = new HitRecord(tmax, rec2.p, rec2.n, rec2.mateiral);
    }

    if (rec1.t >= rec2.t) {
      return null;
    }

    if (rec1.t < 0) {
      rec1 = new HitRecord(0, rec1.p, rec1.n, rec1.material);
    }

    const distance = (rec2.t - rec1.t) * ray.direction.length(),
          hitDistance = -(1 / this._density) * Math.log(Math.random());

    if (hitDistance < distance) {
      const t = rec1.t + hitDistance / ray.direction.length(),
            p = ray.point(t),
            n = vec3(1, 0, 0);
      return new HitRecord(t, p, n, this._material);
    }

    return null;

  }

}

module.exports = ConstantMedium;
