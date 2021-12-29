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

export {
    createHours,
    createReservations,
    createStatus,
    createContacts
}