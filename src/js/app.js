/* eslint-disable no-console,no-unused-vars */
//imports from node_modules
import * as THREE from 'three';
import * as TWEEN from 'es6-tween';

//mine
import CubesGenerator from './cubesGenerator';
import sceneLight from './sceneLight';
import createRenderer from './createRenderer';

//css
import '../scss/style.scss';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 100000 );
camera.position.z = 40;
camera.position.x = 0;
camera.position.y = 0;
const renderer = createRenderer();
const lights = sceneLight(scene);

const cubeGenSpec = {
  cubesAmountForEachAxis: {
    x: 50,
    y: 50,
    z: 1
  },
  cubeSize: {
    x: 1,
    y: 1,
    z: 10
  },
  spacing: {
    x: 0,
    y: 0,
    z: 0
  }
};
const cubesGenerator = new CubesGenerator(cubeGenSpec);
cubesGenerator.addToScene(scene);
camera.lookAt(0, 0, 0);

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
window.addEventListener('mousemove', (event) => {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
});
window.addEventListener('touchend', (event) => {
  const touchobj = event.changedTouches[0];
  mouse.x = parseInt(touchobj.clientX);
  mouse.y = parseInt(touchobj.clientY);
  console.log("working");
});

let lastInteract = [];
const goToZ = 12;
const cubesDefaultZ = cubesGenerator.cubes[0].position.z;
let animate = () => {
  requestAnimationFrame( animate );

  raycaster.setFromCamera( mouse, camera );
  let intersects = raycaster.intersectObjects(cubesGenerator.cubes);
  if (intersects.length) {
    let tweenTo = new TWEEN.Tween(intersects[0].object.position)
      .to({
        z: goToZ,
      }, 1000)
      .on('zReach100', ({z}) => {
        bringBack(intersects[0].object.position, cubesDefaultZ);
      })
      .easing(TWEEN.Easing.Elastic.Out)
      .start();

    tweenTo.on('update', ({ z }) => {
      if (z >= goToZ) {
        tweenTo.emit('zReach100', {z});
      }
    });

    TWEEN.add(tweenTo);
    lastInteract.push(intersects[0]);
  }

  TWEEN.update();
  renderer.render( scene, camera );
};

function bringBack(position, backToPosition) {
  let tweenBack = new TWEEN.Tween(position)
    .to({
      z: backToPosition,
    }, 500)
    .easing(TWEEN.Easing.Elastic.In)
    .delay( 2500 )
    .start();
  TWEEN.add(tweenBack);
}

animate();

