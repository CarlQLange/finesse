//exports.functionmap = JSON.stringify('./functionmap.json');

exports.Time = {
	current: function () {
		return "BREAKFAST O'CLOCK";
	},
	atLocation: function (opts) {
		return "IT'S BITCH O'CLOCK AT " + opts.loc;
	}
}
