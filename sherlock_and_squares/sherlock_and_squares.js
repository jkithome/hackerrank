function processData(input) {
  var x = input.split(/\n/);
  var t = parseInt(x[0]);
  for (var i = 1; i <= t; i++) {
    var range = x[i].replace(/\s/g, ',').split(',');
    var counter = 0;
    var min = range[0];
    var max = range[1];
    var start = Math.floor(Math.sqrt(min));
    while (Math.pow(start, 2) <= max) {
      var square = Math.pow(start, 2);
      if (square >= min && square <= max) {
        counter += 1;
      }
      start += 1;
    }
    console.log(counter);
  }
}
