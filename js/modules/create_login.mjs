import { customCreateElement } from "./create_element.mjs";
import { globalUserList } from "./global_list.mjs";
import { createKanban } from "./create_kanban.mjs";
import { userVerificationKey } from "./global_storage_key.mjs";

export function createLogin() {
    const body = document.querySelector("body");

    // Rensar sidan
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    // Titel
    let mainTitle = customCreateElement("h1", "id", "main-title", body);
    mainTitle.textContent = "Kanban Meta 1";

    // Wrapper elementet
    const wrapper = customCreateElement("div", "id", "wrapper", body);

    // Skapar nytt innehåll för sidan
    const content = customCreateElement("div", "id", "content", wrapper);
    const userInput = customCreateElement("input", "id", "user-name", content);
    userInput.setAttribute("type", "text");
    userInput.setAttribute("placeholder", "Användarnamn");
    const passInput = customCreateElement("input", "id", "password", content);
    passInput.setAttribute("type", "password");
    passInput.setAttribute("placeholder", "Lösenord");
    const btnLogin = customCreateElement("button", "id", "login-button", content);
    btnLogin.textContent = "Logga in";

    customCreateElement("div", "id", "message", wrapper);

    // Login funktion!
    btnLogin.addEventListener("click", () => {
        const userInput = document.getElementById("user-name");
        const passInput = document.getElementById("password");
        let message = document.getElementById("message");
        let success = false;

        for (const user of globalUserList) {
            if (user.name.toLowerCase() === userInput.value.toLowerCase() && user.pass === passInput.value) {
                // Användaren inloggad
                localStorage.setItem(userVerificationKey, JSON.stringify(user));
                createKanban();
                success = true;
            }
        }
        if (!success) {
            message.innerHTML = "Incorrect user name or password";
        }
    });
}