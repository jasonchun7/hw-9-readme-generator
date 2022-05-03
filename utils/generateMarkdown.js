// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  //using switch statement for licenses/badge
  switch (data.license) {
    case "Mozilla Public 2.0":
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "Apache 2.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "BSD 3-Clause":
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "GNU GPLv3.0":
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    default:
      break;
  }

  return `# **${data.title}**

  ${data.licenseBadge}

  ## Description 
  
  ${data.description}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 

  ## Installation 
  
  ${data.installation}

  ## Usage 
  
  ${data.usage}
  
  ## License 
  
  Lincensed under the ${data.license} License. 
  
  ## Contributors 
  
  ${data.contributing}
  
  ## Tests 
  
  ${data.tests}

  ## Questions 

  My GitHub Info:

  ![Image of me](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - ${githubInfo.email}

  How to reach me: ${data.questions}
  `;
}


module.exports = generateMarkdown;
