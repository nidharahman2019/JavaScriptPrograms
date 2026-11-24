class Student{
    // constructor(name,age){         //we can only create one constructor in a class in JS
    //     this.name=name;
    //     this.age=age;
    // }
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }
    display(){
        console.log("name : "+ this.name);
        console.log("age : "+ this.age);
        console.log("course : "+ this.course);
    }
}

//creating object

let student1 = new Student("anu",24);
let student2 = new Student("nidha",20);
let student3= new Student("leena",30,"playwright");
// student1.display();
// student2.display();
student3.display();

//reusable classes - once we create a class then we can access that particular class in different places using its own object.
//page object model - it is a framework in this each web page has its own two different classes that are PAGE CLASS & TEST CLASS
  //page class - in this we will set or handle different locators  and actions like click , navigate etc.
  //test class - in this we will call actions that are stored in page class by the object created for the class , here we will use the test data and also implement assertions. 
//one of the main advantage of using POM is we can easily maintain the code.

