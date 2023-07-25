window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;
    startButton.addEventListener("click", function () {
        startGame();
    });

    function startGame() {
        console.log("start game");
        game = new Game();

        game.start()
        //UNA VEZ INICIADO EL NEW GAME, OCULTAR EL ID GAME INTRO
        const gameIntroDiv = document.getElementById("game-intro");
        gameIntroDiv.classList.add("hidden")

        //UNA VEZ OCULTA LA ID GAME INTRO, VAMOS A MOSTRAR EL GAME-CONTAINER
        const gameContainerDiv = document.getElementById("game-container");
        gameContainerDiv.classList.remove("hidden")

    }
    //MOVER USUARIO POR EL TABLERO

    function handleKeyboardInput(key) {
        switch (key) {
            case "ArrowLeft":
                game.player.directionX = -5;
                break;

            case "ArrowRight":
                game.player.directionX = 5;
                break;

        }
    }


    window.addEventListener("keydown", (event) => {
        handleKeyboardInput(event.key)
    })

};