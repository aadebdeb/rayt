const Hitable = require('./hitable.js');

class BVHNode extends Hitable {

  /**
   *
   * @param {Array<Hitable>} hitables
   *
   */
  constructor(hitables) {
    this._hitabls = hitables || [];
    this._left = null;
    this._right = null;
    this._aabb = null;
  }

  add(hitable) {
    this._hitables.push(hitable);
  }

  constructTree() {
    if (this._hitables.length === 0) {
      this._left = null;
      this._right = null;
    } else if (this._hitables.length === 1) {
      this._left = this._hitables[0];
      this._right = null;
    } else if (this._hitables.length === 2) {
      this._left = this._hitables[0];
      this._right = this._hitables[1];
    } else {
      this._hitables.sort(this._getCompareFunc());
      this._left = new BVHNode(this._hitables.slice(0, this._hitables.length / 2));
      this._right = new BVHNode(this._hitables.slice(this._hitables.length / 2, this._hitables));
      this._left.constuctTree();
      this._right.constuctTree();
    }
    const leftAabb = this._left ? this.left.aabb() : null,
          righAabb = this._right ? this.right.aabb() : null;
    this._aabb = leftAabb && rightAabb ? leftAabb.unite(rightAabb) :
                             leftAabb ? leftAabb :
                             rightAabb ? rightAabb : null;
  }

  _getCompareFunc() {
    const rand = Math.random() * 3;
    if (rand < 1.0) {
      return this._compareByAxis('x');
    } else if (rand < 2.0) {
      return this._compareByAxis('y');
    } else {
      return this._compareByAxis('z');
    }
  }

  _compareByAxis(axis) {
    return function(hitable1, hitable2) {
      const aabb1 = hitable1.aabb(),
            aabb2 = hitable2.aabb();
      if (aabb1.min[axis] < aabb2.min[axis]) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  hit(ray, tmin, tmax) {
    if(this._box.hit(ray, tmin, tmax)) {
      const leftRec = this._left ? this._left.hit(ray, tmin, tmax) : null,
            rightRec = this._right ? this._right.hit(ray, tmin, tmax) : null;
      if (leftRec && rightRec) {
        return leftRec.t < rightRec.t ? leftRec : rightRec;
      }
      if (leftRec) {
        return leftRec;
      }
      if (rightRec) {
        return rightRec;
      }
    }
    return null;
  }

  aabb() {
    return this._aabb;
  }
}
