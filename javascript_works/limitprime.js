// lower=4 upper=25 
// print all the prime numbers between lower and upper limits


var lowerlimit = 4, upperlimit = 29;
console.log(`prime numbers between`, lowerlimit, `and`, upperlimit, `are:`);
for (let i = lowerlimit; i <= upperlimit; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count++;
            break;
        }
    }
    if (count == 0) {
        console.log(i);
    }
}