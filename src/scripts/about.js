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
        About.#div5b(div5b);
        About.#div6(div6);
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
        p3.textContent = "THE";

        const innerDivTop4 = document.createElement(`div`);
        const p4 = document.createElement(`p`);
        p4.textContent = "FOUNDER";

        const innerDivTop5 = document.createElement(`div`);


        const innerDivMid = document.createElement(`div`);
        const innerDivMid1 = document.createElement(`div`);

        const innerDivBot = document.createElement(`div`);
        const innerDivBot1 = document.createElement(`div`);
        const pBot1 = document.createElement(`p`);
        pBot1.textContent = ",,";
        const blockQuote = document.createElement(`blockquote`);
        const spanBot1 = document.createElement(`span`);
        spanBot1.textContent = "In every dish, there's a story. In every meal, there's passion. Welcome to ";
        const spanBot2 = document.createElement(`span`);
        const spanBot2a = document.createElement(`span`);
        spanBot2a.textContent = " IVAN ";
        const spanBot2b = document.createElement(`span`);
        spanBot2b.textContent = "RESTO";
        const spanBot3 = document.createElement(`span`);
        spanBot3.textContent = ", where tradition meets taste. Buon appetito!";
        const pBot2 = document.createElement(`p`);
        pBot2.textContent = "- Ivan Mangulabnan,";
        const spanBot4 = document.createElement(`span`);
        spanBot4.textContent = " FOUNDER";

        innerDivBot1.append(pBot1, blockQuote);
        blockQuote.append(spanBot1, spanBot2, spanBot3, pBot2);
        spanBot2.append(spanBot2a, spanBot2b);
        pBot2.appendChild(spanBot4);
        innerDivBot.appendChild(innerDivBot1);
        innerDivMid.appendChild(innerDivMid1);
        innerDivTop4.appendChild(p4);
        innerDivTop3.appendChild(p3);
        innerDivTop2.appendChild(p2);
        p.append(span1, span2);
        innerDivTop1.appendChild(p);
        innerDivTop.append(innerDivTop1, innerDivTop2, innerDivTop3, innerDivTop4, innerDivTop5);
        div.append(innerDivTop, innerDivMid, innerDivBot);
        div4.appendChild(div);
    }

    static #div5b(div5b) {
        const div = document.createElement("div");
        div5b.appendChild(div);

        const p = document.createElement(`p`);
        div.appendChild(p);

        const span1 = document.createElement(`span`);
        span1.textContent = "Our";
        const span2 = document.createElement(`span`);
        span2.textContent = " VISION ";
        const span3 = document.createElement(`span`);
        span3.textContent = "is to bring the heart of Italy to your table—authentic flavors, warm hospitality, and unforgettable moments.";
        p.append(span1, span2, span3);
    }

    static #div6(div6) {
        const topDiv = document.createElement(`div`);
        const botDiv = document.createElement(`div`);
        div6.append(topDiv, botDiv);

        const p = document.createElement(`p`);
        p.textContent = "FEEDBACKS";
        topDiv.appendChild(p);

        const botDiv1 = document.createElement(`div`);
        botDiv.appendChild(botDiv1);

        const name = document.createElement(`p`);
        name.classList.add(`commenters-name`);
        name.textContent = "Sophia L.";

        const div1 = document.createElement(`div`);
        div1.classList.add("gray-div");

        const div2 = document.createElement(`div`);
        div2.classList.add("white-border");

        const comment = document.createElement(`p`);
        comment.classList.add(`comment`);
        comment.textContent = "Absolutely delicious! Authentic Italian flavors, warm atmosphere, and top-notch service!";
        div2.appendChild(comment);

        const comma = document.createElement(`p`);
        comma.textContent = ",,";
        comma.classList.add("top-comma");

        const comma2 = document.createElement(`p`);
        comma2.textContent = ",,";
        comma2.classList.add("bot-comma");

        const picDiv = document.createElement(`div`);
        picDiv.classList.add(`pic-div`);

        const picInnerDiv = document.createElement(`div`);
        picInnerDiv.classList.add(`pic-inner-div`);

        picDiv.appendChild(picInnerDiv);
        botDiv1.append(div1, div2, comma, comma2, picDiv, name);

        const botDiv2 = document.createElement(`div`);
        botDiv.appendChild(botDiv2);

        const name1 = document.createElement(`p`);
        name1.classList.add(`commenters-name`);
        name1.textContent = "Mark T.";

        const div1a = document.createElement(`div`);
        div1a.classList.add("gray-div");

        const div2a = document.createElement(`div`);
        div2a.classList.add("white-border");

        const comment1 = document.createElement(`p`);
        comment1.classList.add(`comment`);
        comment1.textContent = "Stumbled in by chance—left completely amazed! Fantastic food and great service. Bravo!";
        div2a.appendChild(comment1);

        const comma1 = document.createElement(`p`);
        comma1.textContent = ",,";
        comma1.classList.add("top-comma");

        const comma2a = document.createElement(`p`);
        comma2a.textContent = ",,";
        comma2a.classList.add("bot-comma");

        const picDiv1 = document.createElement(`div`);
        picDiv1.classList.add(`pic-div`);

        const picInnerDiv1 = document.createElement(`div`);
        picInnerDiv1.classList.add(`pic-inner-div1`);

        picDiv1.appendChild(picInnerDiv1);
        botDiv2.append(div1a, div2a, comma1, comma2a, picDiv1, name1);
    }

    static showAbout() {
        About.#mainContainer.innerHTML = "";

        const mainDiv = document.createElement(`div`);
        About.#mainDiv(mainDiv);
    }
}

export const showAbout = About.showAbout;