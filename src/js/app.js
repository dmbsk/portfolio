/* eslint-disable no-console */
import '../scss/style.scss';
import Scene from './three/scene';

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


