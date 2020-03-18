// Test to assess the current level of understanding
// All the questions contain valid TypeScript (or JavaScript), which can be translated into JS and executed.

// Introduction
// For pure JavaScript (not TypeScript), one could test their guesses by using either browser console
// (open an empty tab in a browser, hit F12, switch to Console) or Node.js in REPL mode (launch node
// without file name, i. e. simply "node"). You can then define any variable and find its type with
// "typeof(x)", e.g. (don't type >, that is just REPL prompt):
// > let x = 13;
// undefined
// > x
// 13
// > typeof(x)
// 'number'
// Unfortunately, this won't work with TypeScript right away, which first needs to be compiled to JavaScript...


// 1. Which of the following are function declarations (i.e. NOT invocations), list names of the declared functions:
const    fa = function(i: number) { console.log("Number = "+ i); };
function fb(i: number): number { return 2*i; };
const    fc = (function(i: number = 1): number { return 2*i; })();
const    fd = ((i: number): number => { return 2*i; })(10);
let      fe =  (i: number): number => { return i*i; };
let      ff = ((i: number): number => { return 10*i; })(5);
// Note that in all cases, ": number" between the list of parameters and "=>" is optional,
// as TypeScript can automatically deduce the return type of an arrow function.


// 2. Which of the above statements are function invocations and what types are corresponding variables?


// 3. What is the difference between `const` when declaring a varible of a primitive type
const i = 13; // attempt to do `i = 26;` later results in error
// and when declaring an object of some class
class MyClass {
    constructor(public value: number){}
}
const j = new MyClass(13);
j.value = 26;
// Why you can't alter the (primitive) value stored in `i` but can alter the `value` property of MyClass
// object referenced by `j`? In other words, what is the meaning of `const` in `const j = new MyClass...`?


// 4. What will be printed to the console, when the following code is executed? (Note that this code is
// already a "pure" JS, so, it can be exectuted as described in the Introduction.)
const a = function() { console.log("I am a"); };
const b = () => { console.log("I am b"); };
const d = (f) => { f(); };
let c = a;
if (c) {
    c = b;
}
d(c);
// First try to guess, then test your guess by copying and running this code.


// 5. When declaring an arrow function, the braces surroundin parameter(s) are optional, if
// there's only 1 parameter. Also, curly braces and `return` keyword can be omitted, if
// the funcion contains only a single statement. E.g., the following two functions are
// identical:
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
// Knowing that, what you expect the follwing code will print:
const y = x => x * x;
console.log(typeof(y));
console.log(typeof(y(5)));
console.log(y(5));
// Don't run this "pure JS" code and try to answer the question just by looking at the above code. 