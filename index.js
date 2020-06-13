/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord (array){

  return {
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : []


  }

}
function createEmployeeRecords (array){

   return array.map(obj=>{
    return createEmployeeRecord(obj);
  })
}
let createTimeInEvent = function (dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
let createTimeOutEvent = function (dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let hoursWorkedOnDate = function (dateStamp){
    let inEvent = this.timeInEvents.find(function(elem){
        return elem.date === dateStamp
    })

    let outEvent = this.timeOutEvents.find(function(elem){
        return elem.date === dateStamp
    })
    let timeElapsed = outEvent.hour - inEvent.hour;
    return timeElapsed / 100
}


let wagesEarnedOnDate = function (dateStamp)  {
  let hours = hoursWorkedOnDate.call(this,dateStamp);
  let wages = hours* this.payPerHour;

  return parseFloat(wages.toString())
};

let findEmployeeByFirstName = function (array,firstName){

  let matched = array.find(obj=> obj.firstName ===firstName )
  return matched
}
let calculatePayroll = function(records){
    return records.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
