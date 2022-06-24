const Employee = require("./Employee")

class Engineer extends Employee {
    
    constructor(id, name, email, github) {
        
        super(id, name, email);
        
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
    }
    getRole () {
        return "Engineer";
    }
    
}


module.exports = Engineer 