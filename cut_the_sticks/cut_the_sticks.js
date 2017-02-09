function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  while (arr.length > 0) {
    console.log(arr.length);
    var min = Math.min.apply(null, arr);
    var newArr = []
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] - min !== 0) {
        newArr.push(arr[i]);
      }
    }
    arr = newArr;
  }

}
