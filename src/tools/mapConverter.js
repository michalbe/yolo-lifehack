var fs = require('fs');
var mapSchema = process.argv[2];

var tileSize = 180;
var currentX = 0;
var currentY = 0;
var output = "ig.module('game.levels.level1').requires('impact.image','game.entities.wall','game.entities.player').defines(function(){LevelLevel1=/*JSON[*/{\"entities\":[";
var footer = "],\"layer\":[{\"name\":\"floor\",\"width\":15,\"height\":15,\"linkWithCollision\":false,\"visible\":1,\"tilesetName\":\"media/tiles/floors.jpg\",\"repeat\":false,\"preRender\":false,\"distance\":\"1\",\"tilesize\":180,\"foreground\":false,\"data\":[[7,7,7,7,7,2,2,2,2,2,2,1,1,1,1],[7,7,7,7,7,2,2,2,2,2,2,1,1,1,1],[7,7,7,7,7,2,2,2,2,2,2,1,1,1,1],[2,2,2,2,2,2,2,6,6,6,6,1,1,1,1],[2,2,2,2,2,2,2,6,6,6,6,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;LevelLevel1Resources=[new ig.Image('media/tiles/floors.jpg')];});";
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
  fs.writeFile('level.js', output + footer, function(err){
    if (err) {
      console.log('Could not update level.js file');
    } else {
      console.log('Level saved in level.js');
    }
  });
}

var resolveRow = function(row) {
  currentX = 0;
  currentY += tileSize;
  row.forEach(function(element) {
    currentX += tileSize;
    if (element !== emptyTile) {
      output += '{"type":"EntityWall","x":' + currentX + ',"y":' + currentY + ',"settings":{"wallType":' + element + '}},';
    }
  });
}
