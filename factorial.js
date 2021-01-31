function factorial(n){
    var factorial=1;
    for ( var i=1 ; i<=n ; i++){
        factorial=factorial*i;
    }
    return factorial;
}
function factorial2(n){
    var factorial2=1;
    var i=1
    while(i<=n){
        factorial2=factorial2*i;
        i++;
    }
    return factorial2;
}
console.log(factorial2(6));