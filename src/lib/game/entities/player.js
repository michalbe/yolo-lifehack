ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

ig.global.EntityPlayer = ig.Entity.extend({

	// The players (collision) size is a bit smaller than the animation
	// frames, so we have to move the collision box a bit (offset)
  size: {x: 125, y: 50},
  offset: {x: 25, y: 130},

	maxVel: {x: 400, y: 800},
	friction: {x: 800, y: 0},

  speed: 300,

	type: ig.Entity.TYPE.A, // Player friendly group
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.PASSIVE,

	animSheet: new ig.AnimationSheet( "media/sprites/char-big.png", 180, 180),

	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player
	flip: false,
	accelGround: 1200,


	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		// Add the animations
		this.addAnim( 'idle', 1, [4], true );
		this.addAnim( 'moveUp', 0.09, [12, 13, 14, 15] );
		this.addAnim( 'moveDown', 0.09, [4, 5, 6, 7] );
		this.addAnim( 'moveLeft', 0.09, [8, 9, 10, 11]); // stop at the last frame
		this.addAnim( 'moveRight', 0.09, [0, 1, 2, 3] );

		// Set a reference to the player on the game instance
		ig.game.player = this;
	},


	update: function() {

    if (ig.input.state('up')) {
      this.vel.y = -this.speed;
      this.vel.x = 0;
      this.currentAnim = this.anims.moveUp;
    } else if (ig.input.state('left')) {
      this.vel.y = 0;
      this.vel.x = -this.speed;
      this.currentAnim = this.anims.moveLeft;
    } else if (ig.input.state('right')) {
      this.vel.y = 0;
      this.vel.x = this.speed;
      this.currentAnim = this.anims.moveRight;
    } else if (ig.input.state('down')) {
      this.vel.y = this.speed;
      this.vel.x = 0;
      this.currentAnim = this.anims.moveDown;
    } else {
      this.vel.y = 0;
      this.vel.x = 0;
      this.currentAnim = this.anims.idle;
    }

		// Move!
		this.parent();
	}
});


});
