let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = parseInt(pages);
    this.read = Boolean(read);
}


function addBookToLibrary() {
    titleInput = prompt("What's the title?");
    authorInput = prompt("Who's the author?");
    pagesInput = prompt("How many pages does it have?");
    readInput = prompt("Have you read it?");

    bookInput = new Book(titleInput, authorInput, pagesInput, readInput);
    myLibrary.push(bookInput);
    console.log(myLibrary);
}

function libraryDisplay() {
    
}

addBookToLibrary();