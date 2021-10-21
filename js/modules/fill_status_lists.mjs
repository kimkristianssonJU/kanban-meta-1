import { customCreateElement } from "./create_element.mjs";
import { dragAndDrop } from "./drag_and_drop.mjs";
import { globalTaskList } from "./global_list.mjs";

// Fyller listorna med tasks från task.json eller localStorage
export function fillStatusLists() {
    const statusList = document.getElementById("wrapper");
    let idCount = 1;

    for(const task of globalTaskList) {
        for (const status of [...statusList.children]) {
            let draggable = null;
            let p = null;

            if(status.id === task.status) {
                draggable = customCreateElement("div", "class", "draggable", status.querySelector(".drag-list-container"));
                draggable.setAttribute("draggable", "true");
                draggable.setAttribute("id", idCount++);
                const p = customCreateElement("p", "", "", draggable);
                p.textContent = task.description;
                task.id = draggable.id;
            }
        }
    }
    dragAndDrop();
}