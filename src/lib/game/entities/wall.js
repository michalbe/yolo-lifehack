ig.module(
  'game.entities.wall'
).requires(
  'plusplus.core.entity'
).defines( function() {
  ig.global.EntityWall = ig.EntityExtended.extend({
    size: {x: 180, y: 180},
    offset: {x: 0, y: 360},
    animSheet: new ig.AnimationSheet( "media/sprites/walls/walls.jpg", 180, 540),
    animInit: "idleX",
    animSettings: {
      idleX: { sequence: [0], frameTime: 0.1 },
    },
    init: function(){
      this.parent();
      //alert(this.animSettings.idleX.sequence[0]);
    }
  });

});
