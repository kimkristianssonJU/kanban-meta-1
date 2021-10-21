import { customCreateElement } from "./create_element.mjs";
import { addButtonFunc } from "./button_add_card.mjs";
import { globalDropBoxList } from "./global_list.mjs";
import { userVerificationKey } from "./global_storage_key.mjs";
import { fillStatusLists } from "./fill_status_lists.mjs";
import { setLogout } from "./logout_function.mjs";

export function createKanban() {
    // Hämtar inloggad användare
    const currentUser = JSON.parse(localStorage.getItem(userVerificationKey));

    const body = document.querySelector("body");

    // Rensar sidan
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    // Titel
    let mainTitle = customCreateElement("h1", "id", "main-title", body);
    mainTitle.textContent = "Kanban Meta 1 | " + currentUser.name;

    // Logout-button
    let btnLogout = customCreateElement("button", "id", "btn-logout", body);
    btnLogout.textContent = "Logga ut";
    setLogout(btnLogout);

    // Wrapper elementet
    const wrapper = customCreateElement("div", "id", "wrapper", body);

    // Skapar kanban-innehåll
    for (const dropBox of globalDropBoxList) {
        const dropContainer = customCreateElement("div", "id", dropBox.id, wrapper);
        dropContainer.classList.add("drop-container");
        const dragListContainer = customCreateElement("div", "class", "drag-list-container", dropContainer);
        let title = customCreateElement("h3", "", "", dragListContainer);
        title.textContent = dropBox.name;
        const newCardWrapper = customCreateElement("div", "class", "new-card-wrapper", dropContainer);
        customCreateElement("textarea", "class", "new-text-area", newCardWrapper);
        const btnAddCard = customCreateElement("button", "class", "btn-add-card", dropContainer);
        btnAddCard.textContent = "Skapa nytt kort";
        addButtonFunc(btnAddCard);
    }

    // Fyller Listorna med tasks
    fillStatusLists();
}