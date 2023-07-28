window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;
    startButton.addEventListener("click", function () {
        startGame();

    });

    restartButton.addEventListener("click", function () {
        // startGame();
        location.reload()
    })

    function startGame() {

        console.log("start game");
        game = new Game();

        game.start()

        //ONCE INITIALIZED THE NEW GAME, THE ID GAME INTRO IS HIDDEN
        const gameContainerDiv = document.getElementById("game-container");
        const gameIntroDiv = document.getElementById("game-intro");
        gameIntroDiv.classList.add("hidden")

        const endGameScreen = document.getElementById("game-end")
        endGameScreen.style.display = "none"
        gameContainerDiv.style.display = "block"


        //ONCE THE ID GAME INTRO IS HIDDEN, SHOW THE GAME CONTAINER
        gameContainerDiv.classList.remove("hidden")
        console.log(gameContainerDiv.offsetWidth);


        const enemies = setInterval(() => {
            new Obstacle(gameContainerDiv, game)
            if (game.gameIsOver) {
                clearInterval(enemies)
            }

        }, 2000)

    }


    //MOVING THE PLAYER FROM ONE SIDE TO THE OTHER
    function handleKeyboardInput(key) {
        switch (key) {
            case "ArrowLeft":
                game.player.directionX = -2;
                break;

            case "ArrowRight":
                game.player.directionX = 2;
                break;
        }
    }


    window.addEventListener("keydown", (event) => {
        handleKeyboardInput(event.key)
    })
};

