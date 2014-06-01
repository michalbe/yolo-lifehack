var fs = require('fs');
var mapSchema = process.argv[2];

var tileSize = 180;
var currentX = 0;
var currentY = 0;
var output = '';

fs.readFile('./' + mapSchema, function read(err, data) {
  if (err) {
      throw err;
  }
  console.log("MAP:", JSON.parse(data));
});


var createMapFromScheme = function(scheme) {
  scheme.forEach(resolveRow);
}

var resolveRow = function(row) {
  row.forEach(function(element){

  })
}
