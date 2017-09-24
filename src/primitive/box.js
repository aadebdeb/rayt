
const Hitable = require('../hitable.js'),
      HitableList = require('../hitableList.js'),
      Rectangle = require('./rectangle.js'),
      AABB = require('../aabb.js');

class Box extends Hitable {

  /**
   *
   * @param {number} width
   * @param {number} height
   * @param {number} depth
   * @param {BaseMaterial} material
   *
   */
  constructor(width, height, depth, material) {
    super();
    this._width = width;
    this._height = height;
    this._depth = depth;
    this._material = material;

    const w = width / 2,
          h = height / 2,
          d = depth / 2;
    const top = (new Rectangle(width, depth, material)).rotate(-90, 0, 0).translate(0, h, 0),
          bottom = (new Rectangle(width, depth, material)).rotate(90, 0, 0).translate(0, -h, 0),
          front = (new Rectangle(width, height, material)).translate(0, 0, d),
          back = (new Rectangle(width, height, material)).translate(0, 0, -d).flip(),
          left = (new Rectangle(depth, height, material)).rotate(0, -90, 0).translate(-w, 0, 0),
          right = (new Rectangle(depth, height, material)).rotate(0, 90, 0).translate(w, 0, 0);
    this._rects = new HitableList();
    this._rects.add(top);
    this._rects.add(bottom);
    this._rects.add(front);
    this._rects.add(back);
    this._rects.add(left);
    this._rects.add(right);
  }

  /** inheritdoc */
  hit(ray, tmin, tmax) {
    return this._rects.hit(ray, tmin, tmax);
  }

  /** inheritdoc */
  aabb() {
    const w = this._width / 2,
          h = this._height / 2,
          d = this._depth / 2;
    return new AABB(vec3(-w, -h, -d), vec3(w, h, d));
  }

}

module.exports = Box;
