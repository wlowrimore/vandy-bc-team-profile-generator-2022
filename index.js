const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// npm Pagkages
const fs = require('fs');
const inquirer = require('inquirer');
// Array for created team members
const teamArray = [];

// Questions / Answers Array for team Members
const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
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
      name: 'id',
      message: "What is the Manager's employee ID number? (Required)",
      validate: id => {
        if (id) {
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
      name: 'officeNumber',
      message: "What is the Manager's office number? (Required)",
      validate: officeNumber => {
        if (officeNumber) {
          return true;
        } else {
          console.log("You must enter the Manager's office number!");
        }
      }
    },
  ])
  .then(managerInput => {
      const {name, id, email, officeNumber} = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
  }) 
    
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "What position would you like to add?",
      choices: ["Engineer", "Intern"]
    },

    {
      type: 'input',
      name: 'name',
      message: "What is the employee's full name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter the employee's full name!");
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID number? (Required)",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("You must enter the employees ID number!");
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address? (Required)",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("You must enter the employee's email address!");
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'github',
      message: "What is the Engineer's GitHub username? (Required)",
      when: (input) => input.role === "Engineer",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("You must enter the Engineer's GitHub username!");
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'school',
      message: "What is the name of the Intern's school? (Required)",
      when: (input) => input.role === "Intern",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("You must enter the name of the Intern's school!");
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: "Would you like to add any other positions?",
      default: false
    }
  ])
  // Adds new Team Members
  .then(employeeData => {
    let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer(name, id, email, github);
      console.log(employee);
        
    } else if 
        (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
    }
    
        teamArray.push(employee);

        if (confirmAddEmployee) {
          return addEmployee(teamArray);

    } else { 
        return teamArray;
    }
  })  
}
// writes index.html to /dist/ folder 
const writeFile = data => {
  fs.writeFile('dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Success!...You can find your newly created index.html file in your '/dist/' folder.");
    }
  })
};

// Function to initialize app
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err)
  });