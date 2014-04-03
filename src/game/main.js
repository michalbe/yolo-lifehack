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
      var character = game.add.sprite(0, 0, 'character');
      character.animations.add('walk', [0, 1, 2, 3]);
      character.animations.play('walk', 6, true);

      var character2 = game.add.sprite(190, 0, 'character');
      character2.animations.add('walk', [4, 5, 6, 7]);
      character2.animations.play('walk', 6, true);

      var character3 = game.add.sprite(0, 190, 'character');
      character3.animations.add('walk', [8, 9, 10, 11]);
      character3.animations.play('walk', 6, true);

      var character4 = game.add.sprite(190, 190, 'character');
      character4.animations.add('walk', [12, 13, 14, 15]);
      character4.animations.play('walk', 6, true);
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
