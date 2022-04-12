const appDiv = document.querySelector(".app");
const appHeader = document.querySelector(".header");
let artButton;

const navElement = function () {
  appHeader.innerHTML = nav();
  artButton = document.querySelector(".nav__section__art");
  artButton.addEventListener("click", function () {
    getArt();
  });
};

const nav = function () {
  return `
    <div class="nav__section">
    <h3 class="nav__section__items nav__section__art">New Art</h3>
    <a class="nav__section__api-link" href="https://github.com/harvardartmuseums/api-docs" target="_blank"><h3 class="nav__section__items nav__section__api">Harvard API</h3></a>
    </div>
    `;
};

const getArt = function () {
  fetch(` https://api.thecatapi.com/v1/images/search`)
    .then((response) => response.json())
    .then((data) => {
      const catsImgUrl = data[0].url;
      console.log(catsImgUrl);
      appDiv.innerHTML = loadArt(catsImgUrl);
    })
    .catch((err) => console.log(err));
};

const loadArt = function (catsImgUrl) {
  return `
    <h3 class="app__art-title"></h3>
    <a class="app__art-url" href='${catsImgUrl}' target='_blank'><img class="app__art-image-url" src=''></a>
    `;
};

navElement();
