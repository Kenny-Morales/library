document.getElementById("library").addEventListener("click", closePopup);
let myLibrary = [];

function loadBooksFromLocalStorage() {
    const loadedBooks = localStorage.getItem('myLibrary');
    if (loadedBooks) {
        myLibrary = JSON.parse(loadedBooks);
    }
}

function saveBooksToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
    this.read = Boolean(read);
}

function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = false;
    const bookInput = new Book(title, author, pages, read);
    myLibrary.push(bookInput);
    saveBooksToLocalStorage();
    libraryDisplay();
    document.getElementById('form').style.display = "none";
    document.getElementById("form").reset();
}

function libraryDisplay() {
    const libraryContainer = document.getElementById('library');
    const existingCards = document.querySelectorAll("#card");
    existingCards.forEach(card => card.remove());

    myLibrary.forEach((book, index) => {
        let card = document.createElement('div');
        card.id = "card";
        card.setAttribute("data-id", index);
        libraryContainer.appendChild(card);

        let title = document.createElement('div');
        title.classList.add("cardTitle");
        title.textContent = book.title;
        card.appendChild(title);

        let author = document.createElement('div');
        author.textContent = "By: " + book.author;
        card.appendChild(author);

        let pages = document.createElement('div');
        pages.textContent = "#" + book.pages;
        card.appendChild(pages);

        let read = document.createElement('button');
        read.textContent = book.read ? "Read" : "Not Read";
        if (book.read) read.classList.add("read");
        read.onclick = function () { readBook(card, read); };
        card.appendChild(read);

        let remove = document.createElement('button');
        remove.id = index;
        remove.classList.add("cardRemove");
        remove.onclick = function () { removeCard(card); };
        remove.textContent = "X";
        card.appendChild(remove);
    });
}

function readBook(card, read) {
    const cardPosition = card.getAttribute('data-id');
    if (myLibrary[cardPosition].read) {
        read.textContent = "Not Read";
        read.classList.remove("read");
        myLibrary[cardPosition].read = false;
    } else {
        read.textContent = "Read";
        read.classList.add("read");
        myLibrary[cardPosition].read = true;
    }
    saveBooksToLocalStorage();
}

function removeCard(card) {
    const cardPosition = parseInt(card.getAttribute('data-id'));
    myLibrary.splice(cardPosition, 1);
    saveBooksToLocalStorage();
    libraryDisplay();
}

function openPopup() {
    const form = document.getElementById('form');
    form.style.display = "flex";
    form.style.opacity = "0.75";
}

function closePopup() {
    const form = document.getElementById('form');
    form.style.display = "none";
}

loadBooksFromLocalStorage();
libraryDisplay();

document.getElementById("form").addEventListener('submit', addBookToLibrary);
