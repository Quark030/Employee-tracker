const connection = require('../config/connection'); // Correctly locate the connection module


// Function to get all employees
function getAllEmployees() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM employee';
    connection.query(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

// Function to add a new employee
function addEmployee(employee) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    const params = [employee.first_name, employee.last_name, employee.role_id, employee.manager_id];
    connection.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

// Function to update an employee's role
function updateEmployeeRole(employeeId, roleId) {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
    const params = [roleId, employeeId];
    connection.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

module.exports = { getAllEmployees, addEmployee, updateEmployeeRole };
