document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-menu a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.href.includes(currentPath) && currentPath !== "/") {
            link.style.opacity = "1";
            link.style.borderBottom = "2px solid #fff";
        }
    });
});