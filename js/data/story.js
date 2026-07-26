const StoryData = {
  beijing: {
    startScene: 'bj_start',
    scenes: {
      bj_start: {
        background: 'beijing_station',
        character: 'yaner',
        charExpression: 'happy',
        lines: [
          { speaker: '', text: '高铁缓缓驶入北京南站，窗外的城市轮廓在晨光中逐渐清晰。' },
          { speaker: '', text: '你拖着行李箱，按照入职指引走进了北京研发中心。' },
          { speaker: '嫣儿', text: '你好呀！我叫嫣儿，以后就是同事了，多多关照~' },
        ],
        next: 'bj_ending',
      },
      bj_ending: {
        background: 'office',
        character: 'yaner',
        charExpression: 'shy',
        lines: [
          { speaker: '', text: '你打量着眼前这个充满活力的女孩。' },
          { speaker: '嫣儿', text: '欢迎加入我们团队！有什么不懂的随时问我~' },
        ],
        ending: {
          title: '新的开始',
          type: '✦ TRUE ENDING ✦',
          text: '你和嫣儿的缘分，从这个晨光微熹的早晨开始。',
        },
      },
    },
  },
  
  shenzhen: {
    startScene: 'sz_start',
    scenes: {
      sz_start: {
        background: 'shenzhen_airport',
        character: 'xuye',
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '飞机降落在宝安机场，潮湿的暖风扑面而来。' },
          { speaker: '', text: '研发大楼的灯还亮着，已是深夜十一点。' },
          { speaker: '虚叶', text: '我叫虚叶，等你半天了。这边工位都给你收拾好了。' },
        ],
        next: 'sz_ending',
      },
      sz_ending: {
        background: 'office',
        character: 'xuye',
        charExpression: 'happy',
        lines: [
          { speaker: '', text: '她推了推眼镜，眼神中带着一丝疲惫，但更多的是热情。' },
          { speaker: '虚叶', text: '加班是常事，但大家都很Nice。一起加油！' },
        ],
        ending: {
          title: '深夜咖啡',
          type: '✦ TRUE ENDING ✦',
          text: '那杯深夜的咖啡，成了你们共同奋斗的起点。',
        },
      },
    },
  },
};
