// sort three numbers in ascending order


var a = 2, b = 0, c = -2;
if ((a > b) && (a > c)) {
    if (b > c) {
        console.log(c, `,`, b, `,`, a);
    }
    else {
        console.log(b, `,`, c, `,`, a);
    }
}
else if ((b > a) && (b > c)) {
    if (a > c) {
        console.log(c, `,`, a, `,`, b);
    }
    else {
        console.log(a, `,`, c, `,`, b);
    }
}
else if ((c > a) && (c > b)) {
    if (a > b) {
        console.log(b, `,`, a, `,`, c);
    }
    else {
        console.log(a, `,`, b, `,`, c);
    }
}