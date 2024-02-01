'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');

var version = '1.9.8';

var bin = new BinWrapper({skipCheck: true});
bin.src('https://github.com/sbt/sbt/releases/download/v' + version + '/sbt-' + version+ '.zip');
bin.dest(path.join(__dirname, 'vendor'));
bin.use(process.platform === 'win32' ? 'bin/sbt.bat' : 'bin/sbt');

module.exports = bin;
