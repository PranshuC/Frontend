// ----------------- Session 2 ---------------- 27th July 2023 -------------------

// Functions
// JS - Lambda language/ functional programming language
// throw around functions - functions returned/ passed from one to another

// function declaration
// function abc(a) {
//     console.log("abc called", a);
// }
// dynamic language, no return type mentioned
// abc(1);

// function expression
// var a = function (b) {
//     console.log("a called", b);
// };
// anonymous function
// a(1);

// Why the 2nd method needed? 
// Cannot create 2 functions of same name. Scenario :
if(true) {
    var d = function() {
        // do 1
    }
} else {
    var d = function() {
        // do 2
    }
}
// Kind of Strategy Design Pattern


// Pass a value to a function
// function a(d) {
//     console.log(d);
// }
// a(1);

// Passing a function
// function a(d) {
//     console.log(d); // prints the function itself
//     console.log(d()); // "inside function"
//     console.log(typeof(d)); // function
// }
// a(function() {
//     console.log("inside function");
// });

// function return nothing, so console prints "undefined"
// function a() {}
// var d = a();
// console.log(d);


// Returning function altogether
// function a() {
//     return (function() {
//         console.log("returned function");
//     })
// }


// Objects
// Ways to create object :
var obj = {}
var obj1 = new Object();
// Won't use 2nd, 1st leverages 2nd internally

// key-value structured
// "name"/name can be interchangeably used as key
// var dog = {
//     name: "pablo",
//     breed: "lab"
//  }
// 2 ways to get name in dog :
// console.log(dog.name);
// console.log(dog["name"]);
// 2nd way is for dynamic keys. Ex :
// var k = "name";
// console.log(dog.k); // undefined - k not inside dog object
// console.log(dog[k]); // "pablo"

var dog = {
    name: "pablo",
    breed: "lab",
    owner: {
        name: "Vatsala",
        profession: "SE",
        address : {
            houseNo: 2,
            city: "Bangalore",
            state: "Karnataka"
        }
    },
    bark: function () {
        console.log("Woof Woof")
    }
};
// JSON - pass object of an object to send data, no function passed
// console.log(dog.owner.address.city);
// console.log(dog.bark());

// custom Constructor function : name capitalised - standard
function Dog(name, breed) {
    this.name = name;
    this.breed = breed
}
// this - current object
// constructor function can be defined within the do object as well
// object created from constructor :
var d1 = new Dog("Pablo", "Lab");
// can create multiple objects this way
// console.log(d1);
// console.log(d1.name);

// can't have multiple constructors of same name, last in list will be considered
// polymorphism possible using prototype
// var a=10;
// function abc() {
//     console.log(a);
//     var a = 5;
// }
// abc();
// 1. Uncaught ReferenceError ReferenceError: a is not defined
// 2. global variable
// 3. local variable most preference
// 4. undefined - hoisting
// ^ all the assignments remain in it's place but declarations moved to top. Ex :
// function abc() {
//     var a;
//     console.log(a);
//     a = 5;
// }
// use a variable before it has been declared - hoisted by JS (no error)
// JS marks memory for variables at the beginning of function itself

// Quiz Q :
// var b = 1;
// function outer() {
//     var b = 2;
//     function inner() {
//         b++; // var b; - hoisted above this
//         console.log(b); // undefined++ = NaN
//         var b = 3;
//         console.log(b); // 3
//     }
//     inner();
// }
// outer();
// funcstions are also hoisted in JS


// call bind apply
var pokemon = {
    firstname: "Pika",
    lastname: "Chu",
    getPokeName: function() {
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
};
var pokemonName = function (snack, hobby) {
    // this = pokemon; //SyntaxError: Invalid left-hand side in assignment - "this" reserved keyword
    console.log(this.getPokeName() + " I choose you!");
    console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};
// pokemonName("Sushi", "Algos");
// Uncaught TypeError TypeError: this.getPokeName is not a function
// "this" cannot refer any object here, it refers to global "window" object
// window - global object in JS : everything in JS lies within window
// pokemonName.call(pokemon, "Sushi", "Algos")
// call(obj, param1, param2, param3)
// change the calling context - assign "this" as path object

// apply(obj, [param1,param2,param3])
// same as call() but only with params as array
// pokemonName.apply(pokemon, ["Sushi", "Algos"])
// currently obsolite - call( is used more)

// call() & apply() are short-lived - again error in next line
// bind() : long-lived
// var bindedPokemonName = pokemonName.bind(pokemon, "Sushi", "Algos");
// bindedPokemonName();
// params can be passed seperately, only binding object first
// var bindedPokemonName = pokemonName.bind(pokemon);
// bindedPokemonName("Sushi", "Algos");

// pokemonName.call(pokemon, 1, "Algos")
// sequence of params matters - data type doesn't
// can pass function as param as well


// Practice Qs :
// https://docs.google.com/document/d/1H0NlMbSkn4y5P7H5Is2gig2MV3mIbCpZoDuBnEURwCU/edit