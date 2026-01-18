const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// --- CAROUSEL SETUP ---
const cardCount = cards.length;
const anglePerCard = 360 / cardCount;
let currentAngle = 0;
let autoRotateSpeed = 0.08;
let isHovered = false;

// Cards Logic
cards.forEach((card, index) => {
  card.style.setProperty('--angle', `${anglePerCard * index}deg`);

  card.addEventListener('click', function(e) {
    if (e.target.matches('button, input, .chat-view *')) return;

    cards.forEach(c => {
      if (c !== this) {
        c.classList.remove('active');
        resetCardView(c);
      }
    });

    this.classList.toggle('active');
    if (!this.classList.contains('active')) resetCardView(this);
  });
});

// Animation
function animate() {
  const isAnyCardActive = document.querySelector('.card.active');
  if (!isHovered && !isAnyCardActive) {
    currentAngle -= autoRotateSpeed;
  }
  carousel.style.setProperty('--rotate-y', `${currentAngle}deg`);
  requestAnimationFrame(animate);
}
animate();

// Controls
nextBtn.addEventListener('click', () => { currentAngle -= anglePerCard; closeAll(); });
prevBtn.addEventListener('click', () => { currentAngle += anglePerCard; closeAll(); });

const container = document.querySelector('.carousel-container');
container.addEventListener('mouseenter', () => isHovered = true);
container.addEventListener('mouseleave', () => isHovered = false);

function closeAll() {
  cards.forEach(card => {
    card.classList.remove('active');
    resetCardView(card);
  });
}

// View Switching
document.querySelectorAll('.open-chat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    card.querySelector('.info-view').style.display = 'none';
    card.querySelector('.chat-view').style.display = 'flex';
  });
});

document.querySelectorAll('.back-to-info-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    resetCardView(btn.closest('.card'));
  });
});

function resetCardView(card) {
  const infoView = card.querySelector('.info-view');
  const chatView = card.querySelector('.chat-view');
  if(infoView && chatView) {
    infoView.style.display = 'flex';
    chatView.style.display = 'none';
  }
}

/* =========================================
   🤖 TEACHER BRAIN (JAPANESE)
   ========================================= */
const teacherBrains = {
  edward: (text) => {
    const q = text.toLowerCase();

    // Greeting
    if (q.includes('hello') || q.includes('こんにちは') || q.includes('おはよう')) {
        return 'こんにちは！今日はどんなプログラムを作りたいですか？'; 
        // Сайн байна уу! Өнөөдөр ямар програм бичмээр байна?
    }

    // Start / Beginner
    if (q.includes('start') || q.includes('始め') || q.includes('初心者')) {
        return 'まずは「Hello World」を出力することから始めましょう。C言語かPythonがおすすめです。';
        // Эхлээд Hello World хэвлэхээс эхэлье.
    }

    // Python
    if (q.includes('python') || q.includes('パイソン')) {
        return 'PythonはAIやデータ分析に強い言語です。インデント（字下げ）に気をつけましょう。';
    }

    // C Language
    if ((q.includes('c') && q.length < 5) || q.includes('c言語')) {
        return 'C言語はメモリ管理が重要です。ポインタをマスターすれば怖いものなしですよ！';
    }

    // Unity
    if (q.includes('unity') || q.includes('game') || q.includes('ゲーム')) {
        return 'Unityなら、まずはオブジェクトを配置して動かすことから始めましょう。C#の勉強も必要ですね。';
    }

    // Default Response
    return 'なるほど、いい質問ですね。次の授業で詳しく解説しましょうか。';
    // Сонирхолтой асуулт байна. Дараагийн хичээл дээр тайлбарлая.
  },

  game: (text) => {
    if (text.includes('こんにちは')) return 'こんにちは！ゲーム作りの旅へようこそ！';
    return 'ゲーム開発はバグとの戦いですが、それを乗り越えた時の達成感は最高です。';
  },

  default: () => 'すみません、よくわかりませんでした。'
};

// Send Logic
document.querySelectorAll('.send-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const input = card.querySelector('input');
    const msgBox = card.querySelector('.messages');
    const teacherId = card.dataset.teacher || 'default';
    
    const userText = input.value.trim();
    if(!userText) return;

    // User Msg
    msgBox.innerHTML += `<div class="msg user">${userText}</div>`;
    input.value = '';
    msgBox.scrollTop = msgBox.scrollHeight;

    // AI Reply
    setTimeout(() => {
      const brain = teacherBrains[teacherId] || teacherBrains['default'];
      const reply = brain(userText);
      msgBox.innerHTML += `<div class="msg ai">${reply}</div>`;
      msgBox.scrollTop = msgBox.scrollHeight;
    }, 600);
  });
});