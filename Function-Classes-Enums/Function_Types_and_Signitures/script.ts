// Can also declare that a variable can hold a function using the Function type annotation.
let myFunction: Function;


/* 
1. But to be more specific about the function parameters and return type, arrow function sytax can be used to create a function signature.
2. This declares the type of the function, including its parameters and return type.
3. Assign a matching function to the previously declared function type.
4. Use the variable as a function.
*/
let myFunction1: (x: number, y:number) => number; // 1. and 2.

myFunction1 = function(x: number, y: number): number { // 3.
    return x + y;
};

let result = myFunction1(5, 10); // 4.

console.log(result); // Output: 15


/* 
Defining a function's structure is known as creating its function signature.
This signitures serves as an interface, specifying the expected parameters and return type.
*/
let concatenate: (a: string, b: string) => string;

concatenate = function(a: string, b: string): string {
    return a + " " + b;
};

console.log(concatenate("More", "Fries")); // Output: More Fries


/* 
1. Type aliases can clarify certain coding pattterns, like callbacks.
2. Use a type alias to the signiture of a callback function.
3. Specify the type of a function by refering to its new name instead of typing the whole function signiture.
4. When calling the function, provide a function that fits the signature.
*/ 
type Callback = (data: string) => void; // 1. 2.

function processString(input: string, callback: Callback): void { // 3.
    const processed = input.toUpperCase();
    callback(processed);
}

const logResult: Callback = (data: string) => {
    console.log(data);
}

processString("I'm hungry!", logResult); 4. // Output: I'M HUNGRY!


//Can also use an arrow function syntax to define it inline.
type Callback1 = (data: string) => void;

function processString1(input: string, callback: Callback1): void {
    const processed = input.toUpperCase();
    callback(processed);
}

processString1("Print me!", data => {
    console.log(data);
}); // Output: PRINT ME!



type Add = (x: number, y: number) => number;

let add: Add;

add = function(x, y) {
    return x + y;
}

console.log(add(5, 10)); // Output: 15



type Callback2 = (message: string) => void;

function greetUser(name: string, callback: Callback2): void {
    const message = `Hello, ${name}!`;
    callback(message);
}

function logMessage(msg: string): void {
    console.log(msg);
}

greetUser("Alice", logMessage); // Output: Hello, Alice!




