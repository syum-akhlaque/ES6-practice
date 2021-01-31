//Factorial recursive

function factorialRecursive(num){
    if(num==1){
        return 1;
    }
    console.log(num);
    return num*factorialRecursive(num-1);
}
console.log(factorialRecursive(5));
