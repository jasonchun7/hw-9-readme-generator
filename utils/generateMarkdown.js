// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `
    (https://choosealicense.com/licenses/${license})
      `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
    ## License
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
  } else {
    return " ";
  }
}

// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `# **${data.title}**

  ${renderLicenseBadge(data.license)}

  ## Description 
  
  ${data.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributors](#contributors)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation 
  
  ${data.installation}

  ## Usage 
  
  ${data.usage}
  
  ## License

  The application is covered under the following license:
    ${renderLicenseLink(data.license)}

  ## Contributors 
  
  ${data.contributing}
  
  ## Tests 
  
  ${data.tests}

  ## Questions 

  My GitHub Info:

  ![Image of me](${githubInfo.githubImage})

  [GitHub Profile](${githubInfo.profile})
  
  [Email: ${data.email}](mailto:${data.email})
  
  How to reach me: ${data.questions}
  `;
}

module.exports = generateMarkdown;
