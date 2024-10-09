const prompt = require('prompt-sync')();

const answer = prompt('Введите что-нибудь: ');
console.log(`Вы ввели: ${answer}`);

console.log(global.Symbol.iterator);