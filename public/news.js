document.addEventListener("DOMContentLoaded", () => {
  const fades = document.querySelectorAll(".fade");

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
    const links = document.querySelectorAll(".ticker-track a");
    links.forEach(link => {
        if (link.href.includes("news1.html")) {
            link.style.color = "#ff5a5a";
            link.style.fontWeight = "bold";
        }
    });
  }, observerOptions);
  fades.forEach(f => {
    observer.observe(f);
  });
});