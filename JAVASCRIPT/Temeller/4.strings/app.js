let value;
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);

const message = `Hello, ${firstName} ${lastName}!`;
console.log(message);

const multiLineString = `This is a multi-line 
string example.`;
console.log(multiLineString);

value = firstName.concat(" ", lastName);
console.log(value);

value = firstName[2];
console.log(value);

value = firstName.length;
console.log(value);

value = firstName.toUpperCase();
console.log(value);

value = firstName.indexOf("o");
console.log(value);