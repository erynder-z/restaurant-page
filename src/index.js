import "./style.css";

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

import {
    createHours,
    createReservations,
    createStatus,
    createContacts
} from "./modules/contact"

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
        menuButton();
        contactButton();
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
        content.appendChild(createFooter());
        homeButton();
        menuButton();
        contactButton();
    });
}

const contactButton = () => {
    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild(createBackground());
        const wrapperU = content.appendChild(createWrapperUpper());
        const navWrap = wrapperU.appendChild(createNavWrap());
        navWrap.appendChild(createNav());
        content.appendChild(createHours());
        content.appendChild(createReservations());
        content.appendChild(createStatus());
        content.appendChild(createContacts());
        content.appendChild(createFooter());
        homeButton();
        menuButton();
        contactButton();
    });
}

function clearContents() {
    content.innerHTML = "";
}

homeButton();
menuButton();
contactButton();