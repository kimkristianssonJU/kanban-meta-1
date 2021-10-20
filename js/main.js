// Modules imports!
import { fetchThis } from "./modules/fetch_function.mjs"; // Fetch
import { dragAndDrop } from "./modules/drag_and_drop.mjs";
import { addButtonFunc } from "./modules/button_add_card.mjs";

// Adresser till JSON-filerna
const taskUrl = '../json/task.json';
const usersUrl = '../json/users.json';

const verificationKeyUser = "isVerfied";


async function mainFunction() {
    const tasks = await fetchThis(taskUrl);
    const users = await fetchThis(usersUrl);
    let success = false;

    if (!localStorage.getItem(verificationKeyUser)) {

        let logInBtn = document.getElementById("login-button");

        logInBtn.addEventListener("click", () => {
            const userInput = document.getElementById("user-name");
            const passInput = document.getElementById("password");
            let message = document.getElementById("message");

            for (const user of users) {
                if (user.name.toLowerCase() === userInput.value.toLowerCase() && user.pass === passInput.value) {
                    // Användaren inloggad
                    location.replace("kanban.html");
                }
            }
            if (!success) {
                message.innerHTML = "Incorrect user name or password";
            }
        });
    }
    else {
        // Gå till kanban
    }
}


addButtonFunc();
dragAndDrop();
mainFunction();