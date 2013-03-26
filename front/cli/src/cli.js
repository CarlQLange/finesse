var net = require('net');

exports.ask = function (toUnderstand) {
	var client = new net.Socket().connect(9200);

	client.write(toUnderstand);
	client.on('data', function (data) {
		console.log(data.toString());
		process.exit();
	});
}
