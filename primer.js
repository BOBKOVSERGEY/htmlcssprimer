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
console.log('========================');
var messageFunction = function (name, weather) {
    var message = "Hello, Adam";
    if (weather == 'sunny') {
        var message_1 = 'It is nice day';
        console.log(message_1);
    }
    else {
        var message_2 = 'It is ' + weather + ' today';
        console.log(message_2);
    }
    console.log(message);
};
messageFunction('Adam', "raining");
console.log('========================');
var myGlobalVar = "apples";
var myFunc = function (name) {
    var myLocalVar = "sunny";
    var innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + '.');
    };
    return innerFunction();
};
console.log(myFunc('Adam'));
console.log('===========Строковые шаблоны=============');
var messageFunction = function (weather) {
    var message = "It is " + weather + " today";
    console.log(message);
};
messageFunction("sunny");
console.log('===========Преобразование строк в числа=============');
var firstVal = "5";
var secondVal = "5";
var result = Number(firstVal) + Number(secondVal);
console.log(result);
