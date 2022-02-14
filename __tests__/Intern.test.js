const Intern = require('../lib/Intern.js');
const intern = new Intern('William', '36425', 'wlowrimore@gmail.com', 'Vanderbilt');

test('checks to see if Intern class values pass', () => {
  expect(intern.school).toBe('Vanderbilt');
  expect(intern.name).toBe('William');
  expect(intern.id).toBe('36425');
  expect(intern.email).toBe('wlowrimore@gmail.com');
});

test('checks to see if callback: getName() method passes', () => {
  expect(intern.getName()).toBe('William');
});

test('checks to see if callback: getId() method passes', () => {
  expect(intern.getId()).toBe('36425');
});

test('checks to see if callback: getEmail() method passes', () => {
  expect(intern.getEmail()).toBe('wlowrimore@gmail.com');
});

test('checks to see if callback: getSchool() method passes', () => {
  expect(intern.getSchool()).toBe('Vanderbilt');
});

test('checks to see if callback: getRole() method passes', () => {
  expect(intern.getRole()).toBe('Intern');
});