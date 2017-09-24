
/**
 * Interface for the cleasses represent camera
 *
 *
 */
class BaseCamera {

  /**
   * gets ray to screen position at (s, t)
   * @param {number} s must be in [0, 1]
   * @param {number} t must be in [0, 1]
   * @return {Ray}
   */
  getRay(s, t) {
    /** abstract method */
    return null;
  }

}

module.exports = BaseCamera;
