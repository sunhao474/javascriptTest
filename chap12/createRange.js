let range1 = document.createRange();
let range2 = document.createRange();

let d = document.getElementById('d');

console.log(range1.selectNode(d));
console.log(range2.selectNodeContents(d));

console.log(range1);
console.log(range2);