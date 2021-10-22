const Player = require("./player");

class AI extends Player {
    constructor(){
        super("CL4P-TP");
    }
    chooseGesture(){
        this.choice = this.gestures[Math.floor(Math.random() * this.gestures.length)];
        console.log( `Computer chooses ${this.choice}`)
    }
}

module.exports = AI;