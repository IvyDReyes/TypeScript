//Two ways to define an array in TypeScript
let numbers1: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3];

console.log(numbers1);
console.log(numbers2);



//Array of numbers
let numbers: Array<number> = [100, 205, 392];
console.log(numbers);

//Array of strings
let words: Array<string> = ["Hello", "TypeScript"];
console.log(words);

//Can also create interfaces with a generic type. The initial syntax looks similar to classes with generics.
class BoxClass<T> {
    contents: T;

constructor(contents: T) {
    this.contents = contents;
    }
}

interface BoxInterface <T> {
    contents: T;
}

const stringBoxClass: BoxClass<string> = new BoxClass("Hello 123");

const stringBoxInterface: BoxInterface<string> = {
    contents: "Hello 456"
};

console.log(stringBoxClass.contents);
console.log(stringBoxInterface.contents);



//Can also omit adding the type explicitly for class as TypeScript will be able to infer it.
class CaseClass <T> {
    contents: T;

    constructor(contents: T) {
        this.contents = contents;
    }
} 

const stringCaseClass1: CaseClass<string> = new CaseClass("Good Morning");
const stringCaseClass2 = new CaseClass("Good Afternoon");

console.log(stringCaseClass1.contents);
console.log(stringCaseClass2.contents);



//Functions


function getId(object: any): any {
    return object.id;
}

let employee3 = {
    id: 1,
    position: 'Io'
};

console.log(getId(employee3));



/*

Can replace the 'any' type with 'T', which allows our function to take any data type.

function getDep<T> (object: T): T {
    return object.department;
}

let employe101 = {
    id: 12,
    department: 'research'
};

console.log(getDep(employe101));

Error: TypeScript doesn't know if "id" exists

*/


// Added contraints T extends { id: any } , that only allow types that have an id property.
function getDep<T extends { department: any }> (object: T): T {
    return object.department;
}

let employe101 = {
    id: 12,
    department: 'research'
};

console.log(getDep(employe101));




//Can also define the specific type of the return type, for example string
function getSubject<T extends { subject: any }> (object: T): string {
    return object.subject.toString();
}

let student90 = {
    studentId: 87,
    subject: "math" 
};

console.log(getSubject(student90));




function genericFunction<A>(arg: A): A {
    return arg;
}
let str: string = genericFunction<string>("Hi!");
console.log(str);



/* 
The advantage of using TypeScriipt generics: It allows functions, interfaces and classes to work with multiple data types.
*/
