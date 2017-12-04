class student {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sayHi(): string {
        return `Hi my name is ${this.firstName}.${this.lastName}, I am ${this.age} years old`;
    }
}

let studentLastName = function(lastName: string): string {
    return lastName;
}

let studentFirstName = (firstName: string): string => firstName;

let nico = new student('Nico', 'Gorta', 28);

console.log(studentLastName(nico.lastName));
console.log(studentFirstName(nico.firstName));