ig.module(
  'game.entities.player'
).requires(
  'plusplus.abstractities.player'
).defines( function() {
  ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
    size: {x: 8, y: 14},
    offset: {x: 4, y: 2},
    animSheet: new ig.AnimationSheet( "media/sprites/char.png", 180, 180),
    animInit: "idleX",
    animSettings: {
      idleX: { sequence: [4], frameTime: 0.1 },
      moveY: { sequence: [4, 5, 6, 7], frameTime: 0.07 }
    }
  });

});
