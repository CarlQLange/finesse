var fs = require('fs');
var path = require('path');

exports.understand = function (toUnderstand, cb) {
	var results = {};
	results.origin = toUnderstand;

	var pluginPath = path.join(process.cwd(), 'src', 'plugins');
	var plugins = fs.readdirSync(pluginPath);
	var functionmap = {};
	var possibles = [];
	for (var dir in plugins) {
		functionmap = JSON.parse(fs.readFileSync(path.join(pluginPath, plugins[dir], "functionMap.json")));
		for (var possibleMatch in functionmap) {
			var interpretations = functionmap[possibleMatch].interpretations;
			for (var interpretation in interpretations) {
				possibles.push({
					func: possibleMatch,
					likelihood: match(toUnderstand, interpretations[interpretation])
				});
			}
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
