// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description

  ${answers.description}

  ## Table of Contents (Optional)

  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#contributions)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
      
  ## Contributions
  
  ${answers.contribution}
  
  ## License
  
  ${answers.license}

  ## Questions

  <a href="https://github.com/${answers.username}">${answers.username}</a>
  
  <a href="mailto:${answers.email}">${answers.email}</a>

  ---
  
  
`;
}

module.exports = generateMarkdown;
