// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = require['questions'];
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,data, err=>
    err ? console.error(err): console.log ('Success!')
    )};

// TODO: Create a function to initialize app
function init() {
    return questions.prompt(
        {
            type: 'input',
            message: 'Please enter your github username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please input email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your project Title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a short description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Write a short description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is your project used for?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please type in your linked in address',
            name: 'linkedin'
        }
    )
}

// Function call to initialize app
init();
