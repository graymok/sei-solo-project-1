# Loop Starfighter

## Overview
A top-down scrolling shooter with instanced and persistent mechanics, health and powerups, and more enemies & bullets on screen than you can count!


### Planned features include:
* Ship customization
* Ability upgrades
* Multiple enemy types and enemy attacks


### Why make this game?
* I had a dream about this game the morning this pitch was due.
* Opportunity to improve my JS Canvas skills.


## Game Rules
1. Using directional arrow keys and the space bar, the player must navigate an aerial battlefield with enemy spaceships by either avoiding through movement or destroying with the player's laser.
2. Powerups may be acquired on the battlefield to alter the weapon firing type. Some may be acquired to confer benefits with every game session.
3. The player wins by getting through the enemy waves of increasing difficulty before having to clear the final boss, a monstrosity of health and firepower.


## Wireframes
Wireframes are visual representations of planned game layouts and user interfaces to help identify the overall storyboard for the game.

### Wireframe #1 - Game Start Screen
The first screen that the player will see upon loading the game. There will be a short set of instructions and some story context to orient the player.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/alt-wireframe-1.png?raw=true">

### Wireframe #2 - Sortie Screen - Semi Stretch
The second screen that the player will see upon loading the game. Planned features include ability to purchase game-wide upgrades. This screen is also the screen that players will see after playing through the game and clicking "restart game" at the end screen.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/alt-wireframe-2.png?raw=true">

### Wireframe #3 - Main Game Screen
The third screen that the player will see upon loading the game. This screen is the main game area where the player ship will be able to move and shoot, while avoiding enemies who approach from the top downwards and will also shoot.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/alt-wireframe-3.png?raw=true">

### Wireframe #3 - Main Game Screen
The final screen that the player will see upon loading the game. This screen will declare either a win or a loss, share game stats like score or enemies destroyed, and have a restart button that will take the player back to Wireframe #2.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/alt-wireframe-4.png?raw=true">


## User Stories
User stories help translate the game mechanics and game experience so non-programmers and programmers alike understand what happens in the game:

1. When the User presses the arrow keys, the User will move their ship.
2. When the User presses the space bar, the User will fire their ship's laser.
3. When the User's ship hits an enemy ship or enemy laser, the User's ship will be destroyed.
4. When the User's laser hits an enemy's ship, the enemy's ship will be destroyed.
5. When the User destroys an enemy ship, the User gains a point.
6. When the User is destroyed, the User's total score represents the User's progress/victory in the game.


## MVP Checklist
The MVP is designed to help the programmer test, implement, and experience the core mechanics of the game with minimal assets and time investment:

1. [ ] Create linked HTML, CSS, and JS files
2. [ ] Create battlefield area with JS canvase
3. [ ] Create 1 player ship with directional movement
4. [ ] Create 1 enemy ship with forward movement
5. [ ] Create ship to ship hit detection with removal of player upon hit
6. [ ] Create 1 player projectile
7. [ ] Create 1 enemy projectile
8. [ ] Create projectile to ship hit detection with removal of player and enemy upon correct hit


## Stretch Goals
Stretch goals encompass all of the features, mechanics, and visual ugprades that are not necessary for the core game play but may significantly enhance the overall aesthetic, experience, and quality of the finished game.

* Better graphics
* Sound design
* More bullets and enemies on screen
* Persistent upgrades and mechanics