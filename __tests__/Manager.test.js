const Manager = require('../lib/Manager.js');
const manager = new Manager('William', '36425', 'wlowrimore@gmail.com', '901');

test('checks to see if manager class values pass', () => {
  expect(manager.officeNumber).toBe('901');
  expect(manager.name).toBe('William');
  expect(manager.id).toBe('36425');
  expect(manager.email).toBe('wlowrimore@gmail.com');
});

test('checks to see if callback: getName() method passes', () => {
  expect(manager.getName()).toBe('William');
});

test('checks to see if callback: getId() method passes', () => {
  expect(manager.getId()).toBe('36425');
});

test('checks to see if callback: getEmail() method passes', () => {
  expect(manager.getEmail()).toBe('wlowrimore@gmail.com');
});

test('checks to see if callback: getOfficeNumber() method passes', () => {
  expect(manager.getOfficeNumber()).toBe('901');
});

test('checks to see if callback: getRole() method passes', () => {
  expect(manager.getRole()).toBe('Manager');
});