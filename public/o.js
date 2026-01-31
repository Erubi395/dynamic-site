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

      if (e.target.matches('button, input, .chat-view *')) return;

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
      if (card) {
        card.querySelector('.info-view').style.display = 'none';
        card.querySelector('.chat-view').style.display = 'flex';
      }
    });
  });
  document.querySelectorAll('.back-to-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.card');
      if (card) {
        card.querySelector('.info-view').style.display = 'flex';
        card.querySelector('.chat-view').style.display = 'none';
      }
    });
  });
});