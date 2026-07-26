const BackgroundRenderer = {
  ctx: null,
  
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
    } else {
      const sky = this.ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0a0a1e');
      sky.addColorStop(1, '#2a4068');
      this.ctx.fillStyle = sky;
      this.ctx.fillRect(0, 0, w, h);
    }
  }
};
