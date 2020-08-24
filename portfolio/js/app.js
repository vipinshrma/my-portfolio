const sidebar = document.querySelector(".sidebar");
const navButton = document.querySelector("#nav-btn");

const closeButton = document.querySelector("#close-btn");

navButton.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeButton.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
