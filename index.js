const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'bobbyjones23',
  database: 'employee_DB',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  mainPrompt();
});
// Main Prompt
const mainPrompt = () =>
  inquirer
    .prompt([
      {
        name: 'action',
        type: 'list',
        message: 'What would you like to do? (Use Arrow Keys)',
        choices: [
          'View All Employees',
          'View All Departments',
          'View All Roles',
          'Add Employee',
          'Add Department',
          'Add Role',
          'Update Employee Role',
          'Exit',
        ],
      },
    ])
    .then(answer => {
      switch (answer.action) {
        case 'View All Employees':
          viewAllEmployees();
          break;

        case 'View All Departments':
          viewAllDepartments();
          break;

        case 'View All Roles':
          viewAllRoles();
          break;

        case 'Add Employee':
          addEmployee();
          break;

        case 'Add Department':
          addDepartment();
          break;

        case 'Add Role':
          addRole();
          break;

        case 'Update Employee Role':
          updateEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          break;
      }
    });
    
const viewDepartments = () => {

    connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.table(results)
        mainPrompt()
    });
}

const viewRoles = () => {

    connection.query('SELECT * FROM role', (err, results) => {
        if (err) throw err;
        console.table(results)
        mainPrompt()
    });
}

const viewEmployees = () => {

    connection.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        console.table(results)
        mainPrompt()
    });
}
// * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles
