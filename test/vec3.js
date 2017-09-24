assert = require('assert');
const expect = require('chai').expect;
const vec3 = require('../src/vec3.js');


describe('vec3', () => {

  describe('rgb', () => {
    it('rgb', () => {
      const v = vec3(1, 2, 3);
      expect(v.r).to.equal(1);
      expect(v.g).to.equal(2);
      expect(v.b).to.equal(3);
    });
  });

  describe('#clone', () => {
    it('should return cloned vec3', () => {
      const v = vec3(1, 2, 3),
            cloned = v.clone();
      expect(v.x).to.equal(cloned.x);
      expect(v.y).to.equal(cloned.y);
      expect(v.z).to.equal(cloned.z);
    });
  });

  describe('#add', () => {
    it ('should return vec3 which added a vec3', () => {
      const v = vec3(1, 2, 3).add(vec3(4, 5, 6));
      expect(v.x).to.equal(5);
      expect(v.y).to.equal(7);
      expect(v.z).to.equal(9);
    });

    it ('should return vec3 which added a scalar', () => {
      const v = vec3(1, 2, 3).add(4);
      expect(v.x).to.equal(5);
      expect(v.y).to.equal(6);
      expect(v.z).to.equal(7);
    });

    it('should return vec3 which added multiple vec3 and scalar', () => {
      const v = vec3(1, 2, 3).add(vec3(4, 5, 6), 7, vec3(8, 9, 10), 11);
      expect(v.x).to.equal(31);
      expect(v.y).to.equal(34);
      expect(v.z).to.equal(37);
    });

    it('should return new vec3', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6);
      v1.add(v2);
      expect(v1.x).to.equal(1);
      expect(v1.y).to.equal(2);
      expect(v1.z).to.equal(3);
    });
  });

  describe('#sub', () => {
    it ('should return vec3 which subtracted a vec3', () => {
      const v = vec3(10, 20, 30).sub(vec3(1, 2, 3));
      expect(v.x).to.equal(9);
      expect(v.y).to.equal(18);
      expect(v.z).to.equal(27);
    });

    it ('should return vec3 which subtracted a scalar', () => {
      const v = vec3(10, 20, 30).sub(1);
      expect(v.x).to.equal(9);
      expect(v.y).to.equal(19);
      expect(v.z).to.equal(29);
    });

    it('should return vec3 which subtracted multiple vec3 and scalar', () => {
      const v = vec3(50, 60, 70).sub(vec3(4, 5, 6), 7, vec3(8, 9, 10), 11);
      expect(v.x).to.equal(20);
      expect(v.y).to.equal(28);
      expect(v.z).to.equal(36);
    });

    it('should return new vec3', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6);
      v1.sub(v2);
      expect(v1.x).to.equal(1);
      expect(v1.y).to.equal(2);
      expect(v1.z).to.equal(3);
    });
  });

  describe('#mult', () => {
    it ('shuld return vec3 which multiplied with vec3', () => {
      const v = vec3(1, 2, 3).mult(vec3(4, 5, 6));
      expect(v.x).to.equal(4);
      expect(v.y).to.equal(10);
      expect(v.z).to.equal(18);
    });

    it ('shuld return vec3 which multiplied with scalar', () => {
      const v = vec3(1, 2, 3).mult(2);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(4);
      expect(v.z).to.equal(6);
    });
  });

  describe('#div', () => {
    it ('shuld return vec3 which divided by vec3', () => {
      const v = vec3(10, 9, 21).div(vec3(5, 3, 7));
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(v.z).to.equal(3);
    });

    it ('shuld return vec3 which divided by scalar', () => {
      const v = vec3(100, 50, 10).div(2);
      expect(v.x).to.equal(50);
      expect(v.y).to.equal(25);
      expect(v.z).to.equal(5);
    });
  });


  describe('#length', () => {
    it ('shuld return length of vector', () => {
      const v = vec3(1, 1, 1);
      assert.equal(v.length(), Math.sqrt(3));
    });
  });

  describe('#squaredLngth', () => {
    it ('should return squared length of vector', () => {
      const v = vec3(1, 1, 1);
      assert.equal(v.squaredLength(), 3);
    });
  });

  describe('#dot', () => {
    it ('#dot', () => {
      const v1 = vec3(1, 1, 1),
            v2 = vec3(1, 1, 1);
      assert.equal(v1.dot(v2), 3);
    });
  });

  describe('#cross', () => {
    it('#cross', () => {
      const v1 = vec3(1, 1, 1),
            v2 = vec3(1, 1, 1);
      assert.equal(v1.cross(v2), 0);
    });
  });

  describe('vec3.add', () => {
    it('should add a vec3 to another vec3', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            v = vec3.add(v1, v2);
      expect(v.x).to.equal(5);
      expect(v.y).to.equal(7);
      expect(v.z).to.equal(9);
    });
  });

  describe('vec3.randomInUnitCircle', () => {
    it('shuld return vec3 which x and y are between -1 and 1,  and z is 0', () => {
      for (let i = 0; i < 50; i++) {
        const v = vec3.randomInUnitCircle();
        expect(v.x).to.be.within(-1, 1);
        expect(v.y).to.be.within(-1, 1);
        expect(v.z).to.equal(0);
      }
    });
  });
})
