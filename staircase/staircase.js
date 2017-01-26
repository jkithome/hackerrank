function main() {
  var n = parseInt(readLine());
  for (var i = 1; i < n + 1; i++) {
    var string = ''
    var hashes = i;
    var spaces = n - i;
    string += ' '.repeat(spaces);
    string += '#'.repeat(hashes);
    console.log(string);
  }
}
