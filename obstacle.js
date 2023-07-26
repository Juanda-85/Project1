class Obstacle {
    constructor(gameScreen, game) {
        this.gameScreen = gameScreen;
        this.game = game;
        this.width = this.gameScreen.offSetWidth;
        this.htmlElement = null
        this.ball = null
        this.top = 0
        this.velocity = 2

        this.createBall()
        this.ballsMove()



    }
    createBall() {

        this.htmlElement = document.createElement("div")

        this.htmlElement.className = "balls";

        let randomNumber = Math.floor(Math.random() * this.gameScreen.offsetWidth)

        this.htmlElement.style.left = randomNumber + "px"

        this.gameScreen.appendChild(this.htmlElement)


    }
    ballsMove() {

        this.top += this.velocity
        this.htmlElement.style.top = this.top + "px"

        window.requestAnimationFrame(() => {
            this.ballsMove()
        }

        )
    }
}


