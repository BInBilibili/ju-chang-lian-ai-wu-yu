const StoryData = {
  beijing: {
    startScene: 'bj_ch1_start',
    scenes: {
      // ========== 第一章：入职即传说 ==========
      bj_ch1_start: {
        background: 'office',
        character: null,
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '周一早会，主管说部门来了一位新人。' },
          { speaker: '', text: '你趴在桌上打哈欠，对这种例行介绍毫无期待。' },
          { speaker: '', text: '直到门被推开——' },
          { speaker: '', text: '进来的姑娘戴着一顶夸张的大红色帽子，穿着蓝白相间的宽大袍子。' },
          { speaker: '', text: '她手里还举着一把装饰用的"要石"道具。' },
          { speaker: '', text: '她走到台前，清了清嗓子，开口就是：' },
          { speaker: '', text: '「教えて 教えてよ——」' },
          { speaker: '', text: '《unravel》的前奏一响，全办公室的人都醒了。' },
          { speaker: '', text: '她全开麦，从低音到高音一路飚上去，气息稳得像专业歌手。' },
          { speaker: '', text: '唱到副歌时整个会议室都在震。' },
          { speaker: '', text: '她唱完之后鞠了个躬："大家好，我叫嫣儿，以后请多关照。"' },
          { speaker: '', text: '掌声雷动。你坐在角落里，目瞪口呆地看着她，手里的咖啡凉了都没注意到。' },
        ],
        next: 'bj_ch1_choice',
      },
      
      bj_ch1_choice: {
        background: 'office',
        character: 'yaner',
        charExpression: 'happy',
        choices: [
          { text: '主动找她搭话', next: 'bj_ch1_lunch_high' },
          { text: '远远看着', next: 'bj_ch1_lunch_normal' },
          { text: '觉得她太怪不想接近', next: 'bj_ch1_lunch_low' },
        ],
      },
      
      bj_ch1_lunch_high: {
        background: 'office_canteen',
        character: 'yaner',
        charExpression: 'excited',
        lines: [
          { speaker: '', text: '午休时，你主动端着饭盒走向那个戴着红色帽子的女孩。' },
          { speaker: '嫣儿', text: '啊！你来了！你是第一个主动找我说话的人！' },
          { speaker: '嫣儿', text: '我叫嫣儿！你叫什么？你是做什么的呀？运营？策划？' },
          { speaker: '嫣儿', text: '你喜欢东方吗？你看Vtuber吗？' },
          { speaker: '', text: '她抛出一连串问题，眼睛亮晶晶的。' },
          { speaker: '', text: '你有点招架不住，但莫名觉得她很可爱。' },
        ],
        next: 'bj_ch1_reveal',
      },
      
      bj_ch1_lunch_normal: {
        background: 'office_canteen',
        character: 'yaner',
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '午休时，嫣儿端着饭盒坐到你对面的空位上。' },
          { speaker: '嫣儿', text: '你好呀！你叫什么？' },
          { speaker: '', text: '「……[主角]。」' },
          { speaker: '嫣儿', text: '[主角]！你是做什么的呀？' },
        ],
        next: 'bj_ch1_reveal',
      },
      
      bj_ch1_lunch_low: {
        background: 'office_canteen',
        character: null,
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '午休时，你刻意避开了那个戴着红色帽子的女孩。' },
          { speaker: '', text: '她太怪了，你不想和这种人有交集。' },
          { speaker: '', text: '但不知为何，你总是忍不住偷偷瞄向她的方向。' },
        ],
        next: 'bj_ch1_reveal',
      },
      
      bj_ch1_reveal: {
        background: 'office_canteen',
        character: 'yaner',
        charExpression: 'surprised',
        lines: [
          { speaker: '', text: '无论如何，你们聊到了Vtuber。' },
          { speaker: '嫣儿', text: '你看Vtuber吗？看谁看谁？' },
          { speaker: '', text: '「……星见由岐。」' },
          { speaker: '', text: '嫣儿的表情有一瞬间的停顿——快到你以为是错觉。' },
          { speaker: '嫣儿', text: '啊，那个打魂系的！我知道她！她好强的！' },
          { speaker: '', text: '你点头。你不知道的是，坐在你对面大口扒饭的这个人……' },
          { speaker: '', text: '就是昨天晚上直播被女武神杀了三十四次的那个声音的主人。' },
        ],
        next: 'bj_ch2_start',
      },
      
      // ========== 第二章：工位间的碎片 ==========
      bj_ch2_start: {
        background: 'office_desk',
        character: 'yaner',
        charExpression: 'happy',
        lines: [
          { speaker: '', text: '和嫣儿熟起来之后，你的华为日常变得热闹了很多。' },
          { speaker: '', text: '她会戴着天子的帽子在工位上写方案。' },
          { speaker: '', text: '被主管吐槽"嫣儿你能不能正常点"之后，她从善如流地换成了恋恋的帽子。' },
          { speaker: '嫣儿', text: '那我换个低调的~' },
          { speaker: '', text: '午休时她经常拉着你聊二次元梗，像一本行走的ACG百科全书。' },
          { speaker: '', text: '但你更在意的，是那些只有你才会注意到的细节——' },
        ],
        next: 'bj_ch2_details',
      },
      
      bj_ch2_details: {
        background: 'office_desk_night',
        character: 'yaner',
        charExpression: 'focused',
        lines: [
          { speaker: '', text: '- 她打工作电话时偶尔会冒出"前有陷阱"这种魂系黑话，对方一头雾水。' },
          { speaker: '', text: '- 有回加班到很晚，她以为你睡着了，摘下耳机玩手机游戏——' },
          { speaker: '', text: '你瞄了一眼屏幕，是《黑暗之魂3》，她正在无伤打古达。' },
          { speaker: '', text: '手指操作快得像残影。' },
          { speaker: '', text: '- 她哼歌的调子，偶尔是魂系的BGM。' },
          { speaker: '', text: '- 她的华为工牌挂绳上，挂着一个极小的小黑魂玩偶。' },
          { speaker: '', text: '不仔细看根本注意不到。' },
        ],
        next: 'bj_ch2_question',
      },
      
      bj_ch2_question: {
        background: 'office_canteen',
        character: 'yaner',
        charExpression: 'shy',
        choices: [
          { text: '当场问她"你是不是星见由岐"', next: 'bj_ch2_direct' },
          { text: '默默观察，继续收集证据', next: 'bj_ch2_observe' },
          { text: '帮她掩饰，假装没看到', next: 'bj_ch2_help' },
        ],
      },
      
      bj_ch2_direct: {
        background: 'office_canteen',
        character: 'yaner',
        charExpression: 'shocked',
        lines: [
          { speaker: '', text: '"嫣儿，你是不是星见由岐？"' },
          { speaker: '', text: '她筷子夹着的鸡块掉回碗里。' },
          { speaker: '嫣儿', text: '……哈？！你、你在说什么啊！' },
          { speaker: '', text: '她的反应过于激烈，脸瞬间涨红。' },
          { speaker: '嫣儿', text: '我、我怎么可能是那个Vtuber！你别乱说！' },
          { speaker: '', text: '她匆匆扒完饭就跑了，之后几天都刻意避开你。' },
          { speaker: '', text: '你意识到自己操之过急了。' },
        ],
        next: 'bj_ch3_start',
      },
      
      bj_ch2_observe: {
        background: 'office_canteen',
        character: 'yaner',
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '某天午休，你故意问她："嫣儿，你打魂系吗？"' },
          { speaker: '', text: '她筷子夹着的鸡块掉回碗里。' },
          { speaker: '嫣儿', text: '……啊？我？我手残，打不了那种。' },
          { speaker: '', text: '"可是你上次说你知道星见由岐。"' },
          { speaker: '嫣儿', text: '看直播学的不行吗！' },
          { speaker: '', text: '她耳朵红了，使劲扒饭。' },
          { speaker: '', text: '你看着她泛红的耳尖，心里已经有了七八分笃定——' },
          { speaker: '', text: '星见由岐每次直播被观众夸"好强"的时候，皮套下的中之人也是耳朵先红。' },
        ],
        next: 'bj_ch3_start',
      },
      
      bj_ch2_help: {
        background: 'office_canteen',
        character: 'yaner',
        charExpression: 'grateful',
        lines: [
          { speaker: '', text: '你假装没看到她玩魂系的事。' },
          { speaker: '', text: '有次主管路过她工位，看到她手机屏幕上的游戏画面。' },
          { speaker: '主管', text: '嫣儿，上班时间打游戏？' },
          { speaker: '你', text: '哦，那是我借她玩的，我通关了让她试试。' },
          { speaker: '', text: '你替她圆了过去。' },
          { speaker: '', text: '嫣儿看向你，眼神里有感激，也有一丝复杂。' },
          { speaker: '嫣儿', text: '……谢了。' },
        ],
        next: 'bj_ch3_start',
      },
      
      // ========== 第三章：加班夜与篝火 ==========
      bj_ch3_start: {
        background: 'apartment',
        character: null,
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '真正的转折发生在一个周五晚上。' },
          { speaker: '', text: '你加班到九点多才离开公司，回到出租屋照常打开星见由岐的直播间。' },
          { speaker: '', text: '今天她打的是《黑暗之魂3》DLC的"修女芙莉德"——魂系最难的boss之一。' },
          { speaker: '', text: '三阶段、高伤害、快节奏，容错率极低。' },
          { speaker: '', text: '你看着她一次次倒地、一次次重新从篝火爬起来。' },
          { speaker: '', text: '死了二十多次之后，她终于打到了第三阶段，血条只剩一丝。' },
          { speaker: '', text: '她的手明显在抖——但她稳住了，一记背刺终结了修女。' },
          { speaker: '', text: '然后她长长地吐了一口气，声音有点哑："……呼。赢了。"' },
        ],
        next: 'bj_ch3_reveal',
      },
      
      bj_ch3_reveal: {
        background: 'apartment',
        character: null,
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '你正要发弹幕祝贺她，她忽然又补了一句——' },
          { speaker: '', text: '声音比刚才轻了很多："今天加班好累，差点没撑住……谢谢大家陪着我。"' },
          { speaker: '', text: '你打字的手僵住了。' },
          { speaker: '', text: '——加班。' },
          { speaker: '', text: '她刚才说了"加班"。' },
          { speaker: '', text: '你脑子里迅速闪过无数画面：' },
          { speaker: '', text: '嫣儿今天被主管拉着开了三个会、下班前还在改方案、临走时趴在工位上蔫蔫地说"我好累啊[主角]"。' },
          { speaker: '', text: '时间、疲惫程度、所有的一切都对得上。' },
          { speaker: '', text: '那一晚你没睡好。你反复听那段直播回放——' },
          { speaker: '', text: '音色一模一样，语速一模一样，甚至连尾音上翘的方式都一模一样。' },
          { speaker: '', text: '你确定了。' },
          { speaker: '', text: '嫣儿就是星见由岐。' },
        ],
        next: 'bj_ch3_choice',
      },
      
      bj_ch3_choice: {
        background: 'apartment',
        character: null,
        charExpression: 'neutral',
        choices: [
          { text: '第二天给她带咖啡', next: 'bj_ch4_morning_coffee' },
          { text: '发匿名鼓励消息', next: 'bj_ch4_morning_anonymous' },
          { text: '装作不知道', next: 'bj_ch4_morning_act' },
        ],
      },
      
      // ========== 第四章：我看了你一百次死亡 ==========
      bj_ch4_morning_coffee: {
        background: 'office_desk',
        character: 'yaner',
        charExpression: 'surprised',
        lines: [
          { speaker: '', text: '周一上班，你端着两杯咖啡走到嫣儿工位。' },
          { speaker: '你', text: '早。给你带了咖啡。' },
          { speaker: '', text: '她今天没戴东方帽子，穿着普通的卫衣，正趴在桌上补觉。' },
          { speaker: '', text: '昨晚直播到凌晨两点，你全程都在看。' },
          { speaker: '嫣儿', text: '……嗯？谢谢你啊[主角]。你怎么知道我想喝咖啡？' },
          { speaker: '', text: '你笑了笑："猜的。"' },
        ],
        next: 'bj_ch4_lunch',
      },
      
      bj_ch4_morning_anonymous: {
        background: 'office_desk',
        character: 'yaner',
        charExpression: 'touched',
        lines: [
          { speaker: '', text: '周一上班，嫣儿收到了一条匿名消息：' },
          { speaker: '', text: '"昨天修女打得真棒。加油，由岐酱。"' },
          { speaker: '', text: '她拿着手机，手指微微发抖。' },
          { speaker: '', text: '你坐在旁边，假装在看邮件，眼角的余光却一直盯着她。' },
          { speaker: '', text: '她深吸一口气，回了一句："谢谢你。我会继续努力的。"' },
        ],
        next: 'bj_ch4_lunch',
      },
      
      bj_ch4_morning_act: {
        background: 'office_desk',
        character: 'yaner',
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '周一上班，你看着旁边工位上的嫣儿，心情复杂到了极点。' },
          { speaker: '', text: '她今天没戴东方帽子，穿着普通的卫衣，正趴在桌上补觉。' },
          { speaker: '', text: '你坐下的动作吵醒了她。' },
          { speaker: '嫣儿', text: '……[主角]？早啊。' },
          { speaker: '你', text: '早。' },
          { speaker: '', text: '你盯着她的脸——这张脸和你每天晚上看的那张虚拟皮套完全不同，' },
          { speaker: '', text: '但那双眼睛、那种刚睡醒时迷糊的神态、那个揉眼睛的小动作——' },
          { speaker: '', text: '全都是一模一样的。' },
        ],
        next: 'bj_ch4_lunch',
      },
      
      bj_ch4_lunch: {
        background: 'office_canteen',
        character: 'yaner',
        charExpression: 'happy',
        lines: [
          { speaker: '', text: '"嫣儿，中午一起吃饭吗？"' },
          { speaker: '嫣儿', text: '好呀。' },
          { speaker: '', text: '那笑容和昨晚直播通关时她皮套上浮现的笑，一模一样。' },
          { speaker: '', text: '你知道自己看她的眼神变了。' },
          { speaker: '', text: '以前你看她，是看"重度二次元同事"；' },
          { speaker: '', text: '现在你看她，是看"那个每天晚上死了又爬起来的笨蛋"。' },
          { speaker: '', text: '你忽然理解了为什么自己对星见由岐那么着迷——' },
          { speaker: '', text: '因为现实里的嫣儿也是这样的人。' },
        ],
        next: 'bj_ch5_start',
      },
      
      // ========== 第五章：松山湖的夜晚 ==========
      bj_ch5_start: {
        background: 'bus',
        character: 'yaner',
        charExpression: 'tired',
        lines: [
          { speaker: '', text: '部门团建去松山湖华为小镇。' },
          { speaker: '', text: '大巴上你和嫣儿坐在一排，车窗外东莞的夜景一闪而过。' },
          { speaker: '', text: '同事们吵吵闹闹，只有你们俩安静地各自戴着耳机。' },
          { speaker: '', text: '你偷偷瞄了一眼她的屏幕——她正在看星见由岐的直播回放。' },
          { speaker: '', text: '你心跳加速，但装作没看见。' },
          { speaker: '', text: '到了酒店，你和嫣儿被分到同一间房——部门女生少的老传统。' },
        ],
        next: 'bj_ch5_room',
      },
      
      bj_ch5_room: {
        background: 'hotel_room',
        character: 'yaner',
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '当晚，同事们在前厅玩狼人杀，你们俩借口累了先回房。' },
          { speaker: '', text: '房间里安静了许久，嫣儿戴着耳机看手机——' },
          { speaker: '', text: '你在旁边瞄到，她在看B站私信，一条一条地翻。' },
          { speaker: '你', text: '你在看什么？' },
          { speaker: '嫣儿', text: '粉丝留言……呃，我是说，我喜欢的那个Vtuber的评论区。' },
          { speaker: '', text: '她脱口而出，然后立刻僵住。' },
          { speaker: '', text: '你看着她慌乱的样子，忽然觉得是时候了。' },
        ],
        next: 'bj_ch5_confession',
      },
      
      bj_ch5_confession: {
        background: 'hotel_room',
        character: 'yaner',
        charExpression: 'shocked',
        choices: [
          { text: '直接告白"我喜欢你"', next: 'bj_ch5_direct' },
          { text: '先说是粉丝再告白', next: 'bj_ch5_fan' },
          { text: '只说是粉丝不告白', next: 'bj_ch5_only_fan' },
        ],
      },
      
      bj_ch5_direct: {
        background: 'hotel_room',
        character: 'yaner',
        charExpression: 'touched',
        lines: [
          { speaker: '', text: '"嫣儿，我喜欢你。"' },
          { speaker: '', text: '她愣住了，手里的手机掉在床上。' },
          { speaker: '嫣儿', text: '……你、你说什么？' },
          { speaker: '', text: '"我喜欢你。不管是星见由岐还是嫣儿，我喜欢的都是你。"' },
          { speaker: '', text: '嫣儿的眼眶红了，但她没有哭。' },
          { speaker: '嫣儿', text: '……你什么时候知道的？' },
          { speaker: '你', text: '很久了。每一场直播我都在。' },
        ],
        next: 'bj_ch6_start',
      },
      
      bj_ch5_fan: {
        background: 'hotel_room',
        character: 'yaner',
        charExpression: 'crying',
        lines: [
          { speaker: '', text: '"嫣儿。"' },
          { speaker: '嫣儿', text: '嗯？' },
          { speaker: '', text: '"你说过的话，你记得吗？"' },
          { speaker: '', text: '你深吸一口气，开始复述——' },
          { speaker: '', text: '"没关系，死一百次就赢一百零一次。"这是你在打《只狼》的时候说的。' },
          { speaker: '', text: '"前有泪，但前有爱。"这是你在《黑暗之魂3》结局时念的留言。' },
          { speaker: '', text: '"如果今天很累，那就明天再打。反正篝火一直在这里。"这是你上周四说的。' },
          { speaker: '', text: '嫣儿的表情从疑惑变成震惊，再变成彻底的呆滞。' },
          { speaker: '嫣儿', text: '你、你怎么……' },
          { speaker: '', text: '"我是你粉丝，从你第一次直播到现在，每一场我都在。"' },
          { speaker: '', text: '嫣儿低着头，肩膀开始抖。你以为她哭了，刚要开口——' },
          { speaker: '', text: '她抬起头，在笑，但眼睛里全是泪。' },
          { speaker: '嫣儿', text: '原来是你啊……那个每次我死了就在弹幕发"加油，由岐酱"的账号……是你。' },
          { speaker: '', text: '你点头。' },
          { speaker: '', text: '她伸出手，狠狠掐了一下你的脸。' },
          { speaker: '嫣儿', text: '你为什么不早说！我一直在想这人是谁，是谁这么懂我……' },
          { speaker: '', text: '你揉着脸说："现在你知道了。"' },
          { speaker: '', text: '"我喜欢星见由岐，但我发现，她吸引我的那些特质——"' },
          { speaker: '', text: '"和我在工位上看到的那个、华为加班再多也不抱怨的嫣儿——是同一个人的同一颗心。"' },
          { speaker: '', text: '"所以我喜欢的是你。不管有没有那层皮套，都是你。"' },
          { speaker: '', text: '嫣儿扑过来抱住了你。' },
        ],
        next: 'bj_ch6_start',
      },
      
      bj_ch5_only_fan: {
        background: 'hotel_room',
        character: 'yaner',
        charExpression: 'touched',
        lines: [
          { speaker: '', text: '"我是你的粉丝。从你第一次直播到现在，每一场我都在。"' },
          { speaker: '', text: '嫣儿愣住了。' },
          { speaker: '嫣儿', text: '……你知道我的身份？' },
          { speaker: '', text: '你点头。' },
          { speaker: '', text: '她沉默了很久。' },
          { speaker: '嫣儿', text: '谢谢……谢谢你一直陪着我。' },
          { speaker: '', text: '她没有再说什么，但你看到她的眼睛红了。' },
          { speaker: '', text: '有些话，似乎永远无法说出口。' },
        ],
        next: 'bj_normal_end',
      },
      
      // ========== 第六章：你是我永远的不死人 ==========
      bj_ch6_start: {
        background: 'office_desk',
        character: 'yaner',
        charExpression: 'happy',
        lines: [
          { speaker: '', text: '确认关系之后，你们的生活发生了微妙的变化。' },
          { speaker: '', text: '白天在华为工位上，嫣儿还是会戴东方帽子、哼动漫歌、在工位摆满手办。' },
          { speaker: '', text: '但她会偷偷往你桌上放奶茶，便利贴上画一个天子的小人，旁边写"今日份的加油"。' },
          { speaker: '', text: '晚上回家，你照常看星见由岐的直播，但身份不一样了。' },
          { speaker: '', text: '你会一边看一边给她发微信："弹反要早0.5秒，你慢了。"' },
          { speaker: '', text: '她会在直播里假装不经意地回一句："有人教我弹反，我觉得她在小看我——好吧，她是对的。"' },
        ],
        next: 'bj_ch6_live',
      },
      
      bj_ch6_live: {
        background: 'apartment',
        character: 'yaner',
        charExpression: 'touched',
        lines: [
          { speaker: '', text: '有一天，她播到一半忽然停下来，皮套下的声音变得很认真：' },
          { speaker: '', text: '"我想说一件事。我直播以来，有一个粉丝从头到尾都在。"' },
          { speaker: '', text: '"我打不过boss的时候她说加油，我通关的时候她说恭喜，我累了的时候她说早点休息。"' },
          { speaker: '', text: '"我一直不知道她是谁。现在我终于知道了。"' },
          { speaker: '', text: '"她是我在现实里最重要的人。"' },
          { speaker: '', text: '弹幕疯了。你在屏幕前捂着脸，耳朵烫得能煎鸡蛋。' },
        ],
        next: 'bj_ch6_choice',
      },
      
      bj_ch6_choice: {
        background: 'apartment',
        character: null,
        charExpression: 'neutral',
        choices: [
          { text: '发微信回应', next: 'bj_ch6_wechat' },
          { text: '在直播间弹幕回应', next: 'bj_ch6_danmaku' },
          { text: '第二天当面回应', next: 'bj_ch6_face' },
        ],
      },
      
      bj_ch6_wechat: {
        background: 'apartment',
        character: 'yaner',
        charExpression: 'happy',
        lines: [
          { speaker: '', text: '直播结束后她给你打电话，声音带着笑意："怎么样，我告白得还行吧？"' },
          { speaker: '你', text: '……你疯了吧！弹幕全在猜是谁！' },
          { speaker: '嫣儿', text: '猜就猜呗，反正他们猜不到你是我华为同事。' },
          { speaker: '', text: '你沉默了一下："……嫣儿。"' },
          { speaker: '你', text: '你下次打《艾尔登法环》DLC的时候，我能坐在你旁边看你打吗？"' },
          { speaker: '', text: '电话那头安静了几秒，然后你听到她笑起来——' },
          { speaker: '', text: '是那种在直播里从来没有过的、真实的、只属于嫣儿的笑。' },
          { speaker: '嫣儿', text: '好。但你不能笑我死得惨。' },
        ],
        next: 'bj_true_end',
      },
      
      bj_ch6_danmaku: {
        background: 'apartment',
        character: 'yaner',
        charExpression: 'happy',
        lines: [
          { speaker: '', text: '你在弹幕里发了一句："我也一直都在。"' },
          { speaker: '', text: '她看到了，皮套的嘴角微微上扬。' },
          { speaker: '', text: '"谢谢，"她说，"我知道。"' },
          { speaker: '', text: '那一晚，直播间的氛围格外温暖。' },
          { speaker: '', text: '弹幕里有人在刷"好甜"，有人在猜那个神秘粉丝是谁。' },
          { speaker: '', text: '只有你们两个知道答案。' },
        ],
        next: 'bj_true_end',
      },
      
      bj_ch6_face: {
        background: 'office_desk',
        character: 'yaner',
        charExpression: 'shy',
        lines: [
          { speaker: '', text: '第二天上班，你走到嫣儿工位前。' },
          { speaker: '', text: '她戴着恋恋的帽子，脸红红的。' },
          { speaker: '你', text: '昨晚的直播……谢谢你。' },
          { speaker: '嫣儿', text: '……嗯。' },
          { speaker: '', text: '她从抽屉里拿出一个小黑魂玩偶，放在你桌上。' },
          { speaker: '嫣儿', text: '给你的。和我的那个一样。' },
          { speaker: '', text: '你拿起玩偶，指尖碰到她的手。' },
          { speaker: '', text: '两个人的脸都更红了。' },
        ],
        next: 'bj_true_end',
      },
      
      // ========== 结局 ==========
      bj_true_end: {
        background: 'apartment_night',
        character: 'yaner',
        charExpression: 'happy',
        lines: [
          { speaker: '', text: '窗外，北京的夜很深。' },
          { speaker: '', text: '你知道明天上班的时候，嫣儿还是会戴着天子的帽子冲进华为的办公室喊你"[主角]早安"；' },
          { speaker: '', text: '你也知道晚上回家的时候，星见由岐的直播间会准时亮起来——' },
          { speaker: '', text: '那个在虚拟世界里永不倒下的人，和那个在现实世界里笑着跟你吵架的人，是同一个人。' },
          { speaker: '', text: '而这个人，现在是你的了。' },
        ],
        ending: {
          title: '你是我永远的不死人',
          type: '✦ TRUE ENDING ✦',
          text: '你坐在嫣儿身边看她打通了《艾尔登法环》最终Boss，她放下手柄转头亲了你一下——"这条命，有你一起，值了。"',
        },
      },
      
      bj_normal_end: {
        background: 'office_desk',
        character: 'yaner',
        charExpression: 'neutral',
        lines: [
          { speaker: '', text: '你们成为最好的朋友兼同事。' },
          { speaker: '', text: '你依然看她的直播，她依然知道你在看。' },
          { speaker: '', text: '但谁都没迈出那一步。' },
          { speaker: '', text: '关系停留在"最懂彼此的知己"。' },
          { speaker: '', text: '也许这样也不错。' },
        ],
        ending: {
          title: '最懂彼此的人',
          type: '◆ NORMAL ENDING ◆',
          text: '有些话不说出口，反而能长久。你们是最好的同事，也是最懂彼此的朋友。',
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
