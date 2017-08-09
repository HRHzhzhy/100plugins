class Turntable {
  constructor(el = '.turntable', options) {
    this.options = {
      ...Turntable.DEFAULTS,
      ...options
    };

    this.config = {
      el: el instanceof Element ? el : document.querySelector(el),
      elLeft: 0,
      eltop: 0,
      elWidth: 0,
      elHeidth: 0,
      triggerType: ['hover', 'scroll'],
      imagesLoad: [],
      className: '__turntable__'
    };

    this._eventBind = this._eventBind.bind(this);
    this._eventHover = this._eventHover.bind(this);
    this._eventScroll = this._eventScroll.bind(this);

    this._init();
  }

  static get DEFAULTS() {
    return {
      images: [''],
      trigger: 'hover',
      throttle: 100
    };
  }

  _init() {
    this._creatDom();
  }

  _creatDom() {
    this.config.el.classList.add(this.config.className);
    this.config.elLeft = this.config.el.getBoundingClientRect().left;
    this.config.elTop = this.config.el.getBoundingClientRect().top;
    this.config.elWidth = +this._getStyle(this.config.el, 'width').replace(/px/, '');
    this.config.elHeidth = +this._getStyle(this.config.el, 'height').replace(/px/, '');
    this.options.images.map(url => {
      this._preload(url);
    });
  }

  _preload(url) {
    let self = this;
    let img = new Image();
    img.src = url;
    img.onload = function() {
      self.config.imagesLoad.push(url);
      self._throttle(self._eventBind, self.options.throttle); //节流
    };
  }

  _eventBind(){
    this._setImg(this.config.imagesLoad[0]);
    if(this.options.trigger === 'hover'){
      this.config.el.addEventListener('mousemove', this._eventHover);
    } else if (this.options.trigger === 'scroll') {
      this._eventScroll();
      window.addEventListener('scroll', this._eventScroll);
    } else {
      throw new TypeError(`Turntable required trigger attributes: ${this.config.triggerType.join(',')}`);
    }
  }

  _eventHover(event){
    let ImgIndex = Math.floor((event.clientX - this.config.el.offsetLeft) / (this.config.elWidth / this.config.imagesLoad.length));
    (ImgIndex <= this.config.imagesLoad.length - 1) && this._setImg(this.config.imagesLoad[ImgIndex]);
  }

  _eventScroll(){
    let ImgIndex = Math.floor(this._screenY() / ((document.body.offsetHeight - window.innerHeight) / this.config.imagesLoad.length));
    (ImgIndex <= this.config.imagesLoad.length - 1) && this._setImg(this.config.imagesLoad[ImgIndex]);
  }

  _setImg(src){
    if(this.config.imgDom){
      this.config.imgDom.src = src;
    } else {
      this.config.el.insertAdjacentHTML('beforeend', `<img class="${this.config.className}img" src="${src}">`);
      this.config.imgDom = this.config.el.querySelector(`.${this.config.className}img`);
    }
  }

  /**
  * ================================== PUBLIC METHODS ==================================
  */

  destory() {
    this.config.el.classList.remove(this.config.className);
    this.config.imgDom.parentNode.removeChild(this.config.imgDom);
    if(this.options.trigger === 'hover'){
      this.config.el.removeEventListener('mousemove', this._eventHover);
    } else if (this.options.trigger === 'scroll') {
      window.removeEventListener('scroll', this._eventScroll);
    }
  }

  /**
  * ================================== HELPER ==================================
  */

  _throttle(method, time) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function() {
      method();
    }, time);
  }

  _getStyle(el, attr) {
    if (el && el.currentStyle) {
      return el.currentStyle[attr]
    } else {
      return window.getComputedStyle(el)[attr]
    }
  }

  _screenY() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    } else {
      return (document.documentElement ||
        document.body.parentNode ||
        document.body).scrollTop;
    }
  }

}

window.Turntable = Turntable;
module.exports = Turntable;