document.addEventListener("DOMContentLoaded", function () {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  let slideIndex = 0;

  function showSlide(index) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("visible");
      dots[i].classList.remove("active");
    }

    // Show the selected slide
    slides[index].classList.add("visible");
    dots[index].classList.add("active");
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  // Show the first slide immediately
  showSlide(0);

  // Start the slideshow
  setInterval(nextSlide, 5000);
});

// Update footer with the current year
const yearSpan = document.createElement("span");
const footer = document.querySelector("footer p");
yearSpan.textContent = new Date().getFullYear();
footer.innerHTML = `&copy; ${yearSpan.textContent} Drink Your Films. All Rights Reserved.`;

// Back to top button functionality
const backToTop = document.createElement("div");
backToTop.innerHTML = "⬆";
backToTop.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ff8c00;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
