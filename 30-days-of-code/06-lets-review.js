function processData(input) {
  //Enter your code here
  const [quantityOfWords, ...words] = input.split('\n');

  for (let i = 0; i < quantityOfWords; i++) {
    const evenPart = [];
    const oddPart = [];

    words[i].split('').forEach((char, charIndex) => {
      const currentIsEven = charIndex % 2 === 0;

      if (currentIsEven) evenPart.push(char);
      else oddPart.push(char);
    });

    console.log(`${evenPart.join('')} ${oddPart.join('')}`);
  }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
