var http = require("http");
var bl = require("bl");
var dataArr = [];
var index = 0;

function printData() {
	for (var i = 0 ; i < 3; i++) {
		console.log(dataArr[i]);
	}
}

function getReq (ind) {
	http.get(process.argv[2+ind], function(response) {
		response.pipe(bl(function (err, data) {
			if (err) {
				return console.error("There was an error: " + err);
			}
			var str = data.toString();
			dataArr[ind] = str;
			index++;
			if (index == 3) {
				printData();
			}
		}))
	})
}

for (var i = 0 ; i < 3; i++) {
	getReq(i);
} 