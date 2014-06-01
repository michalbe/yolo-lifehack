var fs = require('fs');
var mapSchema = process.argv[2];

var tileSize = 180;
var currentX = -tileSize;
var currentY = -tileSize;

var header = "ig.module('game.levels.level1').requires('impact.image','game.entities.wall','game.entities.player').defines(function(){LevelLevel1=/*JSON[*/{\"entities\":[";
var footer = "],\"layer\":[{\"name\":\"floor\",\"width\":15,\"height\":15,\"linkWithCollision\":false,\"visible\":1,\"tilesetName\":\"media/tiles/floors.jpg\",\"repeat\":false,\"preRender\":false,\"distance\":\"1\",\"tilesize\":180,\"foreground\":false,\"data\":[[7,7,7,7,7,2,2,2,2,2,2,1,1,1,1],[7,7,7,7,7,2,2,2,2,2,2,1,1,1,1],[7,7,7,7,7,2,2,2,2,2,2,1,1,1,1],[2,2,2,2,2,2,2,6,6,6,6,1,1,1,1],[2,2,2,2,2,2,2,6,6,6,6,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;LevelLevel1Resources=[new ig.Image('media/tiles/floors.jpg')];});";
var emptyTile = 9;
var rowNumbers;
var entities = [];

fs.readFile('./' + mapSchema, function read(err, data) {
  if (err) {
      throw err;
  }
  //console.log("MAP:", JSON.parse(data));
  createMapFromScheme(JSON.parse(data));
});


var createMapFromScheme = function(scheme) {
  rowNumbers = scheme.length;
  scheme.forEach(resolveRow);
  fs.writeFile('src/lib/game/levels/level1.js', header + entities.join(',') + footer, function(err){
    if (err) {
      console.log('Could not update level1.js file');
    } else {
      console.log('Level saved in level1.js');
    }
  });
}

var resolveRow = function(row, rowIndex) {
  currentX = 0;
  currentY += tileSize;
  row.forEach(function(element, index) {
    currentX += tileSize;
    if (element !== emptyTile) {
      entities.push('{"type":"EntityWall","x":' + currentX + ',"y":' + currentY + ',"settings":{"wallType":' + element + '}}');
    }
  });
}
