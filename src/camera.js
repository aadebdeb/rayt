
// const vec3 = require('./vec3.js');
// const Ray = require('./ray.js');
//
// class Camera {
//
//   /**
//    * @constructor
//    *
//    *
//    */
//   constructor(lookfrom, lookat, vup, vfov, aspect, aperture, focusDist) {
//     const theta = vfov * Math.PI / 180,
//           halfHeight = Math.tan(theta / 2),
//           halfWidth = aspect * halfHeight;
//     this.w = vec3.sub(lookfrom, lookat).normalize();
//     this.u = vec3.cross(vup, this.w).normalize();
//     this.v = vec3.cross(this.w, this.u);
//     this.origin = lookfrom;
//     this.lowerleft = this.origin.sub(this.u.mult(focusDist * halfWidth), this.v.mult(focusDist * halfHeight), this.w.mult(focusDist));
//     this.horizontal = this.u.mult(2).mult(focusDist * halfWidth);
//     this.vertical = this.v.mult(2).mult(focusDist * halfHeight);
//     this.lensRadius = aperture / 2;
//   }
//
//   getRay(s, t) {
//     const rd = this.lensRadius * vec3.randomInUnitCircle(),
//           offset = vec3.add(this.u.mult(rd.x), this.v.mult(rd.y));
//     return new Ray(this.origin.add(offset), this.lowerleft.add(this.horizontal.mult(s)).add(this.vertical.mult(t)).sub(this.origin).sub(offset));
//   }
//
//
// }
//
// module.exports = Camera;


const ProjectiveCamera = require('./camera/ProjectiveCamera'),
      OrthographicCamera = require('./camera/OrthographicCamera');

const camera = {
  ProjectiveCamera: ProjectiveCamera,
  OrthographicCamera: OrthographicCamera
}

module.exports = camera;
