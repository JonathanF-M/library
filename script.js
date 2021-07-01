let myLibrary = [];
let myColors = [`#3e5641`, `#a24936`,`#d36135`, `#282b28`, `#5c9ead`];

function Book(title, author, pages, read, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.completed = completed;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
}}

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

//let myColors = [`#3e5641`, `#a24936`,`#d36135`, `#282b28`, `#5c9ead`];

function displayBook(){
    bookCard = document.createElement("div");
    bookCard.setAttribute('class', 'bookCard');
    bookCard.setAttribute('data-index', `${myLibrary.length - 1}`)

    deleteButton = document.createElement(`button`);
    deleteButton.setAttribute(`class`, `delete`);
    deleteButton.textContent = `x`;
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener(`click`, handleDelete);

    cover = document.createElement(`div`);
    cover.setAttribute(`class`, `cover`);

    titleDiv = document.createElement(`div`);
    titleDiv.setAttribute(`class`, `titleCard`);
    titleDiv.textContent = myLibrary[myLibrary.length - 1].title;
    cover.appendChild(titleDiv);

    authorDiv = document.createElement(`div`);
    authorDiv.setAttribute(`class`, `authorCard`)
    authorDiv.textContent = myLibrary[myLibrary.length -1].author;
    cover.appendChild(authorDiv);

    //cover.textContent = myLibrary[myLibrary.length - 1].info();
    let randomColor = myColors[Math.floor(Math.random()*5)];
    cover.style.backgroundColor = randomColor;
    bookCard.appendChild(cover);

    infoCard = document.createElement(`div`);
    infoCard.setAttribute(`class`, `infoCard`);

    readDiv = document.createElement(`div`);
    readDiv.setAttribute(`class`, `readDiv`);
    readDiv.textContent = `Pages Read: ${myLibrary[myLibrary.length -1].read}`
    infoCard.appendChild(readDiv);

    totalDiv = document.createElement(`div`);
    totalDiv.setAttribute(`class`, `totalDiv`);
    totalDiv.textContent = `Total Pages: ${myLibrary[myLibrary.length -1].pages}`
    infoCard.appendChild(totalDiv);

    completedLabel = document.createElement(`label`);
    completedLabel.textContent = `Completed:`;
    infoCard.appendChild(completedLabel);

    completedBox = document.createElement(`input`);
    completedBox.setAttribute(`type`, `checkbox`);
    infoCard.appendChild(completedBox);
    completedBox.addEventListener(`click`, handleCompleted);

    bookCard.appendChild(infoCard);

    container.appendChild(bookCard);
}

//displayBooks();

let formDisplayCheck = false;

const toggleFormButton = document.querySelector(`#toggleForm`);
const bookForm = document.getElementById(`addForm`);
toggleFormButton.addEventListener('click', toggleFormDisplay);
const blocker = document.querySelector(`#blocker`);
blocker.addEventListener(`click`, toggleFormDisplay);

function toggleFormDisplay(event){
    event.preventDefault();
    bookForm.reset();
    formDisplayCheck = !formDisplayCheck;
    bookForm.style.display = formDisplayCheck ? `flex` : `none`;
    blocker.style.display = formDisplayCheck ? `block` : `none`;
}

cancelButton = document.getElementById(`cancel`);
cancelButton.addEventListener('click', toggleFormDisplay);

const addButton = document.querySelector('#add');
addButton.addEventListener('click', checkInput);

function checkInput(event) {
    let valid = true;
    event.preventDefault();

    let inputTitle = document.getElementById(`Title`).value,
        inputAuthor = document.getElementById(`Author`).value,
        inputPageCount = document.getElementById(`PageCount`).value,
        inputPagesRead = document.getElementById(`PagesRead`).value;

    if(inputTitle === ""){
        console.log('no title');
        valid = false;
    }
    if(inputAuthor === ""){
        console.log('no author');
        valid = false;
    }
    if(inputPageCount === "" || isNaN(Number(inputPageCount))){
        console.log('bad count');
        valid = false;
    }
    if(inputPagesRead === "" || isNaN(Number(inputPagesRead)) || Number(inputPagesRead) > Number(inputPageCount) ){
        console.log('bad read');
        valid = false;
    }

    if(valid === true){
        let book = new Book(inputTitle, inputAuthor, inputPageCount, inputPagesRead, inputPageCount === inputPagesRead);
        addBookToLibrary(book);
        toggleFormDisplay(event);
    }
}

function handleDelete(event){
    let parentBookCard = event.target.parentElement;
    parentIndex = parentBookCard.dataset.index;
    myLibrary.splice(parentIndex, 1);
    container.removeChild(parentBookCard);
    bookList = document.querySelectorAll(`.bookCard`);
    for(let i = 0; i < bookList.length; i++){
        bookList[i].dataset.index = i;
    }
    console.log(bookList);
}

function handleCompleted(event){
    //event.preventDefault;
    let parentInfoCard = event.target.parentElement;
    let parentBookCard = parentInfoCard.parentElement;
    parentIndex = parentBookCard.dataset.index;
    myLibrary[parentIndex].completed = true;
    myLibrary[parentIndex].read = myLibrary[parentIndex].pages;
    parentInfoCard.firstChild.textContent = `Pages Read: ${myLibrary[parentIndex].pages}`
}

//const theHobbit = new Book("The Hobbit", "JRR Tolkien", 249, 0);
//addBookToLibrary(theHobbit);

const artOfWar = new Book("The Art of War", "Sun Tzu", 273, 0);
addBookToLibrary(artOfWar);
const iliad = new Book("The Illiad", "Homer", 596, 81);
addBookToLibrary(iliad);