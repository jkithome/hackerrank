function main() {
  var h = parseInt(readLine());
  var m = parseInt(readLine());
  var hours = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  var minutes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  if (m === 30) {
    console.log('half past ' + hours[h - 1]);
  } else if (m < 30 && m > 0) {
    if (m <= 20) {
      if (m === 15) {
        console.log(minutes[m - 1] + ' past ' + hours[h - 1]);
      } else {
        console.log(minutes[m - 1] + ' minutes past ' + hours[h - 1]);
      }
    } else {
      console.log('twenty ' + minutes[parseInt((m.toString().split(''))[1]) - 1] + ' minutes past ' + hours[h - 1]);
    }
  } else if (m > 30) {
    var newM = 60 - m
    if (newM <= 20) {
      if (newM === 15) {
        console.log(minutes[newM - 1] + ' to ' + hours[h]);
      } else {
        console.log(minutes[newM - 1] + ' minutes to ' + hours[h]);
      }
    } else {
      console.log('twenty ' + minutes[parseInt((m.toString().split(''))[1]) - 1] + ' minutes to ' + hours[h]);
    }
  } else {
    console.log(hours[h - 1] + ' o\' clock');
  }

}
