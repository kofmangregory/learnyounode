var fs = require("fs");
var numNewLines = 0;

function count(callback) {
	fs.readFile(process.argv[2], function doneReading(err, data) {
		if (err) {
			return console.error(err);
		}
		var str = data.toString();
		var arr = str.split('\n');
		numNewLines = arr.length - 1;
		callback();
	})
}

function logNum() {
	console.log(numNewLines);
}

count(logNum);