import { customCreateElement } from "./create_element.mjs";

export function createLoginHtml() {
  customCreateElement("div", "id", "content", document.body);
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `User name <input id="user-name" type="text"> Password <input id="password" type="password"> <button
    id="login-button">Log in</button>`;

  customCreateElement("div", "id", "log-out-form", contentDiv);
  customCreateElement("div", "id", "message", contentDiv);
  customCreateElement("div", "id", "logout-button-container", contentDiv);
}
