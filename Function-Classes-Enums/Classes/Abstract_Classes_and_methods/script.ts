//An abstract class is a class that cannot be instantiated directly, it is use as base classes from which other classes can be derived. Abstract classes can be use to define a common structure but don't want to be used directly.
abstract class Animals {

}

//Can also create an abstract method inside a class.
abstract class Animal1 {
    abstract makeSound(): void;
}


/* 
1. To use an abstract class and its abstract methods, abstract class must be extended using the extends keyword. 
2. After extending, the child class must provide an implementation for the abstract method. 
3. Can now create an instance of the child class and call the method.
*/ 
abstract class Animal2 {
    abstract makeSound(): void;
}

class Dog extends Animal2 {
    makeSound(): void { 
        console.log("Woof!"); // actual implementation of the abstract method
    }
}

const doggy4 = new Dog();
doggy4.makeSound(); // Woof!


//Finally, it's a good practice to clearly specify that the abstract method should be publicly accessible. 
abstract class Animal3 {
    public abstract makeSound(): void; // explicitly public
}

class Dog1 extends Animal3 {
    makeSound() {
        console.log("Wof Wof!"); // actual implementation of the abstract method
    }    
}

const nelly = new Dog1();
nelly.makeSound(); // Woof!


// An abstract class can also define non-abstract methods that can be directly called.
abstract class Animal4 {
    public abstract makeSound(): void;

    public eat(): void {
        console.log("Animal is eating");
    }
}

class Dog2 extends Animal4 {
    makeSound() {
        console.log("Ruff!"); // actual implementation of the abstract method
    }
}

const buddy = new Dog2();
buddy.makeSound(); // Woof!
buddy.eat(); // Animal is eating






abstract class Shape {
    abstract draw(): void; // abstract method to be implemented by subclasses, Circle, Square......
}

class Circle extends Shape {
    draw(): void {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw(): void {
        console.log("Drawing a square");
    }
}

class Triangle {
     draw(): void {
        console.log("Drawing a triangle?");
    }
}

const circle = new Circle();
//circle.draw(); // Drawing a circle

const square = new Square();
//square.draw(); // Drawing a square

const triangle = new Triangle();
//triangle.draw(); // Drawing a triangle?

function drawShape(shape: Shape) {
    shape.draw(); // Calls the draw method of the specific shape
}
drawShape(new Triangle()); // Error: Cannot create an instance of an abstract class


