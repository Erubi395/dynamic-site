document.addEventListener("DOMContentLoaded", () => {
  const fades = document.querySelectorAll(".fade");

  const observerOptions = {
    root: null,
    threshold: 0.1, // Элементийн 10% харагдахад ажиллана
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Нэг удаа ажиллаад зогсоно
      }
    });
  }, observerOptions);

  fades.forEach(f => {
    observer.observe(f);
  });
});