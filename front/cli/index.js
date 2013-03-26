#!/usr/bin/env node
require('./src/cli.js').ask(JSON.stringify(process.argv[process.argv.length-1]));
