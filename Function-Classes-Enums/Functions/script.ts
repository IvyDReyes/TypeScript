// Functions return type should be defined. Use void to indicate no return at all.
function greet(): void {
    console.log("Hello, world");
}

greet(); // Output: Hello, world


function logMessage(message: string): void {
    console.log(message);
}

logMessage("This is a message"); // Output: This is a message




// When using parameters, the type of arguments should be defined as well.
function greet1 (name: string): void {
    console.log("Hello, " + name);
}

greet1("Peter");



function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25)); // Output: 77




function countCharacters(str: string): number {
    return str.length;
}
console.log(countCharacters("Hello")); //Output: 5





//Multiple parameters work as expected, it should be separated by commas and add the type after a colon for each parameter.
function sum(a: number, b: number): void {
    const sum = a + b;
    console.log("The sum is: " + sum);
}

sum(10, 5); // Output: The sum is: 15



//If a function returns something, it should be defined by specifying the return type after the parameter list.
function sum1(a: number, b: number): number {
     const sum = a + b;
     return sum;
}

let total = sum1(50, 5);
console.log(total); // Output: 55




//If a function pass an array as a parameter, it needs to be defined as an array type.
function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
