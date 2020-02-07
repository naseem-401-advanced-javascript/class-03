/* eslint-disable strict */
/* eslint-disable no-undefined */
/* eslint-disable no-undef */
'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};