//tied with index-v1


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //object functions
    greeting(){ 
        console.log(`${this.name}-----${this.age}`);
    }
    //static functions
    static fileStuffs(){
        console.log(`${__dirname}-----${__filename}`);
    }
    
}

module.exports = Person;
