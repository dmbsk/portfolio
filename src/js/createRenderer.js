import {WebGLRenderer, BasicShadowMap} from 'three';

const createRenderer = (domObject = document.body) => {
  const renderer = new WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = BasicShadowMap;
  domObject.appendChild( renderer.domElement );
  return renderer;
};

export default createRenderer;