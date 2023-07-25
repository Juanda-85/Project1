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

    //CREATING THE FALLING BALLS

    function createObstacle() {
        const obstacle = document.createElement("div");
        gameContainer.appendChild(Obstacle);
        obstacle.className = "obstacle";
        obstacle.style.top = 0;
        obstacle.style.left = (Math.random() * gameContainer.offSetWidth)
            + "px";
        game.obstacleArray.push(obstacle)
    }

    setInterval(() => {
        createObstacle()
    }, 1000);

    // function moveballs() {
    //     for (let i = 0; i < newGame.ballsArray.length; i++) {
    //         let currentPosition = parseInt(newGame.ballsArray[i].style.top);
    //         newGame.ballsArray[i].style.top = (currentPosition + 1) + "px";

    //         if (newGame.ballsArray[i].offSetTop >= 495) {
    //             newGame.ballsArray[i].remove();
    //             newGame.ballsArray.splice(i, 1);
    //         }
    //     }
    // }



};

// function createObstacle() {
//     const obstacle = document.createElement("div");
//     gameContainer.appendChild(obstacle);
//     obstacle.className = "obstacle";
//     obstacle.style.top = 0;
//     obstacle.style.left = Math.random() * gameContainer.offsetWidth + "px";
//     game.obstacleArray.push(obstacle);
//   }
  
//   setInterval(() => {
//     createObstacle();
//   }, 1000);
