#! /usr/bin/env node

const argv = require('yargs').argv;
const path = require('path');

const fs = require('fs');
const gm = require('gm');

function diffAllTheThings(callback) {
  const controlFolder = path.resolve(process.cwd(), './screenshots/');
  const folderToDiff = path.resolve(process.cwd(), argv['compare-folder']);
  const diffFolder = path.resolve(process.cwd(), `${folderToDiff.replace('screenshots-', 'diffs-')}`);
  const fs = require('fs');
  fs.readdir(controlFolder, (err, files) => {
    files.forEach(file => {
      if(file.startsWith('px-')){
        var options = {
          file: `${path.resolve(diffFolder, file.replace(/\.[^/.]+$/, "") + '_fuzz.png')}`,
          highlightColor: 'red',
          tolerance: 0.02
        };
        gm.compare(`${path.resolve(controlFolder, file)}`, `${path.resolve(folderToDiff,file)}`, options, function (err, isEqual, equality, raw) {

        });
      }
    });
  });
}

diffAllTheThings((err, stdout, stderr) => {
  console.log(err, stdout, stderr);
});
