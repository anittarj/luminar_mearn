// 1
// 12
// 123
// 1234



var row = 4, col = 4;

for (let i = 1; i <= row; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += j;
    }
    console.log(str);
}

