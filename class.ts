class Dog {
    constructor(
        public species: string, 
        public bark: string, 
        private age: number, 
        public name: string) {
    }
    sayHi(): string {
        return `Hi I am ${this.name}, I am a ${this.species} dog. ${this.bark}~~~`;
    }
}

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

const labrador = new Dog('Labrador', 'wang wang', 10, 'Golden');

console.log(labrador.sayHi());