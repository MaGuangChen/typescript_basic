var Dog = /** @class */ (function () {
    function Dog(species, bark, age, name) {
        this.species = species;
        this.bark = bark;
        this.age = age;
        this.name = name;
    }
    Dog.prototype.sayHi = function () {
        return "Hi I am " + this.name + ", I am a " + this.species + " dog. " + this.bark + "~~~";
    };
    return Dog;
}());
// this course is not working need to figure out why
// class Labrador extends Dog {
//     constructor(species,bark,age,name){
//         super(species,bark,age,name);
//         this.sayHi = this.sayHi.bind(this);
//     }
//     species: 'Labrador';
//     bark: 'wang wang';
//     age: 10;
//     name: 'Golden';
//     sayHi(){
//         return super.sayHi();
//     }
// }
var labrador = new Dog('Labrador', 'wang wang', 10, 'Golden');
console.log(labrador.sayHi());
