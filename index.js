const inquirer = require("inquirer");
const Logo = require("./lib/logo");
const {Circle, Square, Triangle} = require("./lib/shapes")
const fs = require ("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "Write 3 letters for your logo.",
            name: "text",
            // Limitar a que solo sean 3 caracteres
        },
        {
            type: "input",
            message: "Choose a color (use name or hexadecimal code)",
            name: "fontColor",
        },
        {
            type: "list",
            message: "Choose a shape:",
            name: "shape",
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: "input",
            message: "What's the shape color?",
            name: "shapeColor",
        }

    ])
    .then((response) => {
    //     fs.writeFile('logo.svg', render(response), err => err ? console.error('failed to write file') : console.log('success'))
console.log(response)
let svg;
if (response.shape === 'Circle') { 
const circle = new Circle(response.text, response.fontColor, response.shapeColor)
 svg = circle.render();
} 
else if (response.shape === 'Square') {
    const square = new Square(response.text, response.fontColor, response.shapeColor)
    svg = square.render();
} 
else if(response.shape === 'Triangle') {
    const triangle = new Triangle(response.text, response.fontColor, response.shapeColor)
    svg = triangle.render();
} 

fs.writeFile('logo.svg', svg, err => err ? console.error('failed to write file') : console.log('success'))
}
)
    