// program to find whether prime or not


var num = 23, count = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        count++;
    }
}
// if(count==0)
// {
//     console.log(num,`is a prime number`);
// }
// else
// {
//     console.log(num,`is not a prime number`);
// }
console.log(count == 0 ? `prime` : `not prime`);