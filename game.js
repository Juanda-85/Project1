class Game {
    // code to be added
    constructor() {
        this.gameScreen = document.getElementById("game-container");
        this.player = new Player(this.gameScreen)
    
        
        
        this.gameEndScreen = document.getElementById("game-end");
    }

}