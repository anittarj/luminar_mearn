// print the below pattern
// 111
// 222
// 333


var r = 3, c = 3;

for (let i = 1; i <= r; i++) {
    let str = "";
    for (let j = 1; j <= c; j++) {
        str += i;
    }
    console.log(str);
}