class Obstacle {
    constructor(gameScreen, game) {
        this.gameScreen = gameScreen;
        this.game = game;
        this.width = this.gameScreen.offSetWidth;
        this.htmlElement = null
        this.ball = null
        this.top = 0
        this.velocity = 1

        this.createBall()
        this.ballsMove()
    }

    createBall() {
        this.htmlElement = document.createElement("div")

        this.htmlElement.className = "balls";

        const randomNumber = Math.floor(Math.random() * this.gameScreen.offsetWidth - 15)

        this.htmlElement.style.left = randomNumber + "px"

        this.gameScreen.appendChild(this.htmlElement)
    }

    removeBall() {
        this.htmlElement.remove()
    }

    ballsMove() {
        this.top += this.velocity
        this.htmlElement.style.top = this.top + "px"

        if (this.htmlElement.offsetTop > 590) {
            // aqui es donde restamos una vida del game this.game.lives -= 1


            this.removeBall()
            this.game.lives -= 1
            console.log(this.game.lives);
            return false
        }


        window.requestAnimationFrame(() => {
            this.ballsMove()
        })
    }
}


