//speed detector


// we make prompt const every time you test you will be require to imput speed
const prompt = require('prompt-sync')();
//we assign the prompt output message by using let variable
let speed =prompt("please enter speed: ")
// checking the requirement using (if else if statement)
 function speedDetector(){
    if (speed<70){
// the output will be ok if speed is less than 70
        console.log(`OK!`)
    }
    else if (speed>=70){
  // we calculate the points by getting the speed subtract the initial (70) then divide by five      
        let points =(speed-70)/5
        console.log(points)
        if(points<=12){
            console.log(`Hey you have ${points} demerit point`)
        }
        else if (points>12){
            console.log(`SORRY! you have ${points} demerit points YOUR LICENSE IS SUSPENDED`)
        }
    }
 }
 // calling function
 speedDetector();
