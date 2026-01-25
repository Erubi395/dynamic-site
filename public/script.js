document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });
    const nyan = document.getElementById("nyanCursor");
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && nyan) {
        nyan.style.display = "block";
        document.body.style.cursor = "none"; 

        document.addEventListener("mousemove", e => {
            nyan.style.left = e.clientX + "px";
            nyan.style.top = e.clientY + "px";
        });
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
function swapImage(clickedId) {
    const centerImg = document.getElementById('img-center');
    const clickedImg = document.getElementById(clickedId);

    if (!centerImg || !clickedImg) return;

    centerImg.style.opacity = '0';
    clickedImg.style.opacity = '0';
    
    setTimeout(() => {
        const tempSrc = centerImg.src;
        centerImg.src = clickedImg.src;
        clickedImg.src = tempSrc;

        centerImg.style.opacity = '1';
        clickedImg.style.opacity = '1';
    }, 300);
}