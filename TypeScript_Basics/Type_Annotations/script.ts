// string, number, boolean type annotations

let city: string = "Calgary";
let zipCode: number = 2000;
let isCapital: boolean = false;

console.log("City: " + city);
console.log("Zip Code: " + zipCode);
console.log("Is a capital: " + isCapital);


/* type inference
let price = 100;
price = "expensive"; // Error: Type "string is not assignable to type "number" */ 


//any type annotation represent a value of any type, checking
let anything: any = "What am I?";
console.log(anything);

anything = 42;
console.log(anything);
