import * as THREE from 'three';
const defaultPosition = {
  x: 300,
  y: 150,
  z: 5,
};

class Particle{
  constructor(size = 200, color = 0xff0000, position = defaultPosition) {
    const geometry = new THREE.Geometry();
    this.material = new THREE.PointsMaterial({
      color: color,
      size: size,
    });

    const vertex = new THREE.Vector3( position.x, position.y, position.z );
    geometry.vertices.push( vertex );

    this.particleSystem = new THREE.Points(geometry, this.material);
  }
}

export default Particle;