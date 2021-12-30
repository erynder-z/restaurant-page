import Background from "../images/ramen-background.jpg";

const createBackground = () => {
    const image = document.createElement("img");
    image.classList.add("background-image")
    image.src = Background;
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

    const navListItemFactory = (item, link, linkHref, linkInnerText, linkID) => {
        let saveId = linkID;
        item = document.createElement("li");
        navUl.appendChild(item);

        link = document.createElement("a");
        link.href = linkHref;
        link.innerText = linkInnerText;
        link.id = saveId;
        item.appendChild(link);

        return {
            item,
            link
        }
    }

    const item1 = navListItemFactory("item", "link", "#", "Home", "home");
    const item2 = navListItemFactory("item", "link", "#", "Menu", "menu");
    const item3 = navListItemFactory("item", "link", "#", "Contact", "contact");

    const navSocialItemfactory = (item, link, linkHref, icon, iconClass1, iconClass2) => {
        item = document.createElement("li");
        navUl.appendChild(item);

        link = document.createElement("a");
        link.href = linkHref;
        item.appendChild(link);

        icon = document.createElement("i");
        icon.classList.add(iconClass1);
        icon.classList.add(iconClass2);
        link.appendChild(icon);

        return {
            item,
            link,
            icon,
        }
    }

    const social1 = navSocialItemfactory("item", "link", "#", "icon", "fa", "fa-facebook");
    const social2 = navSocialItemfactory("item", "link", "#", "icon", "fa", "fa-twitter");
    const social3 = navSocialItemfactory("item", "link", "#", "icon", "fa", "fa-instagram");

    return nav
}

const createFooter = () => {
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.innerText = "Erynder-Z 2021"
    footer.appendChild(p);
    const a = document.createElement("a");
    a.href = "https://github.com/erynder-z";
    a.rel = "noopener noreferrer";
    a.innerText = "My GitHub";
    footer.appendChild(a);

    return footer
}

export {
    createBackground,
    createWrapperUpper,
    createNavWrap,
    createNav,
    createFooter
}