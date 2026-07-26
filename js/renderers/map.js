const MapRenderer = {
  chart: null,
  cities: [
    { id: 'beijing', name: '北京', coord: [116.46, 39.92] },
    { id: 'shenzhen', name: '深圳', coord: [114.07, 22.62] },
  ],
  
  init() {
    if (!DOM.mapContainer) return;
    
    this.chart = echarts.init(DOM.mapContainer);
    
    window.addEventListener('resize', () => {
      if (this.chart) this.chart.resize();
    });
    
    this.bindEvents();
    this.draw();
  },
  
  draw() {
    if (!this.chart) return;
    
    const option = {
      backgroundColor: '#080c16',
      geo: {
        map: 'china',
        roam: false,
        zoom: 1.2,
        center: [104.114129, 37.550339],
        label: {
          show: true,
          color: '#a0a8c0',
          fontSize: 10,
        },
        itemStyle: {
          areaColor: '#1a2840',
          borderColor: '#3a5070',
          borderWidth: 1,
        },
        emphasis: {
          itemStyle: {
            areaColor: '#2a3850',
          },
          label: {
            color: '#fff',
          },
        },
      },
      series: [
        {
          name: '城市',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: this.cities.map(city => ({
            name: city.name,
            value: city.coord,
            cityId: city.id,
          })),
          symbol: 'circle',
          symbolSize: 16,
          itemStyle: {
            color: '#ff4444',
            borderColor: '#fff',
            borderWidth: 2,
          },
          emphasis: {
            itemStyle: {
              color: '#ff6b6b',
              borderWidth: 3,
              shadowBlur: 20,
              shadowColor: 'rgba(255, 70, 70, 0.6)',
            },
            label: {
              show: true,
              formatter: '{b}',
              position: 'bottom',
              color: '#ff6b6b',
              fontSize: 14,
              fontWeight: 'bold',
            },
          },
        },
      ],
    };
    
    this.chart.setOption(option);
  },
  
  bindEvents() {
    if (!this.chart) return;
    
    this.chart.on('click', (params) => {
      if (params.seriesName === '城市' && params.data && params.data.cityId) {
        const cityName = params.data.name;
        GameManager.confirmCityStory(params.data.cityId, cityName);
      }
    });
  },
  
  dispose() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
    if (DOM.mapContainer) {
      DOM.mapContainer.innerHTML = '';
      DOM.mapContainer.style.background = 'transparent';
    }
    const container = DOM.container;
    const canvases = container.querySelectorAll('canvas');
    canvases.forEach(c => {
      if (c.id !== 'bg-canvas' && c.id !== 'char-canvas') {
        c.remove();
      }
    });
  },
};
