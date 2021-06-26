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
    displayBook();
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 249, 0);
addBookToLibrary(theHobbit);

/*for(let i = 0; i <= 6; i++){
    const book = new Book(`Book${i}`, `Author${i}`, 420, 69)
    addBookToLibrary(book);
}*/

container = document.querySelector("#container");

function displayBook(){
    bookCard = document.createElement("div");
    bookCard.setAttribute('class', 'bookCard');
    bookCard.setAttribute('data-index', `${myLibrary.length - 1}`)
    bookCard.textContent = myLibrary[myLibrary.length - 1].info();
    container.appendChild(bookCard);
}

//displayBooks();

let formDisplayCheck = false;

const toggleFormButton = document.querySelector(`#toggleForm`);
const bookForm = document.getElementById(`addForm`);
toggleFormButton.addEventListener('click', toggleFormDisplay);

function toggleFormDisplay(event){
    event.preventDefault();
    bookForm.reset();
    formDisplayCheck = !formDisplayCheck;
    bookForm.style.display = formDisplayCheck ? `flex` : `none`;
}

cancelButton = document.getElementById(`cancel`);
cancelButton.addEventListener('click', toggleFormDisplay);

const addButton = document.querySelector('#add');
addButton.addEventListener('click', checkInput);

function checkInput(event) {
    event.preventDefault();
    let book = new Book(document.getElementById(`Title`).value,
                        document.getElementById(`Author`).value,
                        document.getElementById(`PageCount`).value,
                        document.getElementById(`PagesRead`).value);
    addBookToLibrary(book);
    toggleFormDisplay(event);

}
