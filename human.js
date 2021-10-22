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
            this.choice = this.gestures[0];
            console.log(`Player 1 chose ${this.choice}`)
        }else if (input === "2"){
            this.choice = this.gestures[1];
            console.log(`Player 1 chose ${this.choice}`)
        }else if (input === "3"){
            this.choice = this.gestures[2];
            console.log(`Player 1 chose ${this.choice}`)
        }else if (input === "4"){
            this.choice = this.gestures[3];
            console.log(`Player 1 chose ${this.choice}`)
        }else if (input === "5"){
            this.choice = this.gestures[4]
            console.log(`Player 1 chose ${this.choice}`)
        }else{
            console.log("Not a valid choice! Try again");
            this.chooseGesture();
        }
    }
}

module.exports = Human;