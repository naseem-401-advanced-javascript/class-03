'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};