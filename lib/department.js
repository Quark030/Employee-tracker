
const connection = require('../config/connection'); // Correctly locate the connection module


// Function to get all departments
function getAllDepartments() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM department';
    connection.query(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

// Function to add a new department
function addDepartment(department) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO department (name) VALUES (?)';
    const params = [department.name];
    connection.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

module.exports = { getAllDepartments, addDepartment };
