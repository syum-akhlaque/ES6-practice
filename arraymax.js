var arr=[34,43,52,23,43,53,20,23];
var max=arr[0];
for(var i=0; i<arr.length; i++){
    var cur= arr[i];
    if(cur>max){
        max=cur;
    }
   
}
console.log("max number is : ", max);

function getArraySum(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        
        var add= sum+ arr[i];
        sum=add;
    }
    return sum;
}

console.log("Total number is : ", getArraySum(arr));