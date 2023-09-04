const connection = require('../config/connection'); // Correctly locate the connection module


// Function to get all roles
function getAllRoles() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM role';
    connection.query(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

// Function to add a new role
function addRole(role) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    const params = [role.title, role.salary, role.department_id];
    connection.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

module.exports = { getAllRoles, addRole };
