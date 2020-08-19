/* global window */

const dataCapsuleToolsFrame = require('./frame');

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleToolsFrame;
}

module.exports = dataCapsuleToolsFrame;
