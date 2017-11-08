(function () {
'use strict';

function oneLog(msn) {
  return console.log(msn);
}

function oneInfo(msn) {
  return console.info(msn);
}

function deviceOrientation() {
  return window.matchMedia('(orientation:landscape)').matches ? 'landscape' : 'portrait';
}

// The JavaScript
oneLog('This is one Log');
oneInfo('This is one Info');

var toma = document.getElementById('toma');

if (toma) {
  toma.innerHTML = deviceOrientation();
}

}());
