
import { createBackground } from "./modules/home";

const initialize = (() => {
    const content = document.getElementById("content");
    content.appendChild(createBackground());
})();



