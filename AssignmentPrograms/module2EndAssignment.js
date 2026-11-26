class TestResult{                                               //1. Class created
    constructor(testName,status){                               //2. Used a constructor and passed the parameters
        this.testName = testName;                               //3. Stored the values using 'this' keyword      
        this.status = status;                                      
    }
    showResult() {                                              //4. Method created and set the body part as 
        console.log("Test name : ",this.testName);              //   to diplay the parameters passed in the constructor
        console.log("Status : ",this.status);
    }
}
let obj = new TestResult("Load Test","ON GOING");
obj.showResult();
let obj1 = new TestResult("Login Test","PASSED");         //5. Two more objects created with different arguments passed
obj1.showResult();
let obj2 = new TestResult("Checkout Test","FAILED");
obj2.showResult(); 




