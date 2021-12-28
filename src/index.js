import {
    createBackground,
    createWrapperUpper,
    createNavWrap,
    createNav,
    createHead,
    createFooter
} from "./modules/home";

const initialize = (() => {
    const content = document.getElementById("content");
    content.appendChild(createBackground());
    const wrapperU = content.appendChild(createWrapperUpper());
    const navWrap = wrapperU.appendChild(createNavWrap());
    navWrap.appendChild(createNav());
    content.appendChild(createHead());
    content.appendChild(createFooter());

})();
