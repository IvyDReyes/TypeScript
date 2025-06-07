abstract class Shape {
    abstract draw(): void; // Abstract method to be implemented by subclasses
}
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}
class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}
class Triangle {
    draw() {
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
