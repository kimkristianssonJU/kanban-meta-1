// Skapar nya element som placeras i en parent, tillsätter en attribute och returnerar det nya elementet
export function customCreateElement(tag, attribute, attributeName, parent) {
    let element = document.createElement(tag);
    if(attribute) {
        element.setAttribute(attribute, attributeName);
    }
    parent.appendChild(element);
    return element;
}