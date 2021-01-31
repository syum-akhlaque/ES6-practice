function add(num1,num2){
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
       // console.log(arguments[i]);
        sum=sum+arguments[i];
    }
    return sum;
}
var result=add(5,6,7,8,9)
console.log(result);