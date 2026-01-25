gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  normalizeScroll: true
});
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

const revealElement = document.querySelector(".opacity-reveal");

if (revealElement) {
    const splitLetters = SplitText.create(revealElement, { type: "chars" });
    
    gsap.set(splitLetters.chars, { opacity: "0.2" });

    gsap.timeline({
        scrollTrigger: {
          trigger: ".section-stick",
          pin: true,
          start: "center center",
          end: "+=1500", 
          scrub: 1
        }
      })
      .to(splitLetters.chars, {
        opacity: "1",
        duration: 1,
        ease: "none",
        stagger: 1
      })
      .to({}, { duration: 10 }) 
      .to(".opacity-reveal", {
        opacity: "0",
        scale: 1.2,
        duration: 50
      });
}
gsap.to(".home-btn", {
    scrollTrigger: {
        trigger: ".bottom-navigation", 
        start: "top 85%", 
        toggleActions: "play none none reverse" 
    },
    opacity: 1,      
    y: 0,            
    duration: 1,
    ease: "power3.out"
});