// there are 3 types of error in JS:
//Syntax error : improper syntax of JS code
//Run time error : error found while executing the code
 //Eg:
// let student = null;
// console.log(student.name);

//Logical error : error occured because of the mistake in code logic.
//Eg:
// let a=10;
// let b=20;
// let result=a-b;
// console.log(result);
try{
    let result=10/0;
    console.log(result);
    throw new Error("something went wrong");
}catch(error){
    console.log("error occured : ",error.message);
}
