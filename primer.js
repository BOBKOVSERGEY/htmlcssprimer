var myFunc = function () {
    console.log('This is a statement');
};
myFunc();
var myFuncTwo = function (name, weather) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log('hello ' + name + '.');
    console.log('It is  ' + weather + ' today');
    for (var i = 0; i < extraArgs.length; i++) {
        console.log('Extra arg: ' + extraArgs[i]);
    }
};
myFuncTwo('Adam', 'sunny', 'one', 'two', 'three');
var myFuncTwo = function (name) {
    return ('Hello ' + name + '.');
};
//let elResult = document.getElementById('result');
//elResult.innerHTML = myFuncTwo('adam');
console.log(myFuncTwo('Adam'));
// передаем в функцию параметром другую функцию
var myFuncThree = function (nameFunction) {
    return 'Hello ' + nameFunction() + '.';
};
console.log(myFuncThree(function () {
    return 'Adam func in func';
}));
// ghh
