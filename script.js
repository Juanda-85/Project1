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
        //UNA VEZ INICIADO EL NEW GAME, OCULTAR EL ID GAME INTRO
        const gameContainerDiv = document.getElementById("game-container");
        const gameIntroDiv = document.getElementById("game-intro");
        gameIntroDiv.classList.add("hidden")

        const endGameScreen = document.getElementById("game-end")
        endGameScreen.style.display = "none"
        gameContainerDiv.style.display = "block"


        //UNA VEZ OCULTA LA ID GAME INTRO, VAMOS A MOSTRAR EL GAME-CONTAINER
        gameContainerDiv.classList.remove("hidden")
        console.log(gameContainerDiv.offsetWidth);


        const enemies = setInterval(() => {
            new Obstacle(gameContainerDiv, game)
            if (game.gameIsOver) {
                clearInterval(enemies)
            }

        }, 2000)

    }


    //MOVER USUARIO POR EL TABLERO
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

