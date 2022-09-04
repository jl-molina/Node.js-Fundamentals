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

function speak(callbackSpeak) {
    setTimeout(() => console.log('bla bla bla...'),1000);
    callbackSpeak();
}

function chat(name, times, cb) {
    while (times) {
        speak(() => chat(name, --times, cb));
    }
    cb(name);
}

console.log('Program starts');

asyncFunctionHello('Jose Luis', (name) => {
    asyncFunctionBye(name, () => console.log('Program ends'));
})

// asyncFunctionHello('José Luis',(name) => {
//     speak(() => {
//         speak(() => {
//             speak(() => {
//                 asyncFunctionBye(name, () => {
//                     console.log('Program ends');
//              });
//         });
//         });
//     });
// });
