// Lista de Livros
const books = [
    { id: 1, title: "Livro 1", description: "Descrição detalhada do Livro 1", image: "cover_1.png" },
    { id: 2, title: "Livro 2", description: "Descrição detalhada do Livro 2", image: "cover_2.png" },
    { id: 3, title: "Livro 3", description: "Descrição detalhada do Livro 3", image: "cover_3.png" },
    { id: 4, title: "Livro 4", description: "Descrição detalhada do Livro 4", image: "cover_4.png" },
    { id: 5, title: "Livro 5", description: "Descrição detalhada do Livro 5", image: "cover_5.png" },
    { id: 6, title: "Livro 6", description: "Descrição detalhada do Livro 6", image: "cover_6.png" },
    { id: 7, title: "Livro 7", description: "Descrição detalhada do Livro 7", image: "cover_7.png" },
    { id: 8, title: "Livro 8", description: "Descrição detalhada do Livro 8", image: "cover_8.png" },
    { id: 9, title: "Livro 9", description: "Descrição detalhada do Livro 9", image: "cover_9.png" },
    { id: 10, title: "Livro 10", description: "Descrição detalhada do Livro 10", image: "cover_10.png" },
    { id: 11, title: "Livro 11", description: "Descrição detalhada do Livro 11", image: "cover_11.png" },
    { id: 12, title: "Livro 12", description: "Descrição detalhada do Livro 12", image: "cover_12.png" }
];

// Renderizar os Livros
const bookList = document.getElementById("bookList");

function displayBooks(books) {
    bookList.innerHTML = books.map(book => `
        <div class="book-item">
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.description.substring(0, 100)}...</p>
            <button onclick="addToFavorites(${book.id})">Favoritar</button>
        </div>
    `).join('');
}

displayBooks(books);

// Favoritar Livros
const favorites = [];
function addToFavorites(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!favorites.includes(book)) {
        favorites.push(book);
        updateFavorites();
        alert(`${book.title} foi adicionado aos favoritos!`);
    }
}

// Atualizar Favoritos
function updateFavorites() {
    const favoritesList = document.getElementById("favoritesList");
    favoritesList.innerHTML = favorites.map(book => `
        <div class="book-item">
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
        </div>
    `).join('');
}
