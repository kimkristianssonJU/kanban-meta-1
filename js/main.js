// Modules imports!
import { createKanban } from "./modules/create_kanban.mjs";
import { userVerificationKey } from "./modules/global_storage_key.mjs";
import { createLogin } from "./modules/create_login.mjs";
import { fillGlobalLists } from "./modules/global_list.mjs";


// Fetchar data till globala listor
await fillGlobalLists();

if (!localStorage.getItem(userVerificationKey)) {
    createLogin();
}
else {
    createKanban();
}