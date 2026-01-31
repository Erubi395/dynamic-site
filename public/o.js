document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const cards = document.querySelectorAll('.card');

  if (!carousel || !nextBtn || !prevBtn || cards.length === 0) {
    return;
  }

  const totalCards = cards.length;
  const anglePerCard = 360 / totalCards;
  let currentAngle = 0;
  let isHovered = false;

  cards.forEach((card, i) => {
    card.style.setProperty('--angle', `${i * anglePerCard}deg`);
    
    card.addEventListener('click', function(e) {
      if (e.target.closest('.chat-view') || e.target.closest('button') || e.target.closest('input')) {
        return;
      }
      
      const isActive = this.classList.contains('active');
      cards.forEach(c => c.classList.remove('active'));
      
      if (!isActive) {
        this.classList.add('active');
      }
    });
  });

  function animate() {
    const isAnyCardActive = document.querySelector('.card.active');

    if (!isHovered && !isAnyCardActive) {
      currentAngle -= 0.1; 
    }
    
    carousel.style.setProperty('--rotate-y', `${currentAngle}deg`);
    requestAnimationFrame(animate);
  }
  
  animate();

  nextBtn.addEventListener('click', () => { 
    currentAngle -= anglePerCard; 
  });
  
  prevBtn.addEventListener('click', () => { 
    currentAngle += anglePerCard; 
  });

  carousel.addEventListener('mouseenter', () => { isHovered = true; });
  carousel.addEventListener('mouseleave', () => { isHovered = false; });

  document.querySelectorAll('.open-chat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      const card = btn.closest('.card');
      const infoView = card.querySelector('.info-view');
      const chatView = card.querySelector('.chat-view');

      if (infoView && chatView) {
        infoView.style.display = 'none';
        chatView.style.display = 'flex';
      }
    });
  });

  document.querySelectorAll('.back-to-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.card');
      const infoView = card.querySelector('.info-view');
      const chatView = card.querySelector('.chat-view');

      if (infoView && chatView) {
        chatView.style.display = 'none';
        infoView.style.display = 'flex';
      }
    });
  });

  function sendMessage(card) {
    const input = card.querySelector('.input-area input');
    const messagesContainer = card.querySelector('.messages');
    const text = input.value.trim();
    
    if (!text) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.textContent = text;
    messagesContainer.appendChild(userMsg);
    
    input.value = '';
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'msg ai';
        aiMsg.textContent = "ご質問ありがとうございます。少々お待ちください..."; 
        messagesContainer.appendChild(aiMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
  }

  document.querySelectorAll('.send-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.card');
      sendMessage(card);
    });
  });

  document.querySelectorAll('.input-area input').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const card = input.closest('.card');
        sendMessage(card);
      }
    });
    
    input.addEventListener('click', (e) => {
        e.stopPropagation();
    });
  });
});