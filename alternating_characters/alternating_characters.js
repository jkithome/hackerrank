function processData(input) {
  var inputT = input.split(/\n/);
  var cases = inputT.length;
  for (var i = 1; i < cases; i++) {
    var string = inputT[i].split('');
    var deletions = 0;
    string.forEach((char, index) => {
      if (index !== 0 && char === string[index - 1]) {
        deletions += 1;
      }
    });
    console.log(deletions);
  }
}
