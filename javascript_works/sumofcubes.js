// sum of cubes of the digits in a number


var num = 345, sum = 0, l, oldnum = num;
while (num != 0) {
    l = num % 10;
    sum = sum + l * l * l;
    num = num - l
    num = num / 10;
}
console.log(`sum of cubes of`, oldnum, `is`, sum);