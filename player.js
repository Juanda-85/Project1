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
    // setting the boundaries
    move() {
        this.width = this.tennisPlayer.offsetWidth;
        this.left += this.directionX;

        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
        }
        if (this.left < 0) {
            this.left = 0
        }

        this.updatePosition();
    }

    updatePosition() {
        this.tennisPlayer.style.left = `${this.left}px`;
    }
}



