$(document).ready(function () {
  // Hamburger toggle
  const hamburger = $(".hamburger");
  const navLinks = $(".nav-links");

  function toggleMenu() {
    navLinks.toggleClass("open");
    const isOpen = hamburger.hasClass("open");

    hamburger
      .toggleClass("open")
      .html(
        isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>'
      );
  }

  hamburger.on("click keypress", function (e) {
    if (e.type === "click" || e.key === "Enter") {
      toggleMenu();
    }
  });

  // Slider functionality
  let slides = $(".slide");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.removeClass("active").css("opacity", 0);
    slides.eq(index).addClass("active").css("opacity", 1);
  }

  function nextSlide() {
    currentSlide = currentSlide + 1;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = currentSlide - 1;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
  }

  $(".next").on("click", function () {
    nextSlide();
    resetAutoplay();
  });

  $(".prev").on("click", function () {
    prevSlide();
    resetAutoplay();
  });

  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 2500);
  }

  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }

  showSlide(currentSlide);
  startAutoplay();
});
