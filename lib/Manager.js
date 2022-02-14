const Manager = require('../lib/Manager.js');

class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
  
    // calls Employee constructor:
    super(name, id, email );

    

    this.officeNumber = new officeNumber();

  }
}