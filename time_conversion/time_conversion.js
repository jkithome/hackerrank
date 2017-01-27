function main() {
  var time = readLine();
  if (time.indexOf('P') !== -1) {
    var newtimeA = time.replace(/[a-z]/gi, '').split(/[^\d]/);
    if ((newtimeA[0]) >= 12) {
      console.log(`${newtimeA[0]}:${newtimeA[1]}:${newtimeA[2]}`);
    } else {
      console.log(`${(parseInt(newtimeA[0]) + 12)}:${newtimeA[1]}:${newtimeA[2]}`);
    }
  } else if (time.indexOf('A')) {
    var newtimeB = time.replace(/[a-z]/gi, '').split(/[^\d]/);
    if ((newtimeB[0]) >= 12) {
      console.log(`0${(parseInt(newtimeB[0]) - 12)}:${newtimeB[1]}:${newtimeB[2]}`);
    } else if ((newtimeB[0]) < 12) {
      console.log(`${newtimeB[0]}:${newtimeB[1]}:${newtimeB[2]}`);
    }
  }

}
