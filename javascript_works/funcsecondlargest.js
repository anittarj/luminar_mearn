//  create a function secondLargestAmongThree(num1,num2) that will return the second largest amongst three numbers

function secondLargestAmongThree(num1, num2, num3) {
    if ((num1 >= num2) && (num1 >= num3)) {
        if (num2 > num3) {
            return num2;
        }
        else {
            return num3;
        }
    }
    else if ((num2 >= num1) && (num2 >= num3)) {
        if (num1 > num3) {
            return num1;
        }
        else {
            return num3;
        }
    }
    else if ((num2 >= num1) && (num2 >= num3)) {
        if (num3 > num1) {
            return num3;
        }
        else {
            return num1;
        }
    }
    else if ((num3 > num1) && (num3 > num2)) {
        if (num1 > num2) {
            return num1;
        }
        else {
            return num2;
        }
    }
}

console.log(secondLargestAmongThree(3, 8, 5));