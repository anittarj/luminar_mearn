
var employee={id:1000,emp_name:"ram",designation:"developer",salary:25000}

console.log(employee["emp_name"]);
console.log(employee["salary"]);
console.log(employee.emp_name);
console.log(employee.salary);

// update a value - employee salary as 30000
employee["salary"]=30000
console.log(employee);

// check for gender key is present or not
console.log("gender" in employee);

// add new key value pair gender:male
employee["gender"]="male"
console.log(employee);