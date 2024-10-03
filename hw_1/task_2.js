const cooks = new Map();
cooks.set("Виктор", "Пицца");
cooks.set("Ольга", "Суши");
cooks.set("Дмитрий", "Десерты");

const dishes = new Map();
dishes.set("Пицца Маргарита", "Виктор");
dishes.set("Пицца Пепперони", "Виктор");
dishes.set("Суши Филадельфия", "Ольга");
dishes.set("Суши Калифорния", "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

const orders = new Map();
orders.set("Алексей", ["Пицца Пепперони", "Тирамису"]);
orders.set("Мария", ["Суши Калифорния", "Пицца Маргарита"]);
orders.set("Ирина", ["Чизкейк"]);

const orderIterator = {
  [Symbol.iterator]: function() {
    let index = 0;
    const keys = Array.from(orders.keys());
    
    return {
      next: function() {
        if (index < keys.length) {
          const person = keys[index];
          const personOrders = orders.get(person);
          const personDishes = personOrders.map(order => {
            const cook = dishes.get(order);
            return `${order}, готовит повар ${cook}, со специализацией ${cooks.get(cook)}`;
          });
          index++;
          return { value: `Клиент ${person} заказал ${personDishes.length} блюда:\n` + personDishes.map((dish, i) => `${i + 1}. ${dish}`).join("\n"), done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const order of orderIterator) {
  console.log(order);
}