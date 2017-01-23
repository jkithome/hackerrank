function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var sum = arr.reduce((a, b) =>  {return a+ b;}, 0)
    console.log(sum)
}