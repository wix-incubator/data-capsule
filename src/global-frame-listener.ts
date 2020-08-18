/* global window */

import * as dataCapsuleTools from './frame-listener';

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;
