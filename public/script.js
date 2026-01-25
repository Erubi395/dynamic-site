/* =========================================
   1. AOS (Animate On Scroll) Initialization
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // Хөдөлгөөн 1 секунд үргэлжилнэ
        once: true,     // Доош гүйлгэхэд нэг л удаа ажиллана
    });
});

/* =========================================
   2. Custom Cursor Logic (Nyan Cat)
   ========================================= */
const nyan = document.getElementById("nyanCursor");
// Touch дэлгэцтэй (утас, таблет) эсэхийг шалгах
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice && nyan) {
    // PC дээр бол курсорыг харуулна
    nyan.style.display = "block";
    document.body.style.cursor = "none"; 

    // Хулганы хөдөлгөөнийг дагах
    document.addEventListener("mousemove", e => {
        nyan.style.left = e.clientX + "px";
        nyan.style.top = e.clientY + "px";
    });
    
    // Линк болон товчлуур дээр очиход томрох эффект
    const links = document.querySelectorAll('a, button, summary, .new-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            nyan.style.transform = "translate(-50%, -50%) scale(1.5)";
        });
        link.addEventListener('mouseleave', () => {
            nyan.style.transform = "translate(-50%, -50%) scale(1)";
        });
    });
} else {
    // Утас дээр бол энгийн курсор (эсвэл курсоргүй) байна
    document.body.style.cursor = "auto";
    if(nyan) nyan.style.display = "none";
}
/* =========================================
   3. Image Swap Logic (Click side to swap with center)
   ========================================= */
function swapImage(clickedId) {
    const centerImg = document.getElementById('img-center');
    const clickedImg = document.getElementById(clickedId);

    // Хэрэв зураг олдохгүй бол юу ч хийхгүй
    if (!centerImg || !clickedImg) return;

    // 1. Анимэйшн эхлүүлэх (бүдгэрэх)
    centerImg.classList.add('fade-swap');
    clickedImg.classList.add('fade-swap');

    // 2. 300ms хүлээгээд зургийг солих (CSS transition-тэй тааруулж)
    setTimeout(() => {
        // Зургийн эх сурвалжийг түр хадгалах
        const tempSrc = centerImg.src;

        // Байр солих
        centerImg.src = clickedImg.src;
        clickedImg.src = tempSrc;

        // 3. Анимэйшн дуусгах (буцаж тодрох)
        centerImg.classList.remove('fade-swap');
        clickedImg.classList.remove('fade-swap');
    }, 300);
}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
