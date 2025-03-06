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
    const p = document.createElement(`p`);
    const span = document.createElement(`span`);

    p.classList.add(`i`);
    span.classList.add(`van`);
    
    span.textContent = `VAN'S RESTO`;
    p.textContent = `I`;
    p.appendChild(span);
    restoNameDiv.appendChild(p);
}

function addContentsToImageDiv() {
    const image1 = document.createElement(`div`);
    const image2 = document.createElement(`div`);
    const image3 = document.createElement(`div`);

    image1.classList.add(`imageOne`);
    image2.classList.add(`imageTwo`);
    image3.classList.add(`imageThree`);

    image1.classList.add(`images`);
    image2.classList.add(`images`);
    image3.classList.add(`images`);

    imageDiv.append(image1, image2, image3);
}

export function showHome() {
    applyGridToMainContainer();
    addClassToDivs();
    appendChildrenToMainContainer();
    addContentsToRestoNameDiv();
    addContentsToImageDiv();
}