// input array [2,4,6,3]  
// ouput array [13,11,9,12]

var arr = [2, 4, 6, 3]
var op = [], sum = 0;
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
for (let i = 0; i < arr.length; i++) {
    op[i] = sum - arr[i];
}
console.log(op);