// Your code here
function createEmployeeRecord([firstName, familyName,title,payPerHour]){
    return  {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents:[],
    }
}
let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1])
console.log(testEmployee)

function createEmployeeRecords(arrayOfArrays){
    let arrayOfObjects =[];
    for( let i = 0; i < arrayOfArrays.length; i++){
        arrayOfObjects.push(createEmployeeRecord(arrayOfArrays[i]))
    }
    return arrayOfObjects
}
let dateStamp = "2011-03-14 1400"
function createTimeInEvent(employeeRecord, dateStamp){
    let [date, hour] = dateStamp.split(" ")
    hour = parseInt(hour)
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour:hour,
        date:date,
    })
    return employeeRecord
}


console.log(createTimeOutEvent)


function createTimeOutEvent(employeeRecord, dateStamp){
    let [date, hour] = dateStamp.split(" ")
    hour = parseInt(hour)
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour:hour,
        date:date,
    })
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){
    let timeIn = employeeRecord.timeInEvents.find(event => event.date === date).hour;
    let timeOut = employeeRecord.timeOutEvents.find(event => event.date === date).hour;
    
    return (timeOut-timeIn)/ 100
    
}

function wagesEarnedOnDate(employeeRecord, date) {
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour;
}

function allWagesFor(employeeRecord) {
    return employeeRecord.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate(employeeRecord, event.date);
    }, 0);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => {
        return total + allWagesFor(employee);
    }, 0);
}

