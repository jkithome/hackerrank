function processData(input) {
  var string = input;
  var presence = true;
  for (var i = 65; i <= 90; i++) {
    var char = String.fromCharCode(i);
    var re = new RegExp(char, "gi")
    var result = re.test(string);
    if (result === false) {
      presence = false;
      break;
    }
  }
  if (presence) {
    console.log('pangram');
  } else {
    console.log('not pangram');
  }
}
