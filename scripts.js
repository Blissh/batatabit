const swipeButton = document.getElementById("swipe-button");
const coinsTable = document.querySelector("#main-container__tables-coins");
const comissionsTable = document.querySelector(
  "#main-container__tables-comissions"
);
const spanIcon = swipeButton.querySelector("span");

swipeButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (comissionsTable.classList.toggle("hidden")) {
    coinsTable.classList.remove("hidden");
    coinsTable.classList.add("animate-left");
    swipeButton.classList.add("animate-left");
    swipeButton.classList.replace("left-position","right-position");
    spanIcon.classList.replace("arrow-left","arrow-right");
  } else {
    coinsTable.classList.add("hidden");
    swipeButton.classList.replace("right-position","left-position");
    spanIcon.classList.replace("arrow-right","arrow-left");
  }
});
