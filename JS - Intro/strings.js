// concatenation
let greeting = 'Hello';
let name = 'Felipe';
let otherName = 'joão';

let capitalized = otherName[0].toUpperCase() + otherName.slice(1, otherName.length);
console.log(`\x1b[36m${capitalized}\x1b[0m`);

console.log(greeting + ', ' + name + ". Welcome!" );
console.log(`${name} has ${name.length} characters.`);