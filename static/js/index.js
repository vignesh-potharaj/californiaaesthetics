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
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
/* SERVICES ACCORDION */
document.querySelectorAll(".service-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const box = btn.closest(".service-box");

    document.querySelectorAll(".service-box").forEach((b) => {
      if (b !== box) b.classList.remove("active");
    });

    box.classList.toggle("active");
  });
});
