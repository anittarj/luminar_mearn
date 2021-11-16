// find factorial of a number using function


function factorial(a) {
    let i = 1, fact = 1;
    while (i < (a + 1)) {
        fact = fact * i;
        i++;
    }
    return fact;
}

console.log(factorial(5));