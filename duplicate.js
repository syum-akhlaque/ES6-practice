var arr=[34,43,52,23,43,53,20,23];
var uniqueNumber=[];
for (i=0 ; i<arr.length; i++){
    var element= arr[i];
    var index= uniqueNumber.indexOf(element);
    if(index== -1){
        uniqueNumber.push(element);
    }
}
console.log(uniqueNumber);