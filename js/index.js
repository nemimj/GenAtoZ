let bar = document.getElementById("bar");
let menu = document.querySelector(".menu");
let close = document.querySelector("#close");
let mainImg = document.querySelector(".main-img");
let smallImg = document.querySelectorAll(".small-img");

bar.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

close.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});

smallImg[0].onclick = () => {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = () => {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = () => {
  mainImg.src = smallImg[2].src;
};
