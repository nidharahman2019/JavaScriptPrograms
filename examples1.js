//asynchronous JS -- we can do another task during an on going task , the task doesn't wait for the previous task to complete, which will execute parallaly.

console.log("start");
setTimeout(()=>{
    console.log("task completed");
},2000);
console.log("END");


