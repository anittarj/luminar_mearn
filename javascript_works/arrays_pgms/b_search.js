var arr = [10, 11, 12, 13, 14, 12, 15]
var ele = 13, low = 0, upp = arr.length - 1, flag = 0;
arr.sort((num1, num2) => num1 - num2)
console.log(arr);
while (low <= upp) {
    mid = Math.floor((low + upp) / 2);
    if (ele < arr[mid]) {
        upp = mid - 1;
    }
    else if (ele > arr[mid]) {
        low = mid + 1
    }
    else if (ele == arr[mid]) {
        flag++;
        break;
    }
}
console.log(flag == 0 ? `element not found` : `element found`);