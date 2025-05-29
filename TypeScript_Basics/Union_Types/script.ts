// Union Types allows to define multiple types for one variable
// Can also change the type of a variable
let variable: number | string;
variable = 42;
variable = "Now, I'm a string!";
console.log(variable);


// Union Types can also combine more than two types
let variable2: number | string | boolean;

//Union Types allow us to include null and undefined, to represent optional values
let names: string | null;
names = "null";
console.log(names);

let answerToAllQuestions: number | undefined;
answerToAllQuestions = undefined;
console.log(answerToAllQuestions);
