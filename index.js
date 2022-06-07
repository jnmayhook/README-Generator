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
        writeToFile('./README.md', generateMarkdown( answers ))
    })
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README