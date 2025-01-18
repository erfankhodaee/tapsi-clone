const ham = document.querySelector(".ham");
const navmenu = document.querySelector(".nav-menu");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navmenu.classList.toggle("active");
});
