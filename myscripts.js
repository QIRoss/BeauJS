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

var timeoutID = setTimeout(bye, 3000);

console.log('hello');

clearTimeout(timeoutID);

function bye() {
    console.log('goodbye');
}

var count = 0
var intId = setInterval(counter, 1000);

function counter() {
    console.log(++count);
}

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