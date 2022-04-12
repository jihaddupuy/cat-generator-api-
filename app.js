const appDiv = document.querySelector(".app");
const appHeader = document.querySelector(".header");
let catButton;

const navElement = function () {
  appHeader.innerHTML = nav();
  catButton = document.querySelector(".nav__section__cat");
  catButton.addEventListener("click", function () {
    getCat();
  });
};

const nav = function () {
  return `
    <div class="nav__section">
    <h3 class="nav__section__items nav__section__cat">New Cat</h3>
    <a class="nav__section__api-link" href="https://docs.thecatapi.com/" target="_blank"><h3 class="nav__section__items nav__section__api">Cat API</h3></a>
    </div>
    `;
};

const getCat = function () {
  fetch(` https://api.thecatapi.com/v1/images/search`)
    .then((response) => response.json())
    .then((data) => {
      const catsImgUrl = data[0].url;
      console.log(catsImgUrl);
      appDiv.innerHTML = loadCat(catsImgUrl);
    })
    .catch((err) => console.log(err));
};

const loadCat = function (catsImgUrl) {
  return `
    <h3 class="app__art-title"></h3>
    <a class="app__art-url" href='${catsImgUrl}' target='_blank'><img class="app__art-image-url" src='${catsImgUrl}'></a>
    `;
};

navElement();
