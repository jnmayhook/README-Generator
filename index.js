// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Please enter your Project Title?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please enter your Project Description?',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please enter your Installation Instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please enter your Usage Information?',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please enter your Contribution Guidelines?',
},
{
    type: 'input',
    name: 'test_instructions',
    message: 'Please enter your Test Instructions?',
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose a License?',
    choices: ['MIT', 'GNU', 'Apache']
},
{
    type: 'input',
    name: 'username',
    message: 'Please enter your Github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your Email address?',
}, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt( questions ).then( answers => {
        console.log(answers)
        writeToFile('./dist/README-sample.md', generateMarkdown( answers ))
    }).catch( err => {
        console.log(err)
    })
    
}

// Function call to initialize app
init();