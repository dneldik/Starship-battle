/**
 * @module create-canvas
 * @description Adds a canvas element to the HTML document.
 * @exports { Function } createCanvas
 */

import { placeholderId } from './config.json';
import { noCanvas } from './data/messages.json';


/**
 * @function createCanvas
 * @description Finds a div element with the id placeholderId from config.json.
 * Creates a canvas element and replaces the found div with it.
 * Adds the `setResolution` method to the canvas object.
 * @returns { Object } a reference to the canvas object
 */
export function createCanvas() {

  const placeholder = document.querySelector(`div#${placeholderId}`);
  const canvas = document.createElement('canvas');

  // This condition checks that the browser supports the canvas element.
  // If not, it displays information from the noCanvas variable.
  if (!(canvas.getContext && canvas.getContext('2d'))) {
    placeholder.innerText = noCanvas;
    return false;
  }

  placeholder.parentElement.insertBefore(canvas, placeholder);
  placeholder.parentElement.removeChild(placeholder);

  /**
   * @function setResolution
   * @param { Object } res contains two properties of Number type:
   * `w` - width of the canvas element,
   * `h` - height of the canvas element.
   * @description Changes the `width` and` height` attributes of the canvas element.
   */
  canvas.setResolution = function (res) {

    const parentProps = window.getComputedStyle(this.parentElement);
    const parentWidth = parseInt(parentProps.getPropertyValue('width'));
    const parentHeight = parseInt(parentProps.getPropertyValue('height'));

    if (typeof res === 'object') {
      this.width = (typeof res.w === 'number' ? res.w : parentWidth);
      this.height = (typeof res.h === 'number' ? res.h : parentWidth);
    }
    else {
      this.width = parentWidth;
      this.height = parentHeight;
    }

  }

  return canvas;

};

export default createCanvas;
