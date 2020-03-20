const myLibrary = [];

function Book(bookId, title, author, genre, pages, readed, notReaded, reading) {
  this.bookId = bookId;
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.readed = readed;
  this.notReaded = notReaded;
  this.reading = reading;
}

function getId(id) {
  return document.getElementById(id);
}

function cleanForm() {
  getId('title').value = '';
  getId('author').value = '';
  getId('pages').value = '';
  getId('genre').value = '';
  getId('readStatus').value = '';
}

function showForm(formCreate, id = 1) {
  getId('opacity-background').style.display = 'block';
  formCreate === true ? getId('addBook').style.display = 'block' : getId('change-status-form').style.display = 'block';
  getId('updateBTN').setAttribute('onclick', `updateStatus(${id});hideForm()`);
}

function hideForm() {
  getId('opacity-background').style.display = 'none';
  getId('addBook').style.display = 'none';
  getId('change-status-form').style.display = 'none';
  cleanForm();
}

function render() {
  let booksInfo = '';
  myLibrary.forEach((item) => {
    booksInfo += `<tbody>
                        <tr>
                            <td><img class='bookIcon' src='https://img.icons8.com/clouds/100/000000/book.png'/></td>
                            <td>${item.title}</td>
                            <td>${item.author}</td>
                            <td>${item.genre}</td>
                            <td>${item.pages}</td>
                            <td><a href='#' class='read-status-link' onclick='showForm(false, ${item.bookId})' id='status'> ${item.readed ? 'Read' : item.notReaded ? 'Not Read' : item.reading ? 'Reading' : 'Set a Status'}</a></td>
                            <td>
                                <img class='remove-book-info' onclick='removeBook(${item.bookId})' id='remove-book-btn' src='https://img.icons8.com/plasticine/100/000000/filled-trash.png' alt='remove-button'/>
                            </td>
                        </tr>
                       </tbody>`;
  });
  getId('books-info').innerHTML = booksInfo;
}

function updateStatus(bookID) {
  const selectedBook = myLibrary.find(elem => elem.bookId === bookID);
  selectedBook.readed = getId('readStatus3').checked;
  selectedBook.notReaded = getId('readStatus4').checked;
  selectedBook.reading = getId('readStatus5').checked;
  render();
}

function addBookToLibrary(book) {
  myLibrary.push(
    new Book(
      myLibrary.length === 0
        ? 0
        : Math.max(...myLibrary.map((bookIn) => bookIn.bookId)) + 1,
      getId('title').value,
      getId('author').value,
      getId('genre').value,
      getId('pages').value,
      getId('readStatus').checked,
      getId('readStatus1').checked,
      getId('readStatus2').checked,
    ),
  );
  render();
}

function removeBook(id) {
  const element = myLibrary.find(elem => elem.bookId === id);
  myLibrary.splice(myLibrary.indexOf(element), 1);
  render();
}

function defaultBooks() {
  myLibrary.push(
    new Book(0, 'Silent Hill', 'Team Silent', 'Games', 180, 'Read'),
  );
  myLibrary.push(
    new Book(1, 'Resident Evil', 'Jill Valentine', 'Games', 197, 'Not Read'),
  );
  myLibrary.push(
    new Book(2, 'Un homme qui dort', 'Georges Perec', 'Novel', 300, 'Reading'),
  );
  render();
}
defaultBooks();
