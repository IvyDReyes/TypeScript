// Can make an argument of a function optional by appending a question mark ? to the parameter name
function greet(name: String, age?: number): void {
    if (age !== undefined) {
        console.log(`Hello ${name}, you are ${age} years old.`);
    } else {
        console.log(`Hello ${name}, - age is not specified.`);
    }
}

//Call the function twice. First, provide only the required parameter. In the second call, provide the optional one.
function greet1(name: String, age?: number): void {
    if (age !== undefined) {
        console.log(`Hello ${name}, you are ${age} years old.`);
    } else {
        console.log(`Hello ${name}, - age is not specified.`);
    }
}
greet1("Maria"); // Output: Hello Maria, age is not specified.
greet1("Maria", 41); // Output: Hello Maria, you are 41 years old.



//When a parameter is optional, it can still call the function without supplying that argument. In this case, the parameter will be undefined.
function introducedPerson(name: string, occupation?: string): void {
    if (occupation !== undefined) {
        console.log(`Hello, my name is ${name} and I am a ${occupation}.`);
    } else {
        console.log(`Hello, my name is ${name} and my occupation is not specified.`);
    }
}
introducedPerson("Pam"); //Output: Hello, my name is Pam and my occupation is not specified.
introducedPerson("Pam", "Software Engineer"); // Output: Hello, my name is Pam and I am a Software Engineer.

//Can also provide a default parameters.
function calculateTotalPrice(price: number, taxRate: number = 0.05): number {
    return price + (price * taxRate);
}

//Parameters with a default value can be omitted. Call the function twice, First, without providing a value for taxRate, then provide one.
function calculateTotalPrice1(price: number, taxRate: number = 0.05): number {
    return price + (price + taxRate);
}
console.log(calculateTotalPrice1(100));
console.log(calculateTotalPrice1(100, 0.07));


//Set the default parameter to the value of another parameter.
function calculateArea(width: number, height: number = width): number {
    return width * height;
}
console.log(calculateArea(5)); // Output: 25 (5 * 5)
console.log(calculateArea(5, 10)); // Output: 50 (5 * 10)

//Allows to combine optional and default parameters.
function notifyUser(message?: string, priority: string = "normal"): void {
    if (message === undefined) {
        console.log(`No Message provided)`);
    } else {
        console.log(`Notification: ${message} (Priority: ${priority})`);
    }
}
notifyUser();
notifyUser("Your order has been shipped.");
notifyUser("Your package is delayed.", "high");
