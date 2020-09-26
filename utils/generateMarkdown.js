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
This project is registered with the following license(s):
* ${licenses}


## Questions
Check me out on [GitHub](https://www.github.com/${github}). 
<br>
<br>
If you have any further questions, please reach out here: ${email}
  `;
};

module.exports = generateMarkdown;
