(()=>{"use strict";var n={24:(n,e,t)=>{t.d(e,{Z:()=>d});var a=t(81),i=t.n(a),o=t(645),r=t.n(o)()(i());r.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const d=r},426:(n,e,t)=>{t.d(e,{Z:()=>d});var a=t(81),i=t.n(a),o=t(645),r=t.n(o)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap);"]),r.push([n.id,"*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background: #C7B57B;\n    font-family: 'Zilla Slab', serif;\n}\n\n.wrapper-upper {\n    display: flex;\n    flex-direction: column;\n    min-height: 10vh;\n}\n\n.background-image {\n    position: fixed;\n    width: 100rem;\n    z-index: -1;\n    opacity: 0.2;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n@-moz-document url-prefix() {\n    .background-image {\n      width: 110rem;\n    }\n  }\n\n#logo {\n    width: 25%;\n    height: auto;\n}\n\n@media all and (max-width:500px) {\n\n    #logo {\n        width: 50%;\n    }\n\n}\n\n.nav-wrapper {\n    padding: 25px;\n}\n\n.nav ul {\n    border: 1px solid black;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    background: #CC3939;\n    min-height: 5vh;\n    font-size: 18px;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.nav li {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 3;\n    height: 5vh;\n}\n\n.nav li:hover {\n    background: #882222;\n}\n\n.nav li a {\n    text-decoration: none;\n    color: #e9e9e9;\n\n\n}\n\n.flex-nav .social {\n    flex: 3;\n}\n\n\n@media all and (max-width:1000px) {\n\n    .nav-wrapper {\n        padding: 25px 75px;\n    }\n\n    .nav ul {\n        flex-wrap: wrap;\n        text-align: center;\n        min-height: 100%;\n\n    }\n\n    .nav li {\n        flex: 0 1 20%;\n    }\n\n    .nav .social {\n        flex: 1 1 auto;\n    }\n\n}\n\n@media all and (max-width:500px) {\n\n    .nav li {\n        flex-basis: 100%;\n        height: 25px;\n    }\n\n}\n\n.head-section h1 {\n    font-size: 60px;\n    text-align: center;\n}\n\n.head-section h3 {\n    font-size: 35px;\n}\n\n.head-section ul {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.head-section {\n    min-height: 75vh;\n    width: 85vw;\n}\n\n.head-section,\n.about,\n.hours {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 25px 25px 25px;\n    text-align: center;\n    margin: 0 auto;\n    border-bottom: solid 1px black;\n}\n\n.hours ul {\n    list-style: none;\n    padding: 0;\n}\n\n.reservations {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-bottom: solid 1px black;\n    padding-bottom: 25px;\n}\n\n.status {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 25px 0;\n    border-bottom: solid 1px black;\n    padding-bottom: 25px;\n\n\n}\n\n#current-status {\n    display: flex;\n    height: 40px;\n    width: 100px;\n    background: rgb(82, 134, 4);\n    color: white;\n    justify-content: center;\n    align-items: center;\n}\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.submit-button {\n    margin-top: 20px;\n}\n\n.input-textarea {\n    width: 35vw;\n    height: 20vh;\n}\n\n@media all and (max-width:500px) {\n    .input-textarea {\n        width: 80vw;\n    }\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    min-height: 5vh;\n    margin: 0 10vw;\n}\n\n\n@media (max-width: 500px) {\n    footer {\n        flex-direction: column;\n        text-align: center;\n    }\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 80vh;\n}\n\n@media (max-width: 500px) {\n    .menu {\n        flex-direction: column;\n    }\n}\n\n.gallery {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1 1 0;\n    max-width: 90vw;\n    justify-content: center;\n}\n\n@media all and (max-width:500px) {\n    .gallery {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n}\n\ndiv.gallery img {\n    width: 250px;\n    height: 200px;\n}\n\ndiv.desc {\n    padding: 15px;\n    text-align: center;\n}\n\n.responsive {\n    display: flex;\n    flex-direction: column;\n    padding: 0 6px;\n    height: 100%;\n}\n\n.responsive:hover {\n    transition: all 0.5s;\n    transform: scale(1.05);\n\n}\n\n@media only screen and (max-width: 700px) {\n    .responsive {\n        width: 49.99999%;\n        margin: 6px 0;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    .responsive {\n        width: 100%;\n        padding: 0 25px;\n    }\n}",""]);const d=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(r[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},r=[],d=0;d<n.length;d++){var c=n[d],s=a.base?c[0]+a.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=i(u,a);a.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=a(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var d=t(o[r]);e[d].references--}for(var c=a(n,i),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},845:(n,e,t)=>{n.exports=t.p+"f1a7218cc08a10a85204.jpg"},106:(n,e,t)=>{n.exports=t.p+"4b837ff25c5da2afc874.png"},367:(n,e,t)=>{n.exports=t.p+"271cbbf2090cc31b9069.jpg"},299:(n,e,t)=>{n.exports=t.p+"5bce77a55954feb611fd.jpg"},836:(n,e,t)=>{n.exports=t.p+"2fcff81cbb6885ca46ba.jpg"},350:(n,e,t)=>{n.exports=t.p+"b56c957f3196e9d67424.jpg"}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),a=t(795),i=t.n(a),o=t(569),r=t.n(o),d=t(565),c=t.n(d),s=t(216),l=t.n(s),p=t(589),m=t.n(p),u=t(24),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var f=t(426),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var x=t(845);const b=()=>{const n=document.createElement("img");return n.classList.add("background-image"),n.src=x,n.alt="tasty ramen",n},v=()=>{const n=document.createElement("div");return n.classList.add("wrapper-upper"),n},y=()=>{const n=document.createElement("div");return n.classList.add("nav-wrapper"),n},C=()=>{const n=document.createElement("nav");n.classList.add("nav");const e=document.createElement("ul");n.appendChild(e);const t=document.createElement("li");e.appendChild(t);const a=document.createElement("a");t.appendChild(a),a.href="#",a.innerText="Home",a.id="home";const i=document.createElement("li");e.appendChild(i);const o=document.createElement("a");i.appendChild(o),o.href="#",o.innerText="Menu",o.id="menu";const r=document.createElement("li");e.appendChild(r);const d=document.createElement("a");r.appendChild(d),d.href="#",d.innerText="Contact",d.id="contact";const c=document.createElement("li");c.classList.add("social"),e.appendChild(c);const s=document.createElement("a");c.appendChild(s),s.href="#";const l=document.createElement("i");l.classList.add("fa","fa-facebook"),s.appendChild(l);const p=document.createElement("li");p.classList.add("social"),e.appendChild(p);const m=document.createElement("a");p.appendChild(m),m.href="#";const u=document.createElement("i");u.classList.add("fa","fa-twitter"),m.appendChild(u);const h=document.createElement("li");h.classList.add("social"),e.appendChild(h);const f=document.createElement("a");h.appendChild(f),f.href="#";const g=document.createElement("i");return g.classList.add("fa","fa-instagram"),f.appendChild(g),n},E=()=>{const n=document.createElement("footer"),e=document.createElement("p");e.innerText="Erynder-Z 2021",n.appendChild(e);const t=document.createElement("a");return t.href="https://github.com/erynder-z",t.rel="noopener noreferrer",t.innerText="My GitHub",n.appendChild(t),n};var w=t(106);const T=()=>{const n=document.createElement("div");n.classList.add("head-section");const e=document.createElement("h1");e.innerText="Yamato Ramen",n.appendChild(e);const t=document.createElement("h3");t.innerText="Yummy ラーメン",n.appendChild(t);const a=document.createElement("img");a.src=w,a.id="logo",n.appendChild(a);const i=document.createElement("p");i.innerText="Autentic japanese style Ramen for every taste.";const o=document.createElement("ul");i.appendChild(o),n.append(i);const r=document.createElement("li");r.innerText="Shōyu-Ramen";const d=document.createElement("li");d.innerText="Shio-Ramen";const c=document.createElement("li");c.innerText="Miso-Ramen",o.appendChild(r),o.appendChild(d),o.appendChild(c);const s=document.createElement("p");return s.innerText="Try them all and discover your favorite! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum obcaecati aliquam nisi unde provident ad debitis harum ea sed natus, ut quibusdam inventore, assumenda vel! Molestias maiores temporibus odit provident ratione quos odio impedit laborum magnam sunt, asperiores distinctio et necessitatibus dicta ut doloribus commodi ipsa quidem libero quae. Modi.",i.appendChild(s),n};var k=t(836),L=t(367),z=t(299),S=t(350);const I=document.getElementById("content"),R=(I.appendChild(b()),I.appendChild(v()).appendChild(y()).appendChild(C()),I.appendChild(T()),I.appendChild(E()),document.getElementById("home").parentElement.style.background="#ec4d4d",()=>{document.getElementById("home").addEventListener("click",(()=>{M(),I.appendChild(b()),I.appendChild(v()).appendChild(y()).appendChild(C()),I.appendChild(T()),I.appendChild(E()),R(),j(),A(),document.getElementById("home").parentElement.style.background="#ec4d4d"}))}),j=()=>{document.getElementById("menu").addEventListener("click",(()=>{M(),I.appendChild(b()),I.appendChild(v()).appendChild(y()).appendChild(C()),I.appendChild((()=>{const n=document.createElement("div");n.classList.add("menu");const e=document.createElement("h1");e.innerText="Menu",n.appendChild(e);const t=document.createElement("div");t.classList.add("gallery"),n.appendChild(t);const a=document.createElement("div");a.classList.add("responsive"),t.appendChild(a);const i=document.createElement("div");a.appendChild(i);const o=document.createElement("a");o.target="_blank",o.href=k,i.appendChild(o);const r=document.createElement("img");r.src=k,r.alt="Ramen",o.appendChild(r);const d=document.createElement("div");d.classList.add("desc"),d.innerText="Ramen\r\n 9,50€",i.appendChild(d);const c=document.createElement("div");c.classList.add("responsive"),t.appendChild(c);const s=document.createElement("div");c.appendChild(s);const l=document.createElement("a");l.target="_blank",l.href=L,s.appendChild(l);const p=document.createElement("img");p.src=L,p.alt="Ramen",l.appendChild(p);const m=document.createElement("div");m.classList.add("desc"),m.innerText="Ramen\r\n 10,50€",s.appendChild(m);const u=document.createElement("div");u.classList.add("responsive"),t.appendChild(u);const h=document.createElement("div");u.appendChild(h);const f=document.createElement("a");f.target="_blank",f.href=z,h.appendChild(f);const g=document.createElement("img");g.src=z,g.alt="Ramen",f.appendChild(g);const x=document.createElement("div");x.classList.add("desc"),x.innerText="Ramen\r\n 11,00€",h.appendChild(x);const b=document.createElement("div");b.classList.add("responsive"),t.appendChild(b);const v=document.createElement("div");b.appendChild(v);const y=document.createElement("a");y.target="_blank",y.href=S,v.appendChild(y);const C=document.createElement("img");C.src=S,C.alt="Ramen",y.appendChild(C);const E=document.createElement("div");return E.classList.add("desc"),E.innerText="Ramen\r\n 12,50€",v.appendChild(E),n})()),I.appendChild(E()),R(),j(),A(),document.getElementById("menu").parentElement.style.background="#ec4d4d"}))},A=()=>{document.getElementById("contact").addEventListener("click",(()=>{M(),I.appendChild(b()),I.appendChild(v()).appendChild(y()).appendChild(C()),I.appendChild((()=>{const n=document.createElement("div");n.classList.add("hours");const e=document.createElement("h3");e.innerText="Opening hours:",n.appendChild(e);const t=document.createElement("ul");n.appendChild(t);const a=document.createElement("li");a.innerText="Monday (closed)",t.appendChild(a);const i=document.createElement("li");i.innerText="Tuesday: 11:00 - 22:00",t.appendChild(i);const o=document.createElement("li");o.innerText="Wednesday 11:00 - 22:00",t.appendChild(o);const r=document.createElement("li");r.innerText="Thursday 11:00 - 22:00",t.appendChild(r);const d=document.createElement("li");d.innerText="Friday 11:00 - 22:00",t.appendChild(d);const c=document.createElement("li");c.innerText="Saturday 11:00 - 22:00",t.appendChild(c);const s=document.createElement("li");return s.innerText="Sunday 11:00 - 22:00",t.appendChild(s),n})()),I.appendChild((()=>{const n=document.createElement("div");n.classList.add("reservations");const e=document.createElement("h3");e.innerText="Table reservations",n.appendChild(e);const t=document.createElement("input");return t.type="datetime-local",n.appendChild(t),n})()),I.appendChild((()=>{const n=document.createElement("div");n.classList.add("status");const e=document.createElement("h3");e.innerText="Current status:",n.appendChild(e);const t=document.createElement("div");return t.id="current-status",t.innerText="Not so busy",n.appendChild(t),n})()),I.appendChild((()=>{const n=document.createElement("div");n.classList.add("contact-wrapper");const e=document.createElement("div");e.classList.add("contact"),n.appendChild(e);const t=document.createElement("h2");t.innerText="Contact us:",e.appendChild(t);const a=document.createElement("textarea");a.classList.add("input-textarea"),a.placeholder="Enter your message here...",e.appendChild(a);const i=document.createElement("div");i.classList.add("contact"),n.appendChild(i);const o=document.createElement("button");o.classList.add("submit-button"),o.id="submit",o.type="submit",o.innerText="Send message",i.appendChild(o);const r=document.createElement("div");r.classList.add("contact"),n.appendChild(r);const d=document.createElement("h4");d.innerText="Mail:",r.appendChild(d);const c=document.createElement("a");c.href="mailto:yamato@nood.le",c.innerText=" yamato@nood.le",d.appendChild(c);const s=document.createElement("h4");return s.innerText="Phone: +49 1234 / 56789",r.appendChild(s),n})()),I.appendChild(E()),R(),j(),A(),document.getElementById("contact").parentElement.style.background="#ec4d4d"}))};function M(){I.innerHTML=""}R(),j(),A()})()})();