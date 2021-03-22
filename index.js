const mysql = require('mysql');
const inquirer = require('inquirer');

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
  mainPrompt();
});
const mainPrompt = () => {
    inquirer
    .prompt({
      name: 'choice',
      type: 'list',
      message: 'What do you want to do?',
      choices: ['VIEW_DEPARTMENTS', 'VIEW_ROLES', 'VIEW_EMPLOYEES'],
    })
    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      if (answer.choice === 'VIEW_DEPARTMENTS') {
        viewDepartments();
      } else if (answer.choice === 'VIEW_ROLES') {
        viewRoles();
      } else if (answer.choice === 'VIEW_EMPLOYEES') {
        viewEmployees();
      } else {
          console.log("GOODBYE!")
        connection.end();
      }
    });
}
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
