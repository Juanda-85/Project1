## TennisPro

TennisPro is a Javascript game implementing DOM manipulation. It consists in moving a character to hit balls that fall from the top of the screen to obtain points. The main goal is to win as many points as you can. On the contrary, the game is over when three balls are missed.

## How to play

- Move the player by using left and right arrows.
- Hit the balls just simply by touching them.
- Every time you hit a ball, you add one point to the score.
- The game is over if three balls are missed.

https://juanda-85.github.io/Project1-/

## Structure

The code is divided into five different files contanining the main structure of Javascript to make it organized and readable, as follows:

**Index.html**

This code sets up the structure and layout of the game web page and includes the necessary CSS and Javascript files to make the game functional. There are three sections in the <main> element:

The "game-intro" section displays an image, a start button, and some instructions for the game.

The "game-container" section is initially hidden and will contain the game screen. It has two divs to display the score and the number of lives.

The "game-end" section is also initially hidden and displays an image and a restart button.

**Style.css**

This code establishes the structure and styling for the game interface, including the ids for the #game-intro, the #game-container, and the #game-end. Also different classes like .balls, .square, and .hidden.

**Script.js**

This code is responsible for the set up of the game and handles user input to move the character from one side to the other of the screen.

As we can see, the code defines two buttons: start button and restart button and assigns event listeners to them.

When the starButton is clicked, the startGame function is called. In this function, a new request of the game class is created and assigned to the game variable. Then, the start method is called to begin the game.

The code hides the game-intro element and displays the game-container element. It also starts a setinterval loop that creates new obstacles on the game every two seconds. This loop stops when the game is over.

**Game.js**

The Game class manages the updates of the game, checks for collisions, and handles the game over condition.

The constructor function initializes the game by preparing different properties and elements needed for the game. It sets up the game screen, creates a player object, sets the height and the width of the screen, initializes the score and lives.

The gameLoop tests if the game is over and if the player has run out of lives. in the first scenario, the loops stops.

The collision method checks for the collision between the player and the balls on the screen by getting the area of both to verify if they overlap.

The gameOver method is called when the player has run out of lives. It establishes the gameisOver property to true, hides the game screen and shows the game end screen.

**Obstacle.js**

The class Obstacle has properties as "gameScreen", "game", "width", "top", "ball", and "velocity".

The constructor function sets values to these properties and calls the methods "createBall" and "ballsMove".

The first method creates a new HTML element for the ball, establishes its class name and position in the screen. The ballsMove method updates the top property by adding the velocity to it, and updates the position of the ball HTML element, to check if the ball has reached the bottom of the screen. If it has, it removes the ball.

**Player.js**

This class provides the functionality to create and control a tennis player element in the screen.

The constructor function tales two parameters: "gameScreen" and "left" where the first one is the container element and the second one is the initial position of the player.

The move method handles the movement of the player calculating the width of the player, using "offsetWidth".

**Author**

Juan David Valencia Gómez
