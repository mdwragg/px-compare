#! /usr/bin/env node

const exec = require('child_process').exec;
const bower = require('bower');

const spawn = require('child_process').spawn;
function launchHeadlessChrome(callback) {
  let dir = process.cwd();
  let componentName = dir.substr(dir.lastIndexOf('/')+1);
  let url = `http://127.0.0.1:8000/components/${componentName}`;
  var poly = spawn(`polyserve`);
  var Writable = require('stream').Writable;
  var ws = Writable();

  ws._write = function (chunk, enc, next) {
    var textChunk = chunk.toString('utf8');
    if(textChunk.includes('reusable components:')){
      console.log('server started');
      const CHROME = '"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"';
      exec(`${CHROME} --headless --virtual-time-budget=10000 --window-size=1412,2732 --screenshot --disable-gpu ${url}`, function(){
        poly.kill();
      });
    }
    next();
  };
  poly.stdout.pipe(ws);
}

launchHeadlessChrome((err, stdout, stderr) => {
  console.log('chome screenshotting');
});




// function callBowerInstall(){
//   bower.commands
//   .install()
//   .on('end', function (installed) {
//     console.log("bower install complete");
//   });
// }
//
// callBowerInstall();
