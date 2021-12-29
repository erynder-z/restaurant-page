/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        menuButton()
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
        menuButton()
    });
}

function clearContents() {
    content.innerHTML = "";
}

homeButton();
menuButton();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUlFOztBQUlBOztBQUV2Qjs7QUFFQTtBQUNBLHdCQUF3Qiw2REFBZ0I7QUFDeEMseUNBQXlDLCtEQUFrQjtBQUMzRCx5Q0FBeUMsMERBQWE7QUFDdEQsd0JBQXdCLHNEQUFTO0FBQ2pDLHdCQUF3Qix5REFBVTtBQUNsQyx3QkFBd0IseURBQVk7O0FBRXBDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkRBQWdCO0FBQzVDLDZDQUE2QywrREFBa0I7QUFDL0QsNkNBQTZDLDBEQUFhO0FBQzFELDRCQUE0QixzREFBUztBQUNyQyw0QkFBNEIseURBQVU7QUFDdEMsNEJBQTRCLHlEQUFZO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkRBQWdCO0FBQzVDLDZDQUE2QywrREFBa0I7QUFDL0QsNkNBQTZDLDBEQUFhO0FBQzFELDRCQUE0QixzREFBUztBQUNyQyw0QkFBNEIseURBQVU7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWQtc2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVyVGV4dCA9IFwiWWFtYXRvIFJhbWVuXCI7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoMy5pbm5lclRleHQgPSBcIll1bW15IOODqeODvOODoeODs1wiO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMS5pbm5lclRleHQgPSBcIkF1dGVudGljIGphcGFuZXNlIHN0eWxlIFJhbWVuIGZvciBldmVyeSB0YXN0ZS5cIjtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHAxLmFwcGVuZENoaWxkKHVsKTtcbiAgICBoZWFkLmFwcGVuZChwMSk7XG5cbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkxLmlubmVyVGV4dCA9IFwiU2jFjXl1LVJhbWVuXCI7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpMi5pbm5lclRleHQgPSBcIlNoaW8tUmFtZW5cIjtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkzLmlubmVyVGV4dCA9IFwiTWlzby1SYW1lblwiO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMyk7XG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyLmlubmVyVGV4dCA9IFwiVHJ5IHRoZW0gYWxsIGFuZCBkaXNjb3ZlciB5b3VyIGZhdm9yaXRlISBMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWFydW0gb2JjYWVjYXRpIGFsaXF1YW0gbmlzaSB1bmRlIHByb3ZpZGVudCBhZCBkZWJpdGlzIGhhcnVtIGVhIHNlZCBuYXR1cywgdXQgcXVpYnVzZGFtIGludmVudG9yZSwgYXNzdW1lbmRhIHZlbCEgTW9sZXN0aWFzIG1haW9yZXMgdGVtcG9yaWJ1cyBvZGl0IHByb3ZpZGVudCByYXRpb25lIHF1b3Mgb2RpbyBpbXBlZGl0IGxhYm9ydW0gbWFnbmFtIHN1bnQsIGFzcGVyaW9yZXMgZGlzdGluY3RpbyBldCBuZWNlc3NpdGF0aWJ1cyBkaWN0YSB1dCBkb2xvcmlidXMgY29tbW9kaSBpcHNhIHF1aWRlbSBsaWJlcm8gcXVhZS4gTW9kaS5cIjtcbiAgICBwMS5hcHBlbmRDaGlsZChwMik7XG5cbiAgICByZXR1cm4gaGVhZFxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhlYWRcbn0iLCJjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImdhbGxlcnlcIik7XG5cbiAgICBjb25zdCByZXNwb25zaXZlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzcG9uc2l2ZTEuY2xhc3NMaXN0LmFkZChcInJlc3BvbnNpdmVcIik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChyZXNwb25zaXZlMSk7XG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0xLmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5XCIpO1xuICAgIHJlc3BvbnNpdmUxLmFwcGVuZENoaWxkKGl0ZW0xKTtcbiAgICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGExLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgYTEuaHJlZiA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjQuanBnXCI7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoYTEpO1xuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZzEuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuNC5qcGdcIjtcbiAgICBpbWcxLmFsdCA9IFwiUmFtZW5cIjtcbiAgICBhMS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgICBjb25zdCBkZXNjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzYzEuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgZGVzYzEuaW5uZXJUZXh0ID0gXCJSYW1lblxcclxcbiA5LDUw4oKsXCI7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoZGVzYzEpO1xuXG4gICAgY29uc3QgcmVzcG9uc2l2ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3BvbnNpdmUyLmNsYXNzTGlzdC5hZGQoXCJyZXNwb25zaXZlXCIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocmVzcG9uc2l2ZTIpO1xuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtMi5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeVwiKTtcbiAgICByZXNwb25zaXZlMi5hcHBlbmRDaGlsZChpdGVtMik7XG4gICAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhMi50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGEyLmhyZWYgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4yLmpwZ1wiO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKGEyKTtcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcyLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjIuanBnXCI7XG4gICAgaW1nMi5hbHQgPSBcIlJhbWVuXCI7XG4gICAgYTIuYXBwZW5kQ2hpbGQoaW1nMik7XG4gICAgY29uc3QgZGVzYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2MyLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuICAgIGRlc2MyLmlubmVyVGV4dCA9IFwiUmFtZW5cXHJcXG4gMTAsNTDigqxcIjtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChkZXNjMik7XG5cbiAgICBjb25zdCByZXNwb25zaXZlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzcG9uc2l2ZTMuY2xhc3NMaXN0LmFkZChcInJlc3BvbnNpdmVcIik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChyZXNwb25zaXZlMyk7XG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0zLmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5XCIpO1xuICAgIHJlc3BvbnNpdmUzLmFwcGVuZENoaWxkKGl0ZW0zKTtcbiAgICBjb25zdCBhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEzLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgYTMuaHJlZiA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjMuanBnXCI7XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoYTMpO1xuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZzMuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuMy5qcGdcIjtcbiAgICBpbWczLmFsdCA9IFwiUmFtZW5cIjtcbiAgICBhMy5hcHBlbmRDaGlsZChpbWczKTtcbiAgICBjb25zdCBkZXNjMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzYzMuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgZGVzYzMuaW5uZXJUZXh0ID0gXCJSYW1lblxcclxcbiAxMSwwMOKCrFwiO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKGRlc2MzKTtcblxuICAgIGNvbnN0IHJlc3BvbnNpdmU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNwb25zaXZlNC5jbGFzc0xpc3QuYWRkKFwicmVzcG9uc2l2ZVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHJlc3BvbnNpdmU0KTtcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZChcImdhbGxlcnlcIik7XG4gICAgcmVzcG9uc2l2ZTQuYXBwZW5kQ2hpbGQoaXRlbTQpO1xuICAgIGNvbnN0IGE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYTQudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBhNC5ocmVmID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuNC5qcGdcIjtcbiAgICBpdGVtNC5hcHBlbmRDaGlsZChhNCk7XG4gICAgY29uc3QgaW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nNC5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW40LmpwZ1wiO1xuICAgIGltZzQuYWx0ID0gXCJSYW1lblwiO1xuICAgIGE0LmFwcGVuZENoaWxkKGltZzQpO1xuICAgIGNvbnN0IGRlc2M0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjNC5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBkZXNjNC5pbm5lclRleHQgPSBcIlJhbWVuXFxyXFxuIDEyLDUw4oKsXCI7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoZGVzYzQpO1xuXG4gICAgcmV0dXJuIG1lbnVcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVNZW51XG59IiwiY29uc3QgY3JlYXRlQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmQtaW1hZ2VcIilcbiAgICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4tYmFja2dyb3VuZC5qcGdcIjtcbiAgICBpbWFnZS5hbHQgPSBcInRhc3R5IHJhbWVuXCI7XG4gICAgcmV0dXJuIGltYWdlXG59XG5cbmNvbnN0IGNyZWF0ZVdyYXBwZXJVcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyVSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlclUuY2xhc3NMaXN0LmFkZChcIndyYXBwZXItdXBwZXJcIik7XG4gICAgcmV0dXJuIHdyYXBwZXJVXG59XG5cbmNvbnN0IGNyZWF0ZU5hdldyYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2V3JhcC5jbGFzc0xpc3QuYWRkKFwibmF2LXdyYXBwZXJcIik7XG4gICAgcmV0dXJuIG5hdldyYXBcbn1cblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICAgIGNvbnN0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZVbCk7XG5cbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBjb25zdCBsaTFBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkxLmFwcGVuZENoaWxkKGxpMUEpO1xuICAgIGxpMUEuaHJlZiA9IFwiI1wiO1xuICAgIGxpMUEuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgbGkxQS5pZCA9IFwiaG9tZVwiO1xuXG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgY29uc3QgbGkyQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChsaTJBKTtcbiAgICBsaTJBLmhyZWYgPSBcIiNcIjtcbiAgICBsaTJBLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGxpMkEuaWQgPVwibWVudVwiO1xuXG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgY29uc3QgbGkzQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpMy5hcHBlbmRDaGlsZChsaTNBKTtcbiAgICBsaTNBLmhyZWYgPSBcIiNcIjtcbiAgICBsaTNBLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGxpM0EuaWQgPSBcImNvbnRhY3RcIjtcblxuICAgIGNvbnN0IHNvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzbzEuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChzbzEpO1xuICAgIGNvbnN0IHNvMUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbzEuYXBwZW5kQ2hpbGQoc28xQSk7XG4gICAgc28xQS5ocmVmID0gXCIjXCI7XG4gICAgY29uc3QgaWNvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uMS5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1mYWNlYm9va1wiKTtcbiAgICBzbzFBLmFwcGVuZENoaWxkKGljb24xKTtcblxuICAgIGNvbnN0IHNvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzbzIuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChzbzIpO1xuICAgIGNvbnN0IHNvMkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbzIuYXBwZW5kQ2hpbGQoc28yQSk7XG4gICAgc28yQS5ocmVmID0gXCIjXCI7XG4gICAgY29uc3QgaWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uMi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS10d2l0dGVyXCIpO1xuICAgIHNvMkEuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuXG4gICAgY29uc3Qgc28zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHNvMy5jbGFzc0xpc3QuYWRkKFwic29jaWFsXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKHNvMyk7XG4gICAgY29uc3Qgc28zQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNvMy5hcHBlbmRDaGlsZChzbzNBKTtcbiAgICBzbzNBLmhyZWYgPSBcIiNcIjtcbiAgICBjb25zdCBpY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGljb24zLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWluc3RhZ3JhbVwiKTtcbiAgICBzbzNBLmFwcGVuZENoaWxkKGljb24zKTtcblxuICAgIHJldHVybiBuYXZcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuaW5uZXJUZXh0ID0gXCJDb3B5cmlnaHQgKGMpIGVyeW5kZXItWi5cXHJcXG4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cIlxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gXCIjXCI7XG4gICAgYS5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICBhLmlubmVyVGV4dCA9IFwiSW1wcmludFwiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVCYWNrZ3JvdW5kLFxuICAgIGNyZWF0ZVdyYXBwZXJVcHBlcixcbiAgICBjcmVhdGVOYXZXcmFwLFxuICAgIGNyZWF0ZU5hdixcbiAgICBjcmVhdGVGb290ZXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gICAgY3JlYXRlQmFja2dyb3VuZCxcbiAgICBjcmVhdGVXcmFwcGVyVXBwZXIsXG4gICAgY3JlYXRlTmF2V3JhcCxcbiAgICBjcmVhdGVOYXYsXG4gICAgY3JlYXRlRm9vdGVyXG59IGZyb20gXCIuL21vZHVsZXMvdWlcIlxuXG5pbXBvcnQge1xuICAgIGNyZWF0ZUhlYWQsXG59IGZyb20gXCIuL21vZHVsZXMvaG9tZVwiXG5cbmltcG9ydCB7XG4gICAgY3JlYXRlTWVudVxufSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIlxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBpbml0aWFsaXplID0gKCgpID0+IHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tncm91bmQoKSk7XG4gICAgY29uc3Qgd3JhcHBlclUgPSBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVdyYXBwZXJVcHBlcigpKTtcbiAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICBuYXZXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbn0pKCk7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kKCkpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgICAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICAgICAgbmF2V3JhcC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZCgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgICAgIGhvbWVCdXR0b24oKTtcbiAgICAgICAgbWVudUJ1dHRvbigpXG4gICAgfSk7XG59XG5cbmNvbnN0IG1lbnVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kKCkpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgICAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICAgICAgbmF2V3JhcC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICAgICAgaG9tZUJ1dHRvbigpO1xuICAgICAgICBtZW51QnV0dG9uKClcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50cygpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmhvbWVCdXR0b24oKTtcbm1lbnVCdXR0b24oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=