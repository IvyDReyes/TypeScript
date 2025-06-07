/* 
- type aliases is define using the type keyword
- can give a complex object type a name
- type aliases create a new name for a type but do not create a new type
- can add primitive types, arrays of different types, and more to the Object type
*/


// define an object type an attribute called name of type string 
type Human = {
    name: string;
    age: number;
};

let jacky: Human = {name: "Jacky", age: 63};
console.log(jacky);




type Numbers = number[];
let myArray: Numbers = [7, 358, 913];




// can also use type aliases to give an existing type a new name
type PriceSeries = number[];
const stockPrices: PriceSeries = [108, 103, 110];
console.log(stockPrices);


// using type aliases can also be helpful to make union types better readable
type UserID = number | string;
let id: UserID = "#25120";
console.log(id); // Output: #25120