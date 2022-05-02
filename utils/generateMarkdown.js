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
function generateMarkdown(data, githubInfo) {
  return `# **${data.title}**

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
  
  ${data.license}
  
  ## Contributing 
  
  ${data.contributing}
  
  ## Tests 
  
  ${data.tests}
  
  ## Github

  ![Image of me](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - ${githubInfo.email}

  ## Questions 

  - How to reach me: ${data.questions}
  `;
}

module.exports = generateMarkdown;
