/* 
- Generics allow us to write flexible, reusable code that can work with any data type while maintaining type safety.
- Allow us to create code that can work with various types without sacrificing the benefits of strong typing.
- Instead of defining the function twice, we can use generics to allow any type later.

1. First, indicate that will be using a generic type. Use sharp brackets <> around a generic letter like T.
2. After declaring a generic type, can call it with any type.
3. Can also use different type for the generic, just specify it when calling the function. For example, can use <string> instead of <number>.
*/
function findMax<T>(array: T[]): T {
    return array.reduce((max, current) => (current > max ? current : max));
}

const maxNumber = findMax<number>([1, 3, 2]);
console.log(maxNumber); // Output: 3

const maxString = findMax<string>(["a", "b", "c"]);
console.log(maxString); // Output: c


//4. As TypeScript is pretty good when it comes to inferring types, ommitting the generic type declaration inside the sharp brackets is also possible.
function findMax1<T>(array: T[]): T {
    return array.reduce((max, current) => (current > max ? current : max));
}

const maxNumber1 = findMax1([1, 3, 2]);
console.log(maxNumber); // Output: 3

const maxString1 = findMax1(["a", "b", "c"]);
console.log(maxString); // Output: c

/*
1. Can also use generics when creating a class. Define a class with <T> that can be use throughout the class.
2. After defining the generic class T, it’s now possible to use T as the type for the variable.
3. When using a generic type in a class, just place the desired type inside angle brackets to use it with any type.
4. Reuse the same class structure for different types, like numbers or strings.
5. Once an instance with a specific type is created like number, assigning a value of a different type results to TypeScript error.

*/ 
class Container<T> {
    constructor(public value: T) {}
}

let numberContainer = new Container<number>(42);
console.log(numberContainer.value);
let stringContainer = new Container<string>("Hello");
console.log(stringContainer.value);
// let numberContainer = new Container<number>(42);
// numberContainer = "Hello"; //Error: Type "string" is not assignable to type "Container<number>"




// Can also leave the type specification for the generic out as TypeScript can infer it.
class Box<T> {
    constructor(public value: T) {}
}

let numberBox = new Box(42);
console.log(numberBox.value); // 42




class Wrapper<T> {
    constructor(private value: T) {}

    getValue(): T {
        return this.value;
    }
}

const bubbleWrap = new Wrapper("Bubbles");
console.log(bubbleWrap.getValue()); // Output: Bubbles


