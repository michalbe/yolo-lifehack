ig.module(
  'game.entities.wall'
).requires(
  'impact.entity'
  //'plusplus.core.entity'
).defines( function() {
  ig.global.EntityWall = ig.Entity.extend({
    size: {x: 180, y: 180},
    offset: {x: 0, y: 360},

    defaultWallType: 0,

    animSheet: new ig.AnimationSheet( "media/sprites/walls/walls.jpg", 180, 540),
    // init: function(){
    //   this.parent();
    //   //alert(this.animSettings.idleX.sequence[0]);
    // }
    init: function( x, y, settings ) {
      this.parent( x, y, settings );

      // Add the animations
      this.addAnim( 'idle', 1, [this.wallType || this.defaultWallType], true );
    },
  });

});
