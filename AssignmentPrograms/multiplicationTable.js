// let num = 5;
// for (let i=1;i<=10;i++){
//     let result = i*5;
//     console.log(i,"* 5 =",result);
// }


// let num = 3;
// let i = 1;
// while (i<=10){
//     let result = i*3;
//     console.log(i,"* 3 =",result);
//     i++;
// }

// let num = 7;
// let i = 1;
// do{
//     let result = i*7;
//     console.log(i,"* 7 =",result);
//     i++;
// }while(i<=10);


for (let i=20;i>=0;i--){
    if (i==15){
        continue;     
    }
    else if(i==10){
        break;
    }
    else{
        console.log(i);
    }   
}
