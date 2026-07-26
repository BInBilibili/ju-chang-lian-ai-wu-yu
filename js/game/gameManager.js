const GameManager = {
  init() {
    BackgroundRenderer.init();
    CharacterRenderer.init();
    
    DOM.startBtn.addEventListener('click', () => this.startGame());
    DOM.restartBtn.addEventListener('click', () => this.restartGame());
    DOM.dialogueBox.addEventListener('click', () => this.handleDialogueClick());
    
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        this.handleDialogueClick();
      }
    });
  },
  
  startGame() {
    GameState.reset();
    SceneManager.show('map');
    MapRenderer.init();
    BackgroundRenderer.draw('night_city');
    CharacterRenderer.hide();
  },
  
  restartGame() {
    GameState.reset();
    SceneManager.show('map');
    MapRenderer.dispose();
    MapRenderer.init();
    BackgroundRenderer.draw('night_city');
    CharacterRenderer.hide();
  },
  
  confirmCityStory(cityId, cityName) {
    DOM.confirmText.textContent = `是否就职${cityName}？`;
    DOM.confirmModal.classList.add('active');
    
    DOM.confirmYes.onclick = () => {
      DOM.confirmModal.classList.remove('active');
      this.startCityStory(cityId);
    };
    
    DOM.confirmNo.onclick = () => {
      DOM.confirmModal.classList.remove('active');
    };
  },
  
  startCityStory(cityId) {
    GameState.currentCity = cityId;
    const story = StoryData[cityId];
    if (story) {
      GameState.currentScene = story.startScene;
      GameState.currentLineIndex = 0;
      this.enterScene(story.startScene);
    } else {
      this.showBlackScreen();
    }
  },
  
  showBlackScreen() {
    SceneManager.show('dialogue');
    MapRenderer.dispose();
    
    BackgroundRenderer.draw('');
    CharacterRenderer.hide();
    DOM.nameTag.classList.remove('visible');
    DOM.dialogueText.textContent = '';
  },
  
  enterScene(sceneId) {
    const story = StoryData[GameState.currentCity];
    if (!story) return;
    
    const scene = story.scenes[sceneId];
    if (!scene) return;
    
    SceneManager.show('dialogue');
    MapRenderer.dispose();
    
    if (scene.background) {
      BackgroundRenderer.draw(scene.background);
    } else {
      BackgroundRenderer.draw('');
    }
    
    CharacterRenderer.hide();
    
    SceneManager.showDialogue(true);
    
    if (scene.lines && scene.lines.length > 0) {
      this.showLine(scene.lines[GameState.currentLineIndex], scene);
    }
  },
  
  showLine(line, scene) {
    if (line.speaker && scene.character) {
      DOM.nameTag.textContent = line.speaker;
      DOM.nameTag.classList.add('visible');
      CharacterRenderer.draw(scene.character, scene.charExpression || 'neutral');
    } else {
      DOM.nameTag.classList.remove('visible');
      CharacterRenderer.hide();
    }
    
    DOM.clickIndicator.style.display = 'none';
    Typewriter.type(line.text, () => {
      DOM.clickIndicator.style.display = 'block';
    });
  },
  
  handleDialogueClick() {
    if (GameState.ended) return;
    
    if (GameState.isTyping) {
      Typewriter.skip();
      const story = StoryData[GameState.currentCity];
      if (story) {
        const scene = story.scenes[GameState.currentScene];
        if (scene && scene.lines && GameState.currentLineIndex < scene.lines.length) {
          DOM.dialogueText.textContent = scene.lines[GameState.currentLineIndex].text;
        }
      }
      DOM.clickIndicator.style.display = 'block';
      return;
    }
    
    this.advanceScene();
  },
  
  advanceScene() {
    const story = StoryData[GameState.currentCity];
    if (!story) return;
    
    const scene = story.scenes[GameState.currentScene];
    if (!scene) return;
    
    // 如果是选项场景，显示选项
    if (scene.choices) {
      this.showChoices(scene);
      return;
    }
    
    GameState.currentLineIndex++;
    
    if (GameState.currentLineIndex >= scene.lines.length) {
      if (scene.ending) {
        this.showEnding(scene.ending);
        return;
      }
      
      if (scene.next) {
        GameState.currentScene = scene.next;
        GameState.currentLineIndex = 0;
        this.enterScene(scene.next);
        return;
      }
      
      this.restartGame();
      return;
    }
    
    this.showLine(scene.lines[GameState.currentLineIndex], scene);
  },
  
  showChoices(scene) {
    DOM.choicesLayer.innerHTML = '';
    
    scene.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice.text;
      btn.onclick = () => {
        DOM.choicesLayer.classList.remove('active');
        GameState.currentScene = choice.next;
        GameState.currentLineIndex = 0;
        this.enterScene(choice.next);
      };
      DOM.choicesLayer.appendChild(btn);
    });
    
    DOM.choicesLayer.classList.add('active');
  },
  
  showEnding(ending) {
    GameState.ended = true;
    SceneManager.showDialogue(false);
    CharacterRenderer.hide();
    
    DOM.endingTitle.textContent = ending.title;
    DOM.endingType.textContent = ending.type;
    DOM.endingText.textContent = ending.text;
    
    SceneManager.show('ending');
  }
};
