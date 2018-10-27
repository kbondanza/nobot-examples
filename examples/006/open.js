const { platform } = require('os');
const { exec } = require('child_process');

const osPlatform = platform();
const args = process.argv.slice(2);

const [url] = args;

if (url === undefined) {
  console.error('please enter a url e.g. "http://www.google.com"');
  process.exit(0);
}

let command;

command = `open -a "google chrome" ${url}`;

console.log(`executing command: ${command}`);

exec(command);