//browser selection

let browser = 5;
switch(browser){
    case 1:console.log("Chrome \nRunning tests on Chrome");
    break;
    case 2:console.log("Firefox \nRunning tests on Firefox");
    break;
    case 3:console.log("Edge \nRunning tests on Edge");
    break;
    case 4:console.log("Safari \nRunning tests on Safari");
    break;
    default:console.log("Unsupported browser");
}


//employee attendance

let employeeAttendance = 85;

if (employeeAttendance>=75){
    console.log("Employee is eligible for the examination")
}
else{
    console.log("Employee is not eligible for the examination")
}


//multiplication table

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


//student details

const studentName = "Nidha";
let age = 24;
let courseName = "Playwright Automation";
let studentEnrollment = true;
let listOfSubjects = ["Manual Testing","Automation Testing","Java Script","GitHub","Jenkins"];

console.log("STUDENT NAME :",studentName);
console.log("AGE :",age);
console.log("COURSE NAME :",courseName);
console.log("WHETHER THE STUDENT IS CURRENTLY ENROLLED :",studentEnrollment);
console.log("LIST OF SUBJECTS :",listOfSubjects);


//student marks

let JavaScript = 75;
let Testing = 80;
let Automation = 70;

console.log("JAVA SCRIPT :",JavaScript);

let TotalMarks = JavaScript + Testing + Automation;
console.log("TOTAL MARK :",TotalMarks);

let AvgMark = TotalMarks/3;
console.log("AVERAGE MARK :",AvgMark);

let passedInJS = JavaScript>=40;
console.log("JAVASCRIPT PASS :",passedInJS);