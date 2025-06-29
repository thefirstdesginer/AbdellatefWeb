// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (typeof GLightbox === "function") {
  const lightbox = GLightbox({ selector: '.glightbox' });
}

const langToggle = document.getElementById("langToggle");

let swiperInstance = null;
let heroSwiperInstance = null;


// Slider Hero Section

function initSwiper() {
  if (typeof Swiper !== "function" || !document.querySelector('.products-slider')) return;

  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }

  const sliderElement = document.querySelector('.products-slider');
  sliderElement.style.direction = document.documentElement.dir;

  const isRTL = document.documentElement.dir === "rtl";

  swiperInstance = new Swiper('.products-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    rtl: isRTL,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      480: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 }
    }
  });
}

function initHeroSwiper() {
  if (heroSwiperInstance) {
    heroSwiperInstance.destroy(true, true);
    heroSwiperInstance = null;
  }

  heroSwiperInstance = new Swiper('.home-hero-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.hero-swiper-button-next',
      prevEl: '.hero-swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1500
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initSwiper();
  initHeroSwiper();
});
