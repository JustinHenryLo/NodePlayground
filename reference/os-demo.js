//Get info of OS
const os = require('os');

//Platform
console.log(os.platform());

//CPU Architecture
console.log(os.arch());

//CPU Core
console.log(os.cpus());

//Get free memory
console.log(os.freemem());

//Get total memory
console.log(os.totalmem());

//Home dir
console.log(os.homedir());

//Seconds of PC Uptime in sec.
console.log(os.uptime());