// Import
import { taskStorageKey } from "./global_storage_key.mjs";
import { fetchThis } from "./fetch_function.mjs";

// Skapa globala listor
export let globalTaskList = [];
export let globalUserList = [];
export let globalDropBoxList = [];

// Adresser till JSON-filerna
const taskUrl = '../json/task.json';
const usersUrl = '../json/users.json';
const dropBoxUrl = '../json/drop_box.json';

export async function fillGlobalLists() {
    
    if (localStorage.getItem(taskStorageKey)) {
        globalTaskList = JSON.parse(localStorage.getItem(taskStorageKey));
    } 
    else {
        globalTaskList = await fetchThis(taskUrl);
    }

    globalUserList = await fetchThis(usersUrl);
    globalDropBoxList = await fetchThis(dropBoxUrl);

    return true;
}