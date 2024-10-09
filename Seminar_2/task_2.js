// Задание 2 (тайминг 35 минут)
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.
class User {
    #name;
    #age;
    #sex;
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get sex() {
        return this.#sex;
    }
    constructor(name, age, sex) {
        this.#name = name;
        this.#age = age;
        this.#sex = sex;
    }

}

class PremiumUser extends User {
    premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
}

class RegularUser extends User {
}    

function gegAccountInfo(user) {
    return user?.premiumAccount;
}

user1 = new PremiumUser('Ivan', 25, 'male');
user2 = new RegularUser('Petr', 18, 'male');
console.log(gegAccountInfo(user1));
console.log(gegAccountInfo(user2));