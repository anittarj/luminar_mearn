// var expenses=[12000,13000,14000,15000,11000,25000,17000]
// print highest expense
// print lowest expense
// num of month expense that exceeds 15000
// print avg expense
// without using sort or predefined methods

var expenses = [12000, 13000, 14000, 15000, 11000, 25000, 17000]
var sum = 0, count = 0, i, lowestexp = expenses[0], highestexp = expenses[0];

// higest expense
for (i = 0; i < expenses.length; i++) {
    if (highestexp < expenses[i]) {
        highestexp = expenses[i];
    }
}
console.log(`highest expense:`, highestexp);

// lowest expense
for (i = 0; i < expenses.length; i++) {
    if (lowestexp > expenses[i]) {
        lowestexp = expenses[i];
    }
}
console.log(`lowest expense:`, lowestexp);

// num of month expense that exceeds 15000
for (i = 0; i < expenses.length; i++) {
    if (expenses[i] > 15000) {
        count++;
    }
}
console.log(`number of month expense that exceeds 15000:`, count);

//avg expenses
for (i = 0; i < expenses.length; i++) {
    sum = sum + expenses[i];
}
console.log(`Average expense:`, sum / expenses.length);