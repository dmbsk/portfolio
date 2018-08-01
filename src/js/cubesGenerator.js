import * as THREE from 'three';
class CubesGenerator {
  constructor(
    cubesGeneratorSpec = defaults
  ) {
    this.cubes = [];
    const {cubesAmountForEachAxis, cubeSize, spacing} = cubesGeneratorSpec;
    this.cubeGeneratorSize = {
      x: cubesAmountForEachAxis.x * ( cubeSize.x + spacing.x ),
      y: cubesAmountForEachAxis.y * ( cubeSize.y + spacing.y ),
      z: cubesAmountForEachAxis.z * ( cubeSize.z + spacing.z )
    };

    for (let x = 0; x < cubesAmountForEachAxis.x; x++) {
      for (let y = 0; y < cubesAmountForEachAxis.y; y++) {
        for (let z = 0; z < cubesAmountForEachAxis.z; z++) {
          const geometry = new THREE.BoxGeometry(cubeSize.x, cubeSize.y, cubeSize.z);
          const material = new THREE.MeshPhongMaterial({color: 0x000fff});
          const cube = new THREE.Mesh(geometry, material);
          cube.castShadow = true;
          cube.receiveShadow = true;

          cube.position.x = ((this.cubeGeneratorSize.x * 0.5) - x * (spacing.x + cubeSize.x));
          cube.position.y = ((this.cubeGeneratorSize.y * 0.5) - y * (spacing.y + cubeSize.y));
          cube.position.z = (this.cubeGeneratorSize.z * 0.5) - z * (spacing.z + cubeSize.z);

          cube.generatorIndex = {
            x,
            y,
            z,
          };

          this.cubes.push(cube);
        }
      }
    }
  }

  addToScene(scene) {
    this.cubes.forEach(function (cube) {
      scene.add(cube);
    });
  }

  serachCenteredCube() {
    this.cubes.forEach(function (cube) {
      const centeredCubeIndexes = {
        x: Math.floor(this.cubesAmountForEachAxis.x * 0.5),
        y: Math.floor(this.cubesAmountForEachAxis.y * 0.5),
        z: Math.floor(this.cubesAmountForEachAxis.z * 0.5)
      };
      if (cube.generatorIndex === centeredCubeIndexes) {
        return cube;
      }
    });
  }
}

export default CubesGenerator;

//Defaults for constructor
const defaults = {
  cubesAmountForEachAxis: {
    x: 10,
    y: 10,
    z: 10,
  },
  cubeSize: {
    x: 1,
    y: 2,
    z: 1,
  },
  spacing: {
    x: 1,
    y: 1,
    z: 1,
  }
};