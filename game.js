const prompt = require("prompt-sync")();
const Human = require("./human");
const AI = require("./ai");

class Game {
    constructor(){
        this.playerOne = new Human();
        this.playerTwo = null;
    }
    runMain(){
        this.rules();
        this.gameType();
        this.bestOf();
        this.score();
        this.playAgain();
        
    }
    rules(){
        console.log("Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.");
    }
    gameType() {
        let selection = prompt("Make a choice, Press 1 for a game against AI, Press 2 for a local game against a petty human");
        switch(selection){
            case "1":
                this.computerPlayer();
                break;
            case "2":
                this.humanPlayer();
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
    bestOf(){
        while (this.playerOne.score < 3 && this.playerTwo.score < 3){
            console.log("Player one's turn");
            this.playerOne.chooseGesture();
            console.log("Player two's turn");
            this.playerTwo.chooseGesture();

            if (this.playerOne.choice === this.playerTwo.choice){
                console.log("Draw");
            }else if (this.playerOne.choice === this.playerOne.gestures[0]){
                if (this.playerTwo.choice === this.playerTwo.gestures[2] || this.playerTwo.choice === this.playerTwo.gestures[3]){
                    console.log("Player 1 wins!");
                    this.playerOne.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }else{
                    console.log("Player 2 wins!");
                    this.playerTwo.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }    
            }else if (this.playerOne.choice === this.playerOne.gestures[1]){
                if (this.playerTwo.choice === this.playerTwo.gestures[0] || this.playerTwo.choice === this.playerTwo.gestures[4]){
                    console.log("Player 1 wins!");
                    this.playerOne.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }else{
                    console.log("Player 2 wins!");
                    this.playerTwo.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }    
            }else if (this.playerOne.choice === this.playerOne.gestures[2]){
                if (this.playerTwo.choice === this.playerTwo.gestures[1] || this.playerTwo.choice === this.playerTwo.gestures[3]){
                    console.log("Player 1 wins!");
                    this.playerOne.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }else{
                    console.log("Player 2 wins!");
                    this.playerTwo.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }    
            }else if (this.playerOne.choice === this.playerOne.gestures[3]){
                if (this.playerTwo.choice === this.playerTwo.gestures[4] || this.playerTwo.choice === this.playerTwo.gestures[1]){
                    console.log("Player 1 wins!");
                    this.playerOne.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }else{
                    console.log("Player 2 wins!");
                    this.playerTwo.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }    
            }else if (this.playerOne.choice === this.playerOne.gestures[4]){
                if (this.playerTwo.choice === this.playerTwo.gestures[0] || this.playerTwo.choice === this.playerTwo.gestures[2]){
                    console.log("Player 1 wins!");
                    this.playerOne.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }else{
                    console.log("Player 2 wins!");
                    this.playerTwo.score += 1;
                    console.log("Player 1 score = " + this.playerOne.score);
                    console.log("Player 2 score = " + this.playerTwo.score);
                }    
            }
        }
    }
    score(){
        if (this.playerOne.score > this.playerTwo.score){
            console.log("Player 1 wins the game!");
        }else{
            console.log("Player 2 wins the game!");
        }
    }
    playAgain(){
        newGame();
    }
}

function newGame(){
    let gameOne = new Game();
    gameOne.runMain();
}

module.exports = Game