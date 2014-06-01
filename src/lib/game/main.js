ig.module(
	'game.main'
)
.requires(
	//'plusplus.core.plusplus',
	'impact.game',
	'impact.entity',

	//'plugins.camera',

	'game.levels.level1'
)
.defines(function() {

	ig.Entity.inject({
    update: function() {
      //if (this.pos.y < this.tileSize.y*4 && !this.isUiScreen) {
      //    this.zIndex = 10100;
      //} else {

			this.parent();
      this.zIndex = this.pos.y + this.size.y;// - this.offset.y;
      //}
    }
	});

	var myGameClass = ig.Game.extend({
		init: function () {

			ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
      ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
      ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
      ig.input.bind(ig.KEY.UP_ARROW, 'up');

			this.autoSort = true;
			this.loadLevel(ig.global.LevelLevel1);
		},

		update: function() {
			// Update all entities and BackgroundMaps
			this.parent();

			// Camera follows the player
			var screenNextX = this.player.pos.x + this.player.size.x * 0.5 - ig.system.width * 0.5;
			var screenNextY = this.player.pos.y + this.player.size.y * 0.5 - ig.system.height * 0.5;

			this.screen.x += (screenNextX - this.screen.x) * 0.05;
			this.screen.y += (screenNextY - this.screen.y) * 0.05;

			// this.screen.x = this.player.pos.x - ig.system.width/2;
			// this.screen.y = this.player.pos.y - ig.system.height/2;
		}
	});
	ig.main('#canvas', myGameClass, 60, window.innerWidth, window.innerHeight, 1);
});
