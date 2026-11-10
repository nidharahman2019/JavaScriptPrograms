// 1. global variable

// let name = "nidha";
// function displayName(){
//     console.log(name);
// }
// displayName();
// console.log(name);

// 2. function scope

// function showDetails(){
//     let name="nidha"
//     let age = 24;
//     console.log(name);
//     console.log(age);
// }
// showDetails();
// console.log(name);
// console.log(age);

// 3. block acope

if (true){
    let age=25;
    const name="nipoo"
    var city="kochi"
    console.log(age,name,city);
}
console.log(name);