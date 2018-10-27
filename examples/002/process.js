console.log(`this process is pid${process.pid}`);

process.on('exit', (code) => {
  console.log(`the process has now finished, exiting with code ${code}`);
});

process.stdout.write('hello, i am writing to standard output\n');

process.stdout.write(`current working directory: ${process.cwd()}\n`);

console.log(`this script has been running for ${process.uptime()} seconds`);

process.stdout.write('type something then hit enter: \n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`You wrote: ${chunk}`);
    process.exit(0);
  }
})