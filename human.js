const prompt = require("prompt-sync")();
const Player = require ("./player");

class Human extends Player {
    constructor() {
        super();
        let userName = prompt("What is your name?");
        this.name = userName;
    }
    chooseGesture() {
        let input = prompt("Select a gesture! \n 1 = Rock \n 2 = Paper \n 3 = Scissors \n 4 = Lizard \n 5 = Spock \n");
        if (input == 1){
            this.choice = "Rock";
        }else if (input == 2){
            this.choice = "Paper";
        }else if (input == 3){
            this.choice = "Scissors";
        }else if (input == 4){
            this.choice = "Lizard";
        }else if (input == 5){
            this.choice = "Spock"
        }
    }
}

module.exports = Human;