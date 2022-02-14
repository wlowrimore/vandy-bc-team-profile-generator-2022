const Employee = require('../lib/Employee.js');
const employee = new Employee('William', '36425', 'wlowrimore@gmail.com');

test('checks to see if employee class passes', () => {
  
  
  expect(employee.name).toEqual('William');
  expect(employee.id).toEqual('36425');
  expect(employee.email).toEqual('wlowrimore@gmail.com');
});

test('checks to see if callback: getName() method passes', () => {
  expect(employee.getName()).toBe('William');
});

test('checks to see if callback: getId() method passes', () => {
  expect(employee.getId()).toBe('36425');
});

test('checks to see if callback: getEmail() method passes', () => {
  expect(employee.getEmail()).toBe('wlowrimore@gmail.com');
});

test('checks to see if callback: getRole() method passes', () => {
  expect(employee.getRole()).toBe('Employee');
});