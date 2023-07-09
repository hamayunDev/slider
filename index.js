//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    loop: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  keyboard: true,
});
