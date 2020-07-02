//tied with index-v2

const EventEmitter = require('events');
const uuid = require('uuid');
//how to use => uuid.v4();

class Logger extends EventEmitter{
    //logger class method
    log(msg){
        this.emit('message',{ id:uuid.v4(), msg:msg });
    }
    //logger object method
    static log(msg){
        emit('message',{ id:uuid.v4(), msg:msg });
    }
    
}

module.exports = Logger;
