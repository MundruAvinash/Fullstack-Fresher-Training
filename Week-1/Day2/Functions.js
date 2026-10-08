function add (a,b){
    return a + b;
}
console.log(add(10,30));

//Arrow Function
const Add = (a, b) => {
    return a + b;
};
console.log(Add(10,40));

//Default Parameters

function greek (name= "Avinash") {
    console.log(`Hello ${name}`)
}
greek();
 
//Rest perameters

function add (num1,num2,num3,...restoftheparameters ){
    console.log(restoftheparameters)
    return num1+num2+num3+restoftheparameters[0];
}
const result = add(10,20,30,40,50,60);
console.log(result);

//scope
let name = "Avinash";

function Greek (){
   console.log(name)
}
Greek();

//closures

function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner; 
}

const counter = outer();

counter();
counter();
counter();

//parameters

function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Avinash"); //Avinash is a arguments 

//scope
//1.Global scope
let Name = "Avinash";
function Grade(){
    console.log(Name);
}
Grade();
//2.Function scope
function alert(){
    let message = "Hello";
    console.log(message);
}
alert();
//Block Scope

if(true) {
    let age = 22;
    console.log(age);
}
// Closure
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const Counter = outer();

Counter();
Counter();
Counter();


//assignment 


const employees = [
    { id: 1, name: "Avinash", department: "IT", salary: 50000 },
    { id: 2, name: "Ravi", department: "HR", salary: 45000 },
    { id: 3, name: "Kiran", department: "Finance", salary: 60000 },
    { id: 4, name: "Sita", department: "IT", salary: 55000 },
    { id: 5, name: "Rahul", department: "Marketing", salary: 48000 },
    { id: 6, name: "Priya", department: "HR", salary: 52000 },
    { id: 7, name: "Arjun", department: "IT", salary: 75000 },
    { id: 8, name: "Sneha", department: "Finance", salary: 58000 },
    { id: 9, name: "Vikram", department: "Marketing", salary: 65000 },
    { id: 10, name: "Anjali", department: "IT", salary: 62000 },

    { id: 11, name: "Rohit", department: "HR", salary: 47000 },
    { id: 12, name: "Pooja", department: "Finance", salary: 70000 },
    { id: 13, name: "Suresh", department: "IT", salary: 68000 },
    { id: 14, name: "Meena", department: "Marketing", salary: 50000 },
    { id: 15, name: "Naveen", department: "HR", salary: 56000 },
    { id: 16, name: "Divya", department: "Finance", salary: 62000 },
    { id: 17, name: "Manoj", department: "IT", salary: 72000 },
    { id: 18, name: "Swathi", department: "Marketing", salary: 54000 },
    { id: 19, name: "Tarun", department: "HR", salary: 49000 },
    { id: 20, name: "Lakshmi", department: "Finance", salary: 66000 },

    { id: 21, name: "Sai", department: "IT", salary: 80000 },
    { id: 22, name: "Neha", department: "HR", salary: 53000 },
    { id: 23, name: "Varun", department: "Finance", salary: 75000 },
    { id: 24, name: "Kavya", department: "Marketing", salary: 59000 },
    { id: 25, name: "Ajay", department: "IT", salary: 61000 },
    { id: 26, name: "Deepika", department: "HR", salary: 51000 },
    { id: 27, name: "Harish", department: "Finance", salary: 68000 },
    { id: 28, name: "Bhavya", department: "Marketing", salary: 63000 },
    { id: 29, name: "Mohan", department: "IT", salary: 57000 },
    { id: 30, name: "Keerthi", department: "HR", salary: 55000 },

    { id: 31, name: "Prakash", department: "Finance", salary: 82000 },
    { id: 32, name: "Asha", department: "Marketing", salary: 52000 },
    { id: 33, name: "Chandra", department: "IT", salary: 74000 },
    { id: 34, name: "Nandini", department: "HR", salary: 58000 },
    { id: 35, name: "Gopal", department: "Finance", salary: 64000 },
    { id: 36, name: "Teja", department: "Marketing", salary: 61000 },
    { id: 37, name: "Ramesh", department: "IT", salary: 90000 },
    { id: 38, name: "Ishita", department: "HR", salary: 60000 },
    { id: 39, name: "Mahesh", department: "Finance", salary: 71000 },
    { id: 40, name: "Riya", department: "Marketing", salary: 57000 },

    { id: 41, name: "Sanjay", department: "IT", salary: 85000 },
    { id: 42, name: "Varsha", department: "HR", salary: 62000 },
    { id: 43, name: "Rakesh", department: "Finance", salary: 78000 },
    { id: 44, name: "Nisha", department: "Marketing", salary: 66000 },
    { id: 45, name: "Venkat", department: "IT", salary: 67000 },
    { id: 46, name: "Harini", department: "HR", salary: 57000 },
    { id: 47, name: "Dinesh", department: "Finance", salary: 69000 },
    { id: 48, name: "Madhuri", department: "Marketing", salary: 60000 },
    { id: 49, name: "Krishna", department: "IT", salary: 78000 },
    { id: 50, name: "Sowmya", department: "HR", salary: 54000 }
];


// ==========================================
// TASK 1
// GROUP EMPLOYEES BY DEPARTMENT
// ==========================================

const groupedEmployees = employees.reduce((groups, employee) => {

    if (!groups[employee.department]) {
        groups[employee.department] = [];
    }

    groups[employee.department].push(employee);

    return groups;

}, {});

console.log("========== TASK 1 ==========");
console.log("Employees Grouped By Department:");
console.log(groupedEmployees);


// ==========================================
// TASK 2
// CALCULATE AVERAGE SALARY BY DEPARTMENT
// ==========================================

const averageSalary = employees.reduce((result, employee) => {

    if (!result[employee.department]) {
        result[employee.department] = {
            totalSalary: 0,
            employeeCount: 0
        };
    }

    result[employee.department].totalSalary += employee.salary;
    result[employee.department].employeeCount++;

    return result;

}, {});

console.log("========== TASK 2 ==========");
console.log("Average Salary By Department:");

Object.keys(averageSalary).forEach(department => {

    const total = averageSalary[department].totalSalary;
    const count = averageSalary[department].employeeCount;

    const average = total / count;

    console.log(
        `${department}: ₹${average.toFixed(2)}`
    );
});


// ==========================================
// TASK 3
// FIND TOP 3 HIGHEST-PAID EMPLOYEES
// ==========================================

const topThreeEmployees = [...employees]
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 3);

console.log("========== TASK 3 ==========");
console.log("Top 3 Highest-Paid Employees:");

topThreeEmployees.forEach((employee, index) => {

    console.log(
        `${index + 1}. ${employee.name} - ₹${employee.salary}`
    );

});


// ==========================================
// TASK 4
// SEARCH EMPLOYEE BY NAME
// ==========================================

function searchEmployee(name) {

    const employee = employees.find(
        employee =>
            employee.name.toLowerCase() === name.toLowerCase()
    );

    if (employee) {

        console.log("========== TASK 4 ==========");
        console.log("Employee Found:");

        console.log(
            `Name: ${employee.name}`
        );

        console.log(
            `Department: ${employee.department}`
        );

        console.log(
            `Salary: ₹${employee.salary}`
        );

    } else {

        console.log("========== TASK 4 ==========");
        console.log("Employee not found.");

    }
}


// ==========================================
// TEST SEARCH
// ==========================================

searchEmployee("Avinash");

// Try another employee:
// searchEmployee("Ramesh");

// Try employee who doesn't exist:
// searchEmployee("John");