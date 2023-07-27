class Game {
    constructor() {
        this.gameScreen = document.getElementById("game-container");
        this.gameIsOver = false
        this.player = new Player(this.gameScreen, 500);
        this.width = '500px';
        this.height = '600px';
        this.score = 0;
        this.lives = 5;
        this.livesDisplay = document.getElementById("squareLives")
        this.gameEndScreen = document.getElementById("game-end");
        this.scoreDisplay = document.getElementsByClassName("square")
    }

    start() {
        this.gameScreen.style.width = this.width;
        this.gameScreen.style.height = this.height;

        // start the game loop
        this.gameLoop()
    }

    gameLoop() {

        if (this.gameIsOver) {
            console.log('THE game is over');
            return
        }

        if (this.lives === 0) {
            this.gameOver()
        }


        this.livesDisplay.textContent = `Lives: ${this.lives}`
        this.update();
        this.collision()

        // This function it's calling itself in a loop
        if (!this.gameIsOver) {
            window.requestAnimationFrame(() => this.gameLoop())
        }

    }

    update() {
        this.player.move();
    }

    collision() {
        const ballsElements = document.getElementsByClassName("balls")
        const ballsArray = Array.from(ballsElements)

        const scoreDisplay = document.getElementById("squareScore")

        ballsArray.forEach(ball => {
            const playerHitBox = this.player.tennisPlayer.getBoundingClientRect();
            const ballHitBox = ball.getBoundingClientRect();


            if (playerHitBox.left < ballHitBox.right &&
                playerHitBox.right > ballHitBox.left &&
                playerHitBox.top < ballHitBox.bottom &&
                playerHitBox.bottom > ballHitBox.top) {

                // EN EL MOMENTO QUE HAYA UNA COLISIÓN SE CUMPLEN ESTAS CONDICIONES (SE EJECUTA EL CODIGO DENTRO DEL IF)
                console.log("COLISION DETECTADA");
                ball.remove()
                this.score += 1
                scoreDisplay.textContent = `Score: ${this.score}`
            }

        });

    }

    gameOver() {
        this.gameIsOver = true
        console.log("Game Over"); this.scoreDisplay.textContent = `Score: ${this.score}`



    }

}