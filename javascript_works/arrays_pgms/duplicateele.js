// arr=[10,11,12,11,10]
// print the duplicate elements

var arr = [10, 11, 12, 11, 10]
console.log(`the duplicate elements in the array`, arr, `is`);
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log(arr[i]);
            break;
        }
    }
}