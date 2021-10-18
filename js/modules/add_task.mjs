import { customCreateElement } from "./create_element.mjs";
export function addTask(taskObj, parent) {
    customCreateElement("div", "class", "draggable", parent);
}