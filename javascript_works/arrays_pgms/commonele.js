// arr1=[10,20,21,22] & arr2=[11,12,20,21]
// print the common elements from both the arrays 

var arr1 = [14, 24, 26, 220]
var arr2 = [11, 12, 14, 26]
var pos1 = 0; pos2 = 0;
console.log(`common elemets from`, arr1, `and`, arr2, `are:`);
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] == arr2[j]) {
//       console.log(arr1[i]);
//     }
//   }
// }
arr1.sort((i, j) => i - j);
arr2.sort((i, j) => i - j);
while (pos1 < arr1.length & pos2 < arr2.length) {
  if (arr1[pos1] == arr2[pos2]) {
    console.log(arr1[pos1]);
    pos1++;
    pos2++;
  }
  else if (arr1[pos1] < arr2[pos2]) {
    pos1++;
  }
  else if (arr1[pos1] > arr2[pos2]) {
    pos2++;
  }
}