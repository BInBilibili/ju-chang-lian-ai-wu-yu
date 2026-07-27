const CharacterRenderer = {
  charImages: {
    'yaner': 'images/嫣儿.png',
    'yaner_happy': 'images/嫣儿_开心.png',
    'yaner_shy': 'images/嫣儿_害羞.png',
    'yaner_surprised': 'images/嫣儿_惊讶.png',
    'yaner_excited': 'images/嫣儿_兴奋.png',
    'yaner_focused': 'images/嫣儿_专注.png',
    'yaner_touched': 'images/嫣儿_感动.png',
    'yaner_crying': 'images/嫣儿_哭泣.png',
    'yaner_tired': 'images/嫣儿_疲惫.png',
    'yaner_shocked': 'images/嫣儿_震惊.png',
    'yaner_grateful': 'images/嫣儿_感激.png',
    'xuye': 'images/虚叶.png',
  },
  preloadedImages: {},
  
  init() {
    // CSS 中 .character-image 已设置 display: none，无需内联样式
  },

  setPreloadedImages(images) {
    this.preloadedImages = images;
  },

  draw(characterId, expression = 'neutral', grayscale = false) {
    if (!DOM.charImage) return;

    const expressionKey = `${characterId}_${expression}`;
    const expressionPath = this.charImages[expressionKey];
    const defaultPath = this.charImages[characterId];

    if (!defaultPath) {
      this.hide();
      return;
    }

    // 重置回退标志
    this._fallbackUsed = false;
    this._currentGrayscale = grayscale;

    // 设置 onload 回调（图片从网络加载完成时触发）
    DOM.charImage.onload = () => {
      DOM.charImage.classList.add('visible');
    };

    DOM.charImage.onerror = () => {
      if (!this._fallbackUsed) {
        this._fallbackUsed = true;
        console.log(`Expression image not found: ${DOM.charImage.src}, using default`);
        DOM.charImage.src = defaultPath;
      } else {
        console.error(`Default character image load failed: ${defaultPath}`);
        DOM.charImage.classList.remove('visible');
      }
    };

    // 决定使用哪张图片
    const imagePath = (expression !== 'neutral' && expressionPath) ? expressionPath : defaultPath;
    DOM.charImage.src = imagePath;
    // 直接添加 visible 类（图片已在缓存中时 onload 不会触发）
    DOM.charImage.classList.add('visible');
    DOM.charImage.style.filter = grayscale ? 'grayscale(100%)' : 'none';
  },
  
  hide() {
    if (DOM.charImage) {
      DOM.charImage.classList.remove('visible');
      DOM.charImage.onload = null;
      DOM.charImage.onerror = null;
    }
  }
};
