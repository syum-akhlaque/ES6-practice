const num = [2, 3, 4 , 5 ,6,7];
const squreNum = [] ;

// function squre (x){
//     return x*x;
// }
 
//const squre = x => x*x;

const result = num.map(x => x * x);
console.log(result);

const result1 = num.find(x => x > 5);
console.log(result1);

const result3 = num.filter(x => x < 5);
console.log(result3);

