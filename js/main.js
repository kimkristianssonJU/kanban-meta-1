// Modules imports!
import { fetchThis } from "./modules/fetch_function.mjs"; // Fetch
import { dragAndDrop } from "./modules/drag_and_drop.mjs";
import { addCard } from "./modules/add_card.mjs";
import { addButtonFunc } from "./modules/button_add_card.mjs";

// Adresser till JSON-filerna
const taskUrl = '../json/task.json';
const usersUrl = '../json/users.json';

/*
async function mainFunction() {
    const tasks = await fetchThis(taskUrl);
    // login
    if(true)
    // f
    else 
    // retry
    console.log(tasks[0].id); // Returnerar "1"
}
*/

addButtonFunc();
dragAndDrop();
mainFunction();