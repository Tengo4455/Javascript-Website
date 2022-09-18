const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//FILTER

const liItem = document.querySelectorAll("ul li");
const imgItem = document.querySelectorAll(".product-nft img");

liItem.forEach((li) => {
  li.onclick = function () {
    //active
    liItem.forEach((li) => {
      li.className = "";
    });
    li.className = "active-nft";

    //Filter
    const value = li.textContent;
    imgItem.forEach((img) => {
      img.style.display = "none";
      if (
        img.getAttribute("data-filter") == value.toUpperCase() ||
        value == "Moon NFTs"
      ) {
        img.style.display = "block";
      }
    });
  };
});
