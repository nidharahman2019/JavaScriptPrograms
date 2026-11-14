//falsy values : false , 0 , -0 , big0 , "" , null , undefined , NAN(not a number)
//rest of them we can called as the truthy values eg: true,1,-1,"hello","zero","false"," ",[],{},fuction(){}
let value=0;
if (value){
    console.log("truthy value");
}
else{
    console.log("falsy value");
}

let name="";
if (name){
    console.log("name is available");
}
else{
    console.log("name is empty");
}

let fruits=[];
if (fruits){
    console.log("array is truthy");
}
else{
    console.log("array is falsy");
}

let student={};
if (student){
    console.log("object is truthy");
}
else{
    console.log("object is falsy");
}

let a=null;
let b;
if (a){
    console.log("a is truthy");
}
else{
    console.log("a is falsy");
}
if(b){
    console.log("b is truthy");
}
else{
    console.log("b is falsy");
}

//to check whether the value is truthy or falsy
console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean(null));

let username = "";
if (username){
    console.log("login successful");
}
else{
    console.log("please enter the username");
}