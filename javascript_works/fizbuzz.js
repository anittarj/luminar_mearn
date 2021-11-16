// check whether a number is:
// divisible by 3 then print FIZ
// divisible by 3 then print BUZ
// divisible by noth 3 and 5 then print FIZBUZ


var num = 7;
if ((num % 3 == 0) && (num % 5 == 0)) {
    console.log(`FIZBUZZ`);
}
else if (num % 3 == 0) {
    console.log(`FIZ`);
}
else if (num % 5 == 0) {
    console.log(`BUZZ`);
}
else {
    console.log(num, `not divisible by 3 or 5`);
}

//  or method

/*var num=15;
var res="";

if(num%3==0){
    res+="fiz";
}
if(num%5==0){
    res+="buzz";
}
console.log(res);*/