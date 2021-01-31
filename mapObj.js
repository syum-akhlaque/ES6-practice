const student = [
    { name : 'sadia', id : 10},
    { name : 'tumi', id : 20},
    { name : 'samia', id : 30},
    { name : 'kamal', id : 40}
]

const result = student.map( x => x.name);
console.log(result);

const check = student.filter( x => x.id> 20);
console.log(check);
