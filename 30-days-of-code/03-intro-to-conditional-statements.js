'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine(), 10);

  const limitToBeWeird = 20;

  const isOdd = N % 2 !== 0;
  const isInNormalRange = 2 <= N && N <= 5;
  // const isInWeirdRange = 6 <= N && N <= 20;
  const isGreaterThanLimitOfWeird = N > limitToBeWeird;

  // if (isOdd) console.log('Weird');
  // else if (isGreaterThanLimitOfWeird) console.log('Not Weird');
  // else if (isInNormalRange) console.log('Not Weird');
  // else if (isInWeirdRange) console.log('Weird');
  // else console.log('Weird');

  if (!isOdd && (isInNormalRange || isGreaterThanLimitOfWeird))
    console.log('Not Weird');
  else console.log('Weird');
}
