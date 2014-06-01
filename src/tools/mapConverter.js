var fs = require('fs');
var mapSchema = process.argv[2];

var tileSize = 180;
var currentX = -tileSize;
var currentY = -tileSize;
var header = "ig.module('game.levels.level1').requires('impact.image','game.entities.wall','game.entities.player').defines(function(){LevelLevel1=/*JSON[*/{\"entities\":[";
var footer = "],\"layer\":[{\"name\":\"floor\",\"width\":";
var footer2 = ",\"height\":";
var footer3 = ",\"linkWithCollision\":false,\"visible\":1,\"tilesetName\":\"media/tiles/floors.jpg\",\"repeat\":false,\"preRender\":false,\"distance\":\"1\",\"tilesize\":180,\"foreground\":false,\"data\":";
var footer4 = "}]}/*]JSON*/;LevelLevel1Resources=[new ig.Image('media/tiles/floors.jpg')];});";
var emptyTile = 9;
var rowNumbers;
var colNumbers;
var floors = [];
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
  colNumbers = scheme[0].length;
  scheme.forEach(resolveRow);
  fs.writeFile('src/lib/game/levels/level1.js', header + entities.join(',') + footer + colNumbers + footer2 + rowNumbers + footer3 + JSON.stringify(floors) + footer4, function(err){
    if (err) {
      console.log('Could not update level1.js file');
    } else {
      console.log('Level saved in level1.js');
    }
  });
}

var resolveRow = function(row, rowIndex) {
  var floorRow = [];
  currentX = -tileSize;
  currentY += tileSize;
  row.forEach(function(element, index) {
    floorRow.push(1);
    currentX += tileSize;
    if (element !== emptyTile) {
      entities.push('{"type":"EntityWall","x":' + currentX + ',"y":' + currentY + ',"settings":{"wallType":' + element + '}}');
    }
  });
  floors.push(floorRow);
}
