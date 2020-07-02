//Creates a folder and file

const fs = require('fs');
const path = require('path');


callback =function(err){
    if(err)
        throw err;
    console.log("Successful");
}

//Create folder
if(!fs.existsSync(path.join(__dirname,'/test'))){
    fs.mkdir(path.join(__dirname,'/test'), {}, callback);
}

//Write file 
if(!fs.existsSync(path.join(__dirname,'/test/test.txt'))){
fs.writeFile(path.join(__dirname + "/test" ,"test.txt"),"HELLO WORLD", callback);
}

//Append file 
fs.appendFile(path.join(__dirname + "/test" ,"test.txt")," EDIT", callback);

//Read file
fs.readFile(path.join(__dirname + "/test" ,"test.txt"),"utf8", (err,data) => { console.log(data); });

