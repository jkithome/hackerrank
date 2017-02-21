function processData(input) {
  var inpuT = input.split("\n")
  var rocks = inpuT[0];
  var allLetters = '';
  var letters = {};
  var gemElements = 0;
  for (var i = 1; i <= rocks; i++) {
    allLetters += inpuT[i];
  }

  var unique = allLetters.split('').filter((item, i, ar) => ar.indexOf(item) === i);
  unique.forEach(letter => letters[letter] = 0);
  for (var j = 1; j <= rocks; j++) {
    var uniqueL = inpuT[j].split('').filter((item, i, ar) => ar.indexOf(item) === i);
    uniqueL.forEach(one => {
      if (letters.hasOwnProperty(one) === true) {
        letters[one] += 1;
      }
    });
  }
  Object.keys(letters).forEach(key => {
    var value = letters[key];
    if (value === parseInt(rocks)) {
      gemElements += 1;
    }
  });

  console.log(gemElements);

}
