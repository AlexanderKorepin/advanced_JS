let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
}
//url = 'https://jsonplaceholder.typicode.com/users'
url = "https://randombig.cat/rear.json"
fetchData(url)
    .then((data) => console.log(data))
    .catch((error) => console.log(error))