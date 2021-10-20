import { customCreateElement } from "./create_element.mjs";
import { addButtonFunc } from "./button_add_card.mjs";

export function createKanban(dropBoxes) {
    let wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = "";
    for (const dropBox of dropBoxes) {
        const dropContainer = customCreateElement("div", "id", dropBox.id, document.getElementById("wrapper"));
        dropContainer.classList.add("drop-container");
        const dragListContainer = customCreateElement("div", "class", "drag-list-container", dropContainer);
        let title = customCreateElement("h3", "", "", dragListContainer);
        title.textContent = dropBox.name;
        const newCardWrapper = customCreateElement("div", "class", "new-card-wrapper", dropContainer);
        customCreateElement("textarea", "class", "new-text-area", newCardWrapper);
        const btnAddCard = customCreateElement("button", "class", "btn-add-card", dropContainer);
        btnAddCard.textContent = "Skapa nytt kort";
    }
    // Lägger till funktioner i knapparna
    addButtonFunc();
}