//Net salary calculator

// we make prompt const every time you test you will be require to imput speed
const prompt = require('prompt-sync')();
//we assign the prompt output message by using let variable
let basicSalary =prompt("please enter your basic salary =Ksh.")
// Prompt message to infor user to enter benefits value
let benefits =prompt("Please enter your benefits =Ksh.")
//definening the fuction using let variable
let KRA; 
let NHIF;
let NSSF;
let netSalary;
let totalNHIF;
let pension= 26000
function netSalaryCalculator(){
    // calculates the total gross  salary
    let grossIncome = (+basicSalary+ +benefits)
   // out puts the gross salary when tested
    console.log(`grossIncome = Ksh. ${grossIncome}`)
    // calculates the KRA benefit
    if(grossIncome<=24000){
       KRA = (grossIncome*0.1)
        console.log(`your KRA deduction is ${KRA}`)
    }else if(grossIncome>24000 && grossIncome<=32333){
     let KRA =(grossIncome*0.25)
        console.log(`your deduction is ${KRA}`)
    }else if(grossIncome>32333){
    KRA =(grossIncome*0.35)
        console.log(`your KRA deduction is ${KRA}.`)

    }
    // calcultes the NHIF benefit
    if (grossIncome<=5999){
        NHIF =(150)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=6000 && grossIncome<=7999){
        NHIF =(300)
        // out puts the NHIF benefits
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)

    } else if (grossIncome>=8000 && grossIncome<=11999){
        let NHIF =(400)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=12000 && grossIncome<=14999){
         NHIF =(500)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=15000 && grossIncome<=19999){
        NHIF =(600)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=20000 && grossIncome<=24999){
        NHIF =(750)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=25000 && grossIncome<=29999){
        NHIF =(850)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=30000 && grossIncome<=34999){
        NHIF =(900)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=35000 && grossIncome<=39999){
        NHIF =(950)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=40000 && grossIncome<=44999){
        NHIF =(1000)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=45000 && grossIncome<=49999){
        NHIF =(1200)
        console.log(`Your NHIF deduction is = Ksh. ${NHIF}`)
    }else if (grossIncome>=60000 && grossIncome<=69999){
        NHIF =(1300)
        console.log(`Your NHIF deduction is = Ksh. ${NHIF}`)
    }else if (grossIncome>=70000 && grossIncome<=79999){
       NHIF =(1400)
        console.log(`Your NHIF deduction is = Ksh. ${NHIF}`)
    }else if (grossIncome>=80000 && grossIncome<=89999){
        NHIF =(1500)
        console.log(`Your NHIF deduction is = Ksh. ${NHIF}`)
    }else if (grossIncome>=90000 && grossIncome<=99999){
        NHIF =(1600)
        console.log(`Your NHIF deduction is = Ksh. ${NHIF}`)
    }else if (grossIncome>=100000 && grossIncome<=11999){
        let NHIF =(1700)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }
    // calculates the NSSF benefit
    if(grossIncome <= 3000 && grossIncome>=0 ){
        NSSF =(grossIncome*0.06)
          console.log  (`Your NSSF deduction is = Ksh. ${NSSF}`)
          // calculates the NSSF any ammount more than 45000
    }else if (grossIncome>=4500){
        NSSF = (270)
        console.log(`Your NSSF deduction is = Ksh.${NSSF}`)
    }
    //calculate the net salary by adding the total deduction then subtracting from gross salary
          netSalary = (+grossIncome- +NSSF- +KRA -(NHIF-(NHIF*0.15)))
          console.log(`You net salary is Ksh. ${netSalary}`)
}
// calling function
netSalaryCalculator();