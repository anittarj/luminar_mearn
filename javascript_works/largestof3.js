// program to find the largest amongst three numbers


var num1 = 70, num2 = 80, num3 = 30;
if ((num1 > num2) && (num1 > num3)) {
    console.log(num1, `is the largest number`);
}
else if ((num1 < num2) && (num2 > num3)) {
    console.log(num2, `is the largest number`);
}
else if ((num1 < num3) && (num2 < num3)) {
    console.log(num3, `is the largest number`);
}

