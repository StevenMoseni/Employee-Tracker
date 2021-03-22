USE employee_trackerDB;

-- Department Seeds --
INSERT INTO department (id, name)
VALUES (1, 'Sales');

INSERT INTO department (id, name)
VALUES (2, 'Engineering');

INSERT INTO department (id, name)
VALUES (3, 'Finance');

INSERT INTO department (id, name)
VALUES (4, 'Legal');

-- Role Seeds --
INSERT INTO role (title, salary, department_id) 
VALUES
    ("CEO", 350000, 1),
    ("Lead Engineer", 150000, 2),
    ("Engineer", 120000, 2),
    ("Legal Team Lead", 250000, 3),
    ("Lawyer", 190000, 3),
    ("Sales Lead", 100000, 4),
    ("Salesperson", 80000, 4),
    ("Finance Lead", 160000, 5),
    ("Accountant", 125000, 5);

-- Employee Seeds --
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Steven', 'Jones', 1, null),
('Grace', 'Jenkins', 3, 2),
('Bob', 'Nickle', 4, 1),
('Ned', 'Flanders', 5, 4),
('Mike', 'Tyson', 6, 1),
('Sasha', 'Cohen', 7, 6),
('Tom', 'Hanks', 8, 1),
('Boom', 'Hower', 9, 8);