function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  var negative = 0;
  var zero = 0;
  var positive = 0;
  arr.forEach(num => {
    if (num < 0) {
      negative += 1;
    } else if (num === 0) {
      zero += 1;
    } else {
      positive += 1;
    }
  });
  console.log(`${(positive/n).toFixed(3)}\n${(negative/n).toFixed(3)}\n${(zero/n).toFixed(3)}`)
}
