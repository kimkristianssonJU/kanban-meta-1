// Modules imports!
import { fetchThis } from "./modules/fetch_function.mjs"; // Fetch
import { dragAndDrop } from "./modules/drag_and_drop.mjs";
import { addButtonFunc } from "./modules/button_add_card.mjs";
import { fillStatusLists } from "./modules/fill_status_lists.mjs";

// Adresser till JSON-filerna
const taskUrl = '../json/task.json';
const usersUrl = '../json/users.json';


async function mainFunction() {

    
    // login

    // efter login
    if(!localStorage.getItem("test")) {
        const tasks = await fetchThis(taskUrl);
        fillStatusLists(tasks);
    }
}


addButtonFunc();
dragAndDrop();
mainFunction();