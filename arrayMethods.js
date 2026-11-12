// //for each method , in this we can perform some functions on the array values.

// let students=["manu","sanu","anu"];
// students.forEach(function(name){
//     console.log(name);
// });

// //map method , to create an another array using the reference array.

// let numbers=[2,3,4,5,6];
// result = numbers.map(function(num){
//     return num*2;
// });

// console.log(result);

// let names=["manu","divya","anu"];
// result = names.map(function(name){
//     return name.toUpperCase();
// })
// console.log(result);

// //filter method ,filtre out elements based on condition.

// let numbers1=[10,12,15,20,30];
// let digits=numbers1.filter(function(num){
//    return num>15;
// });
// console.log(digits);

let numbers2=[35,40,50,100,20];
let result = numbers2.filter(function(num){
    return num%2===0;
});
console.log(result);