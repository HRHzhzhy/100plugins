!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){"use strict";function n(t){for(var e=t.length,r=[],n=0;n<e;n+=1)r.push(t[n]);return r}t.exports={select:function(t){return document.querySelector(t)},selectAll:function(t){return n((arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(t))},find:function(t,e){return n(t.querySelectorAll(e))},removeClass:function(t,e){t.classList.remove(e)},addClass:function(t,e){t.classList.add(e)},hasClass:function(t,e){return t.classList.contains(e)},removeElement:function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},closest:function(t,e){for(var r=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t&&!r.call(t,e);)t=t.parentElement;return t},getStyle:function(t,e){return window.getComputedStyle(t,null).getPropertyValue(e)},blur:function(){document.activeElement&&document.activeElement.blur()},insertHtml:function(t,e,r){var n=["beforebegin","afterbegin","beforeend","afterend"];if(!n.includes(e))throw new TypeError("'position' must be one of them: "+n.join("、"));t.insertAdjacentHTML(e,r)}}},,function(t,e,r){},function(t,e,r){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();r(2);var i,a=(i=r(0))&&i.__esModule?i:{default:i},s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=n({},t.DEFAULTS,e),this.targets=Array.from(document.querySelectorAll("[data-magnifier]")).map(function(t){return{target:t,thumbImg:null,bigImg:null,tracker:null,zoom:null,loader:null,width:0,height:0,left:0,top:0,imgLoaded:!1,trackerSize:0,trackerLeft:0,trackerTop:0}}),this.transformProp=this._transformProp(),this._targetHover=this._targetHover.bind(this),this._init()}return o(t,[{key:"_init",value:function(){var t=this;this.targets.forEach(function(e,r){e.target.addEventListener("mousemove",t._targetHover.bind(t,r),!1),e.target.addEventListener("mouseout",t._targetOut.bind(t,r),!1)})}},{key:"_targetHover",value:function(t,e){var r=this,n=this.targets[t];n.target.getAttribute("data-magnifier-index")||(n.target.setAttribute("data-magnifier-index",t),this._creatDom(n),n.width=n.thumbImg.scrollWidth,n.height=n.thumbImg.scrollHeight);var o=this._getPointer(n.thumbImg,e);n.left=o.left,n.top=o.top,n.imgLoaded?(this._trackerEvent(n),this._zoomEvent(n)):(n.loader.style.display="block",this._imgLoad(n.bigImg).then(function(){n.imgLoaded=!0,n.loader.style.display="none",r._trackerEvent(n),r._zoomEvent(n)}))}},{key:"_targetOut",value:function(t,e){var r=this.targets[t];r.tracker.style.display=r.zoom.style.display="none",r.tracker.style.left=0,r.tracker.style.top=0}},{key:"_creatDom",value:function(t){var e=t.target.getAttribute("href");if(a.default.insertHtml(t.target,"beforeend",'<div class="magnifier-tracker"></div>'),a.default.insertHtml(t.target,"beforeend",'<div class="magnifier-zoom"><img src="'+e+'"></div>'),a.default.insertHtml(t.target,"beforeend",'<div class="magnifier-loader"></div>'),t.thumbImg=t.target.querySelector("img"),t.bigImg=t.target.querySelector(".magnifier-zoom img"),t.tracker=t.target.querySelector(".magnifier-tracker"),t.zoom=t.target.querySelector(".magnifier-zoom"),t.loader=t.target.querySelector(".magnifier-loader"),this.options.showTitle){var r=t.target.getAttribute("title");a.default.insertHtml(t.zoom,"beforeend",'<div class="magnifier-title">'+r+"</div>")}}},{key:"_trackerEvent",value:function(t){var e=t.trackerSize=Math.min(t.width,t.height)/5;t.tracker.style.width=t.tracker.style.height=e+"px",t.tracker.style.display=t.zoom.style.display="block";var r;r=t.left<=e/2?0:t.left>t.width-e/2?t.width-e:t.left-e/2;var n;n=t.top<=e/2?0:t.top>t.height-e/2?t.height-e:t.top-e/2,t.trackerLeft=r,t.tracker.style.left=r+"px",t.trackerTop=n,t.tracker.style.top=n+"px"}},{key:"_zoomEvent",value:function(t){t.zoom.style.width=t.zoom.style.height=this.options.size+"px";var e=0,r=0;"top"===this.options.position?(e=-(this.options.height+this.options.margin)+"px",r=0):"right"===this.options.position?(e=0,r=t.width+this.options.margin+"px"):"bottom"===this.options.position?(e=t.height+this.options.margin+"px",r=0):"left"===this.options.position&&(e=0,r=-(this.options.width+this.options.margin)+"px"),t.zoom.style.left=r,t.zoom.style.top=e;var n=this.options.size/t.trackerSize;t.bigImg.style.width=t.width*n+"px",t.bigImg.style[this.transformProp]="translate3d(-"+t.trackerLeft*n+"px, -"+t.trackerTop*n+"px, 0)"}},{key:"_getPointer",value:function(t,e){return{left:e.pageX-t.x,top:e.pageY-t.y}}},{key:"_imgLoad",value:function(t){var e=function(t){return!("naturalHeight"in t&&t.naturalHeight+t.naturalWidth===0)||t.width+t.height!==0};return new Promise(function(r,n){if(t.complete)return e(t)?r(t):n(t);t.addEventListener("load",function(){return e(t)?r(t):n(t)}),t.addEventListener("error",function(){return n(t)})})}},{key:"_transformProp",value:function(){return window.transformProp||function(){var t=document.createElement("div");if(null==t.style.transform){var e=["Webkit","Moz","ms"];for(var r in e)if(void 0!==t.style[e[r]+"Transform"])return e[r]+"Transform"}return"transform"}()}},{key:"destory",value:function(){var t=this;this.targets.forEach(function(e){e.target.removeEventListener("mousemove",t._targetHover,!1),e.target.removeEventListener("mouseout",t._targetOut,!1),e.target.removeAttribute("data-magnifier-index"),a.default.removeElement(e.tracker),a.default.removeElement(e.zoom),a.default.removeElement(e.loader)})}}],[{key:"DEFAULTS",get:function(){return{size:200,position:"right",margin:20,showTitle:!0}}}]),t}();window.Magnifier=s,t.exports=s}])});