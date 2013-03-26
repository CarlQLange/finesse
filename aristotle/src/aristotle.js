var net = require('net');
var understand = require('./understand');

exports.serve = function (port, opts) {
	//start up a new TCP server
	net.createServer(function(sock) {
		sock.on('data', function(toUnderstand) {
			understand.understand(JSON.parse(toUnderstand.toString()), function (yourData) {
				sock.write(JSON.stringify(yourData));
			});
		});
	}).listen(port, '127.0.0.1');
	console.log(new Date(), "Aristotle ready.");
}
