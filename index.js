// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');

const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Tell us about your project (description):',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Is there an installation needed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of it?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter contributors:',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license are you using?',
            choices: ["MIT", "Unlicense"]
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests:',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter contributors:',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Questions:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email',
        }

    ])
    .then((response) => {
        console.log(response)
        fs.writeFile("example.md", generateMarkdown(response));
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data);
// };

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
// };

// Function call to initialize app
// init();
