document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const cards = document.querySelectorAll('.card');

  // Хэрэв элементүүд олдохгүй бол алдаа гаргахгүй зогсоно
  if (!carousel || !nextBtn || !prevBtn || cards.length === 0) {
    return;
  }

  const totalCards = cards.length;
  const anglePerCard = 360 / totalCards;
  let currentAngle = 0;
  let isHovered = false;

  // 1. Картуудыг байрлуулах
  cards.forEach((card, i) => {
    // Карт бүрт өөрийн гэсэн өнцөг онооно
    card.style.setProperty('--angle', `${i * anglePerCard}deg`);
    
    // Карт дээр дарах үйлдэл
    card.addEventListener('click', function(e) {
      // Хэрэв товчлуур эсвэл input дээр дарсан бол картыг хаахгүй/нээхгүй
      if (e.target.matches('button, input, .chat-view *')) return;
      
      // Бусад нээлттэй картуудыг хаах
      const isActive = this.classList.contains('active');
      cards.forEach(c => c.classList.remove('active'));
      
      // Хэрэв хаалттай байсан бол нээнэ
      if (!isActive) {
        this.classList.add('active');
        // Сонгосон картыг яг урд авчрахын тулд carousel-ийг эргүүлэх (Сонголттой)
        // currentAngle = -(i * anglePerCard); 
      }
    });
  });

  // 2. Автомат эргэлт (Animation Loop)
  function animate() {
    const isAnyCardActive = document.querySelector('.card.active');

    // Хулгана дээгүүр нь гараагүй БӨГӨӨД ямар нэг карт нээгдээгүй үед л эргэнэ
    if (!isHovered && !isAnyCardActive) {
      currentAngle -= 0.1; // Эргэх хурд
    }
    
    // CSS variable-ийг шинэчлэх
    carousel.style.setProperty('--rotate-y', `${currentAngle}deg`);
    requestAnimationFrame(animate);
  }
  
  // Анимейшнийг эхлүүлэх
  animate();

  // 3. Удирдлагын товчнууд
  nextBtn.addEventListener('click', () => { 
    currentAngle -= anglePerCard; 
  });
  
  prevBtn.addEventListener('click', () => { 
    currentAngle += anglePerCard; 
  });

  // Хулгана дээгүүр гарахад эргэлтийг зогсоох
  carousel.addEventListener('mouseenter', () => { isHovered = true; });
  carousel.addEventListener('mouseleave', () => { isHovered = false; });

  // 4. Chat UI Logic (Чат нээх/хаах)
  document.querySelectorAll('.open-chat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Карт хаагдахаас сэргийлэх
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