ig.module(
	'game.main'
)
.requires(
	'plusplus.core.plusplus',
	'game.levels.level1'
)
.defines(function() {
	var myGameClass = ig.GameExtended.extend({
		init: function () {
			this.parent();
			this.loadLevel(ig.global.LevelLevel1);
		}
	});
	ig.main( '#canvas', myGameClass, 60, 960, 640, 1, ig.LoaderExtended );
});
