export function dragAndDrop() {
    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('.drag-list-container');

    draggables.forEach((dragcontainer, index) => {
        dragcontainer.addEventListener('dragstart', () => {
            dragcontainer.classList.add('dragging');
        })

        dragcontainer.addEventListener('dragend', () => {
            dragcontainer.classList.remove('dragging');

            // Tillagd kod
            for (const container of containers) {
                // Child: .draggable
                [...container.children].forEach((child, index) => {
                    if(child.classList.contains("draggable")) {
                        child.querySelector("p").textContent = index;
                    }
                });
            }
        })
    })

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                container.appendChild(draggable);
            }
            else {
                container.insertBefore(draggable, afterElement);
            }

        })
    })

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            }
            else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}