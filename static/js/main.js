!function(){"use strict";function n(n){return console.log(n)}function o(n){return console.info(n)}function t(){return window.matchMedia("(orientation:landscape)").matches?"landscape":"portrait"}n("This is one Log"),o("This is one Info");var e=document.getElementById("toma");e&&(e.innerHTML=t())}();