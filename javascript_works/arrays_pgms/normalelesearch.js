// arr=[10,11,12,13,14,11]
// search for the element 15 in this array 
// print found if 15 is present in the array 
// else print not found

var arr = [10, 11, 12, 13, 14, 11]
var res = 0;
for (let num of arr) {
    if (num === 15) {
        res++;
        break;
    }
}
if (res == 0) {
    console.log(`element found`);
}
else {
    console.log(`element not found`);
}