function main() {
  var n = parseInt(readLine());
  A = readLine().split(' ');
  A = A.map(Number);
  let distances = []
  A.forEach((el, index) => {
    const next = A.indexOf(el, index + 1)
    if (next !== -1) {
      distances.push(Math.abs(index - next));
    }
  })
  if (distances.length !== 0) {
    const min = Math.min.apply(null, distances);
    console.log(min)
  } else {
    console.log(-1)
  }


}
