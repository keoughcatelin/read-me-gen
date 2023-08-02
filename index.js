
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project.',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions.',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information.',
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'Please enter contribution guidelines.',
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions.',
    },
    {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.',
    },
    {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project.',
    choices: ['MIT', 'GPLv3', 'Apache', 'Unlicense', 'BSD']
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
      if (error) {
        return console.log(error);
      }
      console.log('Successfully created README.md!');
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
      const fileName = answers.title.replace(/\s+/g, '_') + '.md';

      writeToFile(fileName, answers);
    });
  }
// Function call to initialize app
init();