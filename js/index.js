let bar = document.getElementById("bar");
let menu = document.querySelector(".menu");
let close = document.querySelector("#close");

bar.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

close.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});
