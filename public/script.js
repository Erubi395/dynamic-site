document.addEventListener('DOMContentLoaded', () => {
    // 1. Анимэйшн эхлүүлэх
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });

    // 2. Custom Cursor (Nyan cat) logic
    const nyan = document.getElementById("nyanCursor");
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && nyan) {
        nyan.style.display = "block";
        document.body.style.cursor = "none"; 

        document.addEventListener("mousemove", e => {
            nyan.style.left = e.clientX + "px";
            nyan.style.top = e.clientY + "px";
        });
        
        // Интерактив элемент дээр курсор томрох
        const links = document.querySelectorAll('a, button, summary, .new-card, .hero-item.side img');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                nyan.style.transform = "translate(-50%, -50%) scale(1.5)";
            });
            link.addEventListener('mouseleave', () => {
                nyan.style.transform = "translate(-50%, -50%) scale(1)";
            });
        });
    } else {
        if(nyan) nyan.style.display = "none";
        document.body.style.cursor = "auto";
    }
});

// 3. Зураг солих функц (Click to swap)
function swapImage(clickedId) {
    const centerImg = document.getElementById('img-center');
    const clickedImg = document.getElementById(clickedId);

    if (!centerImg || !clickedImg) return;

    // Бүдгэрүүлэх
    centerImg.style.opacity = '0';
    clickedImg.style.opacity = '0';
    
    setTimeout(() => {
        // Солих
        const tempSrc = centerImg.src;
        centerImg.src = clickedImg.src;
        clickedImg.src = tempSrc;

        // Буцааж тодруулах
        centerImg.style.opacity = '1';
        clickedImg.style.opacity = '1';
    }, 300);
}