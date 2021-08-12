const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav > .nav__links");
  const navLinks = document.querySelector(".nav__links li");
  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlider();
