document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const cards = document.querySelectorAll('.card');

  if (!carousel || !nextBtn || !prevBtn || cards.length === 0) {
    console.log("Carousel elements not found - Skipping carousel script");
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
      
      cards.forEach(c => { if (c !== this) c.classList.remove('active'); });
      this.classList.toggle('active');
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

  nextBtn.addEventListener('click', () => { currentAngle -= anglePerCard; });
  prevBtn.addEventListener('click', () => { currentAngle += anglePerCard; });

  carousel.addEventListener('mouseenter', () => { isHovered = true; });
  carousel.addEventListener('mouseleave', () => { isHovered = false; });

  document.querySelectorAll('.open-chat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      if (card) {
        const infoView = card.querySelector('.info-view');
        const chatView = card.querySelector('.chat-view');
        if (infoView && chatView) {
            infoView.style.display = 'none';
            chatView.style.display = 'flex';
        }
      }
    });
  });
  document.querySelectorAll('.back-to-info-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      if (card) {
        const infoView = card.querySelector('.info-view');
        const chatView = card.querySelector('.chat-view');
        if (infoView && chatView) {
            infoView.style.display = 'flex';
            chatView.style.display = 'none';
        }
      }
    });
  });
});