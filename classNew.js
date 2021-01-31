class person{
    constructor(firstName, lastName, salary = 0){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroperson = new person('hero', 'balam', 10000);
const heroperson2 = new person('kalam', 'balam', 20000);
const heroperson3 = new person('hero', 'balam');



console.log(heroperson);
console.log(heroperson2);
console.log(heroperson3);