const GameState = {
  currentScene: null,
  currentLineIndex: 0,
  isTyping: false,
  typeTimer: null,
  inChoice: false,
  ended: false,
  currentCity: null,
  
  reset() {
    this.currentScene = null;
    this.currentLineIndex = 0;
    this.isTyping = false;
    this.typeTimer = null;
    this.inChoice = false;
    this.ended = false;
    this.currentCity = null;
  }
};
