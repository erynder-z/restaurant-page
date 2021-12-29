/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHours": () => (/* binding */ createHours),
/* harmony export */   "createReservations": () => (/* binding */ createReservations),
/* harmony export */   "createStatus": () => (/* binding */ createStatus),
/* harmony export */   "createContacts": () => (/* binding */ createContacts)
/* harmony export */ });
const createHours = () => {

    const hours = document.createElement("div");
    hours.classList.add("hours");
    const heading1 = document.createElement("h3");
    heading1.innerText = "Opening hours:";
    hours.appendChild(heading1);
    const ul = document.createElement("ul");
    hours.appendChild(ul);
    const li1 = document.createElement("li");
    li1.innerText = "Monday (closed)";
    ul.appendChild(li1);
    const li2 = document.createElement("li");
    li2.innerText = "Tuesday: 11:00 - 22:00";
    ul.appendChild(li2);
    const li3 = document.createElement("li");
    li3.innerText = "Wednesday 11:00 - 22:00";
    ul.appendChild(li3);
    const li4 = document.createElement("li");
    li4.innerText = "Thursday 11:00 - 22:00";
    ul.appendChild(li4);
    const li5 = document.createElement("li");
    li5.innerText = "Friday 11:00 - 22:00";
    ul.appendChild(li5);
    const li6 = document.createElement("li");
    li6.innerText = "Saturday 11:00 - 22:00";
    ul.appendChild(li6);
    const li7 = document.createElement("li");
    li7.innerText = "Sunday 11:00 - 22:00";
    ul.appendChild(li7);

    return hours
}

const createReservations = () => {

    const reservations = document.createElement("div");
    reservations.classList.add("reservations");
    const heading1 = document.createElement("h3");
    heading1.innerText = "Tabvle reservations";
    reservations.appendChild(heading1);
    const input = document.createElement("input");
    input.type = "datetime-local";
    reservations.appendChild(input);

    return reservations
}

const createStatus = () => {
    const status = document.createElement("div");
    status.classList.add("status");
    const heading1 = document.createElement("h3");
    heading1.innerText = "Current status:";
    status.appendChild(heading1);
    const current = document.createElement("div");
    current.id = "current-status";
    current.innerText = "Not so busy";
    status.appendChild(current);

    return status
}

const createContacts = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("contact-wrapper");
    const contact = document.createElement("div");
    contact.classList.add("contact");
    wrapper.appendChild(contact);
    const heading1 = document.createElement("h2");
    heading1.innerText = "Contact us:";
    contact.appendChild(heading1);
    const textarea = document.createElement("textarea");
    textarea.classList.add("input-textarea");
    textarea.placeholder = "Enter your message here...";
    contact.appendChild(textarea);

    const contact2 = document.createElement("div");
    contact2.classList.add("contact");
    wrapper.appendChild(contact2);
    const button = document.createElement("button");
    button.classList.add("submit-button");
    button.id = "submit";
    button.type = "submit";
    button.innerText = "Send message";
    contact2.appendChild(button);

    const contact3 = document.createElement("div");
    contact3.classList.add("contact");
    wrapper.appendChild(contact3);
    const heading2 = document.createElement("h4");
    heading2.innerText = "Mail:";
    contact3.appendChild(heading2);
    const link = document.createElement("a");
    link.href = "mailto:yamato@nood.le";
    link.innerText = " yamato@nood.le"
    heading2.appendChild(link);
    const heading3 = document.createElement("h4");
    heading3.innerText = "Phone: +49 1234 / 56789";
    contact3.appendChild(heading3);


    return wrapper

}



/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHead": () => (/* binding */ createHead)
/* harmony export */ });
const createHead = () => {
    const head = document.createElement("div");
    head.classList.add("head-section");

    const h1 = document.createElement("h1");
    h1.innerText = "Yamato Ramen";
    head.appendChild(h1);

    const h3 = document.createElement("h3");
    h3.innerText = "Yummy ラーメン";
    head.appendChild(h3);

    const p1 = document.createElement("p");
    p1.innerText = "Autentic japanese style Ramen for every taste.";

    const ul = document.createElement("ul");
    p1.appendChild(ul);
    head.append(p1);

    const li1 = document.createElement("li");
    li1.innerText = "Shōyu-Ramen";
    const li2 = document.createElement("li");
    li2.innerText = "Shio-Ramen";
    const li3 = document.createElement("li");
    li3.innerText = "Miso-Ramen";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    const p2 = document.createElement("p");
    p2.innerText = "Try them all and discover your favorite! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum obcaecati aliquam nisi unde provident ad debitis harum ea sed natus, ut quibusdam inventore, assumenda vel! Molestias maiores temporibus odit provident ratione quos odio impedit laborum magnam sunt, asperiores distinctio et necessitatibus dicta ut doloribus commodi ipsa quidem libero quae. Modi.";
    p1.appendChild(p2);

    return head
}



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
const createMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("gallery");

    const responsive1 = document.createElement("div");
    responsive1.classList.add("responsive");
    menu.appendChild(responsive1);
    const item1 = document.createElement("div");
    item1.classList.add("gallery");
    responsive1.appendChild(item1);
    const a1 = document.createElement("a");
    a1.target = "_blank";
    a1.href = "../src/images/ramen4.jpg";
    item1.appendChild(a1);
    const img1 = document.createElement("img");
    img1.src = "../src/images/ramen4.jpg";
    img1.alt = "Ramen";
    a1.appendChild(img1);
    const desc1 = document.createElement("div");
    desc1.classList.add("desc");
    desc1.innerText = "Ramen\r\n 9,50€";
    item1.appendChild(desc1);

    const responsive2 = document.createElement("div");
    responsive2.classList.add("responsive");
    menu.appendChild(responsive2);
    const item2 = document.createElement("div");
    item2.classList.add("gallery");
    responsive2.appendChild(item2);
    const a2 = document.createElement("a");
    a2.target = "_blank";
    a2.href = "../src/images/ramen2.jpg";
    item2.appendChild(a2);
    const img2 = document.createElement("img");
    img2.src = "../src/images/ramen2.jpg";
    img2.alt = "Ramen";
    a2.appendChild(img2);
    const desc2 = document.createElement("div");
    desc2.classList.add("desc");
    desc2.innerText = "Ramen\r\n 10,50€";
    item2.appendChild(desc2);

    const responsive3 = document.createElement("div");
    responsive3.classList.add("responsive");
    menu.appendChild(responsive3);
    const item3 = document.createElement("div");
    item3.classList.add("gallery");
    responsive3.appendChild(item3);
    const a3 = document.createElement("a");
    a3.target = "_blank";
    a3.href = "../src/images/ramen3.jpg";
    item3.appendChild(a3);
    const img3 = document.createElement("img");
    img3.src = "../src/images/ramen3.jpg";
    img3.alt = "Ramen";
    a3.appendChild(img3);
    const desc3 = document.createElement("div");
    desc3.classList.add("desc");
    desc3.innerText = "Ramen\r\n 11,00€";
    item3.appendChild(desc3);

    const responsive4 = document.createElement("div");
    responsive4.classList.add("responsive");
    menu.appendChild(responsive4);
    const item4 = document.createElement("div");
    item4.classList.add("gallery");
    responsive4.appendChild(item4);
    const a4 = document.createElement("a");
    a4.target = "_blank";
    a4.href = "../src/images/ramen4.jpg";
    item4.appendChild(a4);
    const img4 = document.createElement("img");
    img4.src = "../src/images/ramen4.jpg";
    img4.alt = "Ramen";
    a4.appendChild(img4);
    const desc4 = document.createElement("div");
    desc4.classList.add("desc");
    desc4.innerText = "Ramen\r\n 12,50€";
    item4.appendChild(desc4);

    return menu
}



/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBackground": () => (/* binding */ createBackground),
/* harmony export */   "createWrapperUpper": () => (/* binding */ createWrapperUpper),
/* harmony export */   "createNavWrap": () => (/* binding */ createNavWrap),
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
const createBackground = () => {
    const image = document.createElement("img");
    image.classList.add("background-image")
    image.src = "../src/images/ramen-background.jpg";
    image.alt = "tasty ramen";
    return image
}

const createWrapperUpper = () => {
    const wrapperU = document.createElement("div");
    wrapperU.classList.add("wrapper-upper");
    return wrapperU
}

const createNavWrap = () => {
    const navWrap = document.createElement("div");
    navWrap.classList.add("nav-wrapper");
    return navWrap
}

const createNav = () => {

    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const navUl = document.createElement("ul");
    nav.appendChild(navUl);

    const li1 = document.createElement("li");
    navUl.appendChild(li1);
    const li1A = document.createElement("a");
    li1.appendChild(li1A);
    li1A.href = "#";
    li1A.innerText = "Home";
    li1A.id = "home";

    const li2 = document.createElement("li");
    navUl.appendChild(li2);
    const li2A = document.createElement("a");
    li2.appendChild(li2A);
    li2A.href = "#";
    li2A.innerText = "Menu";
    li2A.id ="menu";

    const li3 = document.createElement("li");
    navUl.appendChild(li3);
    const li3A = document.createElement("a");
    li3.appendChild(li3A);
    li3A.href = "#";
    li3A.innerText = "Contact";
    li3A.id = "contact";

    const so1 = document.createElement("li");
    so1.classList.add("social");
    navUl.appendChild(so1);
    const so1A = document.createElement("a");
    so1.appendChild(so1A);
    so1A.href = "#";
    const icon1 = document.createElement("i");
    icon1.classList.add("fa", "fa-facebook");
    so1A.appendChild(icon1);

    const so2 = document.createElement("li");
    so2.classList.add("social");
    navUl.appendChild(so2);
    const so2A = document.createElement("a");
    so2.appendChild(so2A);
    so2A.href = "#";
    const icon2 = document.createElement("i");
    icon2.classList.add("fa", "fa-twitter");
    so2A.appendChild(icon2);

    const so3 = document.createElement("li");
    so3.classList.add("social");
    navUl.appendChild(so3);
    const so3A = document.createElement("a");
    so3.appendChild(so3A);
    so3A.href = "#";
    const icon3 = document.createElement("i");
    icon3.classList.add("fa", "fa-instagram");
    so3A.appendChild(icon3);

    return nav
}

const createFooter = () => {
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.innerText = "Copyright (c) erynder-Z.\r\n All Rights Reserved."
    footer.appendChild(p);
    const a = document.createElement("a");
    a.href = "#";
    a.rel = "noopener noreferrer";
    a.innerText = "Imprint";
    footer.appendChild(a);

    return footer
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");








const content = document.getElementById("content");

const initialize = (() => {
    content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createBackground)());
    const wrapperU = content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createWrapperUpper)());
    const navWrap = wrapperU.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createNavWrap)());
    navWrap.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createNav)());
    content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.createHead)());
    content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createFooter)());

})();

const homeButton = () => {
    const homeBtn = document.getElementById("home");
    homeBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createBackground)());
        const wrapperU = content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createWrapperUpper)());
        const navWrap = wrapperU.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createNavWrap)());
        navWrap.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createNav)());
        content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.createHead)());
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createFooter)());
        homeButton();
        menuButton();
        contactButton();
    });
}

const menuButton = () => {
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createBackground)());
        const wrapperU = content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createWrapperUpper)());
        const navWrap = wrapperU.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createNavWrap)());
        navWrap.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createNav)());
        content.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)());
        homeButton();
        menuButton();
        contactButton();
    });
}

const contactButton = () => {
    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createBackground)());
        const wrapperU = content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createWrapperUpper)());
        const navWrap = wrapperU.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createNavWrap)());
        navWrap.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createNav)());
        content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.createHours)());
        content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.createReservations)());
        content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.createStatus)());
        content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.createContacts)());
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDakdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBSUU7O0FBSUE7O0FBT0c7O0FBRTFCOztBQUVBO0FBQ0Esd0JBQXdCLDZEQUFnQjtBQUN4Qyx5Q0FBeUMsK0RBQWtCO0FBQzNELHlDQUF5QywwREFBYTtBQUN0RCx3QkFBd0Isc0RBQVM7QUFDakMsd0JBQXdCLHlEQUFVO0FBQ2xDLHdCQUF3Qix5REFBWTs7QUFFcEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBZ0I7QUFDNUMsNkNBQTZDLCtEQUFrQjtBQUMvRCw2Q0FBNkMsMERBQWE7QUFDMUQsNEJBQTRCLHNEQUFTO0FBQ3JDLDRCQUE0Qix5REFBVTtBQUN0Qyw0QkFBNEIseURBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZEQUFnQjtBQUM1Qyw2Q0FBNkMsK0RBQWtCO0FBQy9ELDZDQUE2QywwREFBYTtBQUMxRCw0QkFBNEIsc0RBQVM7QUFDckMsNEJBQTRCLHlEQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBZ0I7QUFDNUMsNkNBQTZDLCtEQUFrQjtBQUMvRCw2Q0FBNkMsMERBQWE7QUFDMUQsNEJBQTRCLHNEQUFTO0FBQ3JDLDRCQUE0Qiw2REFBVztBQUN2Qyw0QkFBNEIsb0VBQWtCO0FBQzlDLDRCQUE0Qiw4REFBWTtBQUN4Qyw0QkFBNEIsZ0VBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlSG91cnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xuICAgIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWRpbmcxLmlubmVyVGV4dCA9IFwiT3BlbmluZyBob3VyczpcIjtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChoZWFkaW5nMSk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTEuaW5uZXJUZXh0ID0gXCJNb25kYXkgKGNsb3NlZClcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTIuaW5uZXJUZXh0ID0gXCJUdWVzZGF5OiAxMTowMCAtIDIyOjAwXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkzLmlubmVyVGV4dCA9IFwiV2VkbmVzZGF5IDExOjAwIC0gMjI6MDBcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICAgIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTQuaW5uZXJUZXh0ID0gXCJUaHVyc2RheSAxMTowMCAtIDIyOjAwXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk0KTtcbiAgICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGk1LmlubmVyVGV4dCA9IFwiRnJpZGF5IDExOjAwIC0gMjI6MDBcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTUpO1xuICAgIGNvbnN0IGxpNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTYuaW5uZXJUZXh0ID0gXCJTYXR1cmRheSAxMTowMCAtIDIyOjAwXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk2KTtcbiAgICBjb25zdCBsaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGk3LmlubmVyVGV4dCA9IFwiU3VuZGF5IDExOjAwIC0gMjI6MDBcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTcpO1xuXG4gICAgcmV0dXJuIGhvdXJzXG59XG5cbmNvbnN0IGNyZWF0ZVJlc2VydmF0aW9ucyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzZXJ2YXRpb25zLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbnNcIik7XG4gICAgY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGluZzEuaW5uZXJUZXh0ID0gXCJUYWJ2bGUgcmVzZXJ2YXRpb25zXCI7XG4gICAgcmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKGhlYWRpbmcxKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJkYXRldGltZS1sb2NhbFwiO1xuICAgIHJlc2VydmF0aW9ucy5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gcmVzZXJ2YXRpb25zXG59XG5cbmNvbnN0IGNyZWF0ZVN0YXR1cyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwic3RhdHVzXCIpO1xuICAgIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWRpbmcxLmlubmVyVGV4dCA9IFwiQ3VycmVudCBzdGF0dXM6XCI7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKGhlYWRpbmcxKTtcbiAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50LmlkID0gXCJjdXJyZW50LXN0YXR1c1wiO1xuICAgIGN1cnJlbnQuaW5uZXJUZXh0ID0gXCJOb3Qgc28gYnVzeVwiO1xuICAgIHN0YXR1cy5hcHBlbmRDaGlsZChjdXJyZW50KTtcblxuICAgIHJldHVybiBzdGF0dXNcbn1cblxuY29uc3QgY3JlYXRlQ29udGFjdHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBjb25zdCBoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nMS5pbm5lclRleHQgPSBcIkNvbnRhY3QgdXM6XCI7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChoZWFkaW5nMSk7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcImlucHV0LXRleHRhcmVhXCIpO1xuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIG1lc3NhZ2UgaGVyZS4uLlwiO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG4gICAgY29uc3QgY29udGFjdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3QyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdDIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pZCA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIlNlbmQgbWVzc2FnZVwiO1xuICAgIGNvbnRhY3QyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBjb25zdCBjb250YWN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdDMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0Myk7XG4gICAgY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZGluZzIuaW5uZXJUZXh0ID0gXCJNYWlsOlwiO1xuICAgIGNvbnRhY3QzLmFwcGVuZENoaWxkKGhlYWRpbmcyKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGluay5ocmVmID0gXCJtYWlsdG86eWFtYXRvQG5vb2QubGVcIjtcbiAgICBsaW5rLmlubmVyVGV4dCA9IFwiIHlhbWF0b0Bub29kLmxlXCJcbiAgICBoZWFkaW5nMi5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBjb25zdCBoZWFkaW5nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkaW5nMy5pbm5lclRleHQgPSBcIlBob25lOiArNDkgMTIzNCAvIDU2Nzg5XCI7XG4gICAgY29udGFjdDMuYXBwZW5kQ2hpbGQoaGVhZGluZzMpO1xuXG5cbiAgICByZXR1cm4gd3JhcHBlclxuXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlSG91cnMsXG4gICAgY3JlYXRlUmVzZXJ2YXRpb25zLFxuICAgIGNyZWF0ZVN0YXR1cyxcbiAgICBjcmVhdGVDb250YWN0c1xufSIsImNvbnN0IGNyZWF0ZUhlYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZC1zZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJUZXh0ID0gXCJZYW1hdG8gUmFtZW5cIjtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGgzLmlubmVyVGV4dCA9IFwiWXVtbXkg44Op44O844Oh44OzXCI7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLmlubmVyVGV4dCA9IFwiQXV0ZW50aWMgamFwYW5lc2Ugc3R5bGUgUmFtZW4gZm9yIGV2ZXJ5IHRhc3RlLlwiO1xuXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcDEuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWQuYXBwZW5kKHAxKTtcblxuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTEuaW5uZXJUZXh0ID0gXCJTaMWNeXUtUmFtZW5cIjtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkyLmlubmVyVGV4dCA9IFwiU2hpby1SYW1lblwiO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTMuaW5uZXJUZXh0ID0gXCJNaXNvLVJhbWVuXCI7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDIuaW5uZXJUZXh0ID0gXCJUcnkgdGhlbSBhbGwgYW5kIGRpc2NvdmVyIHlvdXIgZmF2b3JpdGUhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFYXJ1bSBvYmNhZWNhdGkgYWxpcXVhbSBuaXNpIHVuZGUgcHJvdmlkZW50IGFkIGRlYml0aXMgaGFydW0gZWEgc2VkIG5hdHVzLCB1dCBxdWlidXNkYW0gaW52ZW50b3JlLCBhc3N1bWVuZGEgdmVsISBNb2xlc3RpYXMgbWFpb3JlcyB0ZW1wb3JpYnVzIG9kaXQgcHJvdmlkZW50IHJhdGlvbmUgcXVvcyBvZGlvIGltcGVkaXQgbGFib3J1bSBtYWduYW0gc3VudCwgYXNwZXJpb3JlcyBkaXN0aW5jdGlvIGV0IG5lY2Vzc2l0YXRpYnVzIGRpY3RhIHV0IGRvbG9yaWJ1cyBjb21tb2RpIGlwc2EgcXVpZGVtIGxpYmVybyBxdWFlLiBNb2RpLlwiO1xuICAgIHAxLmFwcGVuZENoaWxkKHAyKTtcblxuICAgIHJldHVybiBoZWFkXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlSGVhZFxufSIsImNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeVwiKTtcblxuICAgIGNvbnN0IHJlc3BvbnNpdmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNwb25zaXZlMS5jbGFzc0xpc3QuYWRkKFwicmVzcG9uc2l2ZVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHJlc3BvbnNpdmUxKTtcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbTEuY2xhc3NMaXN0LmFkZChcImdhbGxlcnlcIik7XG4gICAgcmVzcG9uc2l2ZTEuYXBwZW5kQ2hpbGQoaXRlbTEpO1xuICAgIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYTEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBhMS5ocmVmID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuNC5qcGdcIjtcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChhMSk7XG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nMS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW40LmpwZ1wiO1xuICAgIGltZzEuYWx0ID0gXCJSYW1lblwiO1xuICAgIGExLmFwcGVuZENoaWxkKGltZzEpO1xuICAgIGNvbnN0IGRlc2MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjMS5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBkZXNjMS5pbm5lclRleHQgPSBcIlJhbWVuXFxyXFxuIDksNTDigqxcIjtcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChkZXNjMSk7XG5cbiAgICBjb25zdCByZXNwb25zaXZlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzcG9uc2l2ZTIuY2xhc3NMaXN0LmFkZChcInJlc3BvbnNpdmVcIik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChyZXNwb25zaXZlMik7XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5XCIpO1xuICAgIHJlc3BvbnNpdmUyLmFwcGVuZENoaWxkKGl0ZW0yKTtcbiAgICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgYTIuaHJlZiA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjIuanBnXCI7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoYTIpO1xuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZzIuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuMi5qcGdcIjtcbiAgICBpbWcyLmFsdCA9IFwiUmFtZW5cIjtcbiAgICBhMi5hcHBlbmRDaGlsZChpbWcyKTtcbiAgICBjb25zdCBkZXNjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzYzIuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgZGVzYzIuaW5uZXJUZXh0ID0gXCJSYW1lblxcclxcbiAxMCw1MOKCrFwiO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKGRlc2MyKTtcblxuICAgIGNvbnN0IHJlc3BvbnNpdmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNwb25zaXZlMy5jbGFzc0xpc3QuYWRkKFwicmVzcG9uc2l2ZVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHJlc3BvbnNpdmUzKTtcbiAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbTMuY2xhc3NMaXN0LmFkZChcImdhbGxlcnlcIik7XG4gICAgcmVzcG9uc2l2ZTMuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuICAgIGNvbnN0IGEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYTMudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBhMy5ocmVmID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuMy5qcGdcIjtcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChhMyk7XG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nMy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4zLmpwZ1wiO1xuICAgIGltZzMuYWx0ID0gXCJSYW1lblwiO1xuICAgIGEzLmFwcGVuZENoaWxkKGltZzMpO1xuICAgIGNvbnN0IGRlc2MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjMy5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBkZXNjMy5pbm5lclRleHQgPSBcIlJhbWVuXFxyXFxuIDExLDAw4oKsXCI7XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoZGVzYzMpO1xuXG4gICAgY29uc3QgcmVzcG9uc2l2ZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3BvbnNpdmU0LmNsYXNzTGlzdC5hZGQoXCJyZXNwb25zaXZlXCIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocmVzcG9uc2l2ZTQpO1xuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtNC5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeVwiKTtcbiAgICByZXNwb25zaXZlNC5hcHBlbmRDaGlsZChpdGVtNCk7XG4gICAgY29uc3QgYTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhNC50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGE0LmhyZWYgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW40LmpwZ1wiO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKGE0KTtcbiAgICBjb25zdCBpbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWc0LnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjQuanBnXCI7XG4gICAgaW1nNC5hbHQgPSBcIlJhbWVuXCI7XG4gICAgYTQuYXBwZW5kQ2hpbGQoaW1nNCk7XG4gICAgY29uc3QgZGVzYzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2M0LmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuICAgIGRlc2M0LmlubmVyVGV4dCA9IFwiUmFtZW5cXHJcXG4gMTIsNTDigqxcIjtcbiAgICBpdGVtNC5hcHBlbmRDaGlsZChkZXNjNCk7XG5cbiAgICByZXR1cm4gbWVudVxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1lbnVcbn0iLCJjb25zdCBjcmVhdGVCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZC1pbWFnZVwiKVxuICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbi1iYWNrZ3JvdW5kLmpwZ1wiO1xuICAgIGltYWdlLmFsdCA9IFwidGFzdHkgcmFtZW5cIjtcbiAgICByZXR1cm4gaW1hZ2Vcbn1cblxuY29uc3QgY3JlYXRlV3JhcHBlclVwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXJVID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyVS5jbGFzc0xpc3QuYWRkKFwid3JhcHBlci11cHBlclwiKTtcbiAgICByZXR1cm4gd3JhcHBlclVcbn1cblxuY29uc3QgY3JlYXRlTmF2V3JhcCA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZXcmFwLmNsYXNzTGlzdC5hZGQoXCJuYXYtd3JhcHBlclwiKTtcbiAgICByZXR1cm4gbmF2V3JhcFxufVxuXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuXG4gICAgY29uc3QgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdlVsKTtcblxuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIGNvbnN0IGxpMUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaTEuYXBwZW5kQ2hpbGQobGkxQSk7XG4gICAgbGkxQS5ocmVmID0gXCIjXCI7XG4gICAgbGkxQS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBsaTFBLmlkID0gXCJob21lXCI7XG5cbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICBjb25zdCBsaTJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkyLmFwcGVuZENoaWxkKGxpMkEpO1xuICAgIGxpMkEuaHJlZiA9IFwiI1wiO1xuICAgIGxpMkEuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgbGkyQS5pZCA9XCJtZW51XCI7XG5cbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBjb25zdCBsaTNBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkzLmFwcGVuZENoaWxkKGxpM0EpO1xuICAgIGxpM0EuaHJlZiA9IFwiI1wiO1xuICAgIGxpM0EuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gICAgbGkzQS5pZCA9IFwiY29udGFjdFwiO1xuXG4gICAgY29uc3Qgc28xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHNvMS5jbGFzc0xpc3QuYWRkKFwic29jaWFsXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKHNvMSk7XG4gICAgY29uc3Qgc28xQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNvMS5hcHBlbmRDaGlsZChzbzFBKTtcbiAgICBzbzFBLmhyZWYgPSBcIiNcIjtcbiAgICBjb25zdCBpY29uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGljb24xLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWZhY2Vib29rXCIpO1xuICAgIHNvMUEuYXBwZW5kQ2hpbGQoaWNvbjEpO1xuXG4gICAgY29uc3Qgc28yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHNvMi5jbGFzc0xpc3QuYWRkKFwic29jaWFsXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKHNvMik7XG4gICAgY29uc3Qgc28yQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNvMi5hcHBlbmRDaGlsZChzbzJBKTtcbiAgICBzbzJBLmhyZWYgPSBcIiNcIjtcbiAgICBjb25zdCBpY29uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGljb24yLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLXR3aXR0ZXJcIik7XG4gICAgc28yQS5hcHBlbmRDaGlsZChpY29uMik7XG5cbiAgICBjb25zdCBzbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc28zLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQoc28zKTtcbiAgICBjb25zdCBzbzNBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc28zLmFwcGVuZENoaWxkKHNvM0EpO1xuICAgIHNvM0EuaHJlZiA9IFwiI1wiO1xuICAgIGNvbnN0IGljb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaWNvbjMuY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtaW5zdGFncmFtXCIpO1xuICAgIHNvM0EuYXBwZW5kQ2hpbGQoaWNvbjMpO1xuXG4gICAgcmV0dXJuIG5hdlxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC5pbm5lclRleHQgPSBcIkNvcHlyaWdodCAoYykgZXJ5bmRlci1aLlxcclxcbiBBbGwgUmlnaHRzIFJlc2VydmVkLlwiXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmhyZWYgPSBcIiNcIjtcbiAgICBhLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgIGEuaW5uZXJUZXh0ID0gXCJJbXByaW50XCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUJhY2tncm91bmQsXG4gICAgY3JlYXRlV3JhcHBlclVwcGVyLFxuICAgIGNyZWF0ZU5hdldyYXAsXG4gICAgY3JlYXRlTmF2LFxuICAgIGNyZWF0ZUZvb3RlclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgICBjcmVhdGVCYWNrZ3JvdW5kLFxuICAgIGNyZWF0ZVdyYXBwZXJVcHBlcixcbiAgICBjcmVhdGVOYXZXcmFwLFxuICAgIGNyZWF0ZU5hdixcbiAgICBjcmVhdGVGb290ZXJcbn0gZnJvbSBcIi4vbW9kdWxlcy91aVwiXG5cbmltcG9ydCB7XG4gICAgY3JlYXRlSGVhZCxcbn0gZnJvbSBcIi4vbW9kdWxlcy9ob21lXCJcblxuaW1wb3J0IHtcbiAgICBjcmVhdGVNZW51XG59IGZyb20gXCIuL21vZHVsZXMvbWVudVwiXG5cbmltcG9ydCB7XG4gICAgY3JlYXRlSG91cnMsXG4gICAgY3JlYXRlUmVzZXJ2YXRpb25zLFxuICAgIGNyZWF0ZVN0YXR1cyxcbiAgICBjcmVhdGVDb250YWN0c1xufSBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIlxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBpbml0aWFsaXplID0gKCgpID0+IHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tncm91bmQoKSk7XG4gICAgY29uc3Qgd3JhcHBlclUgPSBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVdyYXBwZXJVcHBlcigpKTtcbiAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICBuYXZXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbn0pKCk7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kKCkpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgICAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICAgICAgbmF2V3JhcC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZCgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgICAgIGhvbWVCdXR0b24oKTtcbiAgICAgICAgbWVudUJ1dHRvbigpO1xuICAgICAgICBjb250YWN0QnV0dG9uKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IG1lbnVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kKCkpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgICAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICAgICAgbmF2V3JhcC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICAgICAgaG9tZUJ1dHRvbigpO1xuICAgICAgICBtZW51QnV0dG9uKCk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuY29uc3QgY29udGFjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50cygpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tncm91bmQoKSk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJVID0gY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVXcmFwcGVyVXBwZXIoKSk7XG4gICAgICAgIGNvbnN0IG5hdldyYXAgPSB3cmFwcGVyVS5hcHBlbmRDaGlsZChjcmVhdGVOYXZXcmFwKCkpO1xuICAgICAgICBuYXZXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXNlcnZhdGlvbnMoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU3RhdHVzKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RzKCkpO1xuICAgICAgICBob21lQnV0dG9uKCk7XG4gICAgICAgIG1lbnVCdXR0b24oKTtcbiAgICAgICAgY29udGFjdEJ1dHRvbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnRzKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuaG9tZUJ1dHRvbigpO1xubWVudUJ1dHRvbigpO1xuY29udGFjdEJ1dHRvbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==