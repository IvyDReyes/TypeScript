// Optional properties are not required in the objects that implement the interface. Mark them with a question mark (?).
interface User {
    name: string;
    age?: number; // Optional property
}

// If an interface has an optional property, an object can include or omit that property without causing a type error.
interface Student {
    firstName: string;
    lastName: string;
    middleName?: string;
}

let student1: Student = {
    firstName: "Al",
    lastName: "Smith"
};

let student2: Student = {
    firstName: "Bo",
    lastName: "Jones",
    middleName: "Max"
};

console.log(student1); // Output: { firstName: 'Al', lastName: 'Smith' }
console.log(student2); // Output: { firstName: 'Bo', lastName: 'Jones', middleName: 'Max' }



//Readonly properties prevent modifications after initialization, keeping their values constant.
//Readonly properties can not be changed afterwards.
type Character = {
    readonly id: number;
    name: string;
}


//Multiple attributes can be marked as readonly in an object type.
interface Computer {
    readonly type: string;
    readonly brand: string;
    readonly memoryInGB: number;
}

//Multiple attributes can be marked as optional in an object type.
interface Food {
    type: string;
    brand?: string;
    color?: string;
}