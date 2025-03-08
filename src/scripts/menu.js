class Menu {

    static #content = document.querySelector(`#content`);

    static #addClassToMain(main) {
        main.classList.add(`menu-container`);
    }

    static #appendToMainContent(main) {
        Menu.#content.appendChild(main);
    }

    static #menuContainerContent(menuContainer) {
        const theMenuDiv = document.createElement(`div`);
        theMenuDiv.classList.add(`menu-main-div`);

        const firstSetDiv = document.createElement(`div`);
        firstSetDiv.classList.add(`first-set-div`);

        const secondSetDiv = document.createElement(`div`);
        secondSetDiv.classList.add(`second-set-div`);

        const dnd = document.createElement(`div`);
        dnd.classList.add(`dnd-div`);

        Menu.#menuDivContent(theMenuDiv);
        menuContainer.append(theMenuDiv, firstSetDiv, secondSetDiv, dnd);
    }

    static #menuDivContent(theMenuDiv) {
        const wrapper = document.createElement(`div`);
        wrapper.classList.add(`the-menu-wrapper`);

        const theMenu = document.createElement(`h2`);
        theMenu.classList.add(`the-menu`);

        wrapper.appendChild(theMenu);
        theMenuDiv.appendChild(wrapper);
    }

    static showMenu() {
        Menu.#content.innerHTML = "";

        const menuContainer = document.createElement(`div`);

        Menu.#addClassToMain(menuContainer);
        Menu.#appendToMainContent(menuContainer);
        Menu.#menuContainerContent(menuContainer);
    }
}

export const showMenu = Menu.showMenu;