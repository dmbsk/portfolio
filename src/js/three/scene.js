/* eslint-disable no-console */
import * as THREE from 'three';

class Scene{
  constructor(width = window.innerWidth, height = window.innerHeight, cameraZ = 5) {
    this.width = width;
    this.height = height;

    let ratio = this.width / this.height;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( this.width, this.height );
    this.camera.position.z = cameraZ;

  }
  createCanvas(canvasDiv) {
    canvasDiv.appendChild( this.renderer.domElement );
  }

  add(obj) {
    this.scene.add(obj);
  }
}

export default Scene;