/*single inheritance -  A
                        |
                        b

multilevel inheritance -  A
                          |
                          b
                          |
                          c

hierarchical inheritance -      A
                               / \
                              b   c

*/

// Single inheritance

// class Father{
//     house(){
//         console.log("Owner of the house is father");
//     }
// }
// class Son extends Father{
//     car(){
//         console.log("Car belongs to son");
//     }
// }

// let obj = new Son();
// obj.house();
// obj.car();

//multilevel inheritance

// class Grandfather{
//     house(){
//         console.log("Grandfather class");
//     }
// }
// class Father extends Grandfather{
//     car(){
//         console.log("Father class");
//     }
// }
// class Son extends Father{
//     bike(){
//         console.log("Son class");
//     }
// }
// let obj1=new Son();
// obj1.house();
// obj1.car();
// obj1.bike();

// // Hierarchical inheritance

// class Animal{
//     eat(){
//         console.log("eating");
//     }
// }
// class Cat extends Animal{
//     food(){
//         console.log("cat food");
//     }
// }
// class Dog extends Animal{
//     display(){
//         console.log("dog class");
//     }
// }
// let obj = new Dog();
// obj.display();
// obj.eat();

// let obj2=new Cat();
// obj2.eat();
// obj2.food();

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    displayStudent(){
        console.log("Student name : ",this.name);
        console.log("Student age : ",this.age);
    }
}
class CollegeStudent extends Student{
    course(){
        console.log("Software testing");
    }
}
let obj = new CollegeStudent("Pingfong",20);
obj.displayStudent();
obj.course();