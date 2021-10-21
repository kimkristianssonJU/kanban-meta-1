import { createLogin } from "./create_login.mjs";
import { userVerificationKey } from "./global_storage_key.mjs";

export function setLogout(btnLogout) {
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem(userVerificationKey);
        createLogin();
    })
}