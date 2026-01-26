const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });