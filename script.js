$(document).ready(function () {
  // Hamburger toggle
  const $hamburger = $(".hamburger");
  const $navLinks = $(".nav-links");

  function toggleMenu() {
    $navLinks.toggleClass("open");
    const isOpen = $hamburger.hasClass("open");

    $hamburger
      .toggleClass("open")
      .html(
        isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>'
      );
  }

  $hamburger.on("click keypress", function (e) {
    if (e.type === "click" || e.key === "Enter") {
      toggleMenu();
    }
  });

  // Slider functionality
  let $slides = $(".slide");
  let current = 0;
  let slideInterval;

  function showSlide(index) {
    $slides.removeClass("active").css("opacity", 0);
    $slides.eq(index).addClass("active").css("opacity", 1);
  }

  function nextSlide() {
    current = (current + 1) % $slides.length;
    showSlide(current);
  }

  $(".next").on("click", function () {
    nextSlide();
    resetAutoplay();
  });

  $(".prev").on("click", function () {
    current = (current - 1 + $slides.length) % $slides.length;
    showSlide(current);
    resetAutoplay();
  });

  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 2500);
  }

  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }

  showSlide(current);
  startAutoplay();
});
