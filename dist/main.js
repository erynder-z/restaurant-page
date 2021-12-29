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

    const image = document.createElement("img");
    image.src = "../src/images/ramen-logo.png";
    image.id = "logo";
    head.appendChild(image);

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
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.innerText = "Menu";
    menu.appendChild(heading);

    const gallery = document.createElement("div");
    gallery.classList.add("gallery");
    menu.appendChild(gallery)
    const responsive1 = document.createElement("div");
    responsive1.classList.add("responsive");
    gallery.appendChild(responsive1);
    const item1 = document.createElement("div");
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
    gallery.appendChild(responsive2);
    const item2 = document.createElement("div");
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
    gallery.appendChild(responsive3);
    const item3 = document.createElement("div");
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
    gallery.appendChild(responsive4);
    const item4 = document.createElement("div");
    responsive4.appendChild(item4);
    const a4 = document.createElement("a");
    a4.target = "_blank";
    a4.href = "../src/images/ramen6.jpg";
    item4.appendChild(a4);
    const img4 = document.createElement("img");
    img4.src = "../src/images/ramen6.jpg";
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
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createFooter)());
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
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__.createFooter)());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDakdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBSUU7O0FBSUE7O0FBT0c7O0FBRTFCOztBQUVBO0FBQ0Esd0JBQXdCLDZEQUFnQjtBQUN4Qyx5Q0FBeUMsK0RBQWtCO0FBQzNELHlDQUF5QywwREFBYTtBQUN0RCx3QkFBd0Isc0RBQVM7QUFDakMsd0JBQXdCLHlEQUFVO0FBQ2xDLHdCQUF3Qix5REFBWTs7QUFFcEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBZ0I7QUFDNUMsNkNBQTZDLCtEQUFrQjtBQUMvRCw2Q0FBNkMsMERBQWE7QUFDMUQsNEJBQTRCLHNEQUFTO0FBQ3JDLDRCQUE0Qix5REFBVTtBQUN0Qyw0QkFBNEIseURBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZEQUFnQjtBQUM1Qyw2Q0FBNkMsK0RBQWtCO0FBQy9ELDZDQUE2QywwREFBYTtBQUMxRCw0QkFBNEIsc0RBQVM7QUFDckMsNEJBQTRCLHlEQUFVO0FBQ3RDLDRCQUE0Qix5REFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkRBQWdCO0FBQzVDLDZDQUE2QywrREFBa0I7QUFDL0QsNkNBQTZDLDBEQUFhO0FBQzFELDRCQUE0QixzREFBUztBQUNyQyw0QkFBNEIsNkRBQVc7QUFDdkMsNEJBQTRCLG9FQUFrQjtBQUM5Qyw0QkFBNEIsOERBQVk7QUFDeEMsNEJBQTRCLGdFQUFjO0FBQzFDLDRCQUE0Qix5REFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVIb3VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gICAgY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGluZzEuaW5uZXJUZXh0ID0gXCJPcGVuaW5nIGhvdXJzOlwiO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhlYWRpbmcxKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZCh1bCk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpMS5pbm5lclRleHQgPSBcIk1vbmRheSAoY2xvc2VkKVwiO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpMi5pbm5lclRleHQgPSBcIlR1ZXNkYXk6IDExOjAwIC0gMjI6MDBcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTMuaW5uZXJUZXh0ID0gXCJXZWRuZXNkYXkgMTE6MDAgLSAyMjowMFwiO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpNC5pbm5lclRleHQgPSBcIlRodXJzZGF5IDExOjAwIC0gMjI6MDBcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTQpO1xuICAgIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTUuaW5uZXJUZXh0ID0gXCJGcmlkYXkgMTE6MDAgLSAyMjowMFwiO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNSk7XG4gICAgY29uc3QgbGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpNi5pbm5lclRleHQgPSBcIlNhdHVyZGF5IDExOjAwIC0gMjI6MDBcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTYpO1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTcuaW5uZXJUZXh0ID0gXCJTdW5kYXkgMTE6MDAgLSAyMjowMFwiO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNyk7XG5cbiAgICByZXR1cm4gaG91cnNcbn1cblxuY29uc3QgY3JlYXRlUmVzZXJ2YXRpb25zID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNlcnZhdGlvbnMuY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uc1wiKTtcbiAgICBjb25zdCBoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkaW5nMS5pbm5lclRleHQgPSBcIlRhYnZsZSByZXNlcnZhdGlvbnNcIjtcbiAgICByZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQoaGVhZGluZzEpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImRhdGV0aW1lLWxvY2FsXCI7XG4gICAgcmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiByZXNlcnZhdGlvbnNcbn1cblxuY29uc3QgY3JlYXRlU3RhdHVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJzdGF0dXNcIik7XG4gICAgY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGluZzEuaW5uZXJUZXh0ID0gXCJDdXJyZW50IHN0YXR1czpcIjtcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoaGVhZGluZzEpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnQuaWQgPSBcImN1cnJlbnQtc3RhdHVzXCI7XG4gICAgY3VycmVudC5pbm5lclRleHQgPSBcIk5vdCBzbyBidXN5XCI7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKGN1cnJlbnQpO1xuXG4gICAgcmV0dXJuIHN0YXR1c1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXdyYXBwZXJcIik7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRpbmcxLmlubmVyVGV4dCA9IFwiQ29udGFjdCB1czpcIjtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGhlYWRpbmcxKTtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGV4dGFyZWFcIik7XG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkVudGVyIHlvdXIgbWVzc2FnZSBoZXJlLi4uXCI7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5cbiAgICBjb25zdCBjb250YWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdDIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0Mik7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIik7XG4gICAgYnV0dG9uLmlkID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiU2VuZCBtZXNzYWdlXCI7XG4gICAgY29udGFjdDIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGNvbnN0IGNvbnRhY3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0My5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3QzKTtcbiAgICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkaW5nMi5pbm5lclRleHQgPSBcIk1haWw6XCI7XG4gICAgY29udGFjdDMuYXBwZW5kQ2hpbGQoaGVhZGluZzIpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLmhyZWYgPSBcIm1haWx0bzp5YW1hdG9Abm9vZC5sZVwiO1xuICAgIGxpbmsuaW5uZXJUZXh0ID0gXCIgeWFtYXRvQG5vb2QubGVcIlxuICAgIGhlYWRpbmcyLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGNvbnN0IGhlYWRpbmczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWRpbmczLmlubmVyVGV4dCA9IFwiUGhvbmU6ICs0OSAxMjM0IC8gNTY3ODlcIjtcbiAgICBjb250YWN0My5hcHBlbmRDaGlsZChoZWFkaW5nMyk7XG5cblxuICAgIHJldHVybiB3cmFwcGVyXG5cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVIb3VycyxcbiAgICBjcmVhdGVSZXNlcnZhdGlvbnMsXG4gICAgY3JlYXRlU3RhdHVzLFxuICAgIGNyZWF0ZUNvbnRhY3RzXG59IiwiY29uc3QgY3JlYXRlSGVhZCA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkLXNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lclRleHQgPSBcIllhbWF0byBSYW1lblwiO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaDMuaW5uZXJUZXh0ID0gXCJZdW1teSDjg6njg7zjg6Hjg7NcIjtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGgzKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4tbG9nby5wbmdcIjtcbiAgICBpbWFnZS5pZCA9IFwibG9nb1wiO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMS5pbm5lclRleHQgPSBcIkF1dGVudGljIGphcGFuZXNlIHN0eWxlIFJhbWVuIGZvciBldmVyeSB0YXN0ZS5cIjtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHAxLmFwcGVuZENoaWxkKHVsKTtcbiAgICBoZWFkLmFwcGVuZChwMSk7XG5cbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkxLmlubmVyVGV4dCA9IFwiU2jFjXl1LVJhbWVuXCI7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpMi5pbm5lclRleHQgPSBcIlNoaW8tUmFtZW5cIjtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkzLmlubmVyVGV4dCA9IFwiTWlzby1SYW1lblwiO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMyk7XG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyLmlubmVyVGV4dCA9IFwiVHJ5IHRoZW0gYWxsIGFuZCBkaXNjb3ZlciB5b3VyIGZhdm9yaXRlISBMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWFydW0gb2JjYWVjYXRpIGFsaXF1YW0gbmlzaSB1bmRlIHByb3ZpZGVudCBhZCBkZWJpdGlzIGhhcnVtIGVhIHNlZCBuYXR1cywgdXQgcXVpYnVzZGFtIGludmVudG9yZSwgYXNzdW1lbmRhIHZlbCEgTW9sZXN0aWFzIG1haW9yZXMgdGVtcG9yaWJ1cyBvZGl0IHByb3ZpZGVudCByYXRpb25lIHF1b3Mgb2RpbyBpbXBlZGl0IGxhYm9ydW0gbWFnbmFtIHN1bnQsIGFzcGVyaW9yZXMgZGlzdGluY3RpbyBldCBuZWNlc3NpdGF0aWJ1cyBkaWN0YSB1dCBkb2xvcmlidXMgY29tbW9kaSBpcHNhIHF1aWRlbSBsaWJlcm8gcXVhZS4gTW9kaS5cIjtcbiAgICBwMS5hcHBlbmRDaGlsZChwMik7XG5cbiAgICByZXR1cm4gaGVhZFxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhlYWRcbn0iLCJjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBtZW51LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FsbGVyeS5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGdhbGxlcnkpXG4gICAgY29uc3QgcmVzcG9uc2l2ZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3BvbnNpdmUxLmNsYXNzTGlzdC5hZGQoXCJyZXNwb25zaXZlXCIpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQocmVzcG9uc2l2ZTEpO1xuICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNwb25zaXZlMS5hcHBlbmRDaGlsZChpdGVtMSk7XG4gICAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhMS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGExLmhyZWYgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW40LmpwZ1wiO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGExKTtcbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcxLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjQuanBnXCI7XG4gICAgaW1nMS5hbHQgPSBcIlJhbWVuXCI7XG4gICAgYTEuYXBwZW5kQ2hpbGQoaW1nMSk7XG4gICAgY29uc3QgZGVzYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2MxLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuICAgIGRlc2MxLmlubmVyVGV4dCA9IFwiUmFtZW5cXHJcXG4gOSw1MOKCrFwiO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGRlc2MxKTtcblxuICAgIGNvbnN0IHJlc3BvbnNpdmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNwb25zaXZlMi5jbGFzc0xpc3QuYWRkKFwicmVzcG9uc2l2ZVwiKTtcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKHJlc3BvbnNpdmUyKTtcbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzcG9uc2l2ZTIuYXBwZW5kQ2hpbGQoaXRlbTIpO1xuICAgIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYTIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBhMi5ocmVmID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuMi5qcGdcIjtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChhMik7XG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nMi5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4yLmpwZ1wiO1xuICAgIGltZzIuYWx0ID0gXCJSYW1lblwiO1xuICAgIGEyLmFwcGVuZENoaWxkKGltZzIpO1xuICAgIGNvbnN0IGRlc2MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjMi5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBkZXNjMi5pbm5lclRleHQgPSBcIlJhbWVuXFxyXFxuIDEwLDUw4oKsXCI7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoZGVzYzIpO1xuXG4gICAgY29uc3QgcmVzcG9uc2l2ZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3BvbnNpdmUzLmNsYXNzTGlzdC5hZGQoXCJyZXNwb25zaXZlXCIpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQocmVzcG9uc2l2ZTMpO1xuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNwb25zaXZlMy5hcHBlbmRDaGlsZChpdGVtMyk7XG4gICAgY29uc3QgYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhMy50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGEzLmhyZWYgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4zLmpwZ1wiO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKGEzKTtcbiAgICBjb25zdCBpbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWczLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjMuanBnXCI7XG4gICAgaW1nMy5hbHQgPSBcIlJhbWVuXCI7XG4gICAgYTMuYXBwZW5kQ2hpbGQoaW1nMyk7XG4gICAgY29uc3QgZGVzYzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2MzLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuICAgIGRlc2MzLmlubmVyVGV4dCA9IFwiUmFtZW5cXHJcXG4gMTEsMDDigqxcIjtcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChkZXNjMyk7XG5cbiAgICBjb25zdCByZXNwb25zaXZlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzcG9uc2l2ZTQuY2xhc3NMaXN0LmFkZChcInJlc3BvbnNpdmVcIik7XG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChyZXNwb25zaXZlNCk7XG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3BvbnNpdmU0LmFwcGVuZENoaWxkKGl0ZW00KTtcbiAgICBjb25zdCBhNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGE0LnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgYTQuaHJlZiA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjYuanBnXCI7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoYTQpO1xuICAgIGNvbnN0IGltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZzQuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuNi5qcGdcIjtcbiAgICBpbWc0LmFsdCA9IFwiUmFtZW5cIjtcbiAgICBhNC5hcHBlbmRDaGlsZChpbWc0KTtcbiAgICBjb25zdCBkZXNjNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzYzQuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgZGVzYzQuaW5uZXJUZXh0ID0gXCJSYW1lblxcclxcbiAxMiw1MOKCrFwiO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKGRlc2M0KTtcblxuICAgIHJldHVybiBtZW51XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWVudVxufSIsImNvbnN0IGNyZWF0ZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kLWltYWdlXCIpXG4gICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuLWJhY2tncm91bmQuanBnXCI7XG4gICAgaW1hZ2UuYWx0ID0gXCJ0YXN0eSByYW1lblwiO1xuICAgIHJldHVybiBpbWFnZVxufVxuXG5jb25zdCBjcmVhdGVXcmFwcGVyVXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlclUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXJVLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyLXVwcGVyXCIpO1xuICAgIHJldHVybiB3cmFwcGVyVVxufVxuXG5jb25zdCBjcmVhdGVOYXZXcmFwID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdldyYXAuY2xhc3NMaXN0LmFkZChcIm5hdi13cmFwcGVyXCIpO1xuICAgIHJldHVybiBuYXZXcmFwXG59XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cbiAgICBjb25zdCBuYXZVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2VWwpO1xuXG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgY29uc3QgbGkxQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpMS5hcHBlbmRDaGlsZChsaTFBKTtcbiAgICBsaTFBLmhyZWYgPSBcIiNcIjtcbiAgICBsaTFBLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGxpMUEuaWQgPSBcImhvbWVcIjtcblxuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChsaTIpO1xuICAgIGNvbnN0IGxpMkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaTIuYXBwZW5kQ2hpbGQobGkyQSk7XG4gICAgbGkyQS5ocmVmID0gXCIjXCI7XG4gICAgbGkyQS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBsaTJBLmlkID1cIm1lbnVcIjtcblxuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChsaTMpO1xuICAgIGNvbnN0IGxpM0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaTMuYXBwZW5kQ2hpbGQobGkzQSk7XG4gICAgbGkzQS5ocmVmID0gXCIjXCI7XG4gICAgbGkzQS5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgICBsaTNBLmlkID0gXCJjb250YWN0XCI7XG5cbiAgICBjb25zdCBzbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc28xLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQoc28xKTtcbiAgICBjb25zdCBzbzFBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc28xLmFwcGVuZENoaWxkKHNvMUEpO1xuICAgIHNvMUEuaHJlZiA9IFwiI1wiO1xuICAgIGNvbnN0IGljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaWNvbjEuY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtZmFjZWJvb2tcIik7XG4gICAgc28xQS5hcHBlbmRDaGlsZChpY29uMSk7XG5cbiAgICBjb25zdCBzbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc28yLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQoc28yKTtcbiAgICBjb25zdCBzbzJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc28yLmFwcGVuZENoaWxkKHNvMkEpO1xuICAgIHNvMkEuaHJlZiA9IFwiI1wiO1xuICAgIGNvbnN0IGljb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaWNvbjIuY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtdHdpdHRlclwiKTtcbiAgICBzbzJBLmFwcGVuZENoaWxkKGljb24yKTtcblxuICAgIGNvbnN0IHNvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzbzMuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChzbzMpO1xuICAgIGNvbnN0IHNvM0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbzMuYXBwZW5kQ2hpbGQoc28zQSk7XG4gICAgc28zQS5ocmVmID0gXCIjXCI7XG4gICAgY29uc3QgaWNvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uMy5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1pbnN0YWdyYW1cIik7XG4gICAgc28zQS5hcHBlbmRDaGlsZChpY29uMyk7XG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmlubmVyVGV4dCA9IFwiQ29weXJpZ2h0IChjKSBlcnluZGVyLVouXFxyXFxuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXCJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaHJlZiA9IFwiI1wiO1xuICAgIGEucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgYS5pbm5lclRleHQgPSBcIkltcHJpbnRcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQmFja2dyb3VuZCxcbiAgICBjcmVhdGVXcmFwcGVyVXBwZXIsXG4gICAgY3JlYXRlTmF2V3JhcCxcbiAgICBjcmVhdGVOYXYsXG4gICAgY3JlYXRlRm9vdGVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICAgIGNyZWF0ZUJhY2tncm91bmQsXG4gICAgY3JlYXRlV3JhcHBlclVwcGVyLFxuICAgIGNyZWF0ZU5hdldyYXAsXG4gICAgY3JlYXRlTmF2LFxuICAgIGNyZWF0ZUZvb3RlclxufSBmcm9tIFwiLi9tb2R1bGVzL3VpXCJcblxuaW1wb3J0IHtcbiAgICBjcmVhdGVIZWFkLFxufSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIlxuXG5pbXBvcnQge1xuICAgIGNyZWF0ZU1lbnVcbn0gZnJvbSBcIi4vbW9kdWxlcy9tZW51XCJcblxuaW1wb3J0IHtcbiAgICBjcmVhdGVIb3VycyxcbiAgICBjcmVhdGVSZXNlcnZhdGlvbnMsXG4gICAgY3JlYXRlU3RhdHVzLFxuICAgIGNyZWF0ZUNvbnRhY3RzXG59IGZyb20gXCIuL21vZHVsZXMvY29udGFjdFwiXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKCkgPT4ge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFja2dyb3VuZCgpKTtcbiAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgIGNvbnN0IG5hdldyYXAgPSB3cmFwcGVyVS5hcHBlbmRDaGlsZChjcmVhdGVOYXZXcmFwKCkpO1xuICAgIG5hdldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxufSkoKTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50cygpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tncm91bmQoKSk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJVID0gY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVXcmFwcGVyVXBwZXIoKSk7XG4gICAgICAgIGNvbnN0IG5hdldyYXAgPSB3cmFwcGVyVS5hcHBlbmRDaGlsZChjcmVhdGVOYXZXcmFwKCkpO1xuICAgICAgICBuYXZXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICAgICAgaG9tZUJ1dHRvbigpO1xuICAgICAgICBtZW51QnV0dG9uKCk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuY29uc3QgbWVudUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50cygpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tncm91bmQoKSk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJVID0gY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVXcmFwcGVyVXBwZXIoKSk7XG4gICAgICAgIGNvbnN0IG5hdldyYXAgPSB3cmFwcGVyVS5hcHBlbmRDaGlsZChjcmVhdGVOYXZXcmFwKCkpO1xuICAgICAgICBuYXZXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICAgICAgaG9tZUJ1dHRvbigpO1xuICAgICAgICBtZW51QnV0dG9uKCk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuY29uc3QgY29udGFjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50cygpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tncm91bmQoKSk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJVID0gY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVXcmFwcGVyVXBwZXIoKSk7XG4gICAgICAgIGNvbnN0IG5hdldyYXAgPSB3cmFwcGVyVS5hcHBlbmRDaGlsZChjcmVhdGVOYXZXcmFwKCkpO1xuICAgICAgICBuYXZXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXNlcnZhdGlvbnMoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU3RhdHVzKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RzKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICAgICAgaG9tZUJ1dHRvbigpO1xuICAgICAgICBtZW51QnV0dG9uKCk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50cygpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmhvbWVCdXR0b24oKTtcbm1lbnVCdXR0b24oKTtcbmNvbnRhY3RCdXR0b24oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=