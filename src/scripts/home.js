const mainContainer = document.querySelector(`#content`);

const restoNameDiv = document.createElement(`div`);
const imageDiv = document.createElement(`div`);
const paragraphDiv = document.createElement(`div`);

function applyGridToMainContainer() {
    mainContainer.classList.add(`turn-to-grid`);
}

function addClassToDivs() {
    restoNameDiv.classList.add(`name`);
    imageDiv.classList.add(`image`);
    paragraphDiv.classList.add(`para`);
}

function appendChildrenToMainContainer() {
    mainContainer.append(restoNameDiv, imageDiv, paragraphDiv);
}

function addContentsToRestoNameDiv() {
    const divWrapper = document.createElement(`div`);
    divWrapper.classList.add(`name-wrapper`);

    const name = document.createElement(`h1`);
    name.classList.add(`name-style`);
    name.textContent = `IVAN`;

    const resto = document.createElement(`p`);
    resto.classList.add(`resto-style`);
    resto.textContent = `RESTO`;

    divWrapper.append(name, resto);
    restoNameDiv.appendChild(divWrapper);
}

function addContentsToImageDiv() {
    const image1 = document.createElement(`div`);
    const image2 = document.createElement(`div`);

    image1.classList.add(`imageOne`);
    image2.classList.add(`imageTwo`);

    image1.classList.add(`images`);
    image2.classList.add(`images`);

    imageDiv.append(image1, image2);
}

function addContentsToParagraphDiv() {
    const wrapper = document.createElement(`div`);
    const p = document.createElement(`p`);
    const nameSpan = document.createElement(`span`);
    const restoSpan = document.createElement(`span`);
    const pSpan = document.createElement(`span`);
    const button = document.createElement(`button`);

    nameSpan.textContent = `IVAN `;
    restoSpan.textContent = `RESTO`;
    p.textContent = "At ";
    pSpan.textContent = ", we perfect the art of pasta and Caesar salad. Our handcrafted pasta, made with time-honored techniques, pairs beautifully with bold, authentic flavors. Experience Italian simplicity at its finest.";
    button.textContent = "ORDER NOW";

    nameSpan.appendChild(restoSpan);
    p.append(nameSpan, pSpan);
    wrapper.append(p, button);
    paragraphDiv.appendChild(wrapper);
}

export function showHome() {
    applyGridToMainContainer();
    addClassToDivs();
    appendChildrenToMainContainer();
    addContentsToRestoNameDiv();
    addContentsToImageDiv();
    addContentsToParagraphDiv();
}