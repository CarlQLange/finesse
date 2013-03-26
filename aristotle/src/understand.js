var fs = require('fs')

exports.understand = function (toUnderstand, cb) {
	var results = {};
	results.origin = toUnderstand;

	var pluginPath = '/Users/carllange/workspace/js/finesse/aristotle/src/plugins/'; 
	var plugins = fs.readdirSync(pluginPath);
	var functionmap = {};
	var possibles = {};
	for (var dir in plugins) {
		functionmap = JSON.parse(fs.readFileSync(pluginPath + plugins[dir] + "/functionMap.json"));
		for (var possibleMatch in functionmap) {
			possibles[functionmap[possibleMatch]] = match(toUnderstand, possibleMatch)
		}
	}
	
	results.allPossibles = possibles;

	//should do better sort stuff here
	results.data = call(Object.keys(possibles).sort()[Object.keys(possibles).length-1]);

	cb(results);
}

function match (toUnderstand, possibleMatch) {
	if (toUnderstand == possibleMatch) { 
		return 1.0; //um
	}
}

function call (pluginFuncStr) { //aren't there supposed to be arguments here
	//surely this regex can be better 
	var matches = pluginFuncStr.match(/(\w*)::(\w*)::(\w*)/);
	var plugin = require("./plugins/" + matches[1]);
	return plugin[matches[2]][matches[3]]();
}
