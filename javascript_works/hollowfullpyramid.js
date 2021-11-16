// print a hollow full pyramid 
for(let row=0;row<4;row++)
{
    let str="";
    for(let j=0;j<(4-row-1);j++)
    {
        str=str+" "
    }
    for(let k=0;k<(row+1);k++)
    {
        str=str+"* ";
    }
    console.log(str);
}