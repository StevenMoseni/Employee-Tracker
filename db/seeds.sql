USE employee_DB;

-- Department Seeds 
INSERT INTO department (id, name)
VALUES (1, 'HR');

INSERT INTO department (id, name)
VALUES (2, 'Engineering');

INSERT INTO department (id, name)
VALUES (3, 'Custodial');

INSERT INTO department (id, name)
VALUES (4, 'Sales');

-- Role Seeds
INSERT INTO role (title, salary, department_id) 
VALUES
    ("Human Resource Manager", 45000, 1),
    ("Lead Engineer", 120000, 2),
    ("Engineer", 100000, 2),
    ("Lead Custodian", 50000, 3),
    ("Assistant Custodian", 19000, 3),
    ("Sales Lead", 110000, 4),
    ("Salesperson", 90000, 4),

-- Employee Seeds 
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Bob', 'Jones', 1, null),
('Barbara', 'Smith', 3, 2),
('Grace', 'Cho', 4, 1),
('Steve', 'Stevens', 5, 4),
('Jake', 'Jones', 6, 1),
('Nancy', 'Reagan', 7, 6),
('Tim', 'Birk', 8, 1),
('Brianna', 'Moore', 9, 8);