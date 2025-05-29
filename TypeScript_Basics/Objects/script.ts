let person: { //define the object
    name: string,
    age: number
}

person = { // assign a value to the object
    name: "John",
    age: 25
};

let personName: string = person.name; // access the name property
console.log(personName); // Output: John


//Change object properties
let person2: {
    name: string,
    age: number
};

person2 = {
    name: "John",
    age: 25
};

person2.name = "Jane"; // Change the name property
console.log(person2.name); // Output: Jane


//Can also have more complex types inside an object and can directly assign values
let player: {
    name: string,
    scores: number[]
} = {
    name: "Lee",
    scores: [1, 2, 3]
};

console.log(player.scores); // Output: [1, 2, 3]





//Can also save the array object in a variable
let player2: {
    name: string,
    scores: number[]
};

player2 = {
    name: "Morgan",
    scores: [4, 5, 6]
};


let score: number[] = player2.scores;
console.log(score); // Output: [4, 5, 6]




//An attribute in the object can hold multiple different types
let message: {
    content: string | number;
};

message = {
    content: 200 // Assigning a number
}

console.log(message.content); // Output: 200