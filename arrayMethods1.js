let fruits = ["kiwi","mango","jackfruit"];
fruits.push("strwberry");
console.log(fruits);

let fruits1 = ["mango","grape","apple"];
fruits1.pop();
console.log(fruits1);

let fruits2 = ["kiwi","mango","jackfruit"];
fruits2.unshift("grape");
console.log(fruits2);

let fruits3 = ["kiwi","mango","jackfruit"];
fruits3.shift();
console.log(fruits3);

let fruits4 = ["kiwi","mango","jackfruit"];
fruits4.splice(1,2);   //(index,no of elements to delete)
console.log(fruits4);

let fruits5 = ["kiwi","mango","jackfruit","dragon fruit","mulberry"];
let result = fruits5.slice(1,3);  //(starting index,ending index)
console.log(result);
console.log(fruits5);

let fruits6 = ["kiwi","mango","jackfruit","dragon fruit","mulberry"];
console.log(fruits6.indexOf("mango"));

let number = [10,20,30,40,20,50];
console.log(number.lastIndexOf(20));

let fruits7 = ["kiwi","mango","jackfruit","dragon fruit","mulberry"];
console.log(fruits7.includes("apple"));
console.log(fruits7.includes("kiwi"));

let numbers = [10,20,30,40,20,50];
numbers.sort((a,b)=>a-b);
console.log(numbers);

let numbers1 = [10,20,30,40,20,50];
numbers1.sort((a,b)=>b-a);
console.log(numbers1);

let fruits8 = ["kiwi","mango","jackfruit","dragon fruit","mulberry"];
fruits8.reverse();
console.log(fruits8);

