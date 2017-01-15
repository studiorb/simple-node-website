// The JavaScript
import { oneLog, oneInfo } from './modules/one'

import { deviceOrientation } from './modules/orientation'

oneLog('This is one Log')
oneInfo('This is one Info')

const toma = document.getElementById('toma')

if (toma) {
  toma.innerHTML = deviceOrientation()
}
