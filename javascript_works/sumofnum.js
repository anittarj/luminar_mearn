// sum of numbers from 1 to a number


var num = 10, i = 1, sum = 0;
while (i < (num + 1)) {
    sum += i;
    i++;
}
console.log(`sum of numbers from 1 to`, num, `is`, sum);

// var is global scope 
// let is local scope
