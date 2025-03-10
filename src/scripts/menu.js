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
        Menu.#firstSetDivContent(firstSetDiv);
        menuContainer.append(theMenuDiv, firstSetDiv, secondSetDiv, dnd);
    }

    static #menuDivContent(theMenuDiv) {
        const wrapper = document.createElement(`div`);
        wrapper.classList.add(`the-menu-wrapper`);

        const theMenu = document.createElement(`h2`);
        theMenu.classList.add(`the-menu`);
        theMenu.textContent = "THE"

        const menu = document.createElement(`span`);
        menu.classList.add(`span-menu`);
        menu.textContent = "MENU";

        const line = document.createElement(`hr`);

        theMenu.appendChild(menu);
        wrapper.append(theMenu, line);
        theMenuDiv.appendChild(wrapper);
    }

    static #firstSetDivContent(firstSetDiv) {
        const firstWrapper = document.createElement(`div`);
        firstWrapper.classList.add(`first-wrapper`);

        const appetizer = document.createElement(`div`);
        appetizer.classList.add(`appetizer-div`);

        const topDiv = document.createElement(`div`);
        topDiv.classList.add(`appetizer-top`);
        const appetizerText = document.createElement(`h3`);
        appetizerText.textContent = "ANTIPASTI";

        const botDiv = document.createElement(`div`);
        botDiv.classList.add(`appetizer-bot`);
        const ul = document.createElement(`ul`);
        const li1 = document.createElement(`li`);
        const span1Title = document.createElement(`span`);
        span1Title.textContent = "Bruschetta";
        const span1Price = document.createElement(`span`);
        span1Price.textContent = "$5";

        const li2 = document.createElement(`li`);
        const span2Title = document.createElement(`span`);
        span2Title.textContent = "Caprese Salad";
        const span2Price = document.createElement(`span`);
        span2Price.textContent = "$6";

        const li3 = document.createElement(`li`);
        const span3Title = document.createElement(`span`);
        span3Title.textContent = "Carpaccio";
        const span3Price = document.createElement(`span`);
        span3Price.textContent = "$7";

        const li4 = document.createElement(`li`);
        const span4Title = document.createElement(`span`);
        span4Title.textContent = "Prosciutto e Melone";
        const span4Price = document.createElement(`span`);
        span4Price.textContent = "$8";

        const li5 = document.createElement(`li`);
        const span5Title = document.createElement(`span`);
        span5Title.textContent = "Arancini";
        const span5Price = document.createElement(`span`);
        span5Price.textContent = "$9";

        const firstCourse = document.createElement(`div`);
        firstCourse.classList.add(`first-course-div`);

        const firstCourseTop = document.createElement(`div`);
        firstCourseTop.classList.add(`first-course-top`);
        const firstCourseText = document.createElement(`h3`);
        firstCourseText.textContent = "PRIMI PIATTI";

        const firstCourseBot = document.createElement(`div`);
        firstCourseBot.classList.add(`first-course-bot`);
        const firstUl = document.createElement(`ul`);
        const fli1 = document.createElement(`li`);
        const fspan1Title = document.createElement(`span`);
        fspan1Title.textContent = "Spaghetti Carbonara";
        const fspan1Price = document.createElement(`span`);
        fspan1Price.textContent = "$14";

        const fli2 = document.createElement(`li`);
        const fspan2Title = document.createElement(`span`);
        fspan2Title.textContent = "Penne Arrabbiata";
        const fspan2Price = document.createElement(`span`);
        fspan2Price.textContent = "$15";

        const fli3 = document.createElement(`li`);
        const fspan3Title = document.createElement(`span`);
        fspan3Title.textContent = "Lasagna al Forno";
        const fspan3Price = document.createElement(`span`);
        fspan3Price.textContent = "$16";

        const fli4 = document.createElement(`li`);
        const fspan4Title = document.createElement(`span`);
        fspan4Title.textContent = "Risotto alla Milanese";
        const fspan4Price = document.createElement(`span`);
        fspan4Price.textContent = "$17";

        const fli5 = document.createElement(`li`);
        const fspan5Title = document.createElement(`span`);
        fspan5Title.textContent = "Gnocchi alla Sorrentina";
        const fspan5Price = document.createElement(`span`);
        fspan5Price.textContent = "$18";

        fli1.append(fspan1Title, fspan1Price);
        fli2.append(fspan2Title, fspan2Price);
        fli3.append(fspan3Title, fspan3Price);
        fli4.append(fspan4Title, fspan4Price);
        fli5.append(fspan5Title, fspan5Price);
        firstUl.append(fli1, fli2, fli3, fli4, fli5);
        firstCourseBot.appendChild(firstUl);
        firstCourseTop.appendChild(firstCourseText);
        firstCourse.append(firstCourseTop, firstCourseBot);
        li1.append(span1Title, span1Price);
        li2.append(span2Title, span2Price);
        li3.append(span3Title, span3Price);
        li4.append(span4Title, span4Price);
        li5.append(span5Title, span5Price);
        ul.append(li1, li2, li3, li4, li5);
        botDiv.appendChild(ul);
        topDiv.appendChild(appetizerText);
        appetizer.append(topDiv, botDiv);
        firstWrapper.append(appetizer, firstCourse);
        firstSetDiv.appendChild(firstWrapper);
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