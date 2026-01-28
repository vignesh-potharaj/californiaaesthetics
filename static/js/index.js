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

  /* MOBILE MENU */
  if (!menuToggle || !mobileMenu) {
    console.error("Hamburger elements missing");
    return;
  }

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
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
