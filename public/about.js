document.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  const fades = document.querySelectorAll(".fade");
  const handleScroll = () => {
    fades.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) el.classList.add("show");
    });
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  
});