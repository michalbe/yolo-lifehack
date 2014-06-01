ig.module(
  'game.entities.building'
).requires(
  'impact.entity'
).defines( function() {
  ig.global.EntityBuilding = ig.Entity.extend({
    size: {x: 360, y: 180},
    offset: {x: 0, y: 144},
    animSheet: new ig.AnimationSheet( "media/tiles/building1.png", 360, 324),
    animInit: "idleX",
    animSettings: {
      idleX: { sequence: [0], frameTime: 0.1 },
    }
  });

});
