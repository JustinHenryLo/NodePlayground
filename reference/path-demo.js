//Showcases path lib

const path = require("path");
//Dir name
console.log(path.basename(__filename));

//File ext
console.log(path.extname(__filename));

//Create path obj
console.log(path.parse(__filename));

//Concatenate paths (for os specific or language specific paths)
console.log(path.join(__dirname, 'test', 'hello.html'));