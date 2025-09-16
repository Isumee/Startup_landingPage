// 1. Animate on Scroll
AOS.init({
  once: true,
  disable: 'phone',
  duration: 500,
  easing: 'ease-out-cubic',
});

// 2. Custom Carousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const nextBtn = document.querySelector(".carousel-next");
  const prevBtn = document.querySelector(".carousel-prev");
  const slides = carousel.querySelectorAll("article");

  if (!carousel || !slides.length) return;

  // Width of one slide (including margin gap)
  const slideWidth = slides[0].offsetWidth + 24; // 24px gap from Tailwind gap-6

  // Function to move right
  const nextSlide = () => {
    carousel.scrollBy({ left: slideWidth, behavior: "smooth" });
  };

  // Function to move left
  const prevSlide = () => {
    carousel.scrollBy({ left: -slideWidth, behavior: "smooth" });
  };

  // Event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplay();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplay();
  });

  // Auto scroll every 5s
  let autoplay = setInterval(nextSlide, 5000);

  // Reset autoplay on user interaction
  const resetAutoplay = () => {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 5000);
  };
});




// 1. Animate on Scroll
// AOS.init({
//   once: true,
//   disable: 'phone',
//   duration: 500,
//   easing: 'ease-out-cubic',
// });

// // 2. Custom Carousel
// document.addEventListener("DOMContentLoaded", () => {
//   const carousel = document.querySelector(".carousel");
//   const nextBtn = document.querySelector(".carousel-next");
//   const prevBtn = document.querySelector(".carousel-prev");
//   const slides = carousel.querySelectorAll("article");

//   if (!carousel || !slides.length) return;

//   // Width of one slide (including margin gap)
//   const slideWidth = slides[0].offsetWidth + 24; // 24px gap from Tailwind gap-6

//   // Function to move right
//   const nextSlide = () => {
//     carousel.scrollBy({ left: slideWidth, behavior: "smooth" });
//   };

//   // Function to move left
//   const prevSlide = () => {
//     carousel.scrollBy({ left: -slideWidth, behavior: "smooth" });
//   };

//   // Event listeners
//   nextBtn.addEventListener("click", () => {
//     nextSlide();
//     resetAutoplay();
//   });
//   prevBtn.addEventListener("click", () => {
//     prevSlide();
//     resetAutoplay();
//   });

//   // Auto scroll every 5s
//   let autoplay = setInterval(nextSlide, 5000);

//   // Reset autoplay on user interaction
//   const resetAutoplay = () => {
//     clearInterval(autoplay);
//     autoplay = setInterval(nextSlide, 5000);
//   };
// });




// // 1. Animate on Scroll
// AOS.init({
//   once: true,
//   disable: 'phone',
//   duration: 500,
//   easing: 'ease-out-cubic',
// });

// // 2. SwiperJS Carousel
// document.addEventListener('DOMContentLoaded', () => {
//   const carousels = document.querySelectorAll('.carousel');
//   if (!carousels.length) return;

//   new Swiper('.carousel', {
//     breakpoints: {
//       320:  { slidesPerView: 1 },
//       640:  { slidesPerView: 2 },
//       1024: { slidesPerView: 3 }
//     },
//     grabCursor:     true,
//     loop:           false,
//     centeredSlides: false,
//     initialSlide:   0,
//     spaceBetween:   24,
//     autoplay: {
//       delay: 7000,
//     },
//     navigation: {
//       nextEl: '.carousel-next',
//       prevEl: '.carousel-prev',
//     },
//   });
// });