let myLibrary = [];

function Book(book_id, title, author, genre, pages, readed, notReaded, reading) {
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
            myLibrary.length + 1,
            document.getElementById('title').value,
            document.getElementById('author').value,
            document.getElementById('pages').value,
            document.getElementById('genre').value,
            document.getElementById('readStatus').checked,
            document.getElementById('readStatus1').checked,
            document.getElementById('readStatus2').checked,
        )
    );
    render();
}

function cleanForm() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('genre').value = "";
    document.getElementById('readStatus').value = "";
}

function showForm(formCreate) {
    formCreate ? document.getElementById('addBook').style.display = 'block' : document.getElementById('change-status-form').style.display = 'block';
}

function hideForm(formCreate) {
    formCreate ? document.getElementById('addBook').style.display = 'none' : document.getElementById('change-status-form').style.display = 'none';
}

function updateStatus(check) {
    const selected_book = myLibrary.find((elem) => elem.id === check);
    selected_book.readed = document.getElementById('readStatus3').checked;
    selected_book.notReaded = document.getElementById('readStatus4').checked;
    selected_book.reading = document.getElementById('readStatus5').checked;
    render();
    console.log(selected_book);
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
                            <td><a href="#" class="read-status-link" onclick="showForm(false)" id="status-${item.book_id}"> ${item.readed ? item.readed : item.notReaded ? item.notReaded : item.reading}</a></td>
                            <td>
                                <img class="remove-book-info" onclick="removeBook(${item.book_id})" id="remove-book-btn-${item.book_id}" style="width: 30px; height: 30px; cursor: pointer" src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt="remove-button"/>
                            </td>
                        </tr>
                       </tbody>`;
    });
    document.getElementById('books-info').innerHTML = booksInfo;
}

function removeBook(id) {
    const element = myLibrary.find((elem) => elem.book_id === id);
    myLibrary.splice(myLibrary.indexOf(element), 1);
    render();
}

function defaultBooks() {
    myLibrary.push(
        new Book(
            0,
            'Silent Hill',
            'Team Silent',
            'Games',
            180,
            'Readed',
        ));
    myLibrary.push(
        new Book(
            1,
            'Resident Evil',
            'Jill Valentine',
            'Games',
            197,
            'Not Readed',
        ));
    myLibrary.push(
        new Book(
            2,
            'Un homme qui dort',
            'Georges Perec',
            'Novel',
            300,
            'Readed',
        ));
    render();
}
defaultBooks();
