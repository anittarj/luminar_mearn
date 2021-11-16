// nested array

var accounts = [
    [1000, "Ram", 150000, "savings"],
    [1001, "Ravi", 49990, "current"],
    [1002, "Aarav", 90333, "savings"],
    [1003, "Priya", 33000, "current"]
]

console.log(`ac_names`);
var names=[]
for (let account of accounts) {
    names.push(account[1]);
}
console.log(names);

console.log(`print names whose balance is greater than 90000`);
var greater=[]
for (let account of accounts){
    if(account[2]>90000){
        greater.push(account[1]);
    }
}
console.log(greater);

console.log(`print the number of accounts with savings account`);
var count=0;
for(let type of accounts)
{
    if(type[3]=="current");
    {
        count++;
    }
}
console.log(count);



