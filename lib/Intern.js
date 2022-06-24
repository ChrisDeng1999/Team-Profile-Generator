const Employee = require("./Employee")

class Intern extends Employee {
    
    constructor(id, name, email, school) {
        
        super(id, name, email);
        
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
    }
    getRole () {
        return "Intern";
    }
    
}


module.exports = Intern