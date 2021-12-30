import Image1 from "../images/ramen4.jpg";
import Image2 from "../images/ramen2.jpg";
import Image3 from "../images/ramen3.jpg";
import Image4 from "../images/ramen6.jpg";

const createMenu = () => {

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.innerText = "Menu";
    menu.appendChild(heading);

    const gallery = document.createElement("div");
    gallery.classList.add("gallery");
    menu.appendChild(gallery)

    const MenuItemFactory = (responsiveFrameId, item, link, linkHref, image, imageSource, imageAlt, description, descriptionText) => {
        let saveID = responsiveFrameId;
        responsiveFrameId = document.createElement("div");
        responsiveFrameId.id = saveID;
        responsiveFrameId.classList.add("responsive");
        gallery.appendChild(responsiveFrameId);

        item = document.createElement("div");
        responsiveFrameId.appendChild(item);

        link = document.createElement("a");
        link.target = "_blank";
        link.href = linkHref;
        item.appendChild(link);

        image = document.createElement("img");
        image.src = imageSource;
        image.alt = imageAlt;
        link.appendChild(image);

        description = document.createElement("div");
        description.classList.add("desc");
        description.innerText = descriptionText;
        item.appendChild(description);

        return {
            responsiveFrameId,
            item,
            link,
            image,
            description,
        }
    }

    const ramen1 = MenuItemFactory("id1", "item", "link", Image1, "img", Image1, "Ramen", "desc", "Ramen\r\n 9,50€");
    const ramen2 = MenuItemFactory("id2", "item", "link", Image2, "img", Image2, "Ramen", "desc", "Ramen\r\n 10,50€");
    const ramen3 = MenuItemFactory("id3", "item", "link", Image3, "img", Image3, "Ramen", "desc", "Ramen\r\n 11,00€");
    const ramen4 = MenuItemFactory("id4", "item", "link", Image4, "img", Image4, "Ramen", "desc", "Ramen\r\n 12,50€");
    const ramen5 = MenuItemFactory("id5", "item", "link", Image1, "img", Image1, "Ramen", "desc", "Ramen\r\n 9,50€");
    const ramen6 = MenuItemFactory("id6", "item", "link", Image2, "img", Image2, "Ramen", "desc", "Ramen\r\n 10,50€");
    const ramen7 = MenuItemFactory("id7", "item", "link", Image3, "img", Image3, "Ramen", "desc", "Ramen\r\n 11,00€");
    const ramen8 = MenuItemFactory("id8", "item", "link", Image4, "img", Image4, "Ramen", "desc", "Ramen\r\n 12,50€");
    const ramen9 = MenuItemFactory("id9", "item", "link", Image1, "img", Image1, "Ramen", "desc", "Ramen\r\n 9,50€");

    return menu
}

export {
    createMenu
}