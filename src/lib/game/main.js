ig.module(
	'game.main'
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function(){
	var myGameClass = ig.GameExtended.extend({ /* game settings go here */ });
	ig.main( '#canvas', myGameClass, 60, 320, 240, 1, ig.LoaderExtended );
});
