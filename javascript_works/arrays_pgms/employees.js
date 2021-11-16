var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]

// print the employees array
console.log(employees);

// print all employees names
var employee_names = employees.map((emp) => emp[1])
console.log(employee_names);

// print the number of employees
console.log(`the number of employees is`, employees.length);

// print the number of developers
var developer_c=0;
var developer_count=employees.map((emp)=>(emp[3])=="developer"?developer_c=developer_c+1:developer_c)
console.log(developer_c);

// print experience of each employee
var emp_exp=employees.map((emp)=>(emp[5]-emp[4]))
console.log(emp_exp);

// print highest salary
var highest_salary=employees[0][2];
var exp_sal=employees.map(emp=>emp[2]>highest_salary?highest_salary=emp[2]:highest_salary)
console.log(`the highest salary is`,highest_salary);

// print lowest salary
var lowest_salary = employees[0][2];
var exp_sal=employees.map(emp=>emp[2]<lowest_salary?lowest_salary=emp[2]:lowest_salary)
console.log(`the lowest salary is`, lowest_salary);

// // print the name of developer who is taking highest salary
// var hgh_sal_devel = 0;
// var exp_sal=employees.map(emp=>emp[3]=="developer" & emp[2]>hgh_sal_devel?hgh_sal_devel=emp[2]:hgh_sal_devel)
// for (let hghdevsal of employees) {
//     if (hghdevsal[2] == hgh_sal_devel && hghdevsal[3] == 'developer') {
//         console.log(`the name of employee who gets the highest salary amongst developers is`, hghdevsal[1]);
//     }
// }

// print the name of employee with highest experience
var emp_exp=employees.map((emp)=>emp.push(emp[5]-emp[4]))
employees.sort((emp1,emp2)=>emp2[6]-emp1[6])
console.log(`the employee with the highest experience is`,employees);

// // print total sum of salary group by developers
var total_sal = 0;
var total_sal_devel=employees.map(emp=>emp[3]=="developer"?total_sal=total_sal+emp[2]:total_sal)
console.log(`total sum of salary group by developers is `, total_sal);

// print developer details only - filter
var developers_details = employees.filter((emp) => emp[3] == 'developer')
console.log(`developer details`,developers_details);

// print names of ba
var analysts = employees.filter((emp) => emp[3] == "ba").map((emp) => emp[1])
console.log(`employees with ba designation`, analysts);

// print developer names only
var developer_names = employees.filter((emp) => emp[3] == "developer").map((emp) => emp[1])
console.log(developer_names);

// print developers names whose experience is greater than 6 years
var exp_developers = employees.filter((emp) => (emp[3] == "developer") & ((emp[5] - emp[4]) > 6)).map((emp) => emp[1])
console.log(exp_developers);

// add bonus of 5000 rs for all developers
var developers_bonus = employees.filter((emp) => (emp[3] == "developer")).map((emp) => emp[2] + 5000)
console.log(developers_bonus);

// sort employees wrt their salary in ascending order
employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(employees);

// sort employees who are developers wrt their salary in ascending order
var salary_deve_sort=employees.filter((emp)=>emp[3]=="developer").sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(salary_deve_sort);

// sort employees wrt their experience in descending order
employees.sort((emp1,emp2)=>(emp2[5]-emp2[4])-(emp1[5]-emp1[4]))
console.log(employees);

// sort employees wrt their experience in ascending order
employees.sort((emp1,emp2)=>(emp1[5]-emp1[4])-(emp2[5]-emp2[4]))
console.log(employees);

