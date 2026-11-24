// function calculateResult(marks){
//     if (marks>=50){
//         console.log("Pass");
//     }
//     else{
//         console.log("Fail");
//     }
// }
// calculateResult(85);

// const displayResult = (name,result)=>{
//     console.log(name,":",result);
// }
// displayResult("Hogi",85);

// let students = [{name:"Anu",marks:75},{name:"Rahul",marks:42},{name:"Meena",marks:68},{name:"Arun",marks:35}];

// for (let student of students){
//     console.log(student);
// }

// let students = [{name:"Anu",marks:75},{name:"Rahul",marks:42},{name:"Meena",marks:68},{name:"Arun",marks:35}];

// for (let student of students) {
//     const result = calculateResult(student.marks);

//     displayResult(student.name, result);
// }

let students = [ { name: "John", marks: 85, grade: "A" },
{ name: "David", marks: 72, grade: "B" },
{ name: "Peter", marks: 90, grade: "A+" },
{ name: "Sarah", marks: 65, grade: "C" }];

students.forEach(function(details){
    console.log(details.name,"-",details.marks,"-",details.grade);
})


// let names = students.map(function(n){
//     return n.name;
// });

// console.log(names);

// let filteredStudents = students.filter(function(n){
//     return n.marks>=80;
// });

// console.log(filteredStudents);