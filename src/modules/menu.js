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

export {
    createMenu
}