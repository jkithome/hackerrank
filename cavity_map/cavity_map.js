function main() {
  var n = parseInt(readLine());
  var grid = [];
  for (var grid_i = 0; grid_i < n; grid_i++) {
    grid[grid_i] = readLine();
  }
  for (var i = 0; i < n; i++) {
    grid[i] = grid[i].split('');
  }
  var grid2 = JSON.parse(JSON.stringify(grid));
  for (var j = 1; j < n - 1; j++) {
    for (var k = 1; k < n - 1; k++) {
      var candidate = grid[j][k]
      var arr = [];
      var a = parseInt(grid[j - 1][k]);
      var b = parseInt(grid[j][k + 1]);
      var c = parseInt(grid[j + 1][k]);
      var d = parseInt(grid[j][k - 1]);
      arr.push(a, b, c, d);
      max = Math.max(...arr);
      if (candidate > max) {
        grid2[j][k] = 'X';
      }

    }
  }
  for (var l = 0; l < n; l++) {
    console.log(grid2[l].join(''));
  }

}
