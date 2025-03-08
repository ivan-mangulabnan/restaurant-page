export const mainContainer = document.querySelector(`#content`);

function applyGridToMainContainer() {
    mainContainer.classList.add(`turn-to-grid`);
}

function addClassToDivs(logoDiv, imDiv, paraDiv) {
    logoDiv.classList.add(`name`);
    imDiv.classList.add(`image`);
    paraDiv.classList.add(`para`);
}

function appendChildrenToMainContainer(logoDiv, imDiv, paraDiv) {
    mainContainer.append(logoDiv, imDiv, paraDiv);
}

function addContentsToRestoNameDiv(logoDiv) {
    const divWrapper = document.createElement(`div`);
    divWrapper.classList.add(`name-wrapper`);

    const name = document.createElement(`h1`);
    name.classList.add(`name-style`);
    name.textContent = `IVAN`;

    const resto = document.createElement(`p`);
    resto.classList.add(`resto-style`);
    resto.textContent = `RESTO`;

    divWrapper.append(name, resto);
    logoDiv.appendChild(divWrapper);
}

function addContentsToImageDiv(imDiv) {
    const image1 = document.createElement(`div`);
    const image2 = document.createElement(`div`);

    image1.classList.add(`imageOne`);
    image2.classList.add(`imageTwo`);

    image1.classList.add(`images`);
    image2.classList.add(`images`);

    imDiv.append(image1, image2);
}

function addContentsToParagraphDiv(paraDiv) {
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
    paraDiv.appendChild(wrapper);
}

export function showHome() {
    mainContainer.innerHTML = "";

    applyGridToMainContainer();

    const restoNameDiv = document.createElement(`div`);
    const imageDiv = document.createElement(`div`);
    const paragraphDiv = document.createElement(`div`);

    appendChildrenToMainContainer(restoNameDiv, imageDiv, paragraphDiv);
    addClassToDivs(restoNameDiv, imageDiv, paragraphDiv);
    addContentsToRestoNameDiv(restoNameDiv);
    addContentsToImageDiv(imageDiv);
    addContentsToParagraphDiv(paragraphDiv);
}