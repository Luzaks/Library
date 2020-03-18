let myLibrary = [];

function Book(title, author, genre, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
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
                            <td>${item.readStatus}</td>
                        </tr>
                       </tbody>`;
        });
    document.getElementById('books-info').innerHTML = booksInfo;
}

function defaultBooks() {
    myLibrary.push(
        new Book(
            'Silent Hill',
            'Team Silent',
            'Games',
            180,
            'Readed',
        ));
    myLibrary.push(
        new Book(
            'Resident Evil',
            'Jill Valentine',
            'Games',
            197,
            'Not Readed',
        ));
    myLibrary.push(
        new Book(
            'Un homme qui dort',
            'Georges Perec',
            'Novel',
            300,
            'Readed',
        ));
    render();
}
defaultBooks();
