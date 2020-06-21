//book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  //create tr
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td> <a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
  console.log(row);
};
UI.prototype.clearList = function () {
  document.getElementById('book-list').innerHTML = '';
};

const ui = new UI();
//Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  //get form values
  e.preventDefault();
  console.log('Yessir');
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  //instantiate book
  const book = new Book(title, author, isbn);

  //instantiate UI Object
  ui.addBookToList(book);

  console.log(
    `The title of the book is ${title}, and the author is ${author}. It has an ISBN of ${isbn}`
  );
});
document.getElementById('clear').addEventListener('click', function (e) {
  console.log('works');
  e.preventDefault();
  ui.clearList();
});
