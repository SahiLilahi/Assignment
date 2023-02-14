const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function () {
  navbarMenu.classList.toggle("show");
});

// Smooth scroll to section on click
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    navbarMenu.classList.remove("show");
  });
});

// Auto play carousel
const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelectorAll(".carousel-item");
let currentItemIndex = 0;

function showNextItem() {
  carouselItems[currentItemIndex].classList.remove("active");
  currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
  carouselItems[currentItemIndex].classList.add("active");
}

setInterval(showNextItem, 5000);

const form = document.querySelector("#contact-form");
const status = document.querySelector("#status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch("/submit-form.php", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  status.innerHTML = data.message;
  form.reset();
});
