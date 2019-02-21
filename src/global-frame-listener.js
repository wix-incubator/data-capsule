/* global window */

const dataCapsuleTools = require('./frame-listener');

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;
