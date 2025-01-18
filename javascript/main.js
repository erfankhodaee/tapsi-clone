const ham = document.querySelector(".ham");
const navmenu = document.querySelector(".nav-menu");
const banner = document.querySelector(".banner");


ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navmenu.classList.toggle("active");
  banner.classList.toggle("active");
});
