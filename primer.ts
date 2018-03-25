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
};

myFuncTwo('Adam', 'sunny', 'one', 'two', 'three');


let myFuncTwo = function (name) {
    return ('Hello ' + name + '.');
};
//let elResult = document.getElementById('result');
//elResult.innerHTML = myFuncTwo('adam');
console.log(myFuncTwo('Adam'));


// передаем в функцию параметром другую функцию
let myFuncThree = function (nameFunction) {
    return 'Hello ' + nameFunction() + '.'
};
console.log(myFuncThree(function () {
    return 'Adam func in func';
}));

console.log('========================');

let messageFunction = function (name, weather) {
    let message = "Hello, Adam";
    if (weather == 'sunny') {
        let message = 'It is nice day';
        console.log(message);
    } else {
        let message = 'It is ' + weather + ' today';
        console.log(message);
    }

    console.log(message);
};
messageFunction('Adam', "raining");
console.log('========================');

let myGlobalVar = "apples";
let myFunc = function (name) {
    let myLocalVar = "sunny";
    let innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + '.' );
    }
    return innerFunction();
}

console.log(myFunc('Adam'));



