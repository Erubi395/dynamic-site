document.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("musicBtn");

  btn.addEventListener("click", async () => {
    try {
      if (bgm.paused) {
        await bgm.play();
        btn.textContent = "⏸ 音楽を止める";
      } else {
        bgm.pause();
        btn.textContent = "♪ 音楽を流す";
      }
    } catch (e) { console.error(e); }
  });

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