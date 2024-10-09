let calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b;
        resolve(sum);
        reject('Error');    
    });
}

calculateSum(1, 5)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })