document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  const anglePerCard = 360 / totalCards;
  let currentAngle = 0;
  let isHovered = false;

  // Карт байрлуулах
  cards.forEach((card, i) => {
    card.style.setProperty('--angle', `${i * anglePerCard}deg`);
    
    card.addEventListener('click', function(e) {
      if (e.target.matches('button, input, .chat-view *')) return;
      cards.forEach(c => { if (c !== this) c.classList.remove('active'); });
      this.classList.toggle('active');
    });
  });

  // Анимаци
  function animate() {
    const isAnyCardActive = document.querySelector('.card.active');
    if (!isHovered && !isAnyCardActive) {
      currentAngle -= 0.1;
    }
    carousel.style.setProperty('--rotate-y', `${currentAngle}deg`);
    requestAnimationFrame(animate);
  }
  animate();

  // Controls
  document.getElementById('nextBtn').addEventListener('click', () => { currentAngle -= anglePerCard; });
  document.getElementById('prevBtn').addEventListener('click', () => { currentAngle += anglePerCard; });

  // Chat/Info шилжилт
  document.querySelectorAll('.open-chat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      card.querySelector('.info-view').style.display = 'none';
      card.querySelector('.chat-view').style.display = 'flex';
    });
  });

  document.querySelectorAll('.back-to-info-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      card.querySelector('.info-view').style.display = 'flex';
      card.querySelector('.chat-view').style.display = 'none';
    });
  });
});