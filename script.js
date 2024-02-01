// script.js

document.addEventListener("DOMContentLoaded", function () {
  const watchCards = document.querySelectorAll(".watch-card");

  watchCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });
});
