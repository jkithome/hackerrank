function processData(input) {
  var inputT = input.split('\n');
  var cases = inputT[0];
  for (var i = 1; i <= cases; i++) {
    var string = inputT[i];
    var reverse = string.split('').reverse().join('');
    var len = string.length;
    var result = 0;
    for (var k = 1; k < len; k++) {
      var sA = string.charCodeAt(k);
      var sB = string.charCodeAt(k - 1);
      var rA = reverse.charCodeAt(k);
      var rB = reverse.charCodeAt(k - 1);
      if (Math.abs(sA - sB) !== Math.abs(rA - rB)) {
        result = -1;
        break;
      }
    }
    if (result === 0) {
      console.log('Funny');
    } else {
      console.log('Not Funny');
    }

  }
}
