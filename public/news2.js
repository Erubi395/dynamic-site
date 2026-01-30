document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(
    ".cat-item img, .main-img, .gallery img, .art-grid img"
  );
  galleryImages.forEach(img => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", e => {
      e.preventDefault();

      const oldOverlay = document.querySelector(".img-overlay");
      if (oldOverlay) oldOverlay.remove();

      const overlay = document.createElement("div");
      overlay.className = "img-overlay";
      overlay.style.cssText = `
        position: fixed;
        inset: 0;
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
      bigImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
        transform: scale(0.9);
        transition: transform 0.3s ease;
      `;
      overlay.appendChild(bigImg);
      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        overlay.style.opacity = "1";
        bigImg.style.transform = "scale(1)";
      });
      const closeOverlay = () => {
        overlay.style.opacity = "0";
        bigImg.style.transform = "scale(0.9)";
        setTimeout(() => overlay.remove(), 300);
        document.removeEventListener("keydown", escHandler);
      };
      overlay.addEventListener("click", closeOverlay);

      const escHandler = e => {
        if (e.key === "Escape") closeOverlay();
      };
      document.addEventListener("keydown", escHandler);
    });
  });
});
