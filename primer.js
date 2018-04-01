var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
console.log('===========Создание массива=============');
var myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;
// чтение элемента массив
console.log("Index 0: " + myArray[0]);
console.log('===========перебор элементов массива for=============');
for (var i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log('===========перебор элементов массива foreach=============');
myArray.forEach(function (value, index) {
    return console.log("Index " + index + ": " + value);
});
console.log('===========работа с массивами=============');
var products = [
    {
        name: "Hat",
        price: "24.5",
        stock: 10
    },
    {
        name: "Kayak",
        price: "289.99",
        stock: 1
    },
    {
        name: "Soccer Ball",
        price: "10",
        stock: 0
    },
    {
        name: "Running Shoes",
        price: "115.50",
        stock: 20
    }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
console.log('-------функциональный подход------');
var elTime = document.getElementById('time');
var oneSecond = function () { return 1000; };
var getCurrentTime = function () { return new Date(); };
var clear = function () { return console.clear(); };
var log = function (message) { return elTime.innerHTML = message; };
var abstractClockTime = function (date) {
    return ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
};
var civilianHours = function (clockTime) {
    return (__assign({}, clockTime, { hours: (clockTime.hours > 12) ?
            clockTime.hours - 12 :
            clockTime.hours }));
};
var appendAMPM = function (clockTime) {
    return (__assign({}, clockTime, { ampm: (clockTime.hours >= 12) ? "PM" : "AM" }));
};
var display = function (target) { return function (time) { return target(time); }; };
var formatClock = function (format) {
    return function (time) {
        return format.replace("hh", time.hours)
            .replace("mm", time.minutes)
            .replace("ss", time.seconds)
            .replace("tt", time.ampm);
    };
};
var prependZero = function (key) { return function (clockTime) {
    return (__assign({}, clockTime, (_a = {}, _a[key] = (clockTime[key] < 10) ?
        "0" + clockTime[key] :
        clockTime[key], _a)));
    var _a;
}; };
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (arg) {
        return fns.reduce(function (composed, f) { return f(composed); }, arg);
    };
};
var convertToCivilianTime = function (clockTime) {
    return compose(appendAMPM, civilianHours)(clockTime);
};
var doubleDigits = function (civilianTime) {
    return compose(prependZero("hours"), prependZero("minutes"), prependZero("seconds"))(civilianTime);
};
var startTicking = function () {
    return setInterval(compose(
    //clear,
    getCurrentTime, abstractClockTime, convertToCivilianTime, doubleDigits, formatClock("hh:mm:ss tt"), display(log)), oneSecond());
};
startTicking();
