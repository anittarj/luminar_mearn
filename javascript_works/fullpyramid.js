// //  create a function fullPyramid(num) that prints a full pyramid of "*" 


function fullPyramid(row) {
    let n = row;
    let str = "";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= n; j++) {
            str = str + " ";
        }
        n--;
        for (let k = 1; k <= i; k++) {
            str = str + "* ";
        }
        str = str + "\n";
    }
    console.log(str);
}

console.log(fullPyramid(5));