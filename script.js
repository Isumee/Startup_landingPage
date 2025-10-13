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

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const monthlyLabel = document.getElementById("monthly-label");
  const yearlyLabel = document.getElementById("yearly-label");

  // Define pricing plans
  const prices = {
    monthly: [35, 55, 85],
    yearly: [29, 49, 79],
  };
  const priceElements = document.querySelectorAll(".price-amount");

  // Function to update prices
  function updatePrices() {
    const isYearly = toggle.checked;
    const plan = isYearly ? prices.yearly : prices.monthly;

    // Update prices dynamically
    priceElements.forEach((el, i) => {
      el.textContent = plan[i];
    });

    // Update label styles
    if (isYearly) {
      yearlyLabel.classList.add("text-indigo-500", "font-semibold");
      monthlyLabel.classList.remove("text-indigo-500", "font-semibold");
    } else {
      monthlyLabel.classList.add("text-indigo-500", "font-semibold");
      yearlyLabel.classList.remove("text-indigo-500", "font-semibold");
    }
  }

  // Attach event listener
  toggle.addEventListener("change", updatePrices);

  // Initialize prices on load
  updatePrices();
});
