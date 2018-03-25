let myFunc = function () {
    console.log('This is a statement')
};
myFunc();

let myFuncTwo = function (name, weather, ...extraArgs) {
    console.log('hello ' + name + '.');
    console.log('It is  ' + weather + ' today');

    for (let i = 0; i < extraArgs.length; i++) {
        console.log('Extra arg: ' + extraArgs[i]);
    }
}

myFuncTwo('Adam', 'sunny', 'one', 'two', 'three');


let myFuncTwo = function (name) {
    return ('Hello ' + name + '.');
}
//let elResult = document.getElementById('result');
//elResult.innerHTML = myFuncTwo('adam');
console.log(myFuncTwo('Adam'));


// передаем в функцию параметром другую функцию
let myFuncThree = function (nameFunction) {
    return 'Hello ' + nameFunction() + '.'
}
console.log(myFuncThree(function () {
    return 'Adam func in func';
}));




