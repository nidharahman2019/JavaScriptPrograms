// function greet(name,callback){
//     console.log(name);
//     callback();
// }
// function message(){
//     console.log("welcome to JS");
// }
// greet("anu",message);

// console.log("program started");


function orderFood(callback){
    console.log("food ordered");
    
    setTimeout(()=> {

    console.log("food is ready");
    callback();
},3000);
}

function recieveFood(){
    console.log("food recieved");
}

orderFood(recieveFood);