import { customCreateElement } from "./create_element.mjs";
import { dragAndDrop } from "./drag_and_drop.mjs";

// Fyller listorna med tasks från task.json eller localStorage
export function fillStatusLists(taskList) {
    const statusList = document.getElementById("wrapper");

    for(const task of taskList) {
        for (const status of [...statusList.children]) {
            if(status.id === task.status) {
                const draggable = customCreateElement("div", "class", "draggable", status.querySelector(".drag-list-container"));
                draggable.setAttribute("draggable", "true");
                const p = customCreateElement("p", "", "", draggable);
                p.textContent = task.description;
            }
        }
    }
    dragAndDrop();
}