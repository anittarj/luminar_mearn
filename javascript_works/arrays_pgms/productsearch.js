var arr=[100,150,45,80,40,500]
// check whether any product is available under 50 rs

var avl_amount=50,flag=0;
for(let price of arr){
    if(price<avl_amount){
        flag=1;
        break;
    }
}
console.log(flag==0?`there is no product available under 50`:`product is available under 50`);