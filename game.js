class Game {
    // code to be added
    constructor() {


        this.gameScreen = document.getElementById("game-container");

        this.player = new Player(this.gameScreen, 200);
        this.width = '500px';
        this.height = '600px';
        this.obstacles = [];




        this.gameEndScreen = document.getElementById("game-end");
    }

    start() {
        this.gameScreen.style.width = this.width;
        this.gameScreen.style.height = this.height;

        // start the game loop
        this.gameLoop()
    }

    gameLoop() {
        console.log('GAME LOOP STARTED');
        if (this.gameIsOver) {
            console.log('THE game is over');
            return
        }

        this.update();

        // This function it's calling itself in a loop
        window.requestAnimationFrame(() => this.gameLoop())
    }

    update() {
        this.player.move();
    }

}