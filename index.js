const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkDown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    }
];

// function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(responses){
        console.log(responses)
        writeToFile("README.md", generateMarkDown(responses))
    })
}

// function call to initialize program
init();
