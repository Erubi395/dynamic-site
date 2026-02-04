document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const cards = document.querySelectorAll('.card');

  if (!carousel || !nextBtn || !prevBtn || cards.length === 0) return;

  const totalCards = cards.length;
  const anglePerCard = 360 / totalCards;
  let currentAngle = 0;
  let isHovered = false;
  let autoRotateId = null;

  cards.forEach((card, i) => {
    card.style.setProperty('--angle', `${i * anglePerCard}deg`);
    
    card.addEventListener('click', function(e) {
      if (e.target.closest('.card-right-panel')) return;
      const isActive = this.classList.contains('active');
      cards.forEach(c => c.classList.remove('active'));
      if (!isActive) {
        this.classList.add('active');
        currentAngle = -(i * anglePerCard);
        updateCarousel();
      } else {
        this.classList.remove('active');
      }
    });
  });

  function updateCarousel() {
    carousel.style.setProperty('--rotate-y', `${currentAngle}deg`);
  }
  function animate() {
    const isAnyCardActive = document.querySelector('.card.active');
    if (!isHovered && !isAnyCardActive) {
      currentAngle -= 0.2;
      updateCarousel();
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
  nextBtn.addEventListener('click', () => { 
    const isAnyCardActive = document.querySelector('.card.active');
    if(isAnyCardActive) return; 

    currentAngle -= anglePerCard;
    updateCarousel(); 
  });
  
  prevBtn.addEventListener('click', () => { 
    const isAnyCardActive = document.querySelector('.card.active');
    if(isAnyCardActive) return;

    currentAngle += anglePerCard; 
    updateCarousel();
  });

  carousel.addEventListener('mouseenter', () => { isHovered = true; });
  carousel.addEventListener('mouseleave', () => { isHovered = false; });

  document.querySelectorAll('.open-chat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.card');
      const infoView = card.querySelector('.info-view');
      const chatView = card.querySelector('.chat-view');

      if (infoView && chatView) {
        infoView.style.display = 'none';
        chatView.style.display = 'flex'; // Flex болгож харагдуулна
      }
    });
  });
  document.querySelectorAll('.back-to-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
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
    scrollToBottom(messagesContainer);

    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'msg ai';
        const responses = [
            "ただいま確認中です。まもなくお返事します。", 
            
            "お問い合わせありがとうございます。少々お待ちください。", 

            "メッセージを受け取りました。後ほど詳しく回答いたします。", 
        ];
        const randomResp = responses[Math.floor(Math.random() * responses.length)];
        
        aiMsg.textContent = randomResp;
        messagesContainer.appendChild(aiMsg);
        
        scrollToBottom(messagesContainer);
    }, 1000);
  }

  function scrollToBottom(container) {
      container.scrollTop = container.scrollHeight;
  }
  document.querySelectorAll('.send-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
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
  });
});