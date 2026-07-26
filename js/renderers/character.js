const CharacterRenderer = {
  charImages: {
    'yaner': 'images/嫣儿.png',
  },
  
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
  
  draw(characterId, expression = 'neutral', grayscale = false) {
    if (!DOM.charImage) return;
    
    const imagePath = this.charImages[characterId];
    if (!imagePath) {
      this.hide();
      return;
    }
    
    DOM.charImage.src = imagePath;
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
