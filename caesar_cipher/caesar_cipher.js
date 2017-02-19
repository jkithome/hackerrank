function main() {
  const n = parseInt(readLine());
  const s = readLine();
  const k = parseInt(readLine());
  const cypher = k % 26;
  let cyphered = ''
  for (var i = 0; i < n; i++) {
    if (/[a-z]/.test(s[i])) {
      let aCode = s.charCodeAt(i);
      let newAcode = aCode + cypher;
      if (newAcode > 122) {
        cyphered += String.fromCharCode(96 + (newAcode - 122));
      } else {
        cyphered += String.fromCharCode(newAcode);
      }
    } else if (/[A-Z]/.test(s[i])) {
      let code = s.charCodeAt(i);
      let newCode = code + cypher;
      if (newCode > 90) {
        cyphered += String.fromCharCode(64 + (newCode - 90));
      } else {
        cyphered += String.fromCharCode(newCode);
      }
    } else {
      cyphered += s[i];
    }
  }
  console.log(cyphered);

}
