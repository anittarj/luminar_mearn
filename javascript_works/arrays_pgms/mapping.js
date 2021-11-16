// input array -> var arr=[2,3,4,6,5,7,8]
// output array should be [1,2,3,7,5,8,9]
// that is if num<5 map into num-1 else num>5 map num+1

var arr=[2,3,4,6,5,7,8]
var op=[]
console.log(arr);
for(let i=0;i<arr.length;i++){
    if(arr[i]<5){
        op.push(arr[i]-1);
    }
    else if(arr[i]>5){
        op.push(arr[i]+1);
    }
    else{
        op.push(arr[i]);
    }
}
console.log(op);