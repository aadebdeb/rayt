const expect = require('chai').expect;
const vec3 = require('../../src/rayt/vec3.js');

describe('vec3', () => {

  describe('vec3', () => {
    it ('should return a Vec3 instance which has same xyz value if 1 argument is given', () => {
      const v = vec3(1);
      expect(v.x).to.equal(1);
      expect(v.y).to.equal(1);
      expect(v.z).to.equal(1);
    });
    it ('should return a Vec3 instance which has xyz values given by arguments', () => {
      const v = vec3(1, 2, 3);
      expect(v.x).to.equal(1);
      expect(v.y).to.equal(2);
      expect(v.z).to.equal(3);
    });
  });

  describe('#x', () => {
    it('should return value of x', () => {
      const v = vec3(1, 2, 3);
      expect(v.x).to.equal(1);
    });
  });

  describe('#y', () => {
    it('should return value of y', () => {
      const v = vec3(1, 2, 3);
      expect(v.y).to.equal(2);
    });
  });

  describe('#z', () => {
    it('should return value of z', () => {
      const v = vec3(1, 2, 3);
      expect(v.z).to.equal(3);
    });
  });

  describe('#r', () => {
    it('should return value of x as red', () => {
      const v = vec3(1, 2, 3);
      expect(v.r).to.equal(1);
    });
  });

  describe('#g', () => {
    it('should return value of y as green', () => {
      const v = vec3(1, 2, 3);
      expect(v.g).to.equal(2);
    });
  });

  describe('#b', () => {
    it('should return value of z as blue', () => {
      const v = vec3(1, 2, 3);
      expect(v.b).to.equal(3);
    });
  });

  describe('#clone', () => {
    it ('should return new Vec3 instance', () => {
      const v = vec3(1, 2, 3),
            cloned = v.clone();
      expect(v).not.to.equal(cloned);
    });
    it('should return Vec3 instance which has same xyz value', () => {
      const v = vec3(1, 2, 3),
            cloned = v.clone();
      expect(cloned.x).to.equal(v.x);
      expect(cloned.y).to.equal(v.y);
      expect(cloned.z).to.equal(v.z);
    });
  });

  describe('#add', () => {
    it ('should return new Vec3 instance', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            added = v1.add(v2);
      expect(v1).not.to.equal(added);
    });
    it ('should return Vec3 instance which added a vec3', () => {
      const v = vec3(1, 2, 3).add(vec3(4, 5, 6));
      expect(v.x).to.equal(5);
      expect(v.y).to.equal(7);
      expect(v.z).to.equal(9);
    });
    it ('should return Vec3 instance which added a scalar', () => {
      const v = vec3(1, 2, 3).add(4);
      expect(v.x).to.equal(5);
      expect(v.y).to.equal(6);
      expect(v.z).to.equal(7);
    });
    it('should return Vec3 instance which added multiple vec3 and scalar', () => {
      const v = vec3(1, 2, 3).add(vec3(4, 5, 6), 7, vec3(8, 9, 10), 11);
      expect(v.x).to.equal(31);
      expect(v.y).to.equal(34);
      expect(v.z).to.equal(37);
    });
  });

  describe('#sub', () => {
    it ('should return new Vec3 instance', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            subbed = v1.sub(v2);
      expect(v1).not.to.equal(subbed);
    });
    it ('should return a Vec3 instance which subtracted a vector', () => {
      const v = vec3(10, 20, 30).sub(vec3(1, 2, 3));
      expect(v.x).to.equal(9);
      expect(v.y).to.equal(18);
      expect(v.z).to.equal(27);
    });
    it ('should return a Vec3 instance which subtracted a scalar', () => {
      const v = vec3(10, 20, 30).sub(1);
      expect(v.x).to.equal(9);
      expect(v.y).to.equal(19);
      expect(v.z).to.equal(29);
    });
    it('should return a Vec3 instance which subtracted multiple vec3 and scalar', () => {
      const v = vec3(50, 60, 70).sub(vec3(4, 5, 6), 7, vec3(8, 9, 10), 11);
      expect(v.x).to.equal(20);
      expect(v.y).to.equal(28);
      expect(v.z).to.equal(36);
    });
  });

  describe('#mult', () => {
    it ('should return new Vec3 instance', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            multiplied = v1.mult(v2);
      expect(v1).not.to.equal(multiplied);
    });
    it ('shuld return a Vec3 instance which multiplied with a vector', () => {
      const v = vec3(1, 2, 3).mult(vec3(4, 5, 6));
      expect(v.x).to.equal(4);
      expect(v.y).to.equal(10);
      expect(v.z).to.equal(18);
    });
    it ('shuld return a Vec3 instance which multiplied with a scalar', () => {
      const v = vec3(1, 2, 3).mult(2);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(4);
      expect(v.z).to.equal(6);
    });
  });

  describe('#div', () => {
    it ('should return new Vec3 instance', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            divided = v1.div(v2);
      expect(v1).not.to.equal(divided);
    });
    it ('shuld return a Vec3 instance which divided by a vector', () => {
      const v = vec3(10, 9, 21).div(vec3(5, 3, 7));
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(v.z).to.equal(3);
    });
    it ('shuld return a Vec3 instance which divided by a scalar', () => {
      const v = vec3(100, 50, 10).div(2);
      expect(v.x).to.equal(50);
      expect(v.y).to.equal(25);
      expect(v.z).to.equal(5);
    });
  });


  describe('#length', () => {
    it ('shuld return the length of vector', () => {
      const v = vec3(1, 1, 1);
      expect(v.length()).to.equal(Math.sqrt(3));
    });
  });

  describe('#squaredLngth', () => {
    it ('should return the squared length of vector', () => {
      const v = vec3(1, 1, 1);
      expect(v.squaredLength()).to.equal(3);
    });
  });

  describe('#dot', () => {
    it ('#should return the squared length of vector if same vector is given', () => {
      const v = vec3(1, 1, 1);
      expect(v.dot(v)).to.equal(3);
    });
    it ('should return zero if zero vector is given', () => {
      const v1 = vec3(1, 1, 1),
            v2 = vec3(0, 0, 0);
      expect(v1.dot(v2)).to.equal(0);
    });
    it ('shoule return zero if a vector which crossed at right angle is given', () => {
      const v1 = vec3(1, 1, 0),
            v2 = vec3(0, 0, 1);
      expect(v1.dot(v2)).to.equal(0);
    });
  });

  describe('#cross', () => {
    it ('should return new Vec3 instance', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            crossed = v1.cross(v2);
      expect(v1).not.to.equal(crossed);
    });
    it('should return zero vector if same vector is given', () => {
      const v = vec3(1, 2, 3);
            crossed = v.cross(v);
      expect(crossed.x).to.eq(0);
      expect(crossed.y).to.eq(0);
      expect(crossed.z).to.eq(0);
    });
    it('should return a vector which cross at right angle', () =>  {
      const v1 = vec3(1, 0, 0),
            v2 = vec3(0, 1, 0);
            crossed = v1.cross(v2);
      expect(crossed.x).to.eq(0);
      expect(crossed.y).to.eq(0);
      expect(crossed.z).to.eq(1);
    });
  });

  describe('#map', () => {
    it ('should return new Vec3 instance', () => {
      const v = vec3(1, 2, 3),
            mapped = v.map((a) => {return a + 1;});
      expect(mapped).not.to.equal(v);
    });
    it ('should return a vector which has function applied value', () => {
      const v = vec3(1, 2, 3),
            mapped = v.map((a) => {return a + 1;});
      expect(mapped.x).to.equal(2);
      expect(mapped.y).to.equal(3);
      expect(mapped.z).to.equal(4);
    });
  });

  describe('#normalize', () => {
    it ('should return new Vec3 instance', () => {
      const v = vec3(1, 2, 3),
            normalized = v.normalize();
      expect(normalized).not.to.equal(v);
    });
    it ('should return a vector which length is 1', () => {
      const v = vec3(1, 2, 3),
            normalized = v.normalize();
      expect(normalized.length()).to.equal(1);
    });
  });

  describe('vec3.add', () => {
    it ('should return new Vec3 instance', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            added = vec3.add(v1, v2);
      expect(added).not.to.equal(v1);
      expect(added).not.to.equal(v2);
    });
    it ('should return a vector which two vectors are added', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            added = vec3.add(v1, v2);
      expect(added.x).to.equal(5);
      expect(added.y).to.equal(7);
      expect(added.z).to.equal(9);
    });
  });

  describe('vec3.sub', () => {
    it ('should return new Vec3 instance', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            subbed = vec3.sub(v1, v2);
      expect(subbed).not.to.equal(v1);
      expect(subbed).not.to.equal(v2);
    });
    it ('should return a vector which v2 subtracted from v1', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            subbed = vec3.sub(v1, v2);
      expect(subbed.x).to.equal(-3);
      expect(subbed.y).to.equal(-3);
      expect(subbed.z).to.equal(-3);
    });
  });

  describe('vec3.dot', () => {
    it ('#should return the squared length of vector if same vector is given', () => {
      const v = vec3(1, 1, 1);
      expect(vec3.dot(v, v)).to.equal(3);
    });
    it ('should return zero if zero vector is given', () => {
      const v1 = vec3(1, 1, 1),
            v2 = vec3(0, 0, 0);
      expect(vec3.dot(v1, v2)).to.equal(0);
    });
    it ('shoule return zero if a vector which crossed at right angle is given', () => {
      const v1 = vec3(1, 1, 0),
            v2 = vec3(0, 0, 1);
      expect(vec3.dot(v1, v2)).to.equal(0);
    });
  });

  describe('vec3.cross', () => {
    it ('should return new Vec3 instance', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6),
            crossed = vec3.cross(v1, v2);
      expect(v1).not.to.equal(crossed);
    });
    it('should return zero vector if same vector is given', () => {
      const v = vec3(1, 2, 3);
            crossed = vec3.cross(v, v);
      expect(crossed.x).to.eq(0);
      expect(crossed.y).to.eq(0);
      expect(crossed.z).to.eq(0);
    });
    it('should return a vector which cross at right angle', () =>  {
      const v1 = vec3(1, 0, 0),
            v2 = vec3(0, 1, 0);
            crossed = vec3.cross(v1, v2);
      expect(crossed.x).to.eq(0);
      expect(crossed.y).to.eq(0);
      expect(crossed.z).to.eq(1);
    });
  });

  describe('vec3.lerp', () => {
    it ('should return a vector which has same values with v1 if t is 1', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6);
            lerped = vec3.lerp(v1, v2, 1);
      expect(lerped.x).to.eq(1);
      expect(lerped.y).to.eq(2);
      expect(lerped.z).to.eq(3);
    });
    it ('should return a vector which has same values with v1 if t is 0', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6);
            lerped = vec3.lerp(v1, v2, 0);
      expect(lerped.x).to.eq(4);
      expect(lerped.y).to.eq(5);
      expect(lerped.z).to.eq(6);
    });
    it ('should return a vector which has middle values between v1 and v2 if t is 0.5', () => {
      const v1 = vec3(1, 2, 3),
            v2 = vec3(4, 5, 6);
            lerped = vec3.lerp(v1, v2, 0.5);
      expect(lerped.x).to.eq(5 / 2);
      expect(lerped.y).to.eq(7 / 2);
      expect(lerped.z).to.eq(9 / 2);
    });
  });

  describe ('vec3.min', () => {
    it ('should return a vector with minium xyz values', () => {
      const v1 = vec3(1, 3, 5),
            v2 = vec3(5, 3, 1),
            min = vec3.min(v1, v2);
      expect(min.x).to.equal(1);
      expect(min.y).to.equal(3);
      expect(min.z).to.equal(1);
    });
  });

  describe ('vec3.max', () => {
    it ('should return a vector with maximum xyz values', () => {
      const v1 = vec3(1, 3, 5),
            v2 = vec3(5, 3, 1),
            min = vec3.max(v1, v2);
      expect(min.x).to.equal(5);
      expect(min.y).to.equal(3);
      expect(min.z).to.equal(5);
    });
  });

  describe('vec3.zero', () => {
    it ('should return a vector with zero', () => {
      const zero = vec3.zero();
      expect(zero.x).to.equal(0);
      expect(zero.y).to.equal(0);
      expect(zero.z).to.equal(0);
    });
  });

  describe('vec3.random', () => {
    it ('should return a vector which values are in [0, 1]', () => {
      for (let i = 0; i < 50; i++) {
        const v = vec3.random();
        expect(v.x).to.be.within(0, 1);
        expect(v.y).to.be.within(0, 1);
        expect(v.z).to.be.within(0, 1);
      }
    });
  });

  describe('vec3.randomInUnitCircle', () => {
    it('shuld return a vector which x and y are in [-1, 1],  and z is 0', () => {
      for (let i = 0; i < 50; i++) {
        const v = vec3.randomInUnitCircle();
        expect(v.x).to.be.within(-1, 1);
        expect(v.y).to.be.within(-1, 1);
        expect(v.z).to.equal(0);
      }
    });
    it('shuld return a vector which length is less than 1', () => {
      for (let i = 0; i < 50; i++) {
        const v = vec3.randomInUnitCircle();
        expect(v.length()).to.be.within(0, 1);
      }
    });
  });

  describe('vec3.randomInUnitSphere', () => {
    it('shuld return vec3 which values are in [-1, 1]', () => {
      for (let i = 0; i < 50; i++) {
        const v = vec3.randomInUnitCircle();
        expect(v.x).to.be.within(-1, 1);
        expect(v.y).to.be.within(-1, 1);
        expect(v.z).to.be.within(-1, 1);
      }
    });
    it('shuld return a vector which length is less than 1', () => {
      for (let i = 0; i < 50; i++) {
        const v = vec3.randomInUnitCircle();
        expect(v.length()).to.be.within(0, 1);
      }
    });
  });
})
