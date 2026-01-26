document.addEventListener("DOMContentLoaded", () => {

    const newsItems = document.querySelector(".news-items");
    if (newsItems) {
        newsItems.addEventListener("mouseenter", () => {
            newsItems.style.animationPlayState = "paused";
        });
        newsItems.addEventListener("mouseleave", () => {
            newsItems.style.animationPlayState = "running";
        });
    }
    const links = document.querySelectorAll(".news-items a");
    links.forEach(link => {
        if (link.href.includes("news2.html")) {
            link.style.color = "#ff5a5a";
            link.style.fontWeight = "bold";
        }
    });
    const galleryItems = document.querySelectorAll(".gallery img");
    galleryItems.forEach(img => {
        img.addEventListener("click", () => {
            alert("作品をクリックしました");
        });
    });
    const galleryImages = document.querySelectorAll(".cat-item img, .main-img, .gallery img");
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
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                cursor: pointer;
            `;
            const bigImg = document.createElement("img");
            bigImg.src = img.src;
            bigImg.style.maxWidth = "90%";
            bigImg.style.maxHeight = "90%";
            bigImg.style.borderRadius = "8px";
            bigImg.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
            
            overlay.appendChild(bigImg);
            document.body.appendChild(overlay);

            overlay.onclick = () => {
                overlay.remove();
            };
        };
    });
});