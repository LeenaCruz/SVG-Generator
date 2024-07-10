const inquirer = require("inquirer");
const Logo = require("./lib/logo");
const {Circle, Square, Triangle} = require("./lib/shapes")
const fs = require ("fs");

function render(response) {
   return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>`

}





inquirer
    .prompt([
        {
            type: "input",
            message: "Write 3 letters for your logo.",
            name: "name",
            // Limitar a que solo sean 3 caracteres
        },
        {
            type: "input",
            message: "Choose a color (use name or hexadecimal code)",
            name: "color",
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
    .then((response) =>  fs.writeFile('logo.svg', render(response), err => err ? console.error('failed to write file') : console.log('success')))
    //  const shape = response.shape;
// render(shape);
// console.log(`Test your ${response.name}`);
//         console.log(`Your selection is a ${response.color} ${response.name} text on top of a ${response.shapeColor} ${response.shape} shape.`)
        
//     } );