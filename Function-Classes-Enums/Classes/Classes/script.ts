//When passing parameters to a construictor it needs to specify the parameter's type
class Person {
    constructor(name: string) {

    }
}

//Specify the type when defining a class parameter
//Instatiating and using a class works as expected
class Person1 {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}
let sheila = new Person1("Sheila");
console.log(sheila.name); // Sheila



//In JavaScript, all properties are accessible from the outside. The public keyword in TypeScript makes that explicit.
class Person3 {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const employee = new Person3("Sheila");
console.log(employee.name); // Sheila


//The private keyword in TypeScript makes the property or method of a class inaccessible from outside that class.
class Employee {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
}
const employee1 = new Employee(123);
//console.log(employee1.id); // Error: Property 'id' is private and only accessible within class 'Employee'.


//The protected keyword in TypeScript prevents a property or method of a class from being accessed outside of that class and its subclasses.
class Employee2 {
    protected department: string;
    constructor(department: string) {
        this.department = department;
    }
}

class Manager extends Employee2 {
    printDepartment() {
        console.log(this.department);
        
    }
}
const manager = new Manager("Sales");
manager.printDepartment(); // Sales



//By using access modifiers, class properties are defined and initialized within the constructor parameters without the property declarations.
class Person4 {
    constructor(public name: string) {

    }
}
let yumi = new Person4("Yumi");
console.log(yumi.name); // Yumi


class SecretAgent {
    private codeName: string;
    public realName: string;

    constructor(codeName: string, realName: string) {
        this.codeName = codeName;
        this.realName = realName;
    }

    public introduce(): string {
        return `Hi, I am ${this.realName}, but my code name is classified. `;
    }
}

const agent = new SecretAgent("007", "James Bond");
console.log(agent.introduce()); // Hi, I am James Bond, but my code name is classified. 
 
