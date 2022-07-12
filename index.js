// Packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require ("path");
const generateMarkdown = require ("./utils/generateMarkdown.js");
// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub username?',
      },
    {
    type: 'input',
    name: 'email',
    message: 'What is your GitHub email address?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'What is your GitHub project description?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should I run for installation?',
        },
    
    
];

// A function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

// A function to initialize app
function init() {
    // generateMarkdown
    inquirer
    .prompt(questions)
    .then((inquirerResponses) => {
    console.log("generateReadme");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));


    })


}

// Function call to initialize app
init();
