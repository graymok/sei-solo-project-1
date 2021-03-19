# The Trial of the Sphinx

## Overview
A web and text-based adventure game placing the protagonist (the player) in an ongoing struggle against an unknown calamity. The player must use their wits to navigate conversations with NPCs, uncover patterns, and collect the necessary items to survive or even triumph over the calamity.


### Planned features include:
* _Character creation_
* _Context-sensitive user interface_
* _RPG mechanics for player progression_
* _Rogue-lite mechanics for successive playthroughs_
* _Mini-games as narrative milestones_
* _Dynamic artwork via JS Canvas_


### Why make this game?
* Text-based input RPG games allow for storytelling, player choice, and NPC behaviors without needing to create expensive visual assets
* With the text system as the main narrative vehicle, there is an opportunity for game "inception" by layering in mini-games with unique rules or controls to test the player's wit or dexterity
* Finally, it feels like a cool idea with enough scalable complexity to turn up or turn down the number of inter-connecting sub-game modules.


## Game Rules
1. Player will interact with the main game through text commands or inputs that will need to be context-sensitive to NPC descriptions or questions.
2. Words or phrases may or may not work depending on the situation.
3. Commands consisting of word strings (e.g. look around) or direct questions (e.g. what do I see?) may trigger game responses.
4. Player will have opportunities to solve puzzles, answer riddles, or request items that may provide in-game boons that bestow positive benefits and incremental progress towards the win condition.


## Wireframes
Wireframes are visual representations of planned game layouts and user interfaces to help identify the overall storyboard for the game.

### Wireframe #1 - Game Start Screen
The first screen that the player will see upon loading the game. There will be a short set of instructions and some story context to orient the player.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/wireframe-1.png?raw=true)">


### Wireframe #2 - Primary Game Screen
The main screen that the player will see when playing the game. This screen represents where the majority of the text-based adventuring and choices will play out.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/wireframe-2.png?raw=true">


### Wireframe #3 - Minigame Screen
This is a secondary game screen that transitions from/to Wireframe #2 depending on whether a mini game is initialized due to player choices.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/wireframe-3.png?raw=true">


### Wireframe #4 - Game Ending Screen
This is the final screen that the player will see upon successful or unsuccessful completion of the game's ending conditions. There will be a button to redirect players back to the start of the game to conduct another playthrough.
<img src="https://github.com/graymok/sei-solo-project-1/blob/main/assets/wireframe-4.png?raw=true">


## User Stories
User stories help translate the game mechanics and game experience so non-programmers and programmers alike understand what happens in the game:

1. When the User loads the game, the User will see an opening splash screen with a simple set of instructions and a game start button.

2. When the User clicks the game start button, the splash screen will transition to the main game window with a box for the User to write text into.

3. When the User types a word or a phrase into the text box, the game will respond differently depending on the situation.

4. When the User receives a question from the game, the User will use the text box to submit an answer.

5. When the User sufficiently answers a question from the game or sufficiently completes a mini-game, the User will receive an in-game boon.

6. When the User insufficiently answers a question from the game or insufficiently completes a mini-game, the User will not receive an in-game boon.

7. When the User has collected enough in-game boons, the User will complete the win condition.

8. When the User has not collected enough in-game boons, the User will complete the loss condition.

9. When the User wins or loses, the game window will transition to the game ending screen with a button to restart the game.


## MVP Checklist
The MVP is designed to help the programmer test, implement, and experience the core mechanics of the game with minimal assets and time investment:

1. [ ] Create linked HTML, CSS, and JS files
2. [ ] Code input form for player text input
3. [ ] Code output area for NPC text output
4. [ ] Code JS mechanic for NPC prompts and player responses
5. [ ] Develop and test 3 use cases
    - [ ] Validate player's answer to NPC question with text output
    - [ ] Validate player's answer to give player a new item/ability
    - [ ] Validate player's answers to check for win condition


## Stretch Goals
Stretch goals encompass all of the features, mechanics, and visual ugprades that are not necessary for the core game play but may significantly enhance the overall aesthetic, experience, and quality of the finished game.

* Use JS Canvas to dyanmically present game scenery and visual assets
* Build multiple mini-games with unique game interfaces, mechanics, and win conditions that complement the text-based adventure game system
* Create character inventory and ability system
* Develop multiple endings to support multiple playthroughs
* Build multiple NPCs and story chapters (e.g. Acts 1-3)