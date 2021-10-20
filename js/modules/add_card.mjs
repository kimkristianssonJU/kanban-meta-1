import { customCreateElement } from "./create_element.mjs";
import { dragAndDrop } from "./drag_and_drop.mjs";

export function addCard(parent, textarea) { // Parent: .drag-list-container
    if (textarea === '') {
        alert("You must write something!");
    } else {
        const draggable = customCreateElement("div", "class", "draggable", parent);
        draggable.setAttribute("draggable", "true");
        const p = customCreateElement("p", "", "", draggable);
        p.textContent = textarea.value;
        dragAndDrop();
    }
}