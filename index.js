// hold info for question
const inquirer = require("inquirer")



const teamMemberObjectArr = [];

const init = () => {
    const createManager = () => {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is the Managers ID?',
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your Managers name?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Managers email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your Managers Office Number?',
            },
        ])
        .then(answers => {
            const manager = new Manager(
                answers.id,
                answers.name,
                answers.email,
                answers.officeNumber
            )
            teamMemberObjectArr.push(manager)
        })
    };
};

init ()