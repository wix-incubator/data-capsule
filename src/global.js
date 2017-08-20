/* global window */
'use strict';
const dataCapsuleTools = require('./index');

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;
