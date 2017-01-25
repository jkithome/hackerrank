function main() {
  var n = parseInt(readLine());
  var a = [];
  for (a_i = 0; a_i < n; a_i++) {
    a[a_i] = readLine().split(' ');
    a[a_i] = a[a_i].map(Number);
  }
  var diagA = 0;
  var diagB = 0;

  for (var i = 0; i < n; i++) {
    diagA += a[i][i];
    diagB += a[i][n - 1 - i];
  }
  console.log(Math.abs(diagA - diagB));
}
