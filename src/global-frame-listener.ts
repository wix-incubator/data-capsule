/* global window */

const dataCapsuleToolsFrameListeneer = require('./frame-listener');

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleToolsFrameListeneer;
}

module.exports = dataCapsuleToolsFrameListeneer;
