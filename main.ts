#! /usr/bin/env/node

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";


const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please Enter the amount of second",
    validate : (input) => {
        if (isNaN(input)){
            return ("Please Enter the valid number")
        }else if(input > 60) {
            return ("Seconds must be in 60")
        }else {
            return true;
        }
    }   
});

//console.log(val); for checking 

let input = res.userInput;

function startTime(val:number){
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(inTime)
    setInterval(()=>{
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime,currentTime)
        if(timeDiff <= 0){
            console.log("Time Up")
            process.exit()
        }
        const min = Math.floor((timeDiff%(3600*24))/3600);
        const sec = Math.floor(timeDiff% 60);
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2, "0")} :${sec.toString().padStart(2, "0")}`);
},1000);
}

startTime(input);



//const intTime = new Date().setSeconds(new Date().getSeconds() + 1)
//const intervalTime = new Date(intTime)
//const date = new Date(intTime)  just for checking
//console.log(date)
//console.log("intTime" + intervalTime)
