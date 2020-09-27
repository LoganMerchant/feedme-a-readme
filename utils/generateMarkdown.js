const fs = require('fs');

// function to generate markdown for README
const generateMarkdown = data => {
  const {
    licenses,
    name,
    description,
    installation,
    usage,
    tests,
    contribute,
    github,
    email,
  } = data;

  return `
[![License Badge](https://img.shields.io/badge/License-${licenses.split(" ").join("_")}-blueviolet.svg)](https://shields.io/)

# ${name}


## Description
${description}


## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Testing](#testing)
  * [How to Contribute](#how-to-contribute)
  * [Licenses](#licenses)
  * [Questions](#questions)


## Installation
${installation}


## Usage
${usage}


## Testing
${tests}


## How to Contribute
${contribute}


## Licenses
This project is registered with the following license(s), to find out more visit [Choose a License](https://choosealicense.com/licenses):
* ${licenses}

## Questions
Check me out on [GitHub](https://www.github.com/${github}). 
<br>
<br>
If you have any further questions, please reach out here: ${email}
  `;
};

// function to write README file
const writeToFile = markdownData => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', markdownData, err => {
          if (err) {
              reject(err);
              return;
          }

          resolve({
              ok: true,
              message: 'README generated! Find it in the `dist` folder.',
          });
      });
  });
};

module.exports = { generateMarkdown, writeToFile };
