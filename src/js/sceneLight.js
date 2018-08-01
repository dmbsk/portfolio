import * as THREE from 'three';

const sceneLight = (scene) => {
  //scene.add(new THREE.AmbientLight(0x666666));

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(-5, 5, 40);
  light.position.multiplyScalar(4);
  light.castShadow = true;
  light.shadow.mapSize.width = 512;  // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5;    // default
  light.shadow.camera.far = 500;     // default

  const d = 200;

  light.shadow.camera.left = -d;
  light.shadow.camera.right = d;
  light.shadow.camera.top = d;
  light.shadow.camera.bottom = -d;
  light.shadow.camera.far = 1000;

  scene.add( light );

  const helper = new THREE.CameraHelper( light.shadow.camera );
  scene.add( helper );

  return {
    light
  };
};

export default sceneLight;