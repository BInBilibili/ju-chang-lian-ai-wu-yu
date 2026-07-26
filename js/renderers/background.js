const BackgroundRenderer = {
  ctx: null,
  bgImages: {
    'night_city': 'images/bg_night_city.jpg',
    'beijing_station': 'images/bg_beijing_station.jpg',
    'shenzhen_airport': 'images/bg_shenzhen_airport.jpg',
    'office': 'images/bg_office.jpg',
    'office_meeting': 'images/bg_office_meeting.jpg',
    'office_canteen': 'images/bg_office_canteen.jpg',
    'office_desk': 'images/bg_office_desk.jpg',
    'office_desk_night': 'images/bg_office_desk_night.jpg',
    'apartment': 'images/bg_apartment.jpg',
    'apartment_night': 'images/bg_apartment_night.jpg',
    'bus': 'images/bg_bus.jpg',
    'hotel_room': 'images/bg_hotel_room.jpg',
  },
  imageCache: {},
  
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
  
  draw(id) {
    if (!this.ctx) return;
    const w = DOM.bgCanvas.width;
    const h = DOM.bgCanvas.height;
    this.ctx.clearRect(0, 0, w, h);
    
    // 尝试加载jpg图片
    const imgPath = this.bgImages[id];
    if (imgPath) {
      this.loadAndDrawImage(imgPath, w, h, id);
      return;
    }
    
    // 默认渐变背景
    this.drawGradient(id, w, h);
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
    if (id === 'night_city') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0a0a1e');
      sky.addColorStop(0.5, '#1a2450');
      sky.addColorStop(1, '#2a4068');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
      
      const blds = [[0, 280], [60, 240], [140, 270], [200, 220], [280, 260], [350, 200], [430, 250], [500, 210]];
      blds.forEach((b, i) => {
        const bw = 75 + (i % 3) * 15;
        const bh = h * 0.7 - b[1];
        this.ctx.fillStyle = '#0a0e20';
        this.ctx.fillRect(b[0], b[1], bw + 10, bh);
      });
    } else if (id === 'beijing_station') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#2a3550');
      sky.addColorStop(1, '#6a7590');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'shenzhen_airport') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#1a2840');
      sky.addColorStop(1, '#3a4860');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'office') {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0f1430');
      sky.addColorStop(1, '#2a3460');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    } else if (id === 'office_meeting') {
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
