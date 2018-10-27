const url = require('url');

const args = process.argv.slice(2);

const [urlEntered] = args;

if (urlEntered === undefined) {
  console.error('Please pass a URL e.g. https://www.google.com');

  process.exit(0);
}

const {
  protocol, slashes, host, query, href
} = url.parse(urlEntered);

console.log(`using protocol: ${protocol}`);

console.log(`using slashes: ${slashes}`);

console.log(`Host: ${host}`);