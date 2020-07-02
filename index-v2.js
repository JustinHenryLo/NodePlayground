const Logger = require('./logger');
//listener
logger.on("message",(data) => console.log(data));

//object method
const logger = new Logger();
logger.log("Hello World");

//static method
Logger.log("Hello World");