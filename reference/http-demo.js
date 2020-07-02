const http = require('http');

//create server obj
http.createServer((request, response)=>{
//write response
response.write('Hello World');
response.end();
//it needs to listen to port 5000
//site can be accessed in localhist:5000
}).listen(5000,()=>{console.log("SERVER UP");})