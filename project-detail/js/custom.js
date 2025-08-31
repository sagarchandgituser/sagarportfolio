
// sticky header js start here
window.addEventListener("scroll", function() {
  const header = document.querySelector(".site_header");
  header.classList.toggle("sticky", window.scrollY > 100);
});
// sticky header js end here

// Always scroll to top when the page loads
    document.addEventListener("DOMContentLoaded", function () {
      // Thumbs slider
      var thumbsSwiper = new Swiper(".thumbs-slider", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

      // Main slider
      var mainSwiper = new Swiper(".main-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: thumbsSwiper,
        },
      });
    });

