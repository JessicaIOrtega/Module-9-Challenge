// TODO: Include packages needed for this application

const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    'What`s your name?',
    'Where are you located?',
    'Tell us about yourself',

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeToFile(fileName, data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        writeToFile("index.html", generateMarkdown(response));
    });
};

// Function call to initialize app
init();
