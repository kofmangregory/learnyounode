module.exports = function filter(dirName, ext, callback) {
	var fs = require("fs");
	fs.readdir(dirName, function(err, list) {
		if (err) {
			return callback(err);
		}
		ext = "." + ext;
		var extLength = ext.length;
		var arr = [];
		for (var i = 0 ; i < list.length; i++) {
			if (list[i].substring(list[i].length - extLength, list[i].length) === ext) {
				arr.push(list[i]);
			}
		}
		callback(null, arr);
	})
}