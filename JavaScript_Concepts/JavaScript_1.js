// Instructor - Siddharth Taneja : Director of Engineering, Scaler


// Data Types in JS

// Primitive Data Types
// String
// Number
// Boolean
// Undefined
// Null

// Dynamically types language
// var (variable) is assigned value, data type decided at runtime
// less care for memory occupied - browser handles
var str = "hello";
var num = 2;
var bool = true;

// console.log(str);
// console.log(num);
// console.log(bool);

// Variable data type
// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(bool));

// Null is a empty value which you assign to variable to 
// suggest no value - used for nil checks or null checks
// d exists & takes memory
var nil = null;
var empStr = ""; // different - empty string

// type of null is going to be object
// everything in JS is an object
// everything is created & stored as object (parent)
// console.log(nil);
// console.log(typeof(nil));

// typeof prints as string in console
// console.log(typeof(typeof(bool)));

// create variable but don't define any value for it
// null is variable defined but don't want to give value
var undef;
// console.log(undef);

// "undefined" - not object
// console.log(typeof(undef));


// Comparison
var a = "2";
var b = 2;
// console.log(a == b); // true
// console.log(b == a); // true
// typecast variable - then check value on both sides
// implicit coercion : automatic conversion of string to number

// check for type is same as well or not
// console.log(a === b); // false


// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
// 1. String conversion
// 2. Boolean conversion
// 3. Numeric conversion

// explicit coercion
// console.log(+"2") // unary operator 
// console.log(typeof +"2") // number

// console.log(+"abc") // NaN - not a number
// string cannot be converted into number

// console.log(typeof +"abc") // number

// console.log(+"abc" === +"def") // false
// NaN ==> infinity, so can't determine what value resulted
// in final NaN result - uncomparable

// console.log(null === null) // true
// null is a defined value

// Other implicit conversions
// console.log("abc" + "def") // concatenation
// console.log("abc" + 1)
// whenever there is a number and a sring and there is +
// JS is going to convert the number into a string
// console.log(1 + "abc") // still same output

// console.log(1 + 2 + "abc") // 3abc - operator work left to right
// console.log("abc" + 1 + 2) // abc12 -  "

// console.log(+"1" + 1)
// console.log(-"1" + 1)
// console.log("1" + 1)

// Numeric conversion happens for all -,+,*,/
// String conversion happens when + is used 
// and one of the operand is string

// Boolean converted to number (1) and compared
// console.log(1 == true) // true
// console.log(1 === true) // false


// Arrays in JS

var a = [1,2,3,4];
var b = [1,2, "b", true]; // How JS puts heterogeneous values?
var c = []; // Same as below
var d = new Array(0); //Constructor function

// console.log(b); // keeps values in key-value pair : heterogeneous list

b[99] = 1; // 99th index
// rest all indexes have 'undefined' value

// console.log(b.length); // size of the array

var a = [1,2,3];
var b = a; // By reference - same memory location
// b[2] = 5;
// console.log(a); // [1,2,5]
// a = [];
// console.log(b); // b doesn't become empty
// By assignment, a has taken up new memory location

// a memory block is created
// a points to that memory block
// b points to that memory block
// a points to a new memory block
// b points to original memory block

// How to make both var empty?
a.length = 0; // a => [] <= b
// console.log(a); // []
// console.log(b); // []

// Garbage Collection
var d = [1,2,3];
d = []; // above [1,2,3] garbage collected later
// If a memory block is unreachable, removed from memory