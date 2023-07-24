class Player {
    constructor(gameScreen, left) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.directionX = 0;


        this.tennisPlayer = document.createElement("div");
        this.tennisPlayer.id = "tennis-player"

        this.tennisPlayer.style.left = `${left}px`;

        this.gameScreen.appendChild(this.tennisPlayer);

    }

    move() {
        this.left += this.directionX;


        if (this.left > this.gameScreen.offsetWidth - this.width) {
            this.left = this.gameScreen.offsetWidth - this.width;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.tennisPlayer.style.left = `${this.left}px`

    }

}
