var dir = process.argv[2];
var ext = process.argv[3];
var myMod = require("./filterDirMod.js");

var callback = function logList(err, list) {
	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
}

myMod(dir, ext, callback);