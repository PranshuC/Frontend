// ----------------- Session 4 ---------------- 3rd August 2023 -------------------

// Closure
// Retaining the scope of a variable even after a function has returned

// Example 1
// function makeWorker(){
//     var name = "Pete"; // Local scope
//     return function() {
//         console.log(name); // closure happened - retained the scope of 'name' variable
//     }
// }
// var name = "John"; // Global scope
// var work = makeWorker();
// work(); //function() {
        //  console.log(name);
        //}
// console.log(name); // "John" : "Pete" only available inside work()
// Closure happens because of the functional programing nature of JS
// because of function being returned and function being passed as param to another
// function makeWorker(){
//     var name = "Pete"; // Local scope
//     return name;
// }
// var name = "John";
// var work = makeWorker()
// console.log(work); // "Pete"

// Example 2
// function makeCounter() {
//     var count = 0;
//     return function() {
//         return count++;
//     };
// }
// console.log(count); // count is not defined

// var counter = makeCounter();
// var counter2 = makeCounter(); // own scope & function

// console.log(counter()); // 0 : post-increment
// console.log(counter()); // 1
// console.log(counter()); // 2

// console.log(counter2()); // 0
// console.log(counter2()); // 1
// console.log(counter2()); // 2

// Example 3 : real-world kind
// var a = (function() {
//     var privateFunction = function() {
//         console.log("Hello");
//     };
//     return {
//         publicFunction: function() {
//             privateFunction();
//         }
//     };
// })();
// console.log(a.publicFunction()); // closure retains privateFunction's console log


// Self invoking functions / IIFE (Immediately Invoked Function Expression)
// var a = function() {console.log("a")};
// a(); // just used once, can be rethought as below
// (function() {console.log("a")})(); // not assigned to a variable - self invoked
// declaration & invocation together
// (function() {
//     var a = 10; // not pollute the window - global namespace
//     console.log("a");
// })();
// variable : 1 time creation - used & destroyed
// function hoisted only within brackets ( function.. )


// setTimeout(callback, timer)
// callback called when timer expires
// setTimeout(function() {
//     console.log("a");
// }, 3000); // guaranteed to call after 3000ms, * not cessarily @3s

// (function() {
//     console.log(1);
//     setTimeout(function() {
//         console.log(2);
//     }, 3000);

//     setTimeout(function() {
//         console.log(3);
//     }, 0);
//     console.log(4);
// })();
// Event Loop : Call stack, Browser APIs, Event Queue
// JS : Single threaded - executed line by line, but not wait unnecessarily
// * Call stack keeps a track of all sequential executables
// When delay/timeout comes-in, passes it to Browser APIs
// * Browser API takes care of asynchronous APIs
// Ex : Browser API does 3000 ticking/ms, then move console.log(2) to Event Queue
// * Waiting of call stack getting empty will happen in Event Queue
// Ex : After console.log(1) & console.log(4) executed & Call Stack empty,
// Event Queue moves setTimeout(0)-->console.log(3) to Call Stack : execute & empty
// Finally, Event Queue moves setTimeout(3000)-->console.log(2) : execute & empty

// http://latentflip.com/loupe/ : website to check execution of above code


// Event Listener
// listen whenever an event happens. Ex: onClick
// addEventListener("event", callback, useCapture)
// add to the element itself
// getElementByID() - get element for above function using unique identifier

// Document - whole DOM (HTML document) + all the functions
// required in order to manipulate the HTL document
// console.log(document.getElementById("btn")); // <button id="btn">Click me</button>
// document.getElementById("btn").addEventListener("click", function() {
//     console.log("clicked");
// });


// Event bubbling & Event capturing
// In index.html, when "p" clicked --> "p", "div", "form" get's printed
// all are enclosed within : parent elements sequentially
// bubbling - bubbles go upside (bottom to top) : default
// Ex : click P --> "p", "div", "form"
// document.getElementById("frm").addEventListener("click", function() {
//     console.log("form");
// }, true); // true make capturing : reversed print order (opp. of bubbling)
// Ex : click DIV --> "form", "div"

// Need to avoid both bubbling & capturing - just the clicked element
// document.ge 
// event.target skips defining id for each child element,
// but control from same event listener itself
















































