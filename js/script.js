let sortAscending = true; // false = descending, true = ascending

function sortGridAlphabetically() {
    const gridContainer = document.getElementById('main-grid');
    const cards = Array.from(gridContainer.children);

    // Sort the cards based on direction
    cards.sort((a, b) => {
        const titleA = a.querySelector('.card-title').textContent.trim().toLowerCase();
        const titleB = b.querySelector('.card-title').textContent.trim().toLowerCase();

        if (sortAscending) {
            return titleA.localeCompare(titleB); // A to Z
        } else {
            return titleB.localeCompare(titleA); // Z to A
        }
    });

    // Remove all cards
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Add sorted cards back
    cards.forEach(card => {
        gridContainer.appendChild(card);
    });
}

// Toggle sorting direction
function toggleSortDirection() {
    sortAscending = !sortAscending;
    sortGridAlphabetically();
}

// Auto-sort on page load (descending by default)
document.addEventListener('DOMContentLoaded', sortGridAlphabetically);