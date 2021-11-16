//  create a function largestAmongThree(num1,num2,num3) that will return the largest amongst three numbers


function largestAmongThree(num1, num2, num3) {
    if ((num1 > num2) && (num1 > num3)) {
        return num1;
    }
    else if ((num1 < num2) && (num2 > num3)) {
        return num2;
    }
    else if ((num1 < num3) && (num2 < num3)) {
        return num3;
    }
}

console.log(largestAmongThree(8, 5, 9));
