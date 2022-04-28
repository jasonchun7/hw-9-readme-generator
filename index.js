const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        // title of project/README
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            // using the ternary operator in case no input from user
            validate: function (answer) {
                return (answer ? true : 'A valid project title is required before proceeding.');
            }
        },
        // description section
        {
            type: 'input',
            name: 'description',
            message: 'What is the what, why, and how of your project?',
            validate: function (answer) {
                return (answer ? true : 'A valid description is required before proceeding.');
            }
        },
        // installation section
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: function (answer) {
                return (answer ? true : 'Steps explaining installation is required before proceeding.');
            }
        },
        // usage section
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use.',
            validate: function (answer) {
                return (answer ? true : 'Instructions are required before proceeding.');
            }
        },
        // license section
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use for this project?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        // contributing section
        {
            type: 'input',
            name: 'contributing',
            message: 'If applicable, provide guidelines on how other developers can contribute to your project.',
        },
        // tests section
        {
            type: 'input',
            name: 'tests',
            message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
        },
        // questions section
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: function (answer) {
                return (answer ? true : 'A valid GitHub username is required before proceeding.');
            }
            // research how to get link from username (api?)
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: function (answer) {
                return (answer ? true : 'Please include your email.');
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'How would you like other developers to reach you?'
        }
    ]);
    