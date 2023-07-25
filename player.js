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
        this.width = this.tennisPlayer.offsetWidth;
        this.left += this.directionX;
        console.log(this.width);
        if (this.left > this.gameScreen.offsetWidth - this.width) {
            this.left = this.gameScreen.offsetWidth - this.width;
        }
        if (this.left < 0) {
            this.left = 0
        }


        this.updatePosition();
    }

    updatePosition() {
        this.tennisPlayer.style.left = `${this.left}px`;

    }

    // didCollide(gameScreen) {
    //     const playerHitBox = this.tennisPlayer.getBoundingClientRect();
    //     const obstacleHitBox = gameScreen.tennisPlayer.getBoundingClientRect();
    //     if (
    //         playerHitBox.left < obstacleHitBox.right &&
    //         playerHitBox.right > obstacleHitBox.left &&
    //         playerHitBox.top < obstacleHitBox.bottom &&
    //         playerHitBox.bottom > obstacleHitBox.top
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}



