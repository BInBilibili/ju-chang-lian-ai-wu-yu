(function drawBackground() {
  const c = document.getElementById("bg-canvas");
  const ctx = c.getContext("2d");
  const W = 1280, H = 720;
  function resize() {
    const scale = Math.max(c.parentElement.clientWidth / W, c.parentElement.clientHeight / H);
    c.width = W; c.height = H;
  }
  resize();
  window.addEventListener("resize", resize);
  var sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, "#2d1b3d"); sky.addColorStop(0.3, "#4a2c5e");
  sky.addColorStop(0.55, "#8b4557"); sky.addColorStop(0.75, "#c46d5a");
  sky.addColorStop(0.9, "#e8956b"); sky.addColorStop(1, "#f0b87a");
  ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
  var stars = [[120,45],[340,32],[560,60],[780,25],[950,55],[1080,40],[200,80],[890,70],[1050,15],[420,50]];
  stars.forEach(function(s) {
    ctx.globalAlpha = 0.3 + Math.random() * 0.5;
    ctx.beginPath(); ctx.arc(s[0], s[1], 1.2, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 0.15 + Math.random() * 0.2;
    ctx.beginPath(); ctx.arc(s[0] + 2, s[1] + 2, 0.6, 0, Math.PI * 2); ctx.fill();
  });
  ctx.globalAlpha = 1;
  var buildings = [[0,320],[60,280],[140,310],[220,260],[310,300],[380,275],[470,315],[540,250],[620,295],[700,270],[780,310],[860,255],[940,290],[1020,265],[1100,300],[1180,280]];
  buildings.forEach(function(b, i) {
    var w = 70 + (i % 3) * 20;
    var h = H * 0.65 - b[1];
    ctx.fillStyle = "#1a112a"; ctx.fillRect(b[0], b[1], w + 10, h);
    for (var wy = b[1] + 20; wy < b[1] + h - 20; wy += 30) {
      for (var wx = b[0] + 8; wx < b[0] + w; wx += 20) {
        if (Math.random() > 0.3) {
          ctx.fillStyle = "rgba(255, 200, 150, " + (0.1 + Math.random() * 0.3) + ")";
          ctx.fillRect(wx, wy, 10, 14);
        }
      }
    }
  });
  var ground = ctx.createLinearGradient(0, H * 0.6, 0, H);
  ground.addColorStop(0, "#2a1e2e"); ground.addColorStop(0.5, "#1c1522"); ground.addColorStop(1, "#100c16");
  ctx.fillStyle = ground; ctx.fillRect(0, H * 0.6, W, H * 0.4);
  ctx.strokeStyle = "#3a2e44"; ctx.lineWidth = 2;
  for (var fx = 30; fx < W; fx += 60) { ctx.beginPath(); ctx.moveTo(fx, H * 0.58); ctx.lineTo(fx, H * 0.68); ctx.stroke(); }
  ctx.beginPath(); ctx.moveTo(0, H * 0.6); ctx.lineTo(W, H * 0.6);
  ctx.moveTo(0, H * 0.64); ctx.lineTo(W, H * 0.64); ctx.stroke();
  ctx.fillStyle = "#1a1025";
  ctx.beginPath(); ctx.moveTo(100, H * 0.6); ctx.quadraticCurveTo(80, H * 0.2, 60, H * 0.05);
  ctx.lineTo(140, H * 0.05); ctx.quadraticCurveTo(120, H * 0.2, 120, H * 0.6); ctx.fill();
  ctx.strokeStyle = "#1a1025"; ctx.lineWidth = 4;
  [[80,200,40,140],[110,180,180,120],[100,160,60,100],[130,160,190,100],[90,130,30,70],[120,130,170,70],[105,100,70,50]].forEach(function(br) {
    ctx.beginPath(); ctx.moveTo(br[0], br[1]); ctx.lineTo(br[2], br[3]); ctx.stroke();
  });
  var blossomColors = ["rgba(255,180,190,0.25)","rgba(255,200,210,0.2)","rgba(255,160,180,0.3)"];
  for (var i = 0; i < 80; i++) {
    var bx = 20 + Math.random() * 200, by = 20 + Math.random() * 180;
    if (Math.hypot(bx - 100, by - 100) < 120) {
      ctx.fillStyle = blossomColors[Math.floor(Math.random() * 3)];
      ctx.beginPath(); ctx.arc(bx, by, 3 + Math.random() * 4, 0, Math.PI * 2); ctx.fill();
    }
  }
  for (var i = 0; i < 30; i++) {
    ctx.fillStyle = "rgba(255, 190, 200, 0.15)";
    ctx.beginPath(); ctx.arc(Math.random() * W, Math.random() * H * 0.7, 2.5 + Math.random() * 3, 0, Math.PI * 2); ctx.fill();
  }
})();

function drawCharacter(expression) {
  var c = document.getElementById("char-canvas");
  var ctx = c.getContext("2d");
  var W = 480, H = 640;
  c.width = W; c.height = H;
  ctx.clearRect(0, 0, W, H);
  var cx = W / 2;

  // Hair back
  ctx.fillStyle = "#2c1a3a";
  ctx.beginPath();
  ctx.moveTo(cx - 90, 30);
  ctx.quadraticCurveTo(cx - 120, 200, cx - 100, 420);
  ctx.quadraticCurveTo(cx - 70, 520, cx - 40, 540);
  ctx.lineTo(cx + 40, 540);
  ctx.quadraticCurveTo(cx + 70, 520, cx + 100, 420);
  ctx.quadraticCurveTo(cx + 120, 200, cx + 90, 30);
  ctx.closePath(); ctx.fill();

  // Hair back highlight
  ctx.fillStyle = "#3d2650";
  ctx.beginPath();
  ctx.moveTo(cx - 60, 60);
  ctx.quadraticCurveTo(cx - 80, 250, cx - 60, 400);
  ctx.quadraticCurveTo(cx - 40, 500, cx - 20, 520);
  ctx.lineTo(cx + 10, 520);
  ctx.quadraticCurveTo(cx, 480, cx - 20, 350);
  ctx.quadraticCurveTo(cx - 10, 200, cx - 30, 60);
  ctx.closePath(); ctx.fill();

  // Body / Uniform
  ctx.fillStyle = "#f5f0f8";
  ctx.beginPath();
  ctx.moveTo(cx - 70, 220);
  ctx.quadraticCurveTo(cx - 30, 210, cx, 240);
  ctx.quadraticCurveTo(cx + 30, 210, cx + 70, 220);
  ctx.quadraticCurveTo(cx + 90, 380, cx + 80, 540);
  ctx.lineTo(cx - 80, 540);
  ctx.quadraticCurveTo(cx - 90, 380, cx - 70, 220);
  ctx.closePath(); ctx.fill();

  // Sailor collar
  ctx.fillStyle = "#1a2a4a";
  ctx.beginPath();
  ctx.moveTo(cx - 80, 215);
  ctx.quadraticCurveTo(cx - 50, 190, cx, 230);
  ctx.quadraticCurveTo(cx + 50, 190, cx + 80, 215);
  ctx.quadraticCurveTo(cx + 60, 290, cx + 65, 310);
  ctx.lineTo(cx, 270);
  ctx.lineTo(cx - 65, 310);
  ctx.quadraticCurveTo(cx - 60, 290, cx - 80, 215);
  ctx.closePath(); ctx.fill();

  // Red ribbon
  ctx.fillStyle = "#c44555";
  ctx.beginPath();
  ctx.moveTo(cx - 8, 250);
  ctx.quadraticCurveTo(cx - 30, 270, cx - 40, 300);
  ctx.quadraticCurveTo(cx - 15, 285, cx, 270);
  ctx.quadraticCurveTo(cx + 15, 290, cx + 40, 300);
  ctx.quadraticCurveTo(cx + 30, 270, cx + 8, 250);
  ctx.closePath(); ctx.fill();

  // Ribbon tails
  ctx.fillStyle = "#b33a4a";
  ctx.beginPath();
  ctx.moveTo(cx, 268);
  ctx.quadraticCurveTo(cx - 10, 320, cx - 25, 350);
  ctx.quadraticCurveTo(cx - 10, 340, cx + 5, 300);
  ctx.closePath(); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx, 268);
  ctx.quadraticCurveTo(cx + 10, 320, cx + 25, 350);
  ctx.quadraticCurveTo(cx + 10, 340, cx - 5, 300);
  ctx.closePath(); ctx.fill();

  // Dark slacks
  ctx.fillStyle = "#1a2238";
  ctx.beginPath();
  ctx.moveTo(cx - 55, 340);
  ctx.quadraticCurveTo(cx - 35, 335, cx, 340);
  ctx.quadraticCurveTo(cx + 35, 335, cx + 55, 340);
  ctx.quadraticCurveTo(cx + 70, 480, cx + 65, 540);
  ctx.lineTo(cx - 65, 540);
  ctx.quadraticCurveTo(cx - 70, 480, cx - 55, 340);
  ctx.closePath();
  ctx.fill();
    ctx.fillStyle = "#5a3a6a";
    ctx.beginPath(); ctx.arc(ex, ey + 2, 13, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#1a0a2a";
    ctx.beginPath(); ctx.arc(ex, ey + 2, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.arc(ex + 4, ey - 3, 4.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(ex - 3, ey - 5, 2, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#1a0a2a"; ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(ex - 22, ey - 6);
    ctx.quadraticCurveTo(ex, ey - 20, ex + 22, ey - 6);
    ctx.stroke();
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(ex - 16, ey + 8);
    ctx.quadraticCurveTo(ex, ey + 14, ex + 16, ey + 8);
    ctx.stroke();
  }
  drawEye(cx - 38, 130);
  drawEye(cx + 38, 130);

  // Eyebrows
  ctx.strokeStyle = "#2c1a3a"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx - 55, 102); ctx.quadraticCurveTo(cx - 38, 95, cx - 22, 100); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx + 55, 102); ctx.quadraticCurveTo(cx + 38, 95, cx + 22, 100); ctx.stroke();

  // Blush
  ctx.fillStyle = "rgba(255, 160, 160, 0.25)";
  ctx.beginPath(); ctx.ellipse(cx - 50, 160, 14, 8, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx + 50, 160, 14, 8, 0, 0, Math.PI * 2); ctx.fill();

  // Nose
  ctx.fillStyle = "rgba(200, 160, 150, 0.4)";
  ctx.beginPath();
  ctx.moveTo(cx, 152); ctx.lineTo(cx - 3, 160);
  ctx.quadraticCurveTo(cx, 163, cx + 3, 160);
  ctx.closePath(); ctx.fill();

  // Mouth by expression
  if (expression === "happy") {
    ctx.strokeStyle = "#c48080"; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 12, 175); ctx.quadraticCurveTo(cx, 190, cx + 12, 175);
    ctx.stroke();
  } else if (expression === "surprised") {
    ctx.fillStyle = "#c48080";
    ctx.beginPath(); ctx.arc(cx, 178, 7, 0, Math.PI * 2); ctx.fill();
  } else if (expression === "shy") {
    ctx.strokeStyle = "#c48080"; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 8, 175); ctx.quadraticCurveTo(cx, 182, cx + 8, 175);
    ctx.stroke();
  } else {
    ctx.strokeStyle = "#c48080"; ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(cx - 8, 175); ctx.quadraticCurveTo(cx, 184, cx + 8, 175);
    ctx.stroke();
  }

  // Hair accessory
  ctx.fillStyle = "#c44555";
  ctx.beginPath(); ctx.arc(cx + 55, 70, 8, 0, Math.PI * 2); ctx.fill();
}


var story = {
  start: "scene1",
  scenes: {
    scene1: {
      lines: [
        { speaker: "", text: "深夜的松山湖基地格外安静，研发大楼的灯火却还亮着大半。" },
        { speaker: "", text: "我伸了个懒腰，正准备关掉IDE下班时，隔壁工位传来一阵急促的键盘声。" },
        { speaker: "", text: "……这个点了，还有人在加班？而且还是这么猛的敲键盘速度？" },
        { speaker: "", text: "我好奇地探过头去——" },
        { speaker: "???", text: "啊……" },
        { speaker: "???", text: "你、你怎么还没走？吓我一跳……" },
      ],
      charExpr: null,
      next: "choice1",
    },
    choice1: {
      type: "choice",
      options: [
        { text: "「键盘声太响了，我还以为有人在打音游」", next: "scene2a" },
        { text: "「看你debug好一会儿了，遇到什么bug了？」", next: "scene2b" },
      ],
    },
    scene2a: {
      lines: [
        { speaker: "小菊", text: "噗……音游？我在改一个祖传代码的bug。" },
        { speaker: "小菊", text: "这个模块的代码比我的工龄都大，注释全是拼音缩写……" },
        { speaker: "", text: "她揉了揉眼睛，屏幕上密密麻麻的log让人看了就头疼。" },
        { speaker: "小菊", text: "我叫小菊，2012实验室的。你呢？" },
      ],
      charExpr: "shy",
      next: "choice2",
    },
    scene2b: {
      lines: [
        { speaker: "小菊", text: "观察力不错嘛……确实卡了半天了。" },
        { speaker: "小菊", text: "我叫小菊。这个模块的并发锁有问题，线上偶尔会丢数据。" },
        { speaker: "", text: "她皱着眉头盯着屏幕，但语气里没有抱怨，反而有种奇怪的兴奋感。" },
        { speaker: "小菊", text: "你要不要……帮我一起看看？" },
      ],
      charExpr: "neutral",
      next: "choice2",
    },
    choice2: {
      type: "choice",
      options: [
        { text: "「好，我来帮你看看锁的逻辑」", next: "scene3a" },
        { text: "「加班这么晚，先去茶水间喝杯咖啡吧」", next: "scene3b" },
      ],
    },
    scene3a: {
      lines: [
        { speaker: "小菊", text: "真的吗？太好了！" },
        { speaker: "", text: "她把椅子往旁边挪了挪，给我让出半个屏幕。" },
        { speaker: "", text: "窗外松山湖的夜色安静得像一幅画，而屏幕上的代码正在一点点变得清晰。" },
        { speaker: "", text: "我们并肩坐着，键盘的敲击声和偶尔的讨论声填满了空荡荡的楼层。" },
        { speaker: "小菊", text: "……谢谢你帮忙。" },
        { speaker: "小菊", text: "其实这个bug我已经看了三个晚上了，一直不好意思找别人问。" },
      ],
      charExpr: "happy",
      next: "choice3",
    },
    scene3b: {
      lines: [
        { speaker: "小菊", text: "咖啡……？" },
        { speaker: "", text: "她愣了一下，然后看了眼时间——凌晨一点半。" },
        { speaker: "小菊", text: "确实该休息一下了。这个bug不会跑的，但人会。" },
        { speaker: "", text: "她轻轻笑了笑，保存了代码，从工位上站起来。" },
        { speaker: "小菊", text: "有时候盯着屏幕太久，反而看不到问题在哪。" },
      ],
      charExpr: "shy",
      next: "choice3",
    },
    choice3: {
      type: "choice",
      options: [
        { text: "「明天晚上我还能过来帮你吗？」", next: "ending_good" },
        { text: "「不早了，我先下班了」", next: "ending_neutral" },
      ],
    },
    ending_good: {
      lines: [
        { speaker: "小菊", text: "……！" },
        { speaker: "", text: "她转过头看着我，眼睛里映着屏幕的微光。" },
        { speaker: "小菊", text: "当然好啊！明天我请你喝咖啡！" },
        { speaker: "小菊", text: "那就说定了，明天晚上，还是这个工位——" },
        { speaker: "", text: "她笑了，是那种程序员特有的、熬夜熬出来的、但发自内心的笑。" },
        { speaker: "", text: "松山湖的夜还很长，但有些东西，比bug更值得熬夜去修。" },
      ],
      charExpr: "happy",
      next: null,
      ending: {
        title: "约定",
        type: "✦ TRUE ENDING ✦",
        text: "那个凌晨的工位，成了你们两个人的秘密。
从此以后，每个加班的夜晚，都不再是一个人。",
      },
    },
    ending_neutral: {
      lines: [
        { speaker: "小菊", text: "嗯，明天见。" },
        { speaker: "", text: "她点了点头，重新坐回屏幕前，手指停在键盘上方。" },
        { speaker: "", text: "走廊很长，灯光把影子拉得很远。我回头看了一次，她的屏幕还亮着。" },
        { speaker: "", text: "但那天晚上的梦里，我好像又听到了那个窗口跳动的光标。" },
      ],
      charExpr: null,
      next: null,
      ending: {
        title: "余音",
        type: "✦ NORMAL ENDING ✦",
        text: "你记住了那个工位的位置，却没有再回去过。
有些bug注定要被留在某个加班的夜晚。",
      },
    },
  },
};


var game = {
  currentScene: null,
  currentLineIdx: 0,
  isTyping: false,
  typeTimer: null,
  inChoice: false,
  ended: false,
};

function $(sel) { return document.querySelector(sel); }
var nameTag = $("#name-tag");
var dialogueText = $("#dialogue-text");
var clickIndicator = $("#click-indicator");
var choicesLayer = $("#choices-layer");
var charCanvas = $("#char-canvas");
var titleScreen = $("#title-screen");
var endingScreen = $("#ending-screen");

function setCharacter(expr) {
  if (expr) {
    charCanvas.classList.remove("hidden-char");
    drawCharacter(expr);
  } else {
    charCanvas.classList.add("hidden-char");
  }
}

function startScene(sceneId) {
  game.currentScene = sceneId;
  game.currentLineIdx = 0;
  game.inChoice = false;
  hideChoices();
  advanceScene();
}

function advanceScene() {
  var scene = story.scenes[game.currentScene];
  if (!scene) return;
  if (scene.type === "choice") {
    showChoices(scene);
    return;
  }
  if (game.currentLineIdx >= scene.lines.length) {
    if (scene.ending) {
      showEnding(scene.ending);
    } else if (scene.next) {
      startScene(scene.next);
    }
    return;
  }
  if (scene.charExpr !== undefined) {
    setCharacter(scene.charExpr);
  }
  var line = scene.lines[game.currentLineIdx];
  showLine(line);
  game.currentLineIdx++;
}

function showLine(line) {
  if (line.speaker) {
    nameTag.textContent = line.speaker;
    nameTag.classList.remove("hidden-tag");
  } else {
    nameTag.classList.add("hidden-tag");
  }
  clickIndicator.style.display = "none";
  typeText(line.text, function() {
    clickIndicator.style.display = "block";
  });
}

function typeText(text, callback) {
  game.isTyping = true;
  if (game.typeTimer) clearTimeout(game.typeTimer);
  dialogueText.textContent = "";
  var i = 0;
  var speed = 40;
  function tick() {
    if (i < text.length) {
      dialogueText.textContent += text[i];
      i++;
      game.typeTimer = setTimeout(tick, speed);
    } else {
      game.isTyping = false;
      game.typeTimer = null;
      if (callback) callback();
    }
  }
  tick();
}

function showChoices(scene) {
  game.inChoice = true;
  choicesLayer.innerHTML = "";
  choicesLayer.classList.add("active");
  scene.options.forEach(function(opt, idx) {
    var btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", function() {
      if (game.inChoice) chooseOption(scene, idx);
    });
    choicesLayer.appendChild(btn);
    setTimeout(function() { btn.classList.add("show"); }, idx * 120);
  });
}

function hideChoices() {
  game.inChoice = false;
  choicesLayer.classList.remove("active");
}

function chooseOption(scene, idx) {
  hideChoices();
  var next = scene.options[idx].next;
  startScene(next);
}

function showEnding(ending) {
  game.ended = true;
  $("#ending-title").textContent = ending.title;
  $("#ending-type").textContent = ending.type;
  $("#ending-text").textContent = ending.text;
  endingScreen.classList.add("show");
}

function restart() {
  game.ended = false;
  game.currentScene = null;
  game.currentLineIdx = 0;
  game.isTyping = false;
  game.inChoice = false;
  if (game.typeTimer) clearTimeout(game.typeTimer);
  dialogueText.textContent = "";
  nameTag.classList.add("hidden-tag");
  setCharacter(null);
  hideChoices();
  endingScreen.classList.remove("show");
  titleScreen.classList.remove("hidden");
}

$("#start-btn").addEventListener("click", function() {
  titleScreen.classList.add("hidden");
  setTimeout(function() { startScene("start"); }, 400);
});

$("#restart-btn").addEventListener("click", restart);

$("#dialogue-box").addEventListener("click", function() {
  if (game.ended || game.inChoice) return;
  if (game.isTyping) {
    if (game.typeTimer) clearTimeout(game.typeTimer);
    game.isTyping = false;
    game.typeTimer = null;
    var scene = story.scenes[game.currentScene];
    if (scene && game.currentLineIdx > 0) {
      dialogueText.textContent = scene.lines[game.currentLineIdx - 1].text;
    }
    clickIndicator.style.display = "block";
    return;
  }
  advanceScene();
});

document.addEventListener("keydown", function(e) {
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    if (game.ended || game.inChoice) return;
    $("#dialogue-box").click();
  }
});

setCharacter(null);
