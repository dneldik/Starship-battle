/**
 * @module index
 * @description This is the main module.
 * @requires ./src/create-canvas.js
 */

import _ from 'lodash';
import createCanvas from './create-canvas.js';


const canvas = createCanvas();
if (canvas) {

  canvas.setResolution();

  // The code below is temporary.
  // Only for checking the canvas element.
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#3C3F44';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.moveTo(canvas.width - 10, canvas.height - 10);
  ctx.lineTo(10, 10);
  ctx.stroke();

}
