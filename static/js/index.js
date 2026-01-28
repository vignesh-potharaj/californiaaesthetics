console.log("index.js loaded");


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const backdrop = document.querySelector(".mobile-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-links a");

  /* NAVBAR SCROLL */
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  if (!menuToggle || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  /* TOGGLE */
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
  });

  /* CLOSE ON LINK CLICK */
  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  /* CLOSE ON BACKDROP CLICK */
  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  /* ESC KEY */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMenu();
    }
  });
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
