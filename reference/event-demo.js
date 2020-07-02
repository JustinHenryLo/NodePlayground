const EventEmitter = require('events');

//Create class
class CustomEmitter extends EventEmitter{
    //why was this extended tho..
}

//Use extended class
const ce = new CustomEmitter();

ce.on('event_name', () => { console.log("event fired!") });

ce.emit('event_name');



