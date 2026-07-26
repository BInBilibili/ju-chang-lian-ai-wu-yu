const ResourceLoader = {
  resources: {
    scripts: [
      { id: 'echarts', src: 'js/echarts.min.js' },
      { id: 'china', src: 'js/china.js' },
    ],
    images: [
      { id: 'bg_airport', src: 'images/bg_airport.jpg' },
      { id: 'bg_office', src: 'images/bg_office.jpg' },
      { id: 'bg_office_canteen', src: 'images/bg_office_canteen.jpg' },
      { id: 'bg_office_desk', src: 'images/bg_office_desk.jpg' },
      { id: 'bg_office_desk_night', src: 'images/bg_office_desk_night.jpg' },
      { id: 'bg_apartment', src: 'images/bg_apartment.jpg' },
      { id: 'bg_apartment_night', src: 'images/bg_apartment_night.jpg' },
      { id: 'bg_bus', src: 'images/bg_bus.jpg' },
      { id: 'bg_hotel_room', src: 'images/bg_hotel_room.jpg' },
      { id: 'char_yaner', src: 'images/嫣儿.png' },
    ],
  },
  
  loadedCount: 0,
  totalCount: 0,
  progressCallback: null,
  completeCallback: null,
  loadedResources: {},
  
  init(progressCallback, completeCallback) {
    this.progressCallback = progressCallback;
    this.completeCallback = completeCallback;
    this.loadedCount = 0;
    this.totalCount = this.resources.scripts.length + this.resources.images.length;
    this.loadedResources = {};
  },
  
  start() {
    this.loadScripts();
    this.loadImages();
  },
  
  loadScripts() {
    this.resources.scripts.forEach(script => {
      this.loadScript(script.id, script.src);
    });
  },
  
  loadScript(id, src) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      this.loadedResources[id] = true;
      this.onResourceLoaded();
    };
    script.onerror = () => {
      console.error(`Failed to load script: ${src}`);
      this.loadedResources[id] = false;
      this.onResourceLoaded();
    };
    document.head.appendChild(script);
  },
  
  loadImages() {
    this.resources.images.forEach(img => {
      this.loadImage(img.id, img.src);
    });
  },
  
  loadImage(id, src) {
    const img = new Image();
    img.onload = () => {
      this.loadedResources[id] = img;
      this.onResourceLoaded();
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      this.loadedResources[id] = false;
      this.onResourceLoaded();
    };
    img.src = src;
  },
  
  onResourceLoaded() {
    this.loadedCount++;
    const progress = Math.round((this.loadedCount / this.totalCount) * 100);
    
    if (this.progressCallback) {
      this.progressCallback(progress, this.loadedCount, this.totalCount);
    }
    
    if (this.loadedCount >= this.totalCount) {
      if (this.completeCallback) {
        this.completeCallback(this.loadedResources);
      }
    }
  },
  
  getImage(id) {
    return this.loadedResources[id] || null;
  },
  
  isLoaded(id) {
    return !!this.loadedResources[id];
  }
};
