const Player = require("./player");

class AI extends Player {
    constructor(){
        super();
        this.name = "CL4P-TP"
    }
    chooseGesture(){
        let aiChoice = Math.floor(Math.random() * 5) + 1;
        if (aiChoice == 1){
            this.choice = "Rock";
        }else if (aiChoice == 2){
            this.choice = "Paper";
        }else if (aiChoice == 3){
            this.choice = "Scissors";
        }else if (aiChoice == 4){
            this.choice = "Lizard";
        }else if (aiChoice == 5){
            this.choice = "Spock"
        }
    }
}

module.exports = AI;