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
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}
//Shows the employee shift for the 2nd value in the array, for "Sander"
displayEmployeeShifts(employees[1]);
