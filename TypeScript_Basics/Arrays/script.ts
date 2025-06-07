// Arrays of numbers
let numArray: number[] = [1, 2, 3];

// Arrays of strings
let strArray: string[] = ["Hello", "TypeScript"];
console.log(strArray);

// Modify an existing array by referencing the index
let list: number[] = [10, 20, 30, 40];
list[0] = 0;
console.log(list);

// Use other array methods
let list2: number[] = [1, 2, 3, 4];
list2.push(5);
console.log(list2); // Output: [1, 2, 3, 4, 5]

// Use Union Types to create an array that holds values of different types
let stuff: (string | number)[];
stuff = ["Coding", 101];
console.log(stuff); // Output: ["Coding", 101]