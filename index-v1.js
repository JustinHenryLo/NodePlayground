//Usable objects:
//require
//module

//tied with JustinNotes

//to auto refresh html without restarting server
//npm run dev

var Person = require("./JustinNotes");
const person1 = new Person("lmao",30);
person1.greeting();
Person.fileStuffs();