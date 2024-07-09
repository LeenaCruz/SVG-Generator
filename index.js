const inquirer = require("inquirer");
const Logo = require("./lib/logo");
const colors = require("colors")
// const fs = require ("fs");

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
    .then((response) => {
     
    
console.log(`Test your ${response.name}`);
        console.log(`Your selection is a ${response.color} ${response.name} text on top of a ${response.shapeColor} ${response.shape} shape.`)
    } );