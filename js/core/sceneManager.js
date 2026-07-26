const SceneManager = {
  show(sceneName) {
    DOM.titleScreen.classList.remove('active');
    DOM.mapScreen.classList.remove('active');
    DOM.dialogueBox.classList.remove('active');
    DOM.endingScreen.classList.remove('active');
    
    switch(sceneName) {
      case 'title': DOM.titleScreen.classList.add('active'); break;
      case 'map': DOM.mapScreen.classList.add('active'); break;
      case 'dialogue': DOM.dialogueBox.classList.add('active'); break;
      case 'ending': DOM.endingScreen.classList.add('active'); break;
    }
  },
  
  showDialogue(show) {
    if (show) DOM.dialogueBox.classList.add('active');
    else DOM.dialogueBox.classList.remove('active');
  }
};
