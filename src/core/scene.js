

class Scene {

  constructor(obj) {
    this._hitable = obj.hitable || new Sphere();
    this._camera = obj.camera || new ProjectiveCamera();
    this._recursion = obj.recursion || 50;
    this._sampling = obj.sampling || 50;
    this._background = obj.background || this._defaultBackground;
  }

  at(u, v) {
    let sum = vec3.zero();
    const ray = this._camera.getRay(u, v);
    sum.add(this._process(ray, 0));
    return sum.div(this._sampling);
  }

  _process(ray, recursion) {
    const rec = this._hitable.hit(ray, 0.0001, Number.POSITIVE_INFINITY);
    if (rec) {
      const scattered = rec.material.scatter(ray, rec),
            emitted = rec.material.emit(rec.u, rec.v, rec.p);
      if (scattered && recursion < this._recursion) {
        return vec3.add(emitted, this._process(scattered.ray, ++recursion).mult(scattered.attenuation));
      } else {
        return emitted;
      }
    } else {
      this._background();
    }
  }

  _defaultBackground() {
    return vec3(0.5, 0.5, 0.5);
  }

}

module.exports = Scene;
