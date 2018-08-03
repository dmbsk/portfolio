import * as THREE from 'three';

const sceneLight = (scene) => {
  scene.add(new THREE.AmbientLight(0xffffff, 1));

  const light = new THREE.PointLight(0xffffff, 4, 50);
  light.position.z = 24;
  light.castShadow = true;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  light.shadow.camera.near = 0.5;    // default
  light.shadow.camera.far = 100;

  const d = 200;

  light.shadow.camera.left = -d;
  light.shadow.camera.right = d;
  light.shadow.camera.top = d;
  light.shadow.camera.bottom = -d;
  light.shadow.camera.far = 50;

  scene.add( light );


  return {
    light
  };
};

export default sceneLight;