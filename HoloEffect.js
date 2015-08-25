THREE.HoloEffect = function(width, height, renderer) {

  var halfWidth = width / 2;
  var halfHeight = height / 2;

  renderer.autoClear = false;
  renderer.setSize(width, height);

  this.render = function(scene, camera) {
    var cameraBottom = camera.clone();
    cameraBottom.rotateZ(Math.PI);

    var cameraLeft = camera.clone();
    cameraLeft.rotateZ(Math.PI / 2);

    var cameraRight = camera.clone();
    cameraRight.rotateZ(-(Math.PI / 2));

    renderer.setViewport(0, 0, width, height);
    renderer.clear();

    renderer.setViewport(0, 0, width, halfHeight);
    renderer.render(scene, cameraBottom);

    renderer.setViewport(0, halfHeight, width, halfHeight);
    renderer.render(scene, camera);

    renderer.setViewport(0, 0, halfWidth, height);
    renderer.render(scene, cameraRight);

    renderer.setViewport(halfWidth, 0, halfWidth, height);
    renderer.render(scene, cameraLeft);
  };

};
