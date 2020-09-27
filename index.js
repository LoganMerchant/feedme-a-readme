const inquirer = require('inquirer');
const { generateMarkdown, writeToFile } = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the title for this project? (REQUIRED)',
                validate: nameInput => {
                    if (!nameInput) {
                        console.log('Please enter the title of your project.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description of this project (REQUIRED)',
                validate: descriptionInput => {
                    if (!descriptionInput) {
                        console.log('Please describe your project.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Give some installation instructions for this project. (REQUIRED)',
                validate: installationInput => {
                    if (!installationInput) {
                        console.log('Please enter some instructions.');
                        return false;
                    } else {
                        return true; 
                    };
                },
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Describe how this project is to be used. (REQUIRED)',
                validate: usageInput => {
                    if (!usageInput) {
                        console.log("Please describe this project's usage.");
                        return false;
                    } else {
                        return true; 
                    };
                }, 
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What are the tests you would like to have displayed, if any?',
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'How would you like people to contribute to this project in the future? (REQUIRED)',
                validate: contributerInput => { 
                    if (!contributerInput) {
                        console.log('Please let other developers know how to contribute.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'list',
                name: 'licenses',
                message: 'Which license is this project under? (REQUIRED)',
                choices: [
                    'GNU AGPLv3',
                    'GNU GPLv3',
                    'GNU LGPLv3',
                    'Mozilla Public License',
                    'Apache License 2.0',
                    'MIT License',
                    'Boost Software License 1.0',
                    'Unilicense',
                ],
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: githubInput => {
                    if (!githubInput) {
                        console.log('Please provide your GitHub username.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is an e-mail address developers may use to ask you any further questions?',
                validate: emailInput => {
                    if (!emailInput) {
                        console.log('Please provide an email address.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
        ])
        .catch(err => {
            if (err) {
                throw err
            };
        });
};

// function call to initialize program
questions()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(markdownData => {
        return writeToFile(markdownData);
    })
    .then(writeToFileResponse => {
        console.log(writeToFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });