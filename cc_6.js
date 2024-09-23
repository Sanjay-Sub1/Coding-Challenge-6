//Task 1 create an Array for the employees, including the days and they worked and amount of hours they worked on said day
let employees = [
    {
        name: "Sanjay",
        shifts: [
            { day: "M", hours: 4 },
            { day: "W", hours: 6 },
            { day: "F", hours: 10 }
        ]
    },
    {
        name: "Sander",
        shifts: [
            { day: "T", hours: 8 },
            { day: "Th", hours: 6 },
            { day: "St", hours: 12 }
        ]
    },
    {
        name: "Jorge",
        shifts: [
            { day: "M", hours: 6 },
            { day: "T", hours: 5 },
            { day: "St", hours: 12 }
        ]
    },
    {
        name: "Charles",
        shifts: [
            { day: "W", hours: 2 },
            { day: "Th", hours: 5 },
            { day: "Sn", hours: 12 }
        ]
    }
];
//Shows the results from the array
console.log(employees);

//Task 2 display employee shifts with the day and hours they worked
function displayEmployeeShifts(employee) {
    console.log(`Schedule for ${employee.name}`);
//Iterates each day and hours that the selected employee is supposed to work
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}
//Shows the employee shift for the 2nd value in the array, for "Sander"
displayEmployeeShifts(employees[1]);

//Task 3 create a function that assigns new shifts to employees
function assignShift(employeeName, day, hours){
//Creates variable worker to reference the employee arry
    let worker = employees.find(worker => worker.name === employeeName);
//If the given name is in the array, will run the following if-else statement
    if (worker){
//Makes sure that the employee is not already working that day
        let alreadyWorking = worker.shifts.find(shift => shift.day === day);
//logs that employee is working that day and cannot work the assigned shift
        if (alreadyWorking){
            console.log(`${worker.name} cannot work, already on schedule for the day`);
        }
//uses the push command to push in the newly assigned shift at the end of that employees shifts array
        else{
            worker.shifts.push({day: day, hours: hours})
            console.log(`${worker.name} works ${hours} hours on ${day} now`)
    }}
//Pops out an error message saying that the referenced employee isnt in the employees array
    else{
            console.log(`${employeName} not found`);
    }
}
//Checks to see that the function works correctly
assignShift("Jorge","Th",5);
console.log(employees[2]);

//Task 4 calculate the total hours worked in the week by a referenced employee
function calculateTotalHours(employeeName){
//finds employee name in the array
    let worker = employees.find(worker => worker.name === employeeName);
//Set the variable total hours to 0
    if (worker){
        var totalHours = 0;
//Iterates that per each shift worked, the amount of hours worked each day is added into the totalHours variable
        worker.shifts.forEach(shift => {totalHours += shift.hours;});
        console.log(`${worker.name} has worked ${totalHours} this week`);
    }
}
//Used to test function
calculateTotalHours("Sanjay");

//Task 5 create a function to show if any employees are available on a certain day
function listAvailableEmployees(day){
//Runs through each employee to see if they are working on the stated day
        employees.forEach(worker => {let isWorking = worker.shifts.some(shift => shift.day === day);
//Uses an ! as a NOT statement and logs that the employee is NOT working
        if(!isWorking){
            console.log(`${worker.name} is not scheduled`);
        }
    })
}
//Used to test function
listAvailableEmployees("St");
