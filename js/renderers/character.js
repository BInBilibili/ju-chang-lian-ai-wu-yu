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
    if (DOM.charImage) {
      DOM.charImage.style.display = 'none';
      
      DOM.charImage.onerror = function(e) {
        if (!this.src || this.src === window.location.href || this.src.indexOf('index.html') !== -1) {
          return;
        }
        console.error('Character image load failed:', e);
        console.error('Image src:', this.src);
      };
      
      DOM.charImage.onload = function() {
        this.classList.add('visible');
        this.style.display = 'block';
      };
    }
  },
  
  setPreloadedImages(images) {
    this.preloadedImages = images;
  },
  
  draw(characterId, expression = 'neutral', grayscale = false) {
    if (!DOM.charImage) return;
    
    // 优先查找带表情的图片
    const expressionKey = `${characterId}_${expression}`;
    let imagePath = this.charImages[expressionKey];
    
    // 如果没有带表情的图片，使用默认图片
    if (!imagePath) {
      imagePath = this.charImages[characterId];
    }
    
    if (!imagePath) {
      this.hide();
      return;
    }
    
    // 尝试使用预加载的图片
    const preloadId = characterId === 'yaner' ? 'char_yaner' : null;
    if (preloadId && this.preloadedImages[preloadId]) {
      DOM.charImage.src = this.preloadedImages[preloadId].src;
    } else {
      DOM.charImage.src = imagePath;
    }
    
    DOM.charImage.classList.add('visible');
    
    DOM.charImage.style.filter = grayscale ? 'grayscale(100%)' : 'none';
  },
  
  hide() {
    if (DOM.charImage) {
      DOM.charImage.classList.remove('visible');
      DOM.charImage.src = '';
    }
  }
};
