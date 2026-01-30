document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".ticker-track a"); 

    links.forEach(link => {
        if (link.getAttribute("href") === "/news4") {
            link.style.color = "#ff5a5a";   
            link.style.fontWeight = "bold";   
        }
    });
});