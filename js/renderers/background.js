const BackgroundRenderer = {
  ctx: null,
  bgImages: {
    'airport': 'images/bg_airport.jpg',
    'office': 'images/bg_office.jpg',
    'office_canteen': 'images/bg_office_canteen.jpg',
    'office_desk': 'images/bg_office_desk.jpg',
    'office_desk_night': 'images/bg_office_desk_night.jpg',
    'apartment': 'images/bg_apartment.jpg',
    'apartment_night': 'images/bg_apartment_night.jpg',
    'bus': 'images/bg_bus.jpg',
    'hotel_room': 'images/bg_hotel_room.jpg',
  },
  imageCache: {},
  preloadedImages: {},
  
  init() {
    if (DOM.bgCanvas) {
      this.ctx = DOM.bgCanvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }
  },
  
  resize() {
    DOM.bgCanvas.width = window.innerWidth;
    DOM.bgCanvas.height = window.innerHeight;
  },
  
  setPreloadedImages(images) {
    this.preloadedImages = images;
  },
  
  draw(id) {
    if (!this.ctx) return;
    const w = DOM.bgCanvas.width;
    const h = DOM.bgCanvas.height;
    this.ctx.clearRect(0, 0, w, h);
    
    // 尝试使用预加载的图片
    if (this.tryDrawPreloadedImage(id, w, h)) {
      return;
    }
    
    // 尝试加载jpg图片
    const imgPath = this.bgImages[id];
    if (imgPath) {
      this.loadAndDrawImage(imgPath, w, h, id);
      return;
    }
    
    // 默认渐变背景
    this.drawGradient(id, w, h);
  },
  
  tryDrawPreloadedImage(id, w, h) {
    // 根据场景ID查找预加载的图片
    const preloadIdMap = {
      'airport': 'bg_airport',
      'office': 'bg_office',
      'office_canteen': 'bg_office_canteen',
      'office_desk': 'bg_office_desk',
      'office_desk_night': 'bg_office_desk_night',
      'apartment': 'bg_apartment',
      'apartment_night': 'bg_apartment_night',
      'bus': 'bg_bus',
      'hotel_room': 'bg_hotel_room',
    };
    
    const preloadId = preloadIdMap[id];
    if (preloadId && this.preloadedImages[preloadId]) {
      this.ctx.drawImage(this.preloadedImages[preloadId], 0, 0, w, h);
      return true;
    }
    return false;
  },
  
  loadAndDrawImage(imgPath, w, h, fallbackId) {
    // 检查缓存
    if (this.imageCache[imgPath]) {
      this.ctx.drawImage(this.imageCache[imgPath], 0, 0, w, h);
      return;
    }
    
    const img = new Image();
    
    img.onload = () => {
      this.imageCache[imgPath] = img;
      this.ctx.drawImage(img, 0, 0, w, h);
    };
    
    img.onerror = () => {
      console.log(`Background image not found: ${imgPath}, using gradient fallback`);
      this.drawGradient(fallbackId, w, h);
    };
    
    img.src = imgPath;
  },
  
  drawGradient(id, w, h) {
    if (id === 'airport') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#1a2840');
      sky.addColorStop(1, '#3a4860');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'office') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#1a1f35');
      sky.addColorStop(1, '#2a3050');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'office_canteen') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#2a2535');
      sky.addColorStop(1, '#3a3545');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'office_desk') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#151528');
      sky.addColorStop(1, '#252538');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'office_desk_night') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0a0a15');
      sky.addColorStop(1, '#1a1a25');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'apartment') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#1a1025');
      sky.addColorStop(1, '#2a2035');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'apartment_night') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0a0515');
      sky.addColorStop(1, '#1a1525');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'bus') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#151020');
      sky.addColorStop(1, '#252030');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'hotel_room') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#1a1528');
      sky.addColorStop(1, '#2a2538');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0a0a1e');
      sky.addColorStop(1, '#2a4068');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    }
  }
};
