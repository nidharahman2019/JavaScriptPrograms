// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }
// class Employee extends Person{
//     constructor(name,salary){
//         super(name);
//         this.salary=salary;
//     }
//     display(){
//         console.log("Name:",this.name);
//         console.log("Salary:",this.salary);
//     }
// }
// let obj = new Employee("biju",30000);
// obj.display();


class Animal{
    sound(){
        console.log("voice");
    }
}
class Dog extends Animal{
    bark(){
        super.sound();
        console.log("dog sound");
        
    }
}
let obj = new Dog();
obj.bark();