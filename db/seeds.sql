USE employee_trackerDB;

INSERT INTO department (name)
VALUES 
("Sales"), 
("Engineering"), 
("Finance"), 
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Lead", 100000, 1), 
("Salesperson", 80000, 1), 
("Lead Engineer", 150000, 2), 
("Software Engineer", 120000, 2), 
("Accountant", 125000, 3), 
("Legal Team Lead", 250000, 4), 
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Ian", "Curtis", 1), 
("Eric", "Clapton", 2), 
("Jimmy", "Page", 3),
("Roger", "Waters", 4), 
("Janis", "Joplin", 5), 
("Jimi", "Hendrix", 6), 
("David", "Bowie", 7), 
("Kurt", "Cobain", 5), 
("Jim", "Morrison", 4); 
