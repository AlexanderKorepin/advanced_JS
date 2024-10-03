// const symbol = Symbol();
// const dogID = Symbol('dog');

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1);
// console.log(dog2);
// console.log(dog1 === dog2);

// 23 минута лекция 1
let id = Symbol('Жучка');
let buddy = {
};
console.log(buddy.id);
buddy.id = 'Бобик';
console.log(buddy.id); // должен вывести второй раз жучка?