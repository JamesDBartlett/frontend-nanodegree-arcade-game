/*--------------------------------------------------------------
| Basic design & functionality ideas:
| = Current Score & High Score
| = Welcome Modal w/
|   - Sprite Set Selection
|   - Color Scheme Selection
|   - Difficulty Level (Increases Enemy Speed & Quantity)
| = Randomized Enemy Speed & Direction
|
| Advanced design & functionality ideas:
| = Responsive Layout
| = Touchscreen compatible controls
| = Weapons
| = Animated Sprites
| = Cheat Codes
|--------------------------------------------------------------*/

const player = new Player();
const allEnemies = [...Array(3)].map((_,e) => new Enemy(0,e+1));


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
