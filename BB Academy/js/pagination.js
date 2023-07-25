const cardsPerPage = 6;
const cardsContainer = document.getElementById('pagination-container');
const cards = cardsContainer.querySelectorAll('#pagination-container .course');
const paginationContainer = document.getElementById('custom-pagination');

function showPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
        card.style.display = 'block';
        } else {
        card.style.display = 'none';
        }
    });
}

function prevPage() {
    let currentPage = parseInt(paginationContainer.getAttribute('data-page'));
    currentPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
    paginationContainer.setAttribute('data-page', currentPage);
    showPage(currentPage);
    updatePagination();
}

function nextPage() {
    let currentPage = parseInt(paginationContainer.getAttribute('data-page'));
    currentPage = currentPage + 1 <= totalPages ? currentPage + 1 : totalPages;
    paginationContainer.setAttribute('data-page', currentPage);
    showPage(currentPage);
    updatePagination();
}

paginationContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI') {
        const pageNumber = parseInt(target.textContent);
        if (!isNaN(pageNumber)) {
            paginationContainer.setAttribute('data-page', pageNumber);
            showPage(pageNumber);
            updatePagination();
        }
    }
});

let totalPages = Math.ceil(cards.length / cardsPerPage);

function updatePagination() {
    let paginationHTML = '';
    const currentPage = parseInt(paginationContainer.getAttribute('data-page'));
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
        paginationHTML += `<li><span class="active">${i}</span></li>`;
        } else {
        paginationHTML += `<li>${i}</li>`;
        }
    }
    paginationContainer.innerHTML = paginationHTML;
}

updatePagination();
showPage(1);