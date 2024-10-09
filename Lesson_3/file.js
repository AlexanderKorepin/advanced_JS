let checkIfFileExists = (path) => {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            if(err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}

checkIfFileExists('file.txt')
    .then(() => console.log('Файл существует'))
    .catch(() => console.log('Файл не существует')); 