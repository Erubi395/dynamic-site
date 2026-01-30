document.addEventListener("DOMContentLoaded", () => {
  const newsItems = document.getElementById("newsItems");
  
  newsItems.innerHTML += newsItems.innerHTML;

  let position = 0;
  const speed = 0.5; 

  function moveNews() {
    position -= speed;

    if (Math.abs(position) >= newsItems.scrollWidth / 2) {
      position = 0;
    }
    newsItems.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(moveNews);
  }
      const links = document.querySelectorAll(".news-items a");
    links.forEach(link => {
        if (link.href.includes("/news3")) {
            link.style.color = "#ff5a5a";
            link.style.fontWeight = "bold";
        }
    });

  moveNews();
});
