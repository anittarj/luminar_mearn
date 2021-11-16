// print the multiplication table of a number


var num = 5, i = 1, res = 0;
while (i < 11) {
    res = i * num;
    console.log(i, `*`, num, `=`, res);
    res = 0;
    i++;
}