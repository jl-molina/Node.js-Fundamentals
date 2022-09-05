const toNumber = n => Number(n);
const multiply = n => n * 2;
const print = n => console.log(n);

const altThen = n => console.log(n);

const catchAndPrint = err => console.log(err);

const request = (url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = () => {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error('Error al cargar'));
            }
        }

        req.onerror = () => {
            reject(new Error('Error de red'));
        }

        req.send();
    })
}

// then(data => toNumber(data)) is the same as then(toNumber);
request('./config.txt')
    .then(data => toNumber(data))
    .then(multiply)
    .then(print)
    .catch(catchAndPrint)
    .finally(() => console.log('Se acaba la petición'));
request('./config1.txt')
    .then(data => toNumber(data))
    .then(multiply)
    .then(print)
    .catch(catchAndPrint);
request('http://madeup.com')
    .then(data => toNumber(data))
    .then(multiply)
    .then(print)
    .catch(catchAndPrint);

