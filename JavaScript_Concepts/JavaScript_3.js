// ----------------- Session 3 ---------------- 1st August 2023 -------------------

// bind  - revision
// var monica = {
//     name: "Minica Geller",
//     total: 400,
//     deductMonthlyFee: function(fee) {
//         this.total = this.total - fee;
//         return this.name + " remaining balance is " + this.total;
//     }
// }
// var rachel = {name: "Rachel Green", total: 1500};

// var newContext = monica.deductMonthlyFee.bind(rachel);
// console.log(newContext(100));
// console.log(monica.deductMonthlyFee(100));

// max function takes list of numbers, not array
// console.log(Math.max(1, 2, 3, 4));
// console.log(Math.max([1, 2, 3, 4]));
// console.log(Math.max.apply( null , [1, 2, 3, 4])); // null - no scope needed
// function max(params) {}

// var a = {
//     x: 10,
//     y: 10,
//     calculate: function(z) {
//         return this.x + this.y + z;
//     }
// };

// var b = {
//     y: 20,
//     __proto__: a
// }
// __proto__ : pointer/key - point to another object
// Ex : all properties of 'a' available to 'b' - b.proto --> a
// by default every object points to empty location

// console.log(b.x);
// console.log(b.y); // picks from local scope
// console.log(b.calculate(10));

// Order of variable picking :
// 1. look for properties in itself
// 2. look for properties in proto
// 3. still not available, 'undefined'

// var c = {
//     y: 30,
//     __proto__: b
// }
// console.log(c.calculate(20));
// Proto chain c --> b --> a (multi-level inheritance)


// Prototype
// Is an object which is available in functions(constructor)
// and it is used for inheritance

// a constructor function
// function Foo(y) {
//     this.y = y;
// }

// var a = {};
// a.x = 10; // dynamically create key in object
// console.log(a); // {x: 10}
// Similarly, creating keys in Foo constructor
// Foo.prototype.x = 10;
// Foo.prototype.calculate = function(z) {
//     return this.x + this.y + z;
// }
// prototype will be available to all objects created by Foo()
// var a = new Foo(5);
// console.log(a); // x & calculate are available inside using proto
// proto of 'a' points to Prototype of 'Foo'

// proto is a key which is going to point to another object
// proto of your created instance is going to point to
// prototype of the Constructor function or the parent function
// a.__proto__ = {}; // now points to empty Object

// Another prototype example :
// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }
// var d1 = new Dog("Bolly", "bulldog")
// console.log(d1.name);
// How to add bark functionality in Dog?
// Dog.prototype.barks = function() {
//     console.log("woof woof");
// }
// console.log(d1.barks());
// var d2 = new Dog("Bully", "bulldog")
// console.log(d2.barks());

// // What if we create barks within Dog() itself ?
// // Same job - why need prototype??
// d1.barks = function() {
//     console.log("bow bow")
// }
// console.log(d1.barks());
// console.log(d2.barks());
// console.log(dr.__proto__.barks ==== Dog.prototype.barks) // true

// overwritten the function - different behaviour for d1 & d2
// Both are having a copy locally individually
// But prototype functions aren't local - reflected in all
// So centrally changed, when updated in 1. Ex :
// d1.__proto__.run = function() {
//     console.log("tuk tuk");
// }
// console.log(d2.run());


// Object.freeze() prevents extensions and makes
// existing properties non-writable & non-configurable
// var obj = {prop: 42};
// Object.freeze(obj);
// obj.prop = 33; // unable to change anymore
// console.log(obj.prop); // 42


// var a = {},
//     b = {key: 'b'},
//     c = {key: 'c'}; // equivalent to 3 vars in short
// a[b] = 123; // dynamically creates a key [object Object]
// 'b' object gets stringified here - to work as key
// a[c] = 456; // same key [object Object] gets updated
// console.log(a[b]); // 456 not 123 - value changed ^
// console.log(a); // {[object Object]: 456}
// var d = {};
// a[d] = 999;
// console.log(a[b]); // 999
// [object Object] is a way to stringify a Object: {}.toString()
// not not sure what to assign as value - random



// JavaScript - Everything runs on runtime (no compiler in browser)
// everything is object or associated
// everything works dynamically - avoid most errors - fast (superpower)
















