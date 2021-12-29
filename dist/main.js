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

menuButton();


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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0N3Qjs7QUFJRDs7QUFFdkI7O0FBRUE7QUFDQSx3QkFBd0IsK0RBQWdCO0FBQ3hDLHlDQUF5QyxpRUFBa0I7QUFDM0QseUNBQXlDLDREQUFhO0FBQ3RELHdCQUF3Qix3REFBUztBQUNqQyx3QkFBd0IseURBQVU7QUFDbEMsd0JBQXdCLDJEQUFZOztBQUVwQyxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5REFBVTtBQUN0QyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kLWltYWdlXCIpXG4gICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuLWJhY2tncm91bmQuanBnXCI7XG4gICAgaW1hZ2UuYWx0ID0gXCJ0YXN0eSByYW1lblwiO1xuICAgIHJldHVybiBpbWFnZVxufVxuXG5jb25zdCBjcmVhdGVXcmFwcGVyVXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlclUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXJVLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyLXVwcGVyXCIpO1xuICAgIHJldHVybiB3cmFwcGVyVVxufVxuXG5jb25zdCBjcmVhdGVOYXZXcmFwID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdldyYXAuY2xhc3NMaXN0LmFkZChcIm5hdi13cmFwcGVyXCIpO1xuICAgIHJldHVybiBuYXZXcmFwXG59XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cbiAgICBjb25zdCBuYXZVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2VWwpO1xuXG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgY29uc3QgbGkxQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpMS5hcHBlbmRDaGlsZChsaTFBKTtcbiAgICBsaTFBLmhyZWYgPSBcIiNcIjtcbiAgICBsaTFBLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGxpMUEuaWQgPSBcImhvbWVcIjtcblxuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChsaTIpO1xuICAgIGNvbnN0IGxpMkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaTIuYXBwZW5kQ2hpbGQobGkyQSk7XG4gICAgbGkyQS5ocmVmID0gXCIjXCI7XG4gICAgbGkyQS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBsaTJBLmlkID1cIm1lbnVcIjtcblxuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChsaTMpO1xuICAgIGNvbnN0IGxpM0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaTMuYXBwZW5kQ2hpbGQobGkzQSk7XG4gICAgbGkzQS5ocmVmID0gXCIjXCI7XG4gICAgbGkzQS5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgICBsaTNBLmlkID0gXCJjb250YWN0XCI7XG5cbiAgICBjb25zdCBzbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc28xLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQoc28xKTtcbiAgICBjb25zdCBzbzFBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc28xLmFwcGVuZENoaWxkKHNvMUEpO1xuICAgIHNvMUEuaHJlZiA9IFwiI1wiO1xuICAgIGNvbnN0IGljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaWNvbjEuY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtZmFjZWJvb2tcIik7XG4gICAgc28xQS5hcHBlbmRDaGlsZChpY29uMSk7XG5cbiAgICBjb25zdCBzbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc28yLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQoc28yKTtcbiAgICBjb25zdCBzbzJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc28yLmFwcGVuZENoaWxkKHNvMkEpO1xuICAgIHNvMkEuaHJlZiA9IFwiI1wiO1xuICAgIGNvbnN0IGljb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaWNvbjIuY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtdHdpdHRlclwiKTtcbiAgICBzbzJBLmFwcGVuZENoaWxkKGljb24yKTtcblxuICAgIGNvbnN0IHNvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzbzMuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChzbzMpO1xuICAgIGNvbnN0IHNvM0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbzMuYXBwZW5kQ2hpbGQoc28zQSk7XG4gICAgc28zQS5ocmVmID0gXCIjXCI7XG4gICAgY29uc3QgaWNvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uMy5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1pbnN0YWdyYW1cIik7XG4gICAgc28zQS5hcHBlbmRDaGlsZChpY29uMyk7XG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmNvbnN0IGNyZWF0ZUhlYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZC1zZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJUZXh0ID0gXCJZYW1hdG8gUmFtZW5cIjtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGgzLmlubmVyVGV4dCA9IFwiWXVtbXkg44Op44O844Oh44OzXCI7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLmlubmVyVGV4dCA9IFwiQXV0ZW50aWMgamFwYW5lc2Ugc3R5bGUgUmFtZW4gZm9yIGV2ZXJ5IHRhc3RlLlwiO1xuXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcDEuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWQuYXBwZW5kKHAxKTtcblxuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTEuaW5uZXJUZXh0ID0gXCJTaMWNeXUtUmFtZW5cIjtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkyLmlubmVyVGV4dCA9IFwiU2hpby1SYW1lblwiO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTMuaW5uZXJUZXh0ID0gXCJNaXNvLVJhbWVuXCI7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDIuaW5uZXJUZXh0ID0gXCJUcnkgdGhlbSBhbGwgYW5kIGRpc2NvdmVyIHlvdXIgZmF2b3JpdGUhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFYXJ1bSBvYmNhZWNhdGkgYWxpcXVhbSBuaXNpIHVuZGUgcHJvdmlkZW50IGFkIGRlYml0aXMgaGFydW0gZWEgc2VkIG5hdHVzLCB1dCBxdWlidXNkYW0gaW52ZW50b3JlLCBhc3N1bWVuZGEgdmVsISBNb2xlc3RpYXMgbWFpb3JlcyB0ZW1wb3JpYnVzIG9kaXQgcHJvdmlkZW50IHJhdGlvbmUgcXVvcyBvZGlvIGltcGVkaXQgbGFib3J1bSBtYWduYW0gc3VudCwgYXNwZXJpb3JlcyBkaXN0aW5jdGlvIGV0IG5lY2Vzc2l0YXRpYnVzIGRpY3RhIHV0IGRvbG9yaWJ1cyBjb21tb2RpIGlwc2EgcXVpZGVtIGxpYmVybyBxdWFlLiBNb2RpLlwiO1xuICAgIHAxLmFwcGVuZENoaWxkKHAyKTtcblxuICAgIHJldHVybiBoZWFkXG59XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmlubmVyVGV4dCA9IFwiQ29weXJpZ2h0IChjKSBlcnluZGVyLVouXFxyXFxuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXCJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaHJlZiA9IFwiI1wiO1xuICAgIGEucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgYS5pbm5lclRleHQgPSBcIkltcHJpbnRcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVCYWNrZ3JvdW5kLFxuICAgIGNyZWF0ZVdyYXBwZXJVcHBlcixcbiAgICBjcmVhdGVOYXZXcmFwLFxuICAgIGNyZWF0ZU5hdixcbiAgICBjcmVhdGVIZWFkLFxuICAgIGNyZWF0ZUZvb3RlclxufSIsImNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29tZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvbWVFbGVtZW50LmlubmVyVGV4dCA9IFwiVGVzdFwiO1xuICAgIHJldHVybiBzb21lRWxlbWVudFxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1lbnVcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gICAgY3JlYXRlQmFja2dyb3VuZCxcbiAgICBjcmVhdGVXcmFwcGVyVXBwZXIsXG4gICAgY3JlYXRlTmF2V3JhcCxcbiAgICBjcmVhdGVOYXYsXG4gICAgY3JlYXRlSGVhZCxcbiAgICBjcmVhdGVGb290ZXJcbn0gZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5cbmltcG9ydCB7XG4gICAgY3JlYXRlTWVudVxufSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIlxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBpbml0aWFsaXplID0gKCgpID0+IHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tncm91bmQoKSk7XG4gICAgY29uc3Qgd3JhcHBlclUgPSBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVdyYXBwZXJVcHBlcigpKTtcbiAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICBuYXZXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbn0pKCk7XG5cbm1lbnVCdXR0b24oKTtcblxuXG5jb25zdCBtZW51QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50cygpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9