import { customCreateElement } from "./create_element.mjs";
import { dragAndDrop } from "./drag_and_drop.mjs";
import { globalTaskList } from "./global_list.mjs";
import { taskStorageKey } from "./global_storage_key.mjs";

export function addCard(parent, textarea) { // Parent: .drag-list-container
    // Om något är skrivet...
    if (textarea.value === '') {
        alert("You must write something!");
    } else {
        // Skapar nya element
        const draggable = customCreateElement("div", "class", "draggable", parent);
        draggable.setAttribute("draggable", "true");
        draggable.setAttribute("id", globalTaskList.length + 1);
        const p = customCreateElement("p", "", "", draggable);
        p.textContent = textarea.value;
        
        // Skapar nytt objekt för att lagra
        let newTask = {
            id: draggable.id,
            description: textarea.value,
            priority: parent.children.length - 1,
            status: parent.parentNode.id
        }
        
        textarea.value = "";
        
        // Lägger till nytt, sorterar, och lagrar listan över alla tasks
        globalTaskList.push(newTask);
        globalTaskList.sort((a, b) => a.priority - b.priority);
        localStorage.setItem(taskStorageKey, JSON.stringify(globalTaskList));

        // Aktiverar drag and dropp till alla tasks
        dragAndDrop();
    }
}