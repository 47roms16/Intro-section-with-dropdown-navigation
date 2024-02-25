const menuBtn = document.querySelector(".nav__button-menu");
const menuIcon = document.querySelector(".menu-icon");
const mobileNavMenu = document.querySelector(".mobile-nav");

// Remove preload class on page load to prevent unnecessary transitions

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

menuBtn.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("active");
  document.body.classList.toggle("active");
  menuIcon.classList.toggle("active");
});
