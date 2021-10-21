import { addCard } from "./add_card.mjs";
// tillger knappen "Lägg till kort" funktion
export function addButtonFunc(btnAddCard) {
    const dropContainers = document.getElementsByClassName("drop-container");

    btnAddCard.addEventListener("click", (event) => {
        let dragListContainer = "";

        for (const dropContainer of dropContainers) {
            if (dropContainer.contains(event.target.parentNode)) {
                dragListContainer = dropContainer.querySelector(".drag-list-container");
            }
        }
        const textArea = event.target.parentNode.querySelector(".new-text-area");
        addCard(dragListContainer, textArea);
    });
}