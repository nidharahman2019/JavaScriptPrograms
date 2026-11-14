function greet(name,callback){
    console.log(name);
    callback();
}
function message(){
    console.log("welcome to JS");
}
greet("anu",message);

console.log("program started");

