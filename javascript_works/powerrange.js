// 2+22=
// 3+33+333=
// 4+44+444+4444=


var num = 6, sum = 0;

for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        let n = num.toString();
        str = str + n;
    }
    str = parseInt(str); //can use Number instead of parseInt
    sum += str;
}
console.log(sum);

/*for(let i=1;i<=num;i++)
{
    res=res*10;
    sum=sum+res;
}
console.log(sum);
*/








