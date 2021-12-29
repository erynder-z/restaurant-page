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

const menuButton = () => {
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild(createBackground());
        const wrapperU = content.appendChild(createWrapperUpper());
        const navWrap = wrapperU.appendChild(createNavWrap());
        navWrap.appendChild(createNav());
        content.appendChild(createMenu());
    });
}

function clearContents() {
    content.innerHTML = "";
}

menuButton();