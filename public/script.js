const nyan = document.getElementById("nyanCursor");

document.addEventListener("mousemove", e => {
  nyan.style.left = e.clientX + "px";
  nyan.style.top = e.clientY + "px";
});

