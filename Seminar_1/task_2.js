// Задание 2 (тайминг 20 минут)
// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
// Массив книг:


const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];

//console.log(books);
//books.push({ title: "War and Peace", author: "Leo Tolstoy" });
// console.log(books);

books[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            if (this.current < this.to) {
                return { value: books[this.current++], done: false };
            } else {
                return { done: true };
            }
        }
    }
};

for (let book of books) {
    console.log(`Название: ${book.title}, Автор: ${book.author}`);
}