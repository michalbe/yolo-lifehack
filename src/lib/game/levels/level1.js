ig.module('game.levels.level1').requires('impact.image','game.entities.wall','game.entities.player').defines(function(){LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityWall","x":0,"y":0,"settings":{"wallType":6}},{"type":"EntityWall","x":180,"y":0,"settings":{"wallType":6}},{"type":"EntityWall","x":360,"y":0,"settings":{"wallType":6}},{"type":"EntityWall","x":540,"y":0,"settings":{"wallType":2}},{"type":"EntityWall","x":720,"y":0,"settings":{"wallType":2}},{"type":"EntityWall","x":900,"y":0,"settings":{"wallType":6}},{"type":"EntityWall","x":1080,"y":0,"settings":{"wallType":6}},{"type":"EntityWall","x":1260,"y":0,"settings":{"wallType":6}},{"type":"EntityWall","x":1440,"y":0,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":0,"settings":{"wallType":6}},{"type":"EntityWall","x":1800,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":1980,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":2160,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":2340,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":2520,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":2700,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":2880,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":3060,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":3240,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":3420,"y":0,"settings":{"wallType":3}},{"type":"EntityWall","x":3600,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":3780,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":3960,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":4140,"y":0,"settings":{"wallType":0}},{"type":"EntityWall","x":4320,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":4500,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":4680,"y":0,"settings":{"wallType":0}},{"type":"EntityWall","x":4860,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":5040,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":5220,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":0,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":180,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":180,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":180,"settings":{"wallType":3}},{"type":"EntityWall","x":5400,"y":180,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":360,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":360,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":360,"settings":{"wallType":3}},{"type":"EntityWall","x":5400,"y":360,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":540,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":540,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":540,"settings":{"wallType":3}},{"type":"EntityWall","x":5400,"y":540,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":720,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":720,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":720,"settings":{"wallType":3}},{"type":"EntityWall","x":3960,"y":720,"settings":{"wallType":4}},{"type":"EntityWall","x":4140,"y":720,"settings":{"wallType":4}},{"type":"EntityWall","x":4320,"y":720,"settings":{"wallType":4}},{"type":"EntityWall","x":4860,"y":720,"settings":{"wallType":4}},{"type":"EntityWall","x":5040,"y":720,"settings":{"wallType":4}},{"type":"EntityWall","x":5220,"y":720,"settings":{"wallType":4}},{"type":"EntityWall","x":5400,"y":720,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":900,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":900,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":900,"settings":{"wallType":3}},{"type":"EntityWall","x":3960,"y":900,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":900,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":1080,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":1080,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":1080,"settings":{"wallType":3}},{"type":"EntityWall","x":3960,"y":1080,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":1080,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":1260,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":1260,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":1260,"settings":{"wallType":3}},{"type":"EntityWall","x":3960,"y":1260,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":1260,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":1440,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":1440,"settings":{"wallType":6}},{"type":"EntityWall","x":1800,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":1980,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":2160,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":2340,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":2520,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":2700,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":3240,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":3420,"y":1440,"settings":{"wallType":3}},{"type":"EntityWall","x":3960,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":1440,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":1620,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":1620,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":1620,"settings":{"wallType":3}},{"type":"EntityWall","x":3960,"y":1620,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":1620,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":1800,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":1800,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":1800,"settings":{"wallType":3}},{"type":"EntityWall","x":3960,"y":1800,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":1800,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":1980,"settings":{"wallType":6}},{"type":"EntityWall","x":1620,"y":1980,"settings":{"wallType":6}},{"type":"EntityWall","x":3420,"y":1980,"settings":{"wallType":3}},{"type":"EntityWall","x":3960,"y":1980,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":1980,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":2160,"settings":{"wallType":6}},{"type":"EntityWall","x":180,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":360,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":540,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":1080,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":1260,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":1440,"y":2160,"settings":{"wallType":0}},{"type":"EntityWall","x":1620,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":1800,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":1980,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":2520,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":2700,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":2880,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":3060,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":3240,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":3420,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":3960,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":2160,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":2340,"settings":{"wallType":1}},{"type":"EntityWall","x":3960,"y":2340,"settings":{"wallType":1}},{"type":"EntityWall","x":4140,"y":2340,"settings":{"wallType":4}},{"type":"EntityWall","x":4320,"y":2340,"settings":{"wallType":4}},{"type":"EntityWall","x":4500,"y":2340,"settings":{"wallType":4}},{"type":"EntityWall","x":4680,"y":2340,"settings":{"wallType":4}},{"type":"EntityWall","x":4860,"y":2340,"settings":{"wallType":4}},{"type":"EntityWall","x":5040,"y":2340,"settings":{"wallType":4}},{"type":"EntityWall","x":5220,"y":2340,"settings":{"wallType":4}},{"type":"EntityWall","x":5400,"y":2340,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":2520,"settings":{"wallType":1}},{"type":"EntityWall","x":3960,"y":2520,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":2520,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":2700,"settings":{"wallType":1}},{"type":"EntityWall","x":3960,"y":2700,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":2700,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":2880,"settings":{"wallType":1}},{"type":"EntityWall","x":3960,"y":2880,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":2880,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":3060,"settings":{"wallType":1}},{"type":"EntityWall","x":3960,"y":3060,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":3060,"settings":{"wallType":1}},{"type":"EntityWall","x":0,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":180,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":360,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":540,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":720,"y":3240,"settings":{"wallType":0}},{"type":"EntityWall","x":900,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":1080,"y":3240,"settings":{"wallType":0}},{"type":"EntityWall","x":1260,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":1440,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":1620,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":1800,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":1980,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":2160,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":2340,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":2520,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":2700,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":2880,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":3060,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":3240,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":3420,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":3600,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":3780,"y":3240,"settings":{"wallType":0}},{"type":"EntityWall","x":3960,"y":3240,"settings":{"wallType":0}},{"type":"EntityWall","x":4140,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":4320,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":4500,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":4680,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":4860,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":5040,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":5220,"y":3240,"settings":{"wallType":1}},{"type":"EntityWall","x":5400,"y":3240,"settings":{"wallType":1}}],"layer":[{"name":"floor","width":31,"height":19,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles/floors.jpg","repeat":false,"preRender":false,"distance":"1","tilesize":180,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;LevelLevel1Resources=[new ig.Image('media/tiles/floors.jpg')];});