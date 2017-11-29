import './index.scss';

class Masonry {
  constructor(el = '.masonry-container', options) {
    this.options = {
      ...Masonry.DEFAULTS,
      ...options
    };

    this.config = {
      containerEl: el instanceof Element ? el : document.querySelector(el),
      columns: 0,
      containerWidth: 0,
      containerheight: 0,
      listEl: [],
      itemWidth: 0,
    };

    this._itemPos = this._itemPos.bind(this);
    this._init = this._init.bind(this);
    
    this._init();
    window.addEventListener('resize', e => {
      this._throttle(this._init, 100);
    });
  }

  static get DEFAULTS() {
    return {
      margin: 24,
      columns: 6,
      breakAt: {
        1200: 5,
        940: 3,
        520: 2,
        400: 1
      }
    };
  }

  _init() {
    this._initContainer();
    this._initList();
    this._itemSize();
  }

  /**
   * ================================== PRIVATE METHODS ==================================
   */

  _initContainer(){
    let bodyWidth = document.body.clientWidth;
    this.config.containerEl.style.position = 'relative';
    this.config.containerWidth = this.config.containerEl.clientWidth;
    if(bodyWidth > this.config.containerWidth){
      this.config.columns = this.options.columns;
    } else {
      this.config.containerWidth = bodyWidth - 10;
      let sizeList = Object.keys(this.options.breakAt).map(item => parseInt(item)).sort((a, b) => b - a);
      if(sizeList.length > 0){
        sizeList.forEach((item, index) => {
          let nextSize = sizeList[index + 1] || 0;
          if(bodyWidth <= sizeList[index] && bodyWidth > nextSize){
            this.config.columns = this.options.breakAt[item];
          }
        });
      } else {
        this.config.columns = this.options.columns;
      }
    }
  }

  // 初始化数组结构
  _initList(){
    this.config.listEl = [].slice.call(this.config.containerEl.children).map((target, index) => {
      return {
        index: index,
        target: target,
        imgLoad: false,
        top: 0,
        left: 0,
        height: 0
      }
    });
  }

  // 计算元素width、heidth和left
  _itemSize(){
    this.config.itemWidth = (this.config.containerWidth - this.options.margin * (this.config.columns - 1)) / this.config.columns;
    this.config.listEl.forEach((item, index) => {
      let rest = index % this.config.columns;
      let imgItem = item.target.querySelector('img');
      item.target.style.position = 'absolute';
      item.target.style.width = this.config.itemWidth + 'px';
      item.left = (this.config.itemWidth + this.options.margin) * rest;
      item.target.style.left = item.left + 'px';
      this._imgLoad(imgItem).then(() => {
        item.imgLoad = true;
        item.height = this._outerHeight(item.target);
        this._throttle(this._itemPos, 100);
      })
    })
  }

  // 计算元素top
  _itemPos(){
    this.config.listEl.forEach((item, index) => {
      if((index + 1) > this.config.columns){
        let i = 0;
        let top = 0;
        while((index - this.config.columns * ++i) >= 0){
          let addIndex = index - this.config.columns * i;
          top += this.config.listEl[addIndex].height;
        }
        item.top = top;
        item.target.style.top = top + 'px';
      } else {
        item.top = 0;
        item.target.style.top = '0px';
      }
    })
    this._containerHeight();
  }

  // 计算容器高度
  _containerHeight(){
    let list = [];
    this.config.listEl.forEach((item, index) => {
      let rest = index % this.config.columns;
      if(!list[rest]) list[rest] = 0;
      list[rest] += item.height;
    });
    this.config.containerheight = Math.max.apply(Math, list);
    this.config.containerEl.style.height = this.config.containerheight + 'px';
  }

  // 图片是否加载完成
  _imgLoad(image){
    const imageHasLoaded = (img) => !('naturalHeight' in img && img.naturalHeight + img.naturalWidth === 0) || img.width + img.height !== 0;    
    return new Promise((resolve, reject) => {
      if (image.complete) {
        if (!imageHasLoaded(image)) {
          return reject(image);
        }
        return resolve(image);
      }

      image.addEventListener('load', () => {
        if (imageHasLoaded(image)) {
          return resolve(image);
        }
        return reject(image);
      });

      image.addEventListener('error', () => {
        return reject(image);
      });
    });
  }


  /**
   * ================================== PUBLIC METHODS ==================================
   */


  /**
   * ================================== HELPER ==================================
   */

  // 获取dom样式
  _getStyle(element, property){
    return window.getComputedStyle(element, null).getPropertyValue(property);
  }

  _outerHeight(element){
    let arr = ['margin-top', 'margin-bottom', 'border-top-width', 'border-bottom-width'];
    let outerHeight = element.offsetHeight;
    return arr.reduce((total, item) => {
      return total + parseInt(this._getStyle(element, item))
    }, element.offsetHeight);
  }

  _throttle(method, time) {
    clearTimeout(method.tId);
    method.tId = setTimeout(() => {
      method();
    }, time);
  }

}

window.Masonry = Masonry;
module.exports = Masonry;