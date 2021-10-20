const prompt = require("prompt-sync");
const Human = require("./human");
const AI = require("./ai");

class Game {
    constructor(){
        this.playerOne = new Human();
        this.playerTwo = null;
    }
    rules(){
        console.log("Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.");
    }
    gameType() {
        let selection = prompt("Make a choice \n Press 1 for a game against AI \n Press 2 for a local game against a petty human");
        switch(selection){
            case 1:
                this.humanPlayer();
                break;
            case 2:
                this.computerPlayer();
                break;
            default:
                return this.gameType();
        }
    }
    humanPlayer(){
        this.playerTwo = new Human();
    }
    computerPlayer(){
        this.playerTwo = new AI();
    }
}