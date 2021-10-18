export function customCreateElement(tag, attribute, attributeName, parent) {
    let element = document.createElement(tag);
    if(attribute) {
        element.setAttribute(attribute, attributeName);
    }
    parent.appendChild(element);
    return element;
}