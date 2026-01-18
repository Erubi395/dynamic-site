// 1. Plugins бүртгэх
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// 2. ScrollSmoother тохиргоо
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  normalizeScroll: true
});

// 3. Zoom Effect Animation
gsap.timeline({
    scrollTrigger: {
      trigger: ".zoom-container",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: 1
    }
  })
  .to(".zoom-item[data-layer='3']", { opacity: 1, z: 800, ease: "power1.inOut" }, 0)
  .to(".zoom-item[data-layer='2']", { opacity: 1, z: 600, ease: "power1.inOut" }, 0)
  .to(".zoom-item[data-layer='1']", { opacity: 1, z: 400, ease: "power1.inOut" }, 0)
  .to(".heading", { opacity: 1, z: 50, ease: "power1.inOut" }, 0);

// 4. Text Reveal Animation
const revealElement = document.querySelector(".opacity-reveal");

if (revealElement) {
    const splitLetters = SplitText.create(revealElement, { type: "chars" });
    
    gsap.set(splitLetters.chars, { opacity: "0.2" });

    gsap.timeline({
        scrollTrigger: {
          trigger: ".section-stick",
          pin: true,
          start: "center center",
          end: "+=1500", // Скролл хийх зай
          scrub: 1
        }
      })
      .to(splitLetters.chars, {
        opacity: "1",
        duration: 1,
        ease: "none",
        stagger: 1
      })
      .to({}, { duration: 10 }) // Түр зогсолт
      .to(".opacity-reveal", {
        opacity: "0",
        scale: 1.2,
        duration: 50
      });
}

// 5. Button Reveal (Товчлуурыг гаргаж ирэх)
gsap.to(".home-btn", {
    scrollTrigger: {
        trigger: ".bottom-navigation", // Товчлуурын div харагдах үед
        start: "top 85%", // Дэлгэцийн доод хэсэгт орж ирэнгүүт
        toggleActions: "play none none reverse" 
    },
    opacity: 1,      // Ил болгоно
    y: 0,            // Дээшээ гүйж байрлалдаа очно
    duration: 1,
    ease: "power3.out"
});