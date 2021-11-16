// input array [1,2,3,4]
// print those elements of array as pairs that give a sum of 5,6 and 7

var arr = [1, 2, 3, 4]
console.log(arr);
console.log(`pairs of number that gives a sum of 5 are:`);
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == 5) {
            console.log(`(`, arr[i], arr[j], `)`);
            break;
        }
    }
}

console.log(`pairs of number that gives a sum of 6 are:`);
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == 6) {
            console.log(`(`, arr[i], arr[j], `)`);
        }
    }
}

console.log(`pairs of number that gives a sum of 7 are:`);
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == 7) {
            console.log(`(`, arr[i], arr[j], `)`);
        }
    }
}