// find the factorial of a number


var num = 5;
var i = 1, fact = 1;
while (i < (num + 1)) {
    fact = fact * i;
    i++;
}
console.log(fact);