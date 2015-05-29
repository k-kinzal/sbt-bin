'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');

var version = '0.13.8';

var bin = new BinWrapper({skipCheck: true});
bin.src('https://dl.bintray.com/sbt/native-packages/sbt/' + version + '/sbt-' + version+ '.tgz', 'darwin');
bin.src('https://dl.bintray.com/sbt/native-packages/sbt/' + version + '/sbt-' + version+ '.tgz', 'linux');
bin.dest(path.join(__dirname, 'vendor'));
bin.use(process.platform === 'win32' ? 'bin/sbt.bat' : 'bin/sbt');

module.exports = bin;
