// let numbers = [20,30,40,50,60];
// console.log("first element",numbers[0]);
// console.log("last element",numbers[numbers.length-1]);

// let marks=[40,78,50,29];
// marks[2]=100;
// console.log(marks);

// //for in loop and in this loop we will get the index positions of array.

// let fruit=["mango","grape","kiwi"];
// for(let index in fruit){
//     console.log(index);
// }

// let students=["anu","riya","manu"]
// for (let index in students){
//     console.log(index,students[index]);
// }

// let mark1=[23,45,67,21,49];
// let total=0;
// for (let index in mark1){
//     total=total+mark1[index];
// }
// console.log(total);

//for of loop and in this loop we will get the values from an array.

// let fruits=["kiwi","avocado","jackfruit"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

let numbers=[10,15,20,25,30];
for (let even of numbers){
    if(even%2===0){
        console.log(even);
    }
}

