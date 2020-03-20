let myLibrary = [];

function Book(
    book_id,
    title,
    author,
    genre,
    pages,
    readed,
    notReaded,
    reading
) {
    this.book_id = book_id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.readed = readed;
    this.notReaded = notReaded;
    this.reading = reading;
}

function addBookToLibrary(book) {
    myLibrary.push(
        new Book(
            Math.max(...library.map((book) => book.id)) + 1,
            _id("title").value,
            _id("author").value,
            _id("pages").value,
            _id("genre").value,
            _id("readStatus").checked,
            _id("readStatus1").checked,
            _id("readStatus2").checked
        )
    );
    render();
}

function cleanForm() {
    _id("title").value = "";
    _id("author").value = "";
    _id("pages").value = "";
    _id("genre").value = "";
    _id("readStatus").value = "";
}

function showForm(formCreate, id = 1) {
    formCreate
        ? (_id("addBook").style.display = "block")
        : (_id("change-status-form").style.display = "block");
    _id("updateBTN").setAttribute("onclick", `updateStatus(${id});hideForm()`);
}

function hideForm(formCreate) {
    formCreate
        ? (_id("addBook").style.display = "none")
        : (_id("change-status-form").style.display = "none");
    cleanForm();
}

function updateStatus(bookID) {
    const selected_book = myLibrary.find(elem => elem.book_id == bookID);
    selected_book.readed = _id("readStatus3").checked;
    selected_book.notReaded = _id("readStatus4").checked;
    selected_book.reading = _id("readStatus5").checked;
    render();
}

function _id(id) {
    return document.getElementById(id);
}

function render() {
    let booksInfo = "";
    myLibrary.map(item => {
        booksInfo += `<tbody>
                        <tr>
                            <td>${item.title}</td>
                            <td>${item.author}</td>
                            <td>${item.genre}</td>
                            <td>${item.pages}</td>
                            <td><a href="#" class="read-status-link" onclick="showForm(false, ${item.book_id})" id="status"> ${item.readed? "Readed" : item.notReaded ? "Not Readed" : item.reading ? "Reading" : "Set a Status"}</a></td>
                            <td>
                                <img class="remove-book-info" onclick="removeBook(${item.book_id})" id="remove-book-btn" style="width: 30px; height: 30px; cursor: pointer" src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt="remove-button"/>
                            </td>
                        </tr>
                       </tbody>`;
    });
    _id("books-info").innerHTML = booksInfo;
}

function removeBook(id) {
    const element = myLibrary.find(elem => elem.book_id === id);
    myLibrary.splice(myLibrary.indexOf(element), 1);
    render();
}

function defaultBooks() {
    myLibrary.push(
        new Book(0, "Silent Hill", "Team Silent", "Games", 180, "Readed")
    );
    myLibrary.push(
        new Book(1, "Resident Evil", "Jill Valentine", "Games", 197, "Not Readed")
    );
    myLibrary.push(
        new Book(2, "Un homme qui dort", "Georges Perec", "Novel", 300, "Readed")
    );
    render();
}
defaultBooks();
