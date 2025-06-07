/* 
- Interfaces  work similarly to type annotations, allowing to define custom types for obejects and enforce type safety
- equal sign is not used, instead the interface keyword is used
- 
*/

interface Person2 {
    name: string;
}

let person: Person2 = {
    name: "Lisa",
};

console.log(person.name); // Output: Lisa





// Using extends keyword can create a new interface that inherits properties from an existing interface

interface Book {
    title: string;
    author: string;
    pages: number;
}

interface EBook extends Book {
    fileSizeMB: number;
    fomat: string;
}




// When a a variable conforms to an interface that extends another one, it must satisfy both the extended and the base interface.
interface Animal3 {
    species: string;
}

interface Pet3 extends Animal3 {
    name: string;
} 

let doggy: Pet3 = {
    species: "Dog",
    name: "Buddy"
}

console.log(doggy); // Output: { species: 'Dog', name: 'Buddy' }