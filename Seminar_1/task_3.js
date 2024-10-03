// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
// массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит
// Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
// Дан код html:

// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и
// фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль.
//----------------------------------------------------------------
function getDiv() {
    const div = document.querySelectorAll('div');
    return Array.from(div).filter(el => el.getAttribute('data-active') === 'true');
}
console.log(getDiv());
//----------------------------------------------------------


// const divElements = Array.from(document.querySelectorAll('div'));


//Fильтруем только те div-элементы, у которых есть атрибут data-active
    // const activeDivs = div.filter(el => el.getAttribute('data-active') === 'true');  // Выводит массив активных div-элементов на странице.  
    // [ <div data-active="true">Element 2</div>, <div data-active="true">Element 4</div> ]  // Пример вывода.  // Не забываем, что в консоли порядок вывода может отличаться от реального.  // Это связано с тем, как работает Array.from и filter в браузерах.  // Если вы хотите увидеть конкретный порядок, используйте spread оператор (...), как показано ниже.  // console.log(...activeDivs);

//const activeDivs = divElements.filter(element => element.hasAttribute('data-active'));

// Выводим результат на консоль
    //console.log(activeDivs);  // Выводит массив активных div-элементов на странице.  // [ <div data-active="true">Element 2</div>, <div data-active="true">Element 4</div> ]  // Пример вывода.  // Не забываем, что в консоли порядок вывода может отличаться от реального.  // Это связано с тем, как работает Array.from и filter в браузерах.  // Если вы хотите увидеть конкретный порядок, используйте spread оператор (...), как показано ниже.  // console.log(...activeDivs);  // [ <div data-active="true">Element 2</div>,
    // <div data-active="true">Element 4</div> ]  // Пример вывода.  // Этот способ позволяет вам увидеть конкретный порядок, но он не гарантирует его во всех браузерах.  // Вам нужно использовать способ, который подходит вам лучше
    // в зависимости от вашего браузера.  // Если вы хотите получить массив в виде массива строчных значений, используйте Array.map:  
//     console.log(activeDivs.map(element => element.textContent));  // [ 'Element 2', 'Element 4' ]  // Пример вывода.  // Этот способ позволяет получить массив в виде массива строчных значений, но он не гарантирует его во всех браузерах.  // Вам нужно использовать способ, который подходит вам лучше
//     // в зависимости от вашего браузера.  // Если вы хотите получить массив в виде масс

// activeDivs.forEach(element => {
//     console.log(element); 
// });
