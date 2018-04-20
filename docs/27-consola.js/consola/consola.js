!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";function o(e){for(var t=e.length,n=[],o=0;o<t;o+=1)n.push(e[o]);return n}e.exports={select:function(e){return document.querySelector(e)},selectAll:function(e){return o((arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(e))},find:function(e,t){return o(e.querySelectorAll(t))},removeClass:function(e,t){e.classList.remove(t)},addClass:function(e,t){e.classList.add(t)},hasClass:function(e,t){return e.classList.contains(t)},removeElement:function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},closest:function(e,t){for(var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!n.call(e,t);)e=e.parentElement;return e},getStyle:function(e,t,n){var o=window.getComputedStyle(e,null).getPropertyValue(t);return n?Number.parseFloat(o,10):o},blur:function(){document.activeElement&&document.activeElement.blur()},insertHtml:function(e,t,n){var o=["beforebegin","afterbegin","beforeend","afterend"];if(!o.includes(t))throw new TypeError("'position' must be one of them: "+o.join("、"));e.insertAdjacentHTML(t,n)},setAttributes:function(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})},setStyles:function(e,t){Object.keys(t).forEach(function(n){e.style[n]=t[n]})}}},,function(e,t,n){},function(e,t){e.exports=function e(t){switch(typeof t){case"undefined":return"undefined";case"object":let n=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();switch(n){case"null":return"null";case"array":return"["+t.map(t=>e(t)).join(", ")+"]";case"object":return"{ "+Object.keys(t).map(n=>n+": "+e(t[n])).join(", ")+" }";default:try{return t.toString()}catch(e){return"[Unknown type: "+n+"]"}}default:return t.toString()}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=l(n(3));n(2);var i=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var u={},a={target:"body",position:"bottom",size:"300px",zIndex:99},s=["log","warn","error","info","debug"],f=void 0,d=void 0,p=void 0;u.creat=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e=r({},a,e),!document.querySelector(".consola-container"))return f=document.querySelector(e.target),i.default.insertHtml(f,"beforeend",'<div class="consola-container '+e.position+'" style="z-index: '+e.zIndex+"; "+("bottom"===e.position?"height":"width")+": "+e.size+'">\n      <div class="consola-tools">\n        <div class="consola-count">Console <span>0</span></div>\n        <div class="consola-clean">Clean</div>\n      </div>\n      <div class="consola-wrap"></div>\n    </div>'),d=f.querySelector(".consola-wrap"),p=f.querySelector(".consola-count span"),f.querySelector(".consola-clean").addEventListener("click",u.clean),function(e,t,n){var o=function(t){var o=e[t];e[t]=function(){o.apply(this,arguments),n(t,[].concat(Array.prototype.slice.call(arguments)))}},r=!0,c=!1,i=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){o(l.value)}}catch(e){c=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(c)throw i}}}(window.console,s,function(e,t){i.default.insertHtml(d,"beforeend",'<div data-method="'+e+'" class="method method-'+e+'">\n        <div class="method-icon"></div>\n        <div class="method-text">'+function(e){var t=document.createElement("div");e=e.map(function(e){return"object"===(void 0===e?"undefined":o(e))?(0,c.default)(e):void 0===e?"undefined":e}),null!=t.textContent?t.textContent=e:t.innerText=e;var n=t.innerHTML;return t=null,n}(t)+"</div>\n      </div>"),p.innerHTML=d.children.length,d.scrollTo(0,d.scrollHeight)}),u},u.clean=function(){return d.innerHTML="",p.innerHTML="0",u},window.consola=u,e.exports=u}])});