#! /usr/bin/env node
import inquirer from "inquirer";
let balance =10000;
const pinNum =6560;
const messageOne =await inquirer.prompt([
    {message:"Enter your pin here: ",
    name:"pin",
    type:"number"}
]);
if (messageOne.pin === pinNum){
    console.log(`Your pin number is correct`);
    const messageTwo = await inquirer.prompt([
        {message:"Select what you want to do.",
        name:"operation",
        type:"list",
        choices:["Fast cash","Withdraw","Check your cash"]}
    ]);
    if(messageTwo.operation === "Fast cash"){
        const messageThree = await inquirer.prompt([
            {message:"Select your cash.",
            name:"select",
            type:"list",
            choices:[500,1000,2000,5000,10000,25000]}
        ]);
        if(messageThree.select === 500){
            if(messageThree.select <= balance){
                console.log(`Your remaining balance is now:${balance -= messageThree.select}`);
            }
            else{
                console.log(`Insufficient balance`);
            }
        }
        else if(messageThree.select === 1000){
            if(messageThree.select <= balance){
                console.log(`Your remaining balance is now:${balance -= messageThree.select}`);
            }
            else{
                console.log(`Insufficient balance`);
            } 
 
        }
        
        else if(messageThree.select === 2000){
            if(messageThree.select <= balance){
                console.log(`Your remaining balance is now:${balance -= messageThree.select}`);
            }
            else{
                console.log(`Insufficient balance`);
            }
        }
        else if(messageThree.select === 5000){
            if(messageThree.select <= balance){
                console.log(`Your remaining balance is now:${balance -= messageThree.select}`);
            }
            else{
                console.log(`Insufficient balance`);
            }
        }
        else if(messageThree.select === 10000){
            if(messageThree.select <= balance){
                console.log(`Your remaining balance is now:${balance -= messageThree.select}`);
            }
            else{
                console.log(`Insufficient balance`);
            }
        }
        else if(messageThree.select === 25000){
            if(messageThree.select <= balance){
                console.log(`Your remaining balance is now:${balance -= messageThree.select}`);
            }
            else{
                console.log(`Insufficient balance`);
            }
        }        
    }        


    else if(messageTwo.operation === "Withdraw"){
        const messageFour= await inquirer.prompt([
            {message:"Enter your ammount here:",
            name:"amount",
            type:"number"}
        ])
        if(messageFour.amount <= balance){
            console.log(`Your remaining balance is now:${balance-=messageFour.amount}`);
        }
        else{
            console.log(`Insufficient balance`)
        }

    }
    else{
        console.log(`Your current balance is ${balance}`);
    }
}
else {
    console.log(`Incorrect pin number`)
}