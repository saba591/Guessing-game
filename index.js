import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random());
console.log(randomNumber);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Pls guess a number:",
    },]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("you guessed right number!");
}
else {
    console.log("you guessed wrong number");
}
