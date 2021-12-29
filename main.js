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
/* harmony export */   "createBackground": () => (/* binding */ createBackground),
/* harmony export */   "createWrapperUpper": () => (/* binding */ createWrapperUpper),
/* harmony export */   "createNavWrap": () => (/* binding */ createNavWrap),
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "createHead": () => (/* binding */ createHead),
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
    const someElement = document.createElement("div");
    someElement.innerText = "Test";
    return someElement
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
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");




const content = document.getElementById("content");

const initialize = (() => {
    content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createBackground)());
    const wrapperU = content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createWrapperUpper)());
    const navWrap = wrapperU.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createNavWrap)());
    navWrap.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createNav)());
    content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHead)());
    content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createFooter)());

})();

const menuButton = () => {
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)());
    });
}

function clearContents() {
    content.innerHTML = "";
}

menuButton();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0N3Qjs7QUFJRDs7QUFFdkI7O0FBRUE7QUFDQSx3QkFBd0IsK0RBQWdCO0FBQ3hDLHlDQUF5QyxpRUFBa0I7QUFDM0QseUNBQXlDLDREQUFhO0FBQ3RELHdCQUF3Qix3REFBUztBQUNqQyx3QkFBd0IseURBQVU7QUFDbEMsd0JBQXdCLDJEQUFZOztBQUVwQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlEQUFVO0FBQ3RDLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmQtaW1hZ2VcIilcbiAgICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4tYmFja2dyb3VuZC5qcGdcIjtcbiAgICBpbWFnZS5hbHQgPSBcInRhc3R5IHJhbWVuXCI7XG4gICAgcmV0dXJuIGltYWdlXG59XG5cbmNvbnN0IGNyZWF0ZVdyYXBwZXJVcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyVSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlclUuY2xhc3NMaXN0LmFkZChcIndyYXBwZXItdXBwZXJcIik7XG4gICAgcmV0dXJuIHdyYXBwZXJVXG59XG5cbmNvbnN0IGNyZWF0ZU5hdldyYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2V3JhcC5jbGFzc0xpc3QuYWRkKFwibmF2LXdyYXBwZXJcIik7XG4gICAgcmV0dXJuIG5hdldyYXBcbn1cblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICAgIGNvbnN0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZVbCk7XG5cbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBjb25zdCBsaTFBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkxLmFwcGVuZENoaWxkKGxpMUEpO1xuICAgIGxpMUEuaHJlZiA9IFwiI1wiO1xuICAgIGxpMUEuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgbGkxQS5pZCA9IFwiaG9tZVwiO1xuXG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgY29uc3QgbGkyQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChsaTJBKTtcbiAgICBsaTJBLmhyZWYgPSBcIiNcIjtcbiAgICBsaTJBLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGxpMkEuaWQgPVwibWVudVwiO1xuXG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgY29uc3QgbGkzQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpMy5hcHBlbmRDaGlsZChsaTNBKTtcbiAgICBsaTNBLmhyZWYgPSBcIiNcIjtcbiAgICBsaTNBLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGxpM0EuaWQgPSBcImNvbnRhY3RcIjtcblxuICAgIGNvbnN0IHNvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzbzEuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChzbzEpO1xuICAgIGNvbnN0IHNvMUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbzEuYXBwZW5kQ2hpbGQoc28xQSk7XG4gICAgc28xQS5ocmVmID0gXCIjXCI7XG4gICAgY29uc3QgaWNvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uMS5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1mYWNlYm9va1wiKTtcbiAgICBzbzFBLmFwcGVuZENoaWxkKGljb24xKTtcblxuICAgIGNvbnN0IHNvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzbzIuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChzbzIpO1xuICAgIGNvbnN0IHNvMkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbzIuYXBwZW5kQ2hpbGQoc28yQSk7XG4gICAgc28yQS5ocmVmID0gXCIjXCI7XG4gICAgY29uc3QgaWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uMi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS10d2l0dGVyXCIpO1xuICAgIHNvMkEuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuXG4gICAgY29uc3Qgc28zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHNvMy5jbGFzc0xpc3QuYWRkKFwic29jaWFsXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKHNvMyk7XG4gICAgY29uc3Qgc28zQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNvMy5hcHBlbmRDaGlsZChzbzNBKTtcbiAgICBzbzNBLmhyZWYgPSBcIiNcIjtcbiAgICBjb25zdCBpY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGljb24zLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWluc3RhZ3JhbVwiKTtcbiAgICBzbzNBLmFwcGVuZENoaWxkKGljb24zKTtcblxuICAgIHJldHVybiBuYXZcbn1cblxuY29uc3QgY3JlYXRlSGVhZCA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkLXNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lclRleHQgPSBcIllhbWF0byBSYW1lblwiO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaDMuaW5uZXJUZXh0ID0gXCJZdW1teSDjg6njg7zjg6Hjg7NcIjtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGgzKTtcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDEuaW5uZXJUZXh0ID0gXCJBdXRlbnRpYyBqYXBhbmVzZSBzdHlsZSBSYW1lbiBmb3IgZXZlcnkgdGFzdGUuXCI7XG5cbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBwMS5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaGVhZC5hcHBlbmQocDEpO1xuXG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpMS5pbm5lclRleHQgPSBcIlNoxY15dS1SYW1lblwiO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTIuaW5uZXJUZXh0ID0gXCJTaGlvLVJhbWVuXCI7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpMy5pbm5lclRleHQgPSBcIk1pc28tUmFtZW5cIjtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMi5pbm5lclRleHQgPSBcIlRyeSB0aGVtIGFsbCBhbmQgZGlzY292ZXIgeW91ciBmYXZvcml0ZSEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVhcnVtIG9iY2FlY2F0aSBhbGlxdWFtIG5pc2kgdW5kZSBwcm92aWRlbnQgYWQgZGViaXRpcyBoYXJ1bSBlYSBzZWQgbmF0dXMsIHV0IHF1aWJ1c2RhbSBpbnZlbnRvcmUsIGFzc3VtZW5kYSB2ZWwhIE1vbGVzdGlhcyBtYWlvcmVzIHRlbXBvcmlidXMgb2RpdCBwcm92aWRlbnQgcmF0aW9uZSBxdW9zIG9kaW8gaW1wZWRpdCBsYWJvcnVtIG1hZ25hbSBzdW50LCBhc3BlcmlvcmVzIGRpc3RpbmN0aW8gZXQgbmVjZXNzaXRhdGlidXMgZGljdGEgdXQgZG9sb3JpYnVzIGNvbW1vZGkgaXBzYSBxdWlkZW0gbGliZXJvIHF1YWUuIE1vZGkuXCI7XG4gICAgcDEuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgcmV0dXJuIGhlYWRcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuaW5uZXJUZXh0ID0gXCJDb3B5cmlnaHQgKGMpIGVyeW5kZXItWi5cXHJcXG4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cIlxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gXCIjXCI7XG4gICAgYS5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICBhLmlubmVyVGV4dCA9IFwiSW1wcmludFwiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUJhY2tncm91bmQsXG4gICAgY3JlYXRlV3JhcHBlclVwcGVyLFxuICAgIGNyZWF0ZU5hdldyYXAsXG4gICAgY3JlYXRlTmF2LFxuICAgIGNyZWF0ZUhlYWQsXG4gICAgY3JlYXRlRm9vdGVyXG59IiwiY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBzb21lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc29tZUVsZW1lbnQuaW5uZXJUZXh0ID0gXCJUZXN0XCI7XG4gICAgcmV0dXJuIHNvbWVFbGVtZW50XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWVudVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgICBjcmVhdGVCYWNrZ3JvdW5kLFxuICAgIGNyZWF0ZVdyYXBwZXJVcHBlcixcbiAgICBjcmVhdGVOYXZXcmFwLFxuICAgIGNyZWF0ZU5hdixcbiAgICBjcmVhdGVIZWFkLFxuICAgIGNyZWF0ZUZvb3RlclxufSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcblxuaW1wb3J0IHtcbiAgICBjcmVhdGVNZW51XG59IGZyb20gXCIuL21vZHVsZXMvbWVudVwiXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKCkgPT4ge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFja2dyb3VuZCgpKTtcbiAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgIGNvbnN0IG5hdldyYXAgPSB3cmFwcGVyVS5hcHBlbmRDaGlsZChjcmVhdGVOYXZXcmFwKCkpO1xuICAgIG5hdldyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxufSkoKTtcblxuY29uc3QgbWVudUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50cygpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudHMoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5tZW51QnV0dG9uKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9