function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var present = 0;
    a.forEach(function(arrival) {
      if (arrival <= 0) {
        present += 1;
      }
    })
    if (present >= k) {
      console.log('NO');
    } else if (present < k) {
      console.log('YES');
    }
  }

}
