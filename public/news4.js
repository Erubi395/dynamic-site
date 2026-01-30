document.addEventListener("DOMContentLoaded", () => {
  const newsItems = document.getElementById("newsItems");

  newsItems.innerHTML += newsItems.innerHTML;

  let x = 0;
  const speed = 0.6;

  function scrollNews() {
    x -= speed;

    if (Math.abs(x) >= newsItems.scrollWidth / 2) {
      x = 0;
    }
    newsItems.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(scrollNews);
  }
  const links = document.querySelectorAll(".news-items a");
    links.forEach(link => {
        if (link.href.includes("/news4")) {
            link.style.color = "#ff5a5a";
            link.style.fontWeight = "bold";
        }
    });
  scrollNews();
});
