const Employee = require("./Employee")

class Manager extends Employee {
    
    constructor(id, name, email, officeNumber) {
        
        super(id, name, email);

        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getRole () {
        return "Manager";
    }
    
}


module.exports = Manager