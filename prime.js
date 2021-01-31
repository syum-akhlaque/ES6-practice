function PrimeNumber(n){
    for(var i=2; i<n ; i++){
        if(n%2 == 0){
            var result= "this is not  a prime number";
            return result;
        }
    }
    return "your number is prime";
}
console.log( PrimeNumber(17) );