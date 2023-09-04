const inquirer = require('inquirer');
const consoleTable = require('console.table');
const employeesModule = require('./lib/employee');
const departmentModule = require('./lib/department');
const rolesModule = require('./lib/role');
const connection = require('./config/connection'); 



async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    },
  ]);

  switch (action) {
    case 'View all departments':
      await viewAllDepartments();
      break;

    case 'View all roles':
      await viewAllRoles();
      break;

    case 'View all employees':
      await viewAllEmployees();
      break;

    case 'Add a department':
      await addDepartment();
      break;

    case 'Add a role':
      await addRole();
      break;

    case 'Add an employee':
      await addEmployee();
      break;

    case 'Update an employee role':
      await updateEmployeeRole();
      break;

    default:
      console.log('Goodbye!');
      process.exit();
  }
}

async function viewAllDepartments() {
  const departments = await departmentModule.getAllDepartments();
  console.table(departments);
  mainMenu();
}

async function viewAllRoles() {
  const roles = await rolesModule.getAllRoles();
  console.table(roles);
  mainMenu();
}

async function viewAllEmployees() {
  const employees = await employeesModule.getAllEmployees();
  console.table(employees);
  mainMenu();
}

async function addDepartment() {
  const department = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter department name:',
    },
  ]);
  await departmentModule.addDepartment(department);
  console.log('Department added successfully!');
  mainMenu();
}

async function addRole() {
  const role = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter role title:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter role salary:',
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter department ID for the role:',
    },
  ]);
  await rolesModule.addRole(role);
  console.log('Role added successfully!');
  mainMenu();
}

async function addEmployee() {
  const employee = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter employee first name:',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter employee last name:',
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter employee role ID:',
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter employee manager ID (optional):',
    },
  ]);
  await employeesModule.addEmployee(employee);
  console.log('Employee added successfully!');
  mainMenu();
}

async function updateEmployeeRole() {
  const employees = await employeesModule.getAllEmployees();
  const employeeChoices = employees.map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id,
  }));
  const { employeeId, roleId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'employeeId',
      message: 'Select an employee to update:',
      choices: employeeChoices,
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the new role ID:',
    },
  ]);
  await employeesModule.updateEmployeeRole(employeeId, roleId);
  console.log('Employee role updated successfully!');
  mainMenu();
}

mainMenu();
