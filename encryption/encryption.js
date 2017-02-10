function main() {
  var s = readLine();
  var l = s.length;
  var r = Math.floor(Math.sqrt(l));
  var limit = Math.ceil(Math.sqrt(l));
  if (r * limit < l) {
    r += 1;
  }
  var c;
  for (var i = limit; i >= r; i--) {
    if (r * i >= l) {
      c = i
    }
  }
  var arr = [];
  var start = 0;
  var end = c;
  for (var j = 1; j <= r; j++) {
    arr.push(s.substring(start, end).split(''));
    start += c;
    end += c;
  }
  var string = ''
  for (var k = 0; k < c; k++) {
    var substring = ''
    for (var m = 0; m < r; m++)
      if (arr[m][k] !== undefined) {
        substring += arr[m][k];
      }
    string += (substring + ' ');
  }
  console.log(string.trim());

}
