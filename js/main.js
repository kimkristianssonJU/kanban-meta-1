// Modules imports!
import { fetchThis } from "./modules/fetch_function.mjs"; // Fetch

// Adresser till JSON-filerna
const taskUrl = '../json/task.json';
const usersUrl = '../json/users.json';


async function mainFunction() {
    const tasks = await fetchThis(taskUrl);
    console.log(tasks[0].id); // Returnerar "1"
}

mainFunction()