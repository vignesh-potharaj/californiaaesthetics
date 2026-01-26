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
/* GALLERY TAP BEHAVIOR (MOBILE-FIRST) */
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    // Remove active from others
    galleryImages.forEach((other) => {
      if (other !== img) other.classList.remove("active");
    });

    // Toggle current
    img.classList.toggle("active");
  });
});
