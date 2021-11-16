// find the reverse of a number 


var num = 584;
var revnum = 0;
var oldnum = num;
var d;
while (num != 0) {
    revnum = revnum * 10;
    d = num % 10;
    revnum = revnum + d;
    num = num - d;
    num = num / 10;
}
console.log(`reverse of`, oldnum, `is`, revnum);


/*while(num!=0)
{
    let d=num%10;
    res=res+d;
    num=Math.floor(num/10);
}*/