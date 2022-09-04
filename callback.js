function asyncFunctionHello(name, cb) {
    setTimeout(() => {
        console.log('Hello,', name);
        cb(name);
    }, 2000);
}

function asyncFunctionBye(name, cb) {
    setTimeout(() => {
        console.log('Bye,', name);
        cb();
    }, 1000);
}

console.log('Program starts');
asyncFunctionHello('José Luis',(name) => {
    asyncFunctionBye(name, () => {
        console.log('Program ends');
    })
});
