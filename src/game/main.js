/**
 *
 * This is a simple state template to use for getting a Phaser game up
 * and running quickly. Simply add your own game logic to the default
 * state object or delete it and make your own.
 *
 */

var state = {
    init: function() {
        // Delete this init block or replace with your own logic.
    },
    preload: function() {
        // STate preload logic goes here
        game.load.spritesheet('character', 'assets/sprites/char.jpg', 180, 180);

    },
    create: function(){
      // State create logic goes here
      var character = game.add.sprite(300, 200, 'character');
      character.animations.add('walk');
      character.animations.play('walk', 6, true);
    },
    update: function() {
        // State Update Logic goes here.
    }
};

var game = new Phaser.Game(
    window.innerWidth,
    window.innerHeight,
    Phaser.AUTO,
    'game',
    state
);
