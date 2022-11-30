import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import gradient from 'gradient-string';

let isCorrect = false;
let max = 5;

let sleep = (ms=1000) => new Promise((res)=>setTimeout(res,ms));

async function index() {
    console.clear();
    figlet('Number Guessing Game\n',(err,data)=>{
        console.log(gradient.pastel(data))
    });
    await sleep();

}

let generatedNumber = Math.floor(Math.random()*max)-1;
//console.log(generatedNumber);

async function getUserInput(){
    let uInput = await inquirer.prompt({
    name:'userInput',
    type: 'number',
    message:chalk.yellowBright('Input Number between 1 - 5 to guess whether you are get it right or not: ')
    });

    return uInput.userInput;
}

export async function startProg() {
    await index();
    while(!isCorrect){
        let x = await getUserInput();
        //console.log(x);
        if(x === generatedNumber) {
            isCorrect = true;
            console.log(chalk.greenBright(`Yes, you got it, it's ${x}`));
        } else if (x > generatedNumber) {
            console.log(chalk.blueBright(`${x} is greater than hidden number,try again\n`));
        } else if (x < generatedNumber) {
            console.log(chalk.redBright(`${x} is lesser than hidden number,try again\n`));
        }
    
    }
    
}

//await startProg();
