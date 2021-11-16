// create a function primeNumbs(lowlimit,upperlimit) where it prints the prime numbers btw lower & upper


function primeNumbs(ll,ul)
{
    for (let i=ll;i<=ul;i++) 
    {
        let count=0;
        for (let j=2;j<i;j++) 
        {
            if (i%j==0) 
            {
                count++;
                break;
            }
        }
    if (count==0)
    {
        console.log(i);
    }
    }
}
console.log(primeNumbs(4,29));