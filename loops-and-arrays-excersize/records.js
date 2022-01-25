let employees = []




function EmployeeForm(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
        
}
function printEmployeeRecord() {
    
    console.log(EmployeeForm())
}

var bob = new EmployeeForm("Bob", "Cook", "15/Hour", "Full Time")
printEmployeeRecord(bob)
var stacy = new EmployeeForm("Stacy", "Cashier", "18/Hour", "Part Time")

var hank = new EmployeeForm("Hank", "Manager", "22.50/Hour", "Full Time")






