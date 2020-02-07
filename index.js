/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
'use strict';

const editor = require('./edit-file.js');
const process = require('process');
let path = process.argv[2]; 

const showFile = (err, data) => {
  if (err) {
    throw err;
  } else {    
    console.log(data);
  }
};

editor(path, showFile);