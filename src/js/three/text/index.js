import * as THREE from 'three';
import textGeometry from './textGeometry';

class Text{
  constructor(text, geometry = textGeometry.default, pathToFont = './js/three/text/Quicksand_Regular.json') {
    this.text = undefined;
    const fontLoader = new THREE.FontLoader();

    fontLoader.load(pathToFont, function ( font ) {
      geometry.font = font;
      const threeText = new THREE.TextGeometry( 'Test', geometry);

      this.text = threeText;
    });
  }

  get() {
    return this.text;
  }

}

export default Text;