/* global window */

import * as dataCapsuleTools from './index';

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;
