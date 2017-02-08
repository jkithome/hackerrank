function main() {
  var d1_temp = readLine().split(' ');
  var d1 = parseInt(d1_temp[0]);
  var m1 = parseInt(d1_temp[1]);
  var y1 = parseInt(d1_temp[2]);
  var d2_temp = readLine().split(' ');
  var d2 = parseInt(d2_temp[0]);
  var m2 = parseInt(d2_temp[1]);
  var y2 = parseInt(d2_temp[2]);
  if ((y1 - y2) > 0) {
    console.log(10000);
  } else if ((y1 - y2) < 0) {
    console.log(0);
  } else if ((y1 - y2) === 0) {
    if ((m1 - m2) > 0) {
      var fine = (m1 - m2) * 500;
      console.log(fine);
    } else if ((m1 - m2) < 0) {
      console.log(0);
    } else if ((m1 - m2) === 0) {
      if ((d1 - d2) > 0) {
        var fineTwo = (d1 - d2) * 15;
        console.log(fineTwo);
      } else {
        console.log(0);
      }
    }
  }
}
