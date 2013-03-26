//exports.functionmap = JSON.stringify('./functionmap.json');

exports.Time = {
	current: function () {
		return "BREAKFAST O'CLOCK";
	},
	atLocation: function (opts) {
		return "IT'S BREAKFAST O'CLOCK AT " + opts.loc;
	}
};

exports.Aristotle = {
	restart: function () {
		process.exit(42);
	}
}
