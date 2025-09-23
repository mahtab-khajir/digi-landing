var swiper = new Swiper(".storySwiper", {
  navigation: {
    nextEl: ".story-next",
    prevEl: ".story-prev",
  },
  slidesPerView: 12.5,
  spaceBetween: 30,
  slidesPerGroup: 2,
  freeMode: true,
});

var swiper = new Swiper(".heroSwiper", {
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
  autoplay: {
    delay: 5000,
  },

  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".special-offer", {
  navigation: {
    nextEl: ".special-offer-next",
    prevEl: ".special-offer-prev",
  },
  slidesPerView: 8,
  spaceBetween: 2,
});
