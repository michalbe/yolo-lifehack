var fs = require('fs');
var mapSchema = process.argv[2];

var tileSize = 180;
var currentX = 0;
var currentY = 0;
var output = "ig.module('game.levels.level1').requires('impact.image','game.entities.wall','game.entities.player').defines(function(){LevelLevel1={'entities':[";
var footer = "]};LevelLevel1Resources=[new ig.Image('media/tiles/floors.jpg')];});";
var emptyTile = 9;

fs.readFile('./' + mapSchema, function read(err, data) {
  if (err) {
      throw err;
  }
  //console.log("MAP:", JSON.parse(data));
  createMapFromScheme(JSON.parse(data));
});


var createMapFromScheme = function(scheme) {
  scheme.forEach(resolveRow);
}

var resolveRow = function(row) {
  currentX = 0;
  currentY += tileSize;
  row.forEach(function(element) {
    currentX += tileSize;
    if (element !== emptyTile) {
      console.log('{"type":"EntityWall","x":' + currentX + ',"y":' + currentY + ',"settings":{"wallType":' + element + '}},');
    }
  })
}
