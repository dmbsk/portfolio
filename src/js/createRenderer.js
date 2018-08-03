import {WebGLRenderer, PCFSoftShadowMap} from 'three';

const createRenderer = (domObject = document.body) => {
  const renderer = new WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.softness = 10;
  renderer.shadowMap.type = PCFSoftShadowMap;
  domObject.appendChild( renderer.domElement );
  return renderer;
};

export default createRenderer;