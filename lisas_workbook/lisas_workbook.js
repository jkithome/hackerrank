function processData(input) {
  const newInput = input.split('\n');
  const n_temp = newInput[0].split(' ');
  const chapters = parseInt(n_temp[0]);
  const maxProblems = parseInt(n_temp[1]);
  const problems = newInput[1].split(' ').map(Number);
  let pages = [];
  problems.forEach(num => {
    let start = num;
    let page = 1;
    while (start > 0) {
      let arrStart = maxProblems * (page - 1) + 1;
      let len = 0;
      start >= maxProblems ? len = maxProblems : len = start
      const arr = Array.from({ length: len }, (val, index) => {
        return index + arrStart });
      pages.push(arr);
      start -= maxProblems;
      page++;
    }
  })
  let counter = 0;
  pages.forEach((val, index) => {
    if (val.indexOf(index + 1) !== -1) {
      counter++;
    }
  })
  console.log(counter);
}
