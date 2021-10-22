const prompt = require("prompt-sync")();
const Player = require ("./player");

class Human extends Player {
    constructor() {
        let userName = prompt("What is your name?");
        super(userName);
    }
    chooseGesture() {
        let input = prompt("Select a gesture! 1 = Rock, 2 = Paper, 3 = Scissors, 4 = Lizard, 5 = Spock");
        console.log(input)
        if (input === "1"){
            this.choice = "Rock";
        }else if (input === "2"){
            this.choice = "Paper";
        }else if (input === "3"){
            this.choice = "Scissors";
        }else if (input === "4"){
            this.choice = "Lizard";
        }else if (input === "5"){
            this.choice = "Spock"
        }else{
            console.log("Not a valid choice! Try again");
            this.chooseGesture();
        }
    }
}

module.exports = Human;