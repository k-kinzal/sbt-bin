'use strict';

var bin = require('./');

bin.run(['--version'], function (err) {
  if (err) {
    throw err;
  }

  console.log('sbt binary install successfully');
});