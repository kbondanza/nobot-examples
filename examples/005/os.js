const os = require('os');

const homeDirectory = os.homedir();

console.log(`your home directory is: ${homeDirectory}`);

const osPlatform = os.platform();

console.log(`the os platform is: ${osPlatform}`);