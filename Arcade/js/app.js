// Enemies our player must avoid
var enemyHeight = [68, 150, 234];
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -Math.random() * 1000;
    this.i = Math.round(Math.random() * 2);
    this.y = enemyHeight[this.i];
    this.speed = 4 + Math.random() * 1;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed;
    if (this.x > 600) {
        this.x = -Math.random() * 1000;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // The image/sprite for player, this uses
    // a helper method which is already provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(dt) {
    // Update the player's status
    // The player should go back when hit the enemy
    for (var i = 4; i >= 0; i--) {
        if ((Math.abs(this.x - allEnemies[i].x) <= 10) && (Math.abs(this.y - allEnemies[i].y) <= 10)) {
            console.log("Oops! You hit the enemy!");
            this.startOver();
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // Win condition
    if (this.y <= 10) {
        this.startOver();
        console.log("You win!");
    }
};
//set the player's postion to the start point
Player.prototype.startOver = function() {
    this.x = 200;
    this.y = 400;
};

Player.prototype.handleInput = function(keycode) {
    // Handle inputs from keyboard
    if ((keycode == "left") && (this.x > 99)) {
        this.x = this.x - 100;
    }
    if ((keycode == "up") && (this.y > 0)) {
        this.y = this.y - 82;
    }
    if ((keycode == "right") && (this.x < 400)) {
        this.x = this.x + 100;
    }
    if ((keycode == "down") && (this.y < 400)) {
        this.y = this.y + 82;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [];
for (var i = 0; i < 5; i++) {
    var enemy = new Enemy();
    allEnemies.push(enemy);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});