import "./normalize.css";
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

    const homeTab = document.getElementById("home");
    homeTab.parentElement.style.background = "orange";

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

        const homeTab = document.getElementById("home");
        homeTab.parentElement.style.background = "orange";
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

        const menuTab = document.getElementById("menu");
        menuTab.parentElement.style.background = "orange";
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

        const contactTab = document.getElementById("contact");
        contactTab.parentElement.style.background = "orange";
    });
}

function clearContents() {
    content.innerHTML = "";
}

homeButton();
menuButton();
contactButton();