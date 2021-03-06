// packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const axios = require("axios");

// questions array
const questions = [
  // title of project/README
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    // using the ternary operator in case no input from user
    validate: function (answer) {
      return answer
        ? true
        : "A valid project title is required before proceeding.";
    },
  },
  // description section
  {
    type: "input",
    name: "description",
    message:
      "Enter a description of your application explaining the what, why, and how.",
    validate: function (answer) {
      return answer
        ? true
        : "A valid description is required before proceeding.";
    },
  },
  // installation section
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: function (answer) {
      return answer
        ? true
        : "Steps explaining installation is required before proceeding.";
    },
  },
  // usage section
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for use.",
    validate: function (answer) {
      return answer ? true : "Instructions are required before proceeding.";
    },
  },
  // license section
  {
    type: "list",
    name: "license",
    message: "What license do you want to use for this project?",
    choices: ["agpl", "apache", "mit", "mpl", "no license"],
  },
  // contributing section
  {
    type: "input",
    name: "contributing",
    message: "How can other developers contribute to your project?",
  },
  // tests section
  {
    type: "input",
    name: "tests",
    message:
      "If any, explain and give examples of any tests written for your project and how to run them.",
  },
  // questions section
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
    validate: function (answer) {
      return answer
        ? true
        : "A valid GitHub username is required before proceeding.";
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: function (answer) {
      return answer ? true : "Please include your email.";
    },
  },
  {
    type: "input",
    name: "questions",
    message: "How would you like other developers to reach you?",
  },
];

// inquirer prompt
inquirer.prompt(questions).then(function (data) {
  const queryUrl = `https://api.github.com/users/${data.username}`;

  axios.get(queryUrl).then(function (response) {
    const githubInfo = {
      githubImage: response.data.avatar_url,
      profile: response.data.html_url,
    };

    // create README
    fs.writeFile(
      "./output/README.md",
      generateMarkdown(data, githubInfo),
      function (err) {
        if (err) {
          throw err;
        }

        console.log("New README file successfully created!");
      }
    );
  });
});

function init() {}

// function to call initalize app
init();
