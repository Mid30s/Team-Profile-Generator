const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");
const generateHTML = require("./src/generateHTML.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Create an empty array to store team member data
const teamMembers = [];

// Create an array of questions for manager input
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter the team manager's name";
            }
        }  
    },

    {
        type: "input",
        name: "id",
        message: "What is the team manager's id? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter the team manager's id";
            }
        }  
    },

    {
        type: "input",
        name: "email",
        message: "What is the team manager's email? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter the team manager's email";
            }
        }  
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter the team manager's office number";
            }
        }  
    },   
];

// Create an array of questions for engineer input
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your engineer's name";
            }
        }  
    },

    {
        type: "input",
        name: "id",
        message: "What is your engineer's id? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your engineer's id";
            }
        }  
    },

    {
        type: "input",
        name: "email",
        message: "What is your engineer's email? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your engineer's email";
            }
        }  
    },
    
    {
        type: "input",
        name: "github",
        message: "What is your engineer's github username? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your engineer's github username";
            }
        }  
    },   
];

// Create an array of questions for intern input
const internQuestions = [
    {
        type: "input",
        name: "name",
        message:"What is your intern's name? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your intern's name";
            }
        }  
    },

    {
        type: "input",
        name: "id",
        message: "What is your intern's id? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your intern's id";
            }
        }  
    },

    {
        type: "input",
        name: "email",
        message: "What is your intern's email? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your intern's email";
            }
        }  
    },

    {
        type: "input",
        name: "school",
        message: "What is your intern's school? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your intern's school";
            }
        }  
    },   
];

//Function to prompt for data
function promptData() {
    inquirer.prompt(managerQuestions)
        .then((managerData) => {
            // create an instance of the Manager class
            const manager = new Manager(managerData.name,managerData.id,managerData.email,managerData.officeNumber);
            // push the manager instance to the teamMembers array
            teamMembers.push(manager);
            // call the function to prompt for additional team members
            promptTeamMembers();
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function to prompt for additional team members
function promptTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMemberType",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm done adding team members"]
        }
    ])
        .then((answer) => {
            switch (answer.teamMemberType) {
                case "Engineer":
                    inquirer.prompt(engineerQuestions)
                        .then((engineerData) => {
                            // create an instance of the Engineer class
                            const engineer = new Engineer(engineerData.name,engineerData.id,engineerData.email,engineerData.github);
                            // push the engineer instance to the teamMembers array
                            teamMembers.push(engineer);
                            // call the function to prompt for additional team members
                            promptTeamMembers();
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    break;
                case "Intern":
                    inquirer.prompt(internQuestions)
                        .then((internData) => {
                            // create an instance of the Intern class
                            const intern = new Intern(internData.name,internData.id,internData.email,internData.school);
                            // push the intern instance to the teamMembers array
                            teamMembers.push(intern);
                            // call the function to prompt for additional team members
                            promptTeamMembers();
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    break;
                case "I'm done adding team members":
                  // call the function to generate the HTML file
                  const html = generateHTML(teamMembers);
                  fs.writeFile('./dist/index.html', html, err => {
                    if (err) throw err;
                    console.log(chalk.bgYellow.bold("Team Profile successfully generated! Check out the HTML file in /dist folder!"));
                  })
  
                  
            }
        })
    };

  
// initialize the app
function init() {
    console.log(chalk.bgYellow.bold("* Welcome to the Team Profile Generator!"));
    console.log(chalk.bgCyan.bold("* Use `npm run reset` to reset the team profile in dist/folder"));
    console.log(chalk.bgGreen.bold("* Please build your team! 👥"));
    promptData();
};

init();