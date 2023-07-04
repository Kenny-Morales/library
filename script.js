let myLibrary = [{title: 'Hobbit', author: 'Bobby', pages: 23, read: true}];

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
}

function libraryDisplay() {
    for (k = 0; k < myLibrary.length; k++)
    {
        console.log(myLibrary[k].title);
        console.log(myLibrary[k].author);
        console.log(myLibrary[k].pages);
        console.log(myLibrary[k].read);
        }
}

addBookToLibrary();
libraryDisplay();