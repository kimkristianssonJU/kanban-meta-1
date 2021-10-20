// Modules imports!
import { fetchThis } from "./modules/fetch_function.mjs"; // Fetch
import { dragAndDrop } from "./modules/drag_and_drop.mjs";
import { addButtonFunc } from "./modules/button_add_card.mjs";
import { fillStatusLists } from "./modules/fill_status_lists.mjs";
import { createKanban } from "./modules/create_kanban.mjs";
import { createLoginHtml } from "./modules/create_login_html.mjs";

// Adresser till JSON-filerna
const taskUrl = "../json/task.json";
const usersUrl = "../json/users.json";
const dropBoxUrl = "../json/drop_box.json";

const userVerificationKey = "isVerfied";

async function mainFunction() {
  const tasks = await fetchThis(taskUrl);
  const users = await fetchThis(usersUrl);
  const dropBoxes = await fetchThis(dropBoxUrl);
  let success = false;

  if (!localStorage.getItem(userVerificationKey)) {
    createLoginHtml();
    let logInBtn = document.getElementById("login-button");

    // Login funktion!
    logInBtn.addEventListener("click", () => {
      const userInput = document.getElementById("user-name");
      const passInput = document.getElementById("password");
      let message = document.getElementById("message");

      for (const user of users) {
        if (
          user.name.toLowerCase() === userInput.value.toLowerCase() &&
          user.pass === passInput.value
        ) {
          // Användaren inloggad
          createKanban(dropBoxes);
          localStorage.setItem(userVerificationKey, JSON.stringify(user));
          fillStatusLists(tasks);
        }
      }
      if (!success) {
        message.innerHTML = "Incorrect user name or password";
      }
    });
  } else {
    // Gå till kanban
    const currentUser = JSON.parse(localStorage.getItem(userVerificationKey));
    createKanban(dropBoxes);
    fillStatusLists(tasks);
  }
}

mainFunction();
dragAndDrop();
