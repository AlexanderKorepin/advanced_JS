//console.log(window);
const newWindow = self.open('https://yandex.ru', '_blank');
console.log(newWindow.innerHeight);
newWindow.location.href = 'https://mail.ru';
setTimeout(() => newWindow.close(), 15000);