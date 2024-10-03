// Задание 1 (тайминг 20 минут)
// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на консоль.
//Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, datа){
    if(book[metadataType]){
        book[metadataType].push(datа);
    } else {
        book[metadataType] = [datа];
    }
    // book[metadataType] = datа;
}

// Функция для получения метаданных из объекта книги
function getMetadata(book, metadataType){
    return book[metadataType];
}

// создание объекта книги 
const book = {
    title: "1984",
    author: "George Orwell"
};

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

addMetadata(book, reviewSymbol, "Отличная книга о дистопии");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

console.log(book);  // Выводит объект книги с добавленными метаданными.

console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));