function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var c = parseInt(n_temp[1]);
    var m = parseInt(n_temp[2]);
    var chocolates = Math.floor(n / c);
    var wrappers = chocolates;
    while (wrappers >= m) {
      var newChocolates = Math.floor(wrappers / m);
      chocolates += newChocolates;
      wrappers = (wrappers % m) + newChocolates;
    }
    console.log(chocolates);
  }

}
