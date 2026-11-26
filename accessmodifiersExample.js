// 1.Public

// class Student{
//     constructor(name){
//         this.name=name;
//     }
//     display(){
//         console.log("Student name : ",this.name);
//     }
// }
// let obj = new Student("Anu");
// obj.display();

// 2.Private (variable)

// class BankAccount{
//     #balance = 5000;        //private variable
//     // hey = 30;            //public variable , we can access outside the class
//     diplayBalance(){
//         console.log("Balance : ",this.#balance);
//     }
// }
// let obj1 = new BankAccount();
// obj1.diplayBalance();

// console.log(obj1.hey);       //will get result
// console.log(obj1.#balance);   //will cause error

// Private (method)

class Login{
    #checkPassword(){
        console.log("Password is private");
    }
    loginuser(){
        this.#checkPassword();
        console.log("Login successful");
    }
}
let obj = new Login();
obj.loginuser();