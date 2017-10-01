const ProjectiveCamera = require('./camera/projectivecamera.js'),
      OrthographicCamera = require('./camera/orthographiccamera.js');

// Object which has camera class
const camera = {
  ProjectiveCamera: ProjectiveCamera,
  OrthographicCamera: OrthographicCamera
}

module.exports = camera;
