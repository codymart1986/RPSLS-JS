const Player = require("./player");

class AI extends Player {
    constructor(){
        super("CL4P-TP");
    }
    chooseGesture(){
        this.choice = this.gestures[Math.floor(Math.random() * 5) + 1];
       
    }
}

module.exports = AI;