var myName;
myName = "Beau";

var state = "Michigan";

console.log("My name is" + myName);

state = "California";


var bestWebsiteEver = "freeCodeCamp";

var n = null;
console.log(n * 32);

var a;
console.log(a + 2);

// Object
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar);

/* strings */

var myName = 'Beau';

var sentence = "He said \f Hi";

console.log(sentence);

/*Strings: [bracket notation] */
console.log("bracket notation")
var firstName = "Beau";

console.log(firstName[firstName.length - 1]);

/* 20 String Methods */
console.log("string methods")

var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend development"

// charAt()
console.log(stringOne.charAt(1))

// charCodeAt()
console.log(stringOne.charCodeAt(1))

// concat()
console.log(stringOne.concat(stringTwo))

// endWith()
console.log(stringOne.endsWith("to"))

// fromCharCode()
console.log(String.fromCharCode(114))

// include()
console.log(stringTwo.includes("end"))

// indexOf()
console.log(stringTwo.indexOf("end"))

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"))

// match()
console.log(stringTwo.match(/end/g))

// repeat()
console.log(stringOne.repeat(3))

// replace()
console.log(stringTwo.replace(/end/g, "END"))

// search()
console.log(stringTwo.search("end"))

// slice()
console.log(stringOne.slice(2, 4))

// split()
console.log(stringOne.split(" "))

// startsWith()
console.log(stringOne.startsWith("free"))

// substr()
console.log(stringOne.substr(4,10))

// substring()
console.log(stringOne.substring(4,10))


// trim()

//AJAX 

console.log("\n\nAJAX")

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET",
     "https://crossorigin.me/http://carnes.cc/code/ajax_example.txt", true);
    xhttp.send();
}

//NOTIFICATIONS
console.log("\n\n NOTIFY")

Notification.requestPermission();

new Notification("Subscribe to JS");

//HARD NOTIFICATIONS
console.log("\n\n Notify")

function notifyMe() {
    if(!("Notification"in window)) {
        alert("This browser does not support system notifications");
    }
    else if(Notification.permission === "granted") {
        notify();
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                notify();
            }
        });
    }


    function notify() {
        var notification = new Notification('TITLE OF NOTIFICATION', {
            icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
            body: "Hey! You are on notice!",
        });

        notification.onclick = function () {
            window.open("http://carnes.cc");
        };
        setTimeout(notification.close.bind(notification), 3000);
    }
}

notifyMe();

var myObject = {
    name: 'JS Nuggets'
};

if (myObject.name) {
    console.log("it is in!")
}

console.log(myObject.hasOwnProperty('name'));
console.log('name' in myObject);

//SET TIMEOUT 

// var timeoutID = setTimeout(bye, 3000);

// console.log('hello');

// clearTimeout(timeoutID);

// function bye() {
//     console.log('goodbye');
// }

// var count = 0
// var intId = setInterval(counter, 1000);

// function counter() {
//     console.log(++count);
// }


// TRY CATCH FINALLY

console.log("TRY, THROW, CATCH, FINALLY");

let json = '{ "age": 30 }';

try {
    console.log('Start of try runs');

    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    console.log('End of try runs -- never reached');
} catch(err) {

    console.log('Error has occured: ' + err.stack);

} finally {

    console.log('This is always run');

}

console.log('...Then the execution continues');

// DATES

var d1 = new Date()
console.log(d1.toTimeString())

var d2 = new Date(2017, 1, 3, 42, 43, 23, 23)
console.log(d2.toString())

//ES6

var Pi = 3.14
Pi=1

class Person {
    constructor(name, year_born) {
        this.name = name;
        this.year_born = year_born;
    }

    get age() {
        return this.calcAge();
    }

    calcAge() {
        return new Date().getFullYear() - this.year_born;
    }

    what() {
        console.log(this.name + ' is a person.');
    }

    static arms() {
        return 2;
    }
}

var me = new Person("Beau", 1983);
console.log(me.name + " was born in " + me.year_born + "!")
me.what();
console.log(me.name + " has " + Person.arms() + "arms!")

class Juggler extends Person {
    what() {
        super.what();
        console.log(this.name + " is a juggler ");
    }
}

var you = new Juggler ("Jay", 1980);
me.what();
you.what();

var Person2 = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};

var Person3 = class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
};

//SYMBOLS

console.log("\n\n\nsymbols");

let symbol1 = Symbol('symbol2');
let symbol2 = Symbol('symbol2');
console.log(symbol1 === symbol2);
console.log(typeof symbol1);
console.log('symbol: ' + symbol1.toString());

// Use case 1: Symbols as property keys
    const MY_KEY = Symbol();
    let obj = {};

    obj[MY_KEY] = 123;
    console.log(obj[MY_KEY]);

// Use case 2: constants representing concepts

const COLOR_RED     = Symbol('Red');
const COLOR_ORANGE  = Symbol('Orange');
const COLOR_YELLOW  = Symbol('Yellow');
const COLOR_GREEN   = Symbol('Green');
const COLOR_BLUE    = Symbol('Blue');
const COLOR_VIOLET  = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: ' +color);
    }
}

// TEMPLATE LITERALS 

// multi-line strings
console.log(`string text line 1 
string text line 2`);

// expression interpolation
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2* a + b}.`)

// Tagged template literals
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);

    return "JS Nuggets!";
}

tag`Hello ${a + b} world ${a * b}`;

// PROXIES
console.log("\n\n\n\n PROXY");

var handler = {
    get (target, key) {
        return key in target ? target[key] : 37;
    }
};

var p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);