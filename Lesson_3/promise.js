//напишите функцию generateRandomNumber, которая возвращает Promise, 
//выполняющийся через 1 секунду....и резолит случайное число от 1 до 10
let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        if(randomNumber > 5) {
            resolve(randomNumber);
        }
        else {
            reject('Ошибка генерации нужного числа');
        }
        setTimeout(() => {
            resolve(randomNumber);
        }, 1000);
    });
};

generateRandomNumber()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })