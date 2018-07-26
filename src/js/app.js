/* eslint-disable no-console */
import '../scss/style.scss';
import Scene from './three/scene';
import Particle from './three/particle';

const canvasDiv = document.getElementById('canvasDiv');

const sizeModyfier = -50;
const size = {
  width: window.innerWidth + sizeModyfier,
  height: window.innerHeight + sizeModyfier
};

const scene = new Scene(size.width, size.height);

window.addEventListener('resize', function() {
  console.log(scene.width);
  scene.resizeCanvas(sizeModyfier);
});

scene.createCanvas(canvasDiv);

let animate = function () {
  requestAnimationFrame( animate );
  scene.renderer.render( scene.scene, scene.camera );
};
animate();

const particle = new Particle();
scene.scene.add(particle.particleSystem);


