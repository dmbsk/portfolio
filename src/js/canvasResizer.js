'use strict';

class canvasResizer {
  constructor(width, height, id) {
    this.height = height;
    this.width = width;
    this.canvas = document.getElementById(id);
  };

  setCanvasSize(width, height) {
    this.width = width !== undefined ? width : this.width;
    this.height = height !== undefined ? height : this.height;
  }

  get ratio() {
    return this.width / this.height;
  }


}
