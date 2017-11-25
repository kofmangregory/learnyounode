var dirName = process.argv[2];
var extension = "." + process.argv[3];
var fs = require("fs");
var arr = [];

function filter(callback) {
	fs.readdir(dirName, function(err, list) {
		if (err) {
			return console.error(err);
		}
		var extLength = extension.length;
		for (var i = 0 ; i < list.length; i++) {
			if (list[i].substring(list[i].length - extLength, list[i].length) === extension) {
				arr.push(list[i]);
			}
		}
		callback();
	})
}

function logList() {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

filter(logList);