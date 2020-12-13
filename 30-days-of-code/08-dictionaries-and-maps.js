function processData(input) {
  //Enter your code here
  const [countOfEntries, ...entriesAndQueries] = input.split('\n');
  const entries = entriesAndQueries.slice(0, countOfEntries);
  const queries = entriesAndQueries.slice(countOfEntries);

  const dictionary = new Object();

  entries.forEach((entry) => {
    const [key, value] = entry.split(' ');

    dictionary[key] = value;
  });

  queries.forEach((query) => {
    const result = dictionary[query];

    console.log(result ? `${query}=${result}` : 'Not found');
  });
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
