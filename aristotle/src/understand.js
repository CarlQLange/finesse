var fs = require('fs')

exports.understand = function (toUnderstand, cb) {
	var results = {};
	results.origin = toUnderstand;

	var pluginPath = '/Users/carllange/workspace/js/finesse/aristotle/src/plugins/'; 
	var plugins = fs.readdirSync(pluginPath);
	var functionmap = {};
	var possibles = [];
	for (var dir in plugins) {
		functionmap = JSON.parse(fs.readFileSync(pluginPath + plugins[dir] + "/functionMap.json"));
		for (var possibleMatch in functionmap) {
			possibles.push({
				func: functionmap[possibleMatch],
				likelihood: match(toUnderstand, possibleMatch)
			})
		}
	}
	
	results.allPossibles = possibles;

	var mostLikely = possibles.sort(function (a, b) {
		return a.likelihood < b.likelihood;
	})[0];

	results.mostLikely = mostLikely;

	results.data = results.mostLikely.likelihood > 0.7 ? call(results.mostLikely.func) : null;

	cb(results);
}

function match (toUnderstand, possibleMatch) {
	if (toUnderstand == possibleMatch) { 
		return 1.0; //um
	} else {
		return 0.0;
	}
}

function call (pluginFuncStr) { //aren't there supposed to be arguments here
	//surely this regex can be better 
	var matches = pluginFuncStr.match(/(\w*)::(\w*)::(\w*)/);
	var plugin = require("./plugins/" + matches[1]);
	return plugin[matches[2]][matches[3]]();
}
