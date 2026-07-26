const Typewriter = {
  speed: 40,
  
  type(text, callback) {
    GameState.isTyping = true;
    if (GameState.typeTimer) clearTimeout(GameState.typeTimer);
    DOM.dialogueText.textContent = '';
    
    let i = 0;
    const tick = () => {
      if (i < text.length) {
        DOM.dialogueText.textContent += text[i];
        i++;
        GameState.typeTimer = setTimeout(tick, this.speed);
      } else {
        GameState.isTyping = false;
        GameState.typeTimer = null;
        if (callback) callback();
      }
    };
    tick();
  },
  
  skip() {
    if (GameState.typeTimer) {
      clearTimeout(GameState.typeTimer);
      GameState.isTyping = false;
      GameState.typeTimer = null;
    }
  }
};
