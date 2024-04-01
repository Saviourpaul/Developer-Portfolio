<i class="scroll-up" id="scroll-up"
><img
  src="assets/icons/icons8-upward-arrow.gif"
  class="socicon up-arrow"
  alt="scroll-up"
/></i>
// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });