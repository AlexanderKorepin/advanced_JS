class Lib {
    #books = [];

    addBook(title) {
        if (this.#books.includes(title))
            throw `Эта книга уже есть в списке`;
        return this.#books.push(title); 
    }

    removeBook(title) {
        if (!this.#books.includes(title))
            throw `Этой книги нет в списке`;
        return this.#books.splice(this.#books.indexOf(title), 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    get allBooks() {
        return this.#books;
    }
}

const SchoolLibrary = new Lib();
SchoolLibrary.addBook("Детектив");
SchoolLibrary.addBook("Фантастика");
SchoolLibrary.addBook("Роман");
console.log(SchoolLibrary.allBooks)
SchoolLibrary.removeBook("Детектив");
console.log(SchoolLibrary.hasBook("Детектив"));
console.log(SchoolLibrary.hasBook("Детектив"));
console.log(SchoolLibrary.allBooks)


