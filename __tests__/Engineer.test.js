const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('William', '36425', 'wlowrimore@gmail.com', 'wlowrimore');

test('checks to see if Engineer class values pass', () => {
  expect(engineer.github).toBe('wlowrimore');
  expect(engineer.name).toBe('William');
  expect(engineer.id).toBe('36425');
  expect(engineer.email).toBe('wlowrimore@gmail.com');
});

test('checks to see if callback: getName() method passes', () => {
  expect(engineer.getName()).toBe('William');
});

test('checks to see if callback: getId() method passes', () => {
  expect(engineer.getId()).toBe('36425');
});

test('checks to see if callback: getEmail() method passes', () => {
  expect(engineer.getEmail()).toBe('wlowrimore@gmail.com');
});

test('checks to see if callback: getGithub() method passes', () => {
  expect(engineer.getGithub()).toBe('wlowrimore');
});

test('checks to see if callback: getRole() method passes', () => {
  expect(engineer.getRole()).toBe('Engineer');
});