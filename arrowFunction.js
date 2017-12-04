var student = /** @class */ (function () {
    function student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    student.prototype.sayHi = function () {
        return "Hi my name is " + this.firstName + "." + this.lastName + ", I am " + this.age + " years old";
    };
    return student;
}());
var studentLastName = function (lastName) {
    return lastName;
};
var studentFirstName = function (firstName) { return firstName; };
var nico = new student('Nico', 'Gorta', 28);
console.log(studentLastName(nico.lastName));
console.log(studentFirstName(nico.firstName));
