#!/usr/bin/env node
require('./src/aristotle').serve(9200, {
	debug: true,
	verbose: true
});
