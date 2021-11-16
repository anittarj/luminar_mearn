// write a program to find the gcd of two numbers 
// gcd(14,21)

var num1 = 14, num2 = 21;
while (num1 != num2) {
    if (num1 > num2) {
        num1 -= num2;
    }
    else {
        num2 -= num1;
    }
}
console.log(num1);
