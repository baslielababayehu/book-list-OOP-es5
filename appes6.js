class Book {
  constructor(title, book, isbn) {
    this.title = title;
    this.book = book;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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
  }
  clearList() {
    document.getElementById('book-list').innerHTML = '';
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // console.log('works till here');
    container.insertBefore(div, form);
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 2500);
  }
  removeBookFromList(e) {
    if (e.innerHTML === 'X') {
      e.parentElement.parentElement.remove();
      ui.showAlert('The book has been deleted!', 'success');
    }
  }
}
