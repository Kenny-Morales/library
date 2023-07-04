let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = parseInt(pages);
    this.read = Boolean(read);
}

const hobbit = new Book('Hobbit', 'Kenny Morales', '12', 'true');
console.log(hobbit.title);
console.log(hobbit.author);
console.log(hobbit.pages);
console.log(hobbit.read)

function addBookToLibrary() {

}

function libraryDisplay() {
    
}