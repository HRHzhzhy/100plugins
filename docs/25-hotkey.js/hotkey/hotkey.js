!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){"use strict";navigator.userAgent.indexOf("Mac OS X");for(var n={backspace:8,tab:9,clear:12,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},r={},i=97;i<123;i++)n[String.fromCharCode(i)]=i-32;for(var u=48;u<58;u++)n[u-48]=u;for(var f=1;f<13;f++)n["f"+f]=f+111;for(var c=0;c<10;c++)n["numpad "+c]=c+96;for(var p in n)r[n[p]]=p;e.exports={keycode:n,keyrev:r,modprops:{metaKey:"command",altKey:"alt",ctrlKey:"ctrl",shiftKey:"shift"}}},function(e,t,o){"use strict";o.r(t),t.default=function(e){return e=e||Object.create(null),{on:function(t,o){(e[t]||(e[t]=[])).push(o)},off:function(t,o){e[t]&&e[t].splice(e[t].indexOf(o)>>>0,1)},emit:function(t,o){(e[t]||[]).slice().map(function(e){e(o)}),(e["*"]||[]).slice().map(function(e){e(t,o)})}}}},function(e,t,o){"use strict";var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=(n=o(1))&&n.__esModule?n:{default:n},u=o(0),f=(0,i.default)(),c=function(e,t){if("string"!=typeof e&&"number"!=typeof e)throw new TypeError("The first parameter required string or number type, but get "+(void 0===e?"undefined":r(e)));if("function"!=typeof t)throw new TypeError("The second parameter required function type, but get "+(void 0===t?"undefined":r(t)));e=String(e).toLowerCase().replace(/\s/g,""),f.on(e,t)},p=function(e){var t=String(e.keyCode),o=u.keyrev[t];if(!o)throw new TypeError("Unknown key: "+t);for(var n in u.modprops)o!==u.modprops[n]&&(t=e[n]?u.keycode[u.modprops[n]]+"+"+t:t,o=e[n]?u.modprops[n]+"+"+o:o);f.emit(o,{event:e,key:t,name:o}),f.emit(t,{event:e,key:t,name:o})};window.addEventListener("keydown",p),c.destroy=function(){return window.removeEventListener("keydown",p)},window.hotkey=e.exports=c}])});