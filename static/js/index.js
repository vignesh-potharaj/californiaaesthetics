document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  /* NAVBAR SCROLL */
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  /* MOBILE MENU TOGGLE */
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }
});
