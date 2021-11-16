// anonymous function -> nameless function

var add = (num1, num2) => num1 + num2;

var square = (num1) => num1 ** 2;

var div = (num1, num2) => num1 / num2;

var cube = (num1) => num1 ** 3; // will return the value aftr the value after arrow unless a return statement is specified

var isStartWithA = (name) => name[0] == "a" || name[0] == "A" ? true : false

var isOdd = (num) => num % 2 == 0 ? false : true;

var isEven = (num) => num % 2 == 0 ? true : false;

var sub = (num1, num2) => num1 > num2 ? num1 - num2 : num2 - num1

var largestAmongTwo = (num1, num2) => num1 > num2 ? num1 : num2;

// filter 

var arr=[2,3,4,5,6]

// print even numbers from the array
var evens=arr.filter((num)=>(num%2==0));
console.log(evens);

// print all numbers greater than 3
var greater=arr.filter((num)=>num>3)
console.log(greater);


var arr=[2,3,4,5,6,7]

// print odd numbers only
var odd_num=arr.filter((num)=>num%2>0)
console.log(odd_num);

// filter+map

// print suqares of all even numbers
var squares=arr.filter((num)=>num%2==0).map((num)=>num**2)
console.log(squares);

//sort,reduce number of parameters is 2 inside arrow function
arr.sort((num1,num2)=> num1-num2) 

// reduce
// print total sum 
var total_sum=arr.reduce((num1,num2)=>num1+num2)
console.log(total_sum);

// print the maximum number from the array
var max_num=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max_num);

// print the minimum number from the array
var min_num=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min_num);

// some() - return boolean values T/F for a particular condition

// forEach() - used to print without using a new variable 

