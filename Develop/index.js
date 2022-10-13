// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project titled?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What are the details for this project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation process?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How can a user interact with this program?',
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT License', new inquirer.Separator(), 'GNU General Public License v 3.0', new inquirer.Separator(), 'Apache License 2.0', new inquirer.Separator(), 'Creative Commons Zero v1.0 Universal', new inquirer.Separator(),],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who participated in the creation of this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Was there a testing component?',
    },

    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },

  ])
  .then((answers) => {
    const READMEContent = generateREADME(answers);

    fs.writeFile('README.md', READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


function renderLicenseBadge(license) {
  if (license == 'MIT License') {

    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`
  }
  if (license == 'GNU General Public License v 3.0') {
    return `![GitHub license](https://img.shields.io/badge/license-GPLv3-blue.svg)`
  }
  if (license == 'Apache License 2.0') {
    return `![GitHub license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)`
  }
  if (license == 'Creative Commons Zero v1.0 Universal') {
    return `![GitHub license](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`
  }
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateREADME = ({ title, description, installation, usage, license, contributing, tests, email, github }) =>
  `
# ${title}
${renderLicenseBadge(license)}

## Description
${description}


## Table of contents 
* [Installation](#installation)
* [Usage](#usage)
* [Description](#description)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation 
${installation}

## Usage
${usage}

## License 
${license}

## Contributing
${contributing}

## ${tests}

## Questions
Here is my GitHub if you would like to look over my projects [${github}](https://github.com/${github})

Send me an email at  [${email}](mailto:${email}) if you would like to get in contact about working together in the future or have any questions. 

`



