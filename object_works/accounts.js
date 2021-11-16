var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance
accounts.sort((acc1,acc2)=>acc2[3]-acc1[3])
console.log(accounts);

// print details of acno=1004
var acc_details=accounts.filter(acc=>acc[0]==1004)
console.log(acc_details);

// check whether there is a person with balance < 2000
var is_there=accounts.some(acc=>acc[2]<2000)
console.log(is_there);

// // print name of that user with in_active account
// var acc_details=accounts.some(acc=>acc[4]=="false")
// console.log(acc_details);

// print details of user with max balance 
var max_balance=accounts.reduce((acc1,acc2)=>acc1[3]>acc2[3]?acc1:acc2)
console.log(max_balance);