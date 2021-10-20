import { customCreateElement } from "./create_element.mjs";

export function createLoginHtml() {
  // customCreateElement("div", "id", "wrapper", document.body);
  const wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = `User name <input id="user-name" type="text">  Password  <input id="password" type="password"> <button
    id="login-button">Log in</button>`;

  customCreateElement("div", "id", "log-out-form", wrapper);
  customCreateElement("div", "id", "message", wrapper);
  customCreateElement("div", "id", "logout-button-container", wrapper);
}
