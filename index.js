// hold info for question
const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderTeam = require("./src/html-template");



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
            addEmployees();
        })
    };

    function addEmployees () {
        inquirer
        .prompt([  
        {
            type: 'list',
            name: 'choice',
            message: 'What employees would you like to add?',
            choices: ['Engineer', 'Intern', "I'm Done"]
        },
    ])

    .then(answer => {
        switch (answer.choice) {
            case 'Engineer':
                createEngineer ()
                break;

            case 'Intern':
                createIntern ()
                break;

            case "I'm Done":
                buildTeam()
                break;
        }
    });
    
    function createEngineer () {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: "What is the Engineers ID?",
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your Engineers name?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Engineers email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your Engineers GitHub?',
            },
        ])
        .then(answers => {
            const engineer = new Engineer(
                answers.id,
                answers.name,
                answers.email,
                answers.github
            )
            teamMemberObjectArr.push(engineer)
            addEmployees();
        })

    };

    function createIntern () {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: "What is the Interns ID?",
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your Interns name?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does your Intern go to?',
            },
        ])
        .then(answers => {
            const intern = new Intern(
                answers.id,
                answers.name,
                answers.email,
                answers.school
            )
            teamMemberObjectArr.push(intern)
            addEmployees();
        })
    };  
    }

    function buildTeam () {
        fs.writeFile("./dist/index.html", renderTeam(teamMemberObjectArr), (err) => {
            if (err)
              console.log(err);
            else {
                console.log("You successfully added your team members!");
            }
    })
    }
    createManager();
}

init()