AOS.init({
  once: true,
  disable: "phone",
  duration: 500,
  easing: "ease-out-cubic",
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const nextBtn = document.querySelector(".carousel-next");
  const prevBtn = document.querySelector(".carousel-prev");
  const slides = carousel.querySelectorAll("article");

  if (!carousel || !slides.length) return;

 
  const slideWidth = slides[0].offsetWidth + 24; 

  const nextSlide = () => {
    carousel.scrollBy({ left: slideWidth, behavior: "smooth" });
  };

  const prevSlide = () => {
    carousel.scrollBy({ left: -slideWidth, behavior: "smooth" });
  };


  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplay();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplay();
  });


  let autoplay = setInterval(nextSlide, 5000);

  const resetAutoplay = () => {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 5000);
  };
});

function switchCategory(category) {
  document.querySelectorAll("[data-category]").forEach((el) => {
    el.style.display =
      el.getAttribute("data-category") === category ? "block" : "none";
  });

  document.querySelectorAll("[data-button]").forEach((btn) => {
    btn.classList.toggle(
      "bg-indigo-500",
      btn.getAttribute("data-button") === category
    );
    btn.classList.toggle(
      "text-white",
      btn.getAttribute("data-button") === category
    );
    btn.classList.toggle(
      "bg-slate-800",
      btn.getAttribute("data-button") !== category
    );
    btn.classList.toggle(
      "text-slate-200",
      btn.getAttribute("data-button") !== category
    );
    btn.classList.toggle(
      "border-gray-800",
      btn.getAttribute("data-button") === category
    );
  });
}

document.addEventListener("DOMContentLoaded", () => switchCategory("1"));

