document.addEventListener("DOMContentLoaded", () => {
  const newsItems = document.getElementById("newsItems");

  const links = newsItems.querySelectorAll("a");
  const currentPath = "/news3"; 

  links.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
          link.style.color = "#ff5a5a";
          link.style.fontWeight = "bold";
          link.style.borderBottom = "2px solid #ff5a5a"; 
      }
  });
});