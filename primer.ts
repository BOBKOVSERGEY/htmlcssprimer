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
    };
    return innerFunction();
};

console.log(myFunc('Adam'));

console.log('===========Строковые шаблоны=============');

let messageFunction = function (weather) {
    let message = `It is ${weather} today`;
    console.log(message);
};
messageFunction("sunny");

console.log('===========Преобразование строк в числа=============');
let firstVal = "5";
let secondVal = "5";

let result = Number(firstVal) + Number(secondVal);
console.log(result);

console.log('===========Создание массива=============');

let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

// чтение элемента массив
console.log("Index 0: " + myArray[0]);
console.log('===========перебор элементов массива for=============');

for (let i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}

console.log('===========перебор элементов массива foreach=============');

myArray.forEach((value, index) =>
    console.log("Index " + index + ": " + value)
)

console.log('===========работа с массивами=============');

let products = [
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
let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0)
console.log("Total value: $" + totalValue.toFixed(2));

console.log('===========объекты =============');

let myData = {
    name: "Adam",
    weather: "sunny",
    printMessage: function() {
        console.log("Hello " + this.name = ". ");
        console.log("Today is " + this.weather = ". ");
    }
}

// обращение к методу объекта
myData.printMessage();

console.log('=========== определение класса =============');
class myClass {
    constructor(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    printMessages() {
        console.log("Hello " + this.name = ". ");
        console.log("Today is " + this.weather = ". ");
    }
}

let myDataOne = new myClass("Adam", "sunny");
myDataOne.printMessages();

console.log('-------декларативный подход------');
const elTime = document.getElementById('time');
const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => elTime.innerHTML = message;

const abstractClockTime = date =>
    ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?
            clockTime.hours - 12 :
            clockTime.hours
    })

const appendAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "PM" : "AM"
    })

const display = target => time => target(time)

const formatClock = format =>
    time =>
        format.replace("hh", time.hours)
            .replace("mm", time.minutes)
            .replace("ss", time.seconds)
            .replace("tt", time.ampm)

const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
            "0" + clockTime[key] :
            clockTime[key]
    })

const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        )

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime)

const startTicking = () =>
    setInterval(
        compose(
            //clear,
            getCurrentTime,
            abstractClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    )

startTicking()



