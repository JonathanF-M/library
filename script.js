let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${ !this.read ? "not" : ""} read yet.` };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 249, 0);
addBookToLibrary(theHobbit);

for(let i = 0; i <= 6; i++){
    const book = new Book(`Book${i}`, `Author${i}`, 420, 69)
    addBookToLibrary(book);
}

container = document.querySelector("#container");

function displayBooks(){
    for(let i=0; i < myLibrary.length; i++){
        bookCard = document.createElement("div");
        bookCard.setAttribute('class', 'bookCard');
        bookCard.setAttribute('data-index', `${i}`)
        bookCard.textContent = myLibrary[i].info();
        container.appendChild(bookCard);
    }
}

displayBooks();

let formDisplayCheck = false;

const addBookButton = document.querySelector(`#addBook`);
const bookForm = document.getElementById(`addForm`);
addBookButton.addEventListener('click', handleFormDisplay);

function handleFormDisplay(){
    formDisplayCheck = !formDisplayCheck;
    bookForm.style.display = formDisplayCheck ? `flex` : `none`;
}