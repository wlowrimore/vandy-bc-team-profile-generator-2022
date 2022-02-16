const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('util');
// const generateSite = require('./src/generateSite.js');
// const writeFileAsync = util.promisify(fs.writeFile);

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const myTeam = [];

// Creates an array of questions for the Manager Input.
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Name',
      message: "What is the Manager's full name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You must full name of the Manager!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'Employee_Id',
      message: "What is the Manager's employee ID number? (Required)",
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log('You must enter employee ID number of the Manager!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: "What is the Manager's email address? (Required)",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('You must enter the email address of the Manager!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'Office_Number',
      message: "What is the Manager's Office number?",
      validate: officeNumber => {
        if (officeNumber) {
          return true;
        } else {
          console.log('You must enter the office number of the Manager!');
        }
      }
    },

  ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
      myTeam.push(manager);
      promptAddPosition();
    })   
};

const promptAddPosition = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'position',
      message: 'Please select which position you would like to add',
      choices: ["Engineer", "Intern", "None"]
    }

  ]).then(choices => {
      switch (choices.position) {
        case 'Engineer':
          promptEngineer();
          break;
        case 'Intern':
          promptIntern();
          break;
        default: console.log("!!!! I'M FINISHED !!!!");
      }
    })
};
  
  
    

// Creates an Array for Engineer Input
const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Engineer_Name',
      message: "Pleas enter Engineer's full name. (Required)",
      validate: engineerName => {
        if (engineerName) {
          return true;
        } else {
          console.log('You must enter the full name of the Engineer!');
        }
      }
    },

    {
      type: 'input',
      name: 'Employee_ID',
      message: 'What is the employee ID of the Engineer? (Required)',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log('You must enter the employee ID!');
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is the email address of the Engineer? (Required)',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('You must enter the email of the Engineer!');
        }
      }
    },

    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      validate: github => {
        if (github) {
          return true;
        } else {
          console.log('You must enter the GitHub username of the Engineer!');
        }
      }
    }

  ]).then(answers => {
      console.log(answers);
      const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
      myTeam.push(engineer);
      promptAddPosition();
    })   
};


// Creates an array of Intern Input
const promptIntern = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'Intern_Name',
      message: "Pleas enter Intern's full name. (Required)",
      validate: internName => {
        if (internName) {
          return true;
        } else {
          console.log('You must enter the full name of the Intern!');
        }
      }
    },

    {
      type: 'input',
      name: 'Employee_ID',
      message: 'What is the employee ID of the Intern? (Required)',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log('You must enter the employee ID of the Intern!');
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is the email address of the Intern? (Required)',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('You must enter the email of the Intern!');
        }
      }
    },

    {
      type: 'input',
      name: 'School',
      message: 'What is the name of the school the Intern is attending?',
      validate: school => {
        if (school) {
          return true;
        } else {
          console.log('You must enter the name of the school the Intern is attending!');
        }
      }
    }

  ]).then(answers => {
      console.log(answers);
      const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
      myTeam.push(intern);
      promptAddPosition();
    })
};

promptManager(); 