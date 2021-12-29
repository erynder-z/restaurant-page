import {
    createBackground,
    createWrapperUpper,
    createNavWrap,
    createNav,
    createFooter
} from "./modules/ui"

import {
    createHead,
} from "./modules/home"

import {
    createMenu
} from "./modules/menu"

const content = document.getElementById("content");

const initialize = (() => {
    content.appendChild(createBackground());
    const wrapperU = content.appendChild(createWrapperUpper());
    const navWrap = wrapperU.appendChild(createNavWrap());
    navWrap.appendChild(createNav());
    content.appendChild(createHead());
    content.appendChild(createFooter());

})();

const homeButton = () => {
    const homeBtn = document.getElementById("home");
    homeBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild(createBackground());
        const wrapperU = content.appendChild(createWrapperUpper());
        const navWrap = wrapperU.appendChild(createNavWrap());
        navWrap.appendChild(createNav());
        content.appendChild(createHead());
        content.appendChild(createFooter());
        homeButton();
        menuButton()
    });
}

const menuButton = () => {
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild(createBackground());
        const wrapperU = content.appendChild(createWrapperUpper());
        const navWrap = wrapperU.appendChild(createNavWrap());
        navWrap.appendChild(createNav());
        content.appendChild(createMenu());
        homeButton();
        menuButton()
    });
}

function clearContents() {
    content.innerHTML = "";
}

homeButton();
menuButton();