/* global window */

import * as dataCapsuleTools from './frame';

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;
