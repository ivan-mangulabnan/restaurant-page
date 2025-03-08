import "./styles.css";
import { mainContainer, showHome } from "./scripts/home.js";
import { showMenu } from "./scripts/menu.js";

const nav = document.querySelector(`nav`);
const homeButton = document.querySelector(`.home`);
const menuButton = document.querySelector(`.menu`);
const aboutButton = document.querySelector(`.about`);

function addClassPressed(event) {
    if (![homeButton, menuButton, aboutButton].includes(event.target)) return;
    if (event.target !== homeButton) mainContainer.classList.remove(`turn-to-grid`);
    homeButton.classList.remove(`pressed`);
    menuButton.classList.remove(`pressed`);
    aboutButton.classList.remove(`pressed`);

    event.target.classList.add(`pressed`);
}

nav.addEventListener(`click`, addClassPressed);

document.addEventListener(`DOMContentLoaded`, () => {
    homeButton.classList.add(`pressed`);
    showHome();
});

homeButton.addEventListener(`click`, () => {
    mainContainer.innerHTML = "";
    showHome();
});

menuButton.addEventListener(`click`, () => {
    mainContainer.innerHTML = "";
    showMenu();
})
