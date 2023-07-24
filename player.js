class Player {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.directionX = 0;
        this.directionY = 0;
        
        const tennisPlayer = document.createElement("div");
        tennisPlayer.id = "tennis-player"


        this.gameScreen.appendChild(tennisPlayer);
    
    }
}
