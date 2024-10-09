let devision = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0) {
            reject('На ноль делить нельзя');
        }
        else {
            resolve(a / b);
        }
    });
}

devision(10, 0)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })