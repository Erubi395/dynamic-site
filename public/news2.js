document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".cat-item img, .main-img, .gallery img, .art-grid img");
    
    galleryImages.forEach(img => {
        img.style.cursor = "zoom-in";
        
        img.onclick = (e) => {

            const overlay = document.createElement("div");
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: zoom-out;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            const bigImg = document.createElement("img");
            bigImg.src = img.src;
            bigImg.style.maxWidth = "90%";
            bigImg.style.maxHeight = "90%";
            bigImg.style.borderRadius = "8px";
            bigImg.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
            bigImg.style.transform = "scale(0.9)";
            bigImg.style.transition = "transform 0.3s ease";
            
            overlay.appendChild(bigImg);
            document.body.appendChild(overlay);

            requestAnimationFrame(() => {
                overlay.style.opacity = "1";
                bigImg.style.transform = "scale(1)";
            });

            overlay.onclick = () => {
                overlay.style.opacity = "0";
                bigImg.style.transform = "scale(0.9)";
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            };
        };
    });
});