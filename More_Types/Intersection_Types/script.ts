/* 
- Intersection Types allows to combine multiple types into a single type
- Use the & operator to combine multiple types
- A variable of an intersection type must satisfy all the combined types
*/

type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type PersonEmployee = Person & Employee;

let someone: PersonEmployee = {
    name: "Mirriam",
    employeeId: 5
};

console.log(someone.name, someone.employeeId); // Output: Mirriam 5



// Can use intersection types to extend custom types, allowing to create more comprehensive types, using the & sign
type Animal = {
    species: string;
};

type Pet = Animal & {
    name: string;
    age: number;
};

let myPet: Pet = {
    species: "Cat",
    name: "Ashley",
    age: 2
};

console.log(myPet.species, myPet.name, myPet.age); // Output: Cat Ashley 2
