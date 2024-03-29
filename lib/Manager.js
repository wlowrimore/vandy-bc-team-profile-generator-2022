const Employee = require('../lib/Employee.js');

class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
  
    // calls Employee constructor:
    super(name, id, email );

    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
};

module.exports = Manager;