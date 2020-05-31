// @ts-nocheck
const os = require('os');
const platform = os.platform();
const exec = require('child_process').exec;

function handler(error, stdout, stderr) {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
}

if (platform === 'win32') {
  exec('yarn && yarn run buildwin', handler);
} else {
  exec('yarn && yarn buildmac', handler);
}
