function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());
    var string = n.toString();
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
      if (n % string[i] === 0) {
        counter += 1;
      }
    }
    console.log(counter);
  }

}
