# Shape Attack

## Project Tracker
<a href="https://trello.com/b/ssE8LVCj/sei-solo-project-1">Trello Board</a> 

## Overview
A game similar to "Whack-a-mole" but with a unique twist! The shapes to remove will keep appearing in various places on the game board, and it's up to the player to remove as many as they can!


### Planned features include:
* A way to track high scores
* Random generation of shapes to attack


### Why make this game?
* Looking to build a game that's playable and has a core mechanic that is repeatable. My previous game concepts were too large in scope, so this represents an opportunity to bring clarity and focus to the project.


## Game Rules
1. The Player will need to remove the shapes from the game board with a mouse click.
2. After each successful removal of a shape, the Player will increase their score.
3. The Player will compete with themselves to get the highest score possible.


## Wireframes
Wireframes are visual representations of planned game layouts and user interfaces to help identify the overall storyboard for the game.

### Wireframe #1 - Game Start Screen
The first screen that the player will see upon loading the game. There will be a short set of instructions and a start button.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/shape-attack-wireframe-1.png?raw=true">

### Wireframe #2 - Game Screen
The second screen that the player will see upon loading the game. Current feature is for the player to click the shapes as they appear, to remove them and earn points that are tracked by the score. Planned features include game modifiers to make the game harder, easier, or more fun.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/shape-attack-wireframe-2.png?raw=true">

### Wireframe #3 - Game Ending Screen
The third screen that the player will see upon loading the game. This screen is the main game area where the player ship will be able to move and shoot, while avoiding enemies who approach from the top downwards and will also shoot.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/shape-attack-wireframe-3.png?raw=true">


## User Stories
User stories help translate the game mechanics and game experience so non-programmers and programmers alike understand what happens in the game:

1. When the User presses the game start button, the game will start.
2. When the User clicks a shape in the game, the shape disappears and the User earns a score.
3. When the User's score changes, the User can keep track of the score from the score display.
3. When the User has finished the game, the User's score and a button to replay the game are made visible.


## MVP Checklist
The MVP is designed to help the programmer test, implement, and experience the core mechanics of the game with minimal assets and time investment:

1. [x] Create linked HTML, CSS, and JS files
2. [x] Create battlefield area with JS canvase
3. [x] Create enemy shape class
4. [x] Create enemy shape spawner
5. [x] Create mouse click detection
6. [x] Test mouse click and enemy despawner mechanic
7. [x] Test score increased based on mouse clicks


## Stretch Goals
Stretch goals encompass all of the features, mechanics, and visual ugprades that are not necessary for the core game play but may significantly enhance the overall aesthetic, experience, and quality of the finished game.

* Better graphics
* Sound design
* Game modifiers to change the game's visuals or difficulty
* Persistent mechanics like game score