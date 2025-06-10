/* 
1. Enums or enumerations give more friendly names to a set of named constants.
2. Each member of enum is automatically assigned a number starting from 0
3. Can manually set the value of enum members, only the first member needs to be set, the rest will be assigned incrementally.
4. Enums in TypeScript are objects, so they can be used to access the values of the enum members.
*/

enum Directions {
    Up = 5,
    Down,
    Left,
    Right
}

console.log(Directions.Up); // 5
console.log(Directions.Down); // 6
console.log(Directions.Left); // 7
console.log(Directions.Right); // 8
console.log(Directions[5]); // Up


//Can also use string values instead of auto-incrementing numbers.
enum MusicGenres {
    Classical = "CLASSICAL",
    Rock = "ROCK",
    Pop = "POP",
    Jazz = "JAZZ"
}
console.log(MusicGenres.Classical); // CLASSICAL

//A single enum can store both numbers and strings.
enum Options {
    Yes = 1,
    No = "NO"
}
console.log(Options.Yes); // 1
console.log(Options.No); // NO


enum Answer {
    Yes = 1,
    No,
    Maybe = "MAYBE"
}
console.log(Answer.No); // 2




