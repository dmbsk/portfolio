import '../scss/style.scss';
import Scene from './three/scene';
import Text from './three/text/index';

const canvasDiv = document.getElementById('canvasDiv');
const scene = new Scene(1400, 800);

scene.createCanvas( canvasDiv );

const text = new Text('Hello');
scene.add(text);

