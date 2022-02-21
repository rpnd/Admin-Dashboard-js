const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Menu display status
const sideMenuDisplay = (disp) => (sideMenu.style.display = disp);

//show sidebar
menuBtn.addEventListener("click", () => {
  sideMenuDisplay("block");
});

//Close sidebar
// --1-> X button
closeBtn.addEventListener("click", () => {
  sideMenuDisplay("none");
});
// --2-> Press ESC button
document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    sideMenuDisplay("none");
  }
});

//change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
