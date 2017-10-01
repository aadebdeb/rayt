/**
 * Interface for Camera class
 * @class
 */
class Camera {

  /**
   * gets ray to screen position at (s, t)
   * @param {number} s - screen positon at x. must be in [0, 1]
   * @param {number} t - screen position at y. must be in [0, 1]
   * @return {Ray}
   */
  getRay(s, t) {
    /** abstract method */
    return null;
  }

}

module.exports = Camera;
