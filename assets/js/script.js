const menu = document.querySelector("nav ul");
const menuIcon = document.querySelector("nav .menu-icon");
const menuIconImg = document.querySelector("nav .menu-icon img");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("activo");
  if (menuIconImg.getAttribute("src") == "/assets/img/menu.png") {
    menuIconImg.setAttribute("src", "/assets/img/menu.png");
  }
});
