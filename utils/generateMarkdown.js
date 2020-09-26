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
  [![License Badge](https://img.shields.io/badge/License-${licenses}-blueviolet.svg)](https://shields.io/)

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
    ${licenses}

    ## Questions
    ${github}
    ${email}
  `;
};

module.exports = generateMarkdown;
