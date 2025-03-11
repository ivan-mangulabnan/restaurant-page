class About {
    static #mainContainer = document.querySelector(`#content`);

    static #mainDiv(mainDiv) {
        mainDiv.classList.add(`main-div`);
        About.#mainContainer.appendChild(mainDiv);

        const div1 = document.createElement(`div`);
        div1.classList.add(`div-one`);
        const div2 = document.createElement(`div`);
        div2.classList.add(`div-two`);
        const div3a = document.createElement(`div`);
        div3a.classList.add(`div-three-a`);
        const div3b = document.createElement(`div`);
        div3b.classList.add(`div-three-b`);
        const div4 = document.createElement(`div`);
        div4.classList.add(`div-four`);
        const div5a = document.createElement(`div`);
        div5a.classList.add(`div-five-a`);
        const div5b = document.createElement(`div`);
        div5b.classList.add(`div-five-b`);
        const div6 = document.createElement(`div`);
        div6.classList.add(`div-six`);

        mainDiv.append(div1, div2, div3a, div3b, div4, div5a, div5b, div6);
        About.#div2(div2);
        About.#div3a(div3a);
        About.#div4(div4);
    }

    static #div2(div2) {
        const div = document.createElement(`div`);
        div2.appendChild(div);

        const h2 = document.createElement(`h2`);
        h2.textContent = "HISTORY";

        const innerDiv = document.createElement(`div`);

        const p = document.createElement(`p`);
        p.textContent = "Founded with passion and a love for authentic Italian cuisine, Ivan Resto opened its doors in 2025 with a simple mission—to bring the heart of Italy to our guests. Inspired by traditional family recipes and the warm hospitality of Italian trattorias, we serve classic dishes made from the finest ingredients, just like nonna would make.";

        const button = document.createElement(`button`);
        button.textContent = "LEARN MORE";

        innerDiv.append(p, button);
        div.append(h2, innerDiv);
    }

    static #div3a(div3a) {
        const div = document.createElement(`div`);

        const p = document.createElement(`p`);
        const span1 = document.createElement(`span`);
        span1.textContent = "Our";
        const span2 = document.createElement(`span`);
        span2.textContent = " MISSION ";
        const span3 = document.createElement(`span`);
        span3.textContent = "is to bring the heart and soul of authentic Italian cuisine to every plate.";

        p.append(span1, span2, span3);
        div.appendChild(p);
        div3a.appendChild(div);
    }

    static #div4(div4) {
        const div = document.createElement(`div`);

        const innerDivTop = document.createElement(`div`);

        const innerDivTop1 = document.createElement(`div`);
        const p = document.createElement(`p`);
        const span1 = document.createElement(`span`);
        span1.textContent = "W";
        const span2 = document.createElement(`span`);
        span2.textContent = "ords";

        const innerDivTop2 = document.createElement(`div`);
        const p2 = document.createElement(`p`);
        p2.textContent = "FROM";

        const innerDivTop3 = document.createElement(`div`);
        const p3 = document.createElement(`p`);
        p3.textContent = "OUR";

        const innerDivTop4 = document.createElement(`div`);
        const p4 = document.createElement(`p`);
        p4.textContent = "OWNER";

        const innerDivTop5 = document.createElement(`div`);


        const innerDivMid = document.createElement(`div`);
        const innerDivBot = document.createElement(`div`);

        innerDivTop4.appendChild(p4);
        innerDivTop3.appendChild(p3);
        innerDivTop2.appendChild(p2);
        p.append(span1, span2);
        innerDivTop1.appendChild(p);
        innerDivTop.append(innerDivTop1, innerDivTop2, innerDivTop3, innerDivTop4, innerDivTop5);
        div.append(innerDivTop, innerDivMid, innerDivBot);
        div4.appendChild(div);
    }

    static showAbout() {
        const mainDiv = document.createElement(`div`);
        About.#mainDiv(mainDiv);
    }
}

export const showAbout = About.showAbout;