# Starship battle
A computer game similar to those from the '90s.

This project is developed using
<a href="https://webpack.js.org/" target="blank">webpack</a> and
<a href="https://babeljs.io/" target="blank">babel</a>.
There are npm scripts in the package.json file. To bundle the development version, run `npm start`.

This documentation is generated by
<a href="https://github.com/jsdoc2md/jsdoc-to-markdown" target="blank">jsdoc-to-markdown</a>.
Run `npm run docs` to update it.

## Code documentation:

## Modules

<dl>
<dt><a href="#module_create-canvas">create-canvas</a></dt>
<dd><p>Adds a canvas element to the HTML document.</p>
</dd>
<dt><a href="#module_index">index</a></dt>
<dd><p>This is the main module.</p>
</dd>
</dl>

<a name="module_create-canvas"></a>

## create-canvas
Adds a canvas element to the HTML document.


* [create-canvas](#module_create-canvas)
    * [~createCanvas()](#module_create-canvas..createCanvas) ⇒ <code>Object</code>
    * [~setResolution(res)](#module_create-canvas..setResolution)

<a name="module_create-canvas..createCanvas"></a>

### create-canvas~createCanvas() ⇒ <code>Object</code>
Finds a div element with the id placeholderId from config.json.
Creates a canvas element and replaces the found div with it.
Adds the `setResolution` method to the canvas object.

**Kind**: inner method of [<code>create-canvas</code>](#module_create-canvas)  
**Returns**: <code>Object</code> - a reference to the canvas object  
<a name="module_create-canvas..setResolution"></a>

### create-canvas~setResolution(res)
Changes the `width` and` height` attributes of the canvas element.

**Kind**: inner method of [<code>create-canvas</code>](#module_create-canvas)  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>Object</code> | contains two properties of Number type: `w` - width of the canvas element, `h` - height of the canvas element. |

<a name="module_index"></a>

## index
This is the main module.

**Requires**: <code>module:./src/create-canvas.js</code>  

* * *

## License

MIT

Copyright (c) 2020 dneldik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.