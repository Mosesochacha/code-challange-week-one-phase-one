//GRADE GENERETOR
// we make prompt const every time you test you will be remmered to imput marks
const prompt = require('prompt-sync')();
//we assign the prompt output message by using let variable
let marks =prompt("please enter marks: ")
//checking the condition if met using (if else if statement)
function calculate(){
    if (marks>79 && marks <=100){
        console.log("your grade is A");
    } else if(marks>=60 && marks <=79){
        console.log("your grade is B")
    }else if(marks >=49 && marks<=59){
        console.log("your grade is C");
    } else if (marks>=40 &&marks <=49){
        console.log("your grade is D");
    }
    else if (marks >= 0 && marks < 40){
        console.log("your grade is E");
    }else {
        // returns false if the conditions above are not met
        console.log("please enter the marks between 0 and 100")
    }

}
//we call the function calculate to give us the marks that was inputed and the matching Grade
calculate(marks)